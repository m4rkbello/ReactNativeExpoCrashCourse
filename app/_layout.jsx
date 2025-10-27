import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/theme';

const RootLayout = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
        <StatusBar value="auto" />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.tint
        }}>
            <Stack.Screen name="index" options={{title: 'Home'}} />
            <Stack.Screen name="about" options={{title: 'About'}} />
            <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false,}} />
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})