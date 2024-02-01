import axios from "axios";
import axiosRetry from "axios-retry";
import * as Msal from "msal";

let countApi = 0;
let refreshPromise: any;

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  timeout: 300000,
  headers: {
    accept: "application/json",
    "apikey": import.meta.env.VITE_REACT_APP_BACKEND_API_KEY,
    "Content-Type": "application/json",
  },
});

axiosRetry(api, {
  retries: 1, // number of retries
  retryDelay: (retryCount) => {
    return retryCount * 1000; // time interval between retries
  },
  retryCondition: (error) => {
    console.log(error!.response!.status);
    // if retry condition is not specified, by default idempotent requests are retried
    return error!.response!.status === 500 || error!.response!.status === 503;
  },
});

api.interceptors.request.use(async (config) => {
  if (!config.params?.noLoading) {
    // document.body.classList.add('loading-indicator');
    // document.getElementById('loading-screen')!.style.visibility = 'visible';
    // document.getElementById('loading-screen')!.style.opacity = '1';
    countApi += 1;
  }
  if (!config.params?.noToken) {
    const token = getToken();
    if (token) {
      config!.headers!.Authorization = `Bearer ${token}`;
    }
  } else {
    config.params.noToken = undefined;
  }

  if (!config.params?.noEncoding) {
    config.url = encodeURI(config.url!);
  } else {
    config.params.noEncoding = undefined;
  }

  return config;
});

// api.interceptors.response.use(
//   (response) => {
//     countApi -= 1;
//     if (countApi <= 0) {
//       //   document.getElementById("loading-screen")!.style.visibility = "hidden";
//       //   document.getElementById("loading-screen")!.style.opacity = "0";
//       console.log('hide loading here');
//     }
//     return response;
//   },
//   async (error) => {
//     const err = JSON?.parse(JSON.stringify(error));
//     if (err.status === 401 || err.status === 403) {
//       const token = await signIn();
//       if (token) {
//         countApi -= 1;
//         // if (countApi <= 0) {
//         //   document.getElementById('loading-screen')!.style.visibility =
//         //     'hidden';
//         //   document.getElementById('loading-screen')!.style.opacity = '0';
//         // }
//         error.config.headers.Authorization = `Bearer ${token}`;
//         await loadUserData();
//         return axios.request(error.config);
//       }
//     }
//     countApi -= 1;
//     // if (countApi <= 0) {
//     //   document.getElementById('loading-screen')!.style.visibility = 'hidden';
//     //   document.getElementById('loading-screen')!.style.opacity = '0';
//     // }

//     if (err.status >= 401) {
//       // window.open("/error", "_self");
//       console.log('Error:', err)
//     }

//     throw error;
//   }
// );
const loadUserData = async () => { };

function getToken() {
  try {
    const valueLocalStorage: any = import.meta.env.VITE_REACT_APP_BACKEND_API_KEY;
    return valueLocalStorage;
  } catch (error) {
    return null;
  }
}

// export async function signIn() {
//   if (!refreshPromise) {
//     refreshPromise = new Promise((resolve, reject) => {
//       const msalConfig: Msal.Configuration = {
//         auth: {
//           clientId: import.meta.env.REACT_APP_OAUTH_CLIENT_ID!,
//           authority: import.meta.env.REACT_APP_OAUTH_AUTHORITY,
//           redirectUri: import.meta.env.REACT_APP_OAUTH_REDIRECT_URI!,
//         },
//         cache: {
//           cacheLocation: "sessionStorage",
//         },
//       };
//       const tokenScope = {
//         scopes: ["User.Read"],
//       };
//       const client = new Msal.UserAgentApplication(msalConfig);

//       client.loginPopup(tokenScope).then(
//         (response) => {
//           const tokenLogin = response.idToken.rawIdToken;
//           localStorage.setItem("msal.idToken", tokenLogin);
//           refreshPromise = null;
//           resolve(tokenLogin);
//         },
//         (error) => {
//           console.log(error, "error");
//           reject(error);
//         }
//       );
//     });
//   }
//   return refreshPromise;
// }