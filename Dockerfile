FROM node:18 AS files

# Create app directory
WORKDIR /usr/src/app

# Copy all files
COPY . ./
COPY src ./src
COPY index.html ./
COPY tsconfig.json ./
COPY .env ./
COPY vite.config.ts ./
COPY package*.json ./

FROM files AS deps

# Update NPM
RUN npm i -g npm

# Install deps for production
RUN npm ci

FROM deps AS builder

# Build
RUN npm run build

FROM duluca/minimal-node-web-server AS runner

# Set Node Env
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Copy builded site
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/index.html /usr/share/nginx/html/404.html
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]