import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from '../../style.js';
import { useNavigation } from "@react-navigation/native";

export default function Cards({titulo, img, nota, sinopse}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.containerJogos} onPress={()=>navigation.navigate('Details', {titulo, nota, img, sinopse})}>
            <Image style={styles.images} source={{uri: img}}/>
            <Text style={styles.titulo}> {titulo}</Text>
            <Text style={styles.textNota}> {nota} </Text>
        </TouchableOpacity>
    );
}

// página de cardws