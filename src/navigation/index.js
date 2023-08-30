import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home';
import LoginScreen from '../auth/login';
import RegistrationScreen from '../auth/registration';
import { NavigationContainer } from '@react-navigation/native';
import SplashIntro from '../intro';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Splash" component={SplashIntro} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation