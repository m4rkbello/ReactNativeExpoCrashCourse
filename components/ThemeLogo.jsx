import { Image, useColorScheme } from 'react-native'

//images
import DarkLogo from '../assets/images/mb-black.png'
import LightLogo from '../assets/images/mb-white.png'


const ThemeLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemeLogo
