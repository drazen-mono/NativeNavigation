import { Navigation } from 'react-native-navigation';

import ExtraIndex from './screens/extra/Index';
import ExtraEdit from './screens/extra/Edit';
import ExtraNotification from './screens/extra/Notification';
import GenericScreen from './screens/navigation/GenericScreen';
import LightBox from './screens/navigation/LightBox';
import NavigationIndex from './screens/navigation/Index';

export default () => {
  Navigation.registerComponent('ExtraIndex', () => ExtraIndex);
  Navigation.registerComponent('ExtraEdit', () => ExtraEdit);
  Navigation.registerComponent('ExtraNotification', () => ExtraNotification);
  Navigation.registerComponent('NavigationIndex', () => NavigationIndex);
  Navigation.registerComponent('GenericScreen', () => GenericScreen);
  Navigation.registerComponent('LightBox', () => LightBox);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Navigation',
        screen: 'NavigationIndex',
        icon: require('./images/icon1.png'),
        title: 'Navigation Screen'
      },
      {
        label: 'Extra',
        screen: 'ExtraIndex',
        icon: require('./images/icon2.png'),
        title: 'Extra Screen'
      }
    ],
    passProps: {}
  });  
};
