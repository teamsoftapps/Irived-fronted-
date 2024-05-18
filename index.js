/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/Store/store';
import Favourites from './src/Screens/Favourites';
import Filter from './src/Screens/Filter';
import PersonalInfo from './src/Screens/PersonalInfo';

const Routes = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => PersonalInfo);
