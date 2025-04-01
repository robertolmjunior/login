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
              uri: 'https://r.testifier.nl/Acbs8526SDKI/resizing_type:fit/width:1080/height:720/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/gpblog.com/images/2025-03/0487f49a3fb49f6c1c079016b370f7f1beaad682.jpg@webp' 
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