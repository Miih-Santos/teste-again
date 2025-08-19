
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import style from './style.js'

export default function Details() {
    const route = useRoute();

    function star() {
        const stars = [];
        for (let i = 0; i < 5; i++) { // Supondo que a nota seja de 0 a 5
            stars.push(
                <MaterialIcons
                    key={i}
                    name={i < route.params.nota ? 'star' : 'star-border'}
                    size={24}
                    color="gold"
                />
            );
        }
        return stars;
    }
    return(

        <View style={style.details}>
            <Image source={{uri: route.params.img}} style={style.cardDetails} />
            <View style={style.starsContainer}>
                {star()}
            </View>
            <Text style={style.nota}>{route.params.nota}</Text>
            <Text style={style.title}>{route.params.titulo}</Text>
            <View style={style.contaider}>
                <Text style={style.text}>{route.params.sinopse}</Text>
            </View>
        </View>
    )
}



