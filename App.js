import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  let bottomText = 'E primeiro campeão mundial'
  return (
    <View style={styles.container}>

      <Text style={styles.boldText}>
        Palmeiras
      </Text>

      <Text style={styles.centeredText}>
        Maior campeão do Brasil! 🏆
      </Text>

      <Image 
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/2048px-Palmeiras_logo.svg.png'}}
        style={styles.logo}
      />

      <Text style={styles.bottomText}>
        {bottomText}
      </Text>

      <Image 
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Taca-copa-rio-1951-exibicao-palmeiras-2021.jpg/1200px-Taca-copa-rio-1951-exibicao-palmeiras-2021.jpg'}}
        style={styles.imagemMenor}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 40,
    color: '#ddd',
    fontWeight: 'bold', // Negrito
  },
  centeredText: {
    fontSize: 20,
    color: '#ddd',
    textAlign: 'center', // Centraliza o texto
  },
  bottomText: {
    fontSize: 10,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 30
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 50, // Margem superior para afastar a imagem do texto acima
  },
  imagemMenor: {
    width: 150,
    height: 200,
    marginTop: 50, // Margem superior para afastar a imagem do texto acima
  },
});
