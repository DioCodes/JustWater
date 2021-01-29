import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./src/store/store";

import { CustomSlideNavigation } from './src/navigation/CustomSlideNavigation';
import { bootstrap } from './src/bootstrap'; 

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => {
          setIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomSlideNavigation />
      </PersistGate>
    </Provider>
  );
}
