import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { Antonio_500Medium } from '@expo-google-fonts/antonio';
import { Spartan_700Bold, Spartan_400Regular } from '@expo-google-fonts/spartan';
import { colors } from './src/theme/colors';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': Antonio_500Medium,
    'Spartan-Bold': Spartan_700Bold,
    'Spartan-Regular': Spartan_400Regular,
  })

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black,
  },
});
