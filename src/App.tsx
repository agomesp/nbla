import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store';
import Wrapper from "./Wrapper"
import packageJson from '../package.json';
import { Provider } from "react-redux";
import CacheBuster from 'react-cache-buster';

function App() {
  const isProduction = import.meta.env.MODE === 'production';

  return (
    <CacheBuster
      currentVersion={packageJson.version}
      isEnabled={isProduction}
      isVerboseMode={false}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Wrapper />
        </PersistGate>
      </Provider>
    </CacheBuster>
  )
}

export default App
