import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import ThemeLogo from '../components/ThemeLogo'
import ThemeView from '../components/ThemeView'

const Home = () => {
  return (
    <ThemeView style={styles.container}>
        <ThemeLogo style={styles.img} />
            <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>
            <Text style={{marginTop: 10, marginBottom: 10,}}>Reading List App</Text>

            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
    </ThemeView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
        height: 50,
        width: 50,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
})