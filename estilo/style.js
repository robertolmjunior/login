import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Image:{
        width: 300,
        height: 200,
        marginBottom: 20,
    },

    ViewCentro:{
        flex: 3,
        alignItems:"center",
        justifyContent: "center",
        width: '100%',
        marginTop:-300
    },

    ViewCabecalho: {
        backgroundColor: '#00112B',
        flex: 0.9,
        width: '100%',
        shadowOffset: {width:0, height: 2 },
    },

    entradasDados:{
        width: '80%',
        height: 40,
        color: 'white',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 7,
        borderRadius: 4,
        padding: 7,
     },
  
     textoBotao:{
        color: 'white',
        fontWeight: 'bold',
     },
  
     botao:{
        backgroundColor: "#00112B",
        width: '80%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop:5,
     }
})

export default styles;