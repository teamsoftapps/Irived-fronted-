/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/Store/store';
<<<<<<< Updated upstream
import Filter from './src/Screens/Filter';
=======
>>>>>>> Stashed changes

const Routes = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

<<<<<<< Updated upstream
AppRegistry.registerComponent(appName, () => App);
=======
AppRegistry.registerComponent(appName, () => Routes);
>>>>>>> Stashed changes
