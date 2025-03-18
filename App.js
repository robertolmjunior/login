import { Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

import styles from './estilo/style';

export default function App () {

  return(
    <View style = {styles.container }>
          
        <View style = {styles.ViewCabecalho}>
           
        </View>

          <View style = {styles.ViewCentro}>
          <Image resizeMode='center' style = {styles.Image} 
            source={{
              uri: 'https://a.espncdn.com/photo/2022/1119/r1093332_1079x607_16-9.jpg' 
            }} />

            <TextInput style={styles.entradasDados} placeholder='Digite seu email'/>
            <TextInput style={styles.entradasDados} placeholder='Digite seu senha'/>

            <TouchableOpacity style = {styles.botao}>
              <Text style = {styles.textoBotao}> ENTRAR </Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}