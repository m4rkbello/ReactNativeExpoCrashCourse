import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../assets/images/icon.png'

const Home = () => {
  return (
    <View style={styles.container} >
        <Image source={logo} style={styles.img} />
            <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>
            <Text style={{marginTop: 10, marginBottom: 10,}}>Reading List App</Text>

            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
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