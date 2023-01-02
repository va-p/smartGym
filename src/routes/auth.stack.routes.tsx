import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutes = {
  signIn: undefined;
  SignUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes<AuthRoutes>() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='signIn'
        component={SignIn}
      />

      <Screen
        name='SignUp'
        component={SignUp}
      />
    </Navigator>
  )
}