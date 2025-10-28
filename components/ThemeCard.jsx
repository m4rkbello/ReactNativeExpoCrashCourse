import { StyleSheet, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/theme1';

const ThemeCard = ({style, ...props}) => {

const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
        style={[{backgroundColor: theme.uiBackground}, styles.card, style]}
        {...props}
    />
     
  )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 5,
    }
})

