import React from 'react';
import { View, Image } from 'react-native';
import styles from './../../style.js';
import bannerPrincipal from './images/_Banner-The-Better-films.png'; // Caminho atualizado
import { useNavigation } from '@react-navigation/native';

export default function Banner() {
  const navigation = useNavigation();
  return (
    <View style={styles.bannerContainer}> {/* Use um estilo específico para o container do banner */}
      <Image source={bannerPrincipal} style={styles.imagemBanner} resizeMode="contain" />
    </View>
  );
}