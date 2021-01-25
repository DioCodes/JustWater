import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';

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
    <CustomSlideNavigation />
  );
}
