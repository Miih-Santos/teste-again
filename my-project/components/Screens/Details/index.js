
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import style from './style.js'

export default function Details() {
    const route = useRoute();
    
    return(

        <View style={style.details}>
            <Image source={{uri: route.params.img}} style={style.cardDetails} />
            <Text style={style.nota}>{route.params.nota}</Text>
            <Text style={style.text}>{route.params.titulo}</Text>
            <Text style={style.text}>{route.params.sinopse}</Text>
        </View>
    )
}


// <MaterialIcons
//name={11 <= 10 ? 'star' : 'star-border'}
//size={24}
//color="gold"
//>
