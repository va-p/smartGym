import { Text, View, StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';

import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';

import { theme } from './src/global/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })
  return (
    <NativeBaseProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: '#202024' }}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </View>
    </NativeBaseProvider>
  );
}
