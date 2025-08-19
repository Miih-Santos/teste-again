import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    details: {
        backgroundColor: '#0E1126',
        height:'100vh',
    },
    cardDetails: {
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        width: '100%', 
        height: 500,
    },
    nota: {
        color: '#fff',
        fontSize: 15,
        fontFamily:'Arial'
    },

    contaider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    title:{
        margin: 10,
        color: '#fff',
        fontSize: 20,
        fontFamily:'Verdana'
    },

    text:{
        color: '#fff',
        fontSize: 15,
        fontFamily:'Verdana',
        textAlign: 'justify',
        width: 400,
        lineHeight: 30,
        
    },
});
export default style;