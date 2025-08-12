import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#0E1126',
      alignItems:'center',
      margin:0,
    },
    
    cabecalhoDisplay:{
      flex:1,
      padding:10,
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      width:'100%',
    },

    tituloContainer: {
    flex: 1,
    alignItems:'center',
  },

    tituloPrincipal:{
      color:'white',
      marginTop:10,
      fontSize:'1.2em',
    },

    imagemLogo:{
      width:30,
      height:30,
    },

    inputCabecalho:{
      width:100,
      height:30,
      borderRadius:10,
      backgroundColor:'whitesmoke',
      padding:5,
    },

    bannerContainer:{
    width: '100%',
    height: 200,
    alignItems:'center',
    padding:10,
  },

    imagemBanner:{
      width:280,
      height:150,
      borderRadius:10,
    },

    images:{
      width: 120, 
      height:170,
      borderRadius: 4,
      backgroundColor: 'white',
    },

    titulo:{
      fontSize: 12,
      color: '#fff',
      paddingLeft: 8
    },
    textNota:{
      fontSize: 10,
      color: '#fff',
      paddingLeft: 4
    },
    containerJogos: {
      marginBottom: 20,
      marginRight: 15,
      backgroundColor: '#1E1E1E',
      borderRadius: 10,
      width: 150,
      padding: 10,
      alignItems: 'center',
    },

    sla: {
      width: '90%',
      padding: 10,
      
    }
  });

export default styles;