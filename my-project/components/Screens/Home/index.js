import React from 'react';
import {View, FlatList} from 'react-native';
import styles from '../../../style.js'
import Header from '../../header/header.js'
import Banner from '../../banner/banner.js'
import Cards from '../../cards/cards.js'
import { db_films } from '../../../database.js';

export default function Home(){
  return (
    <View style={styles.container}>
      <Header/>
      <Banner/>

      <View style={styles.sla}>
        <FlatList 
          data={db_films}
          horizontal={true}
          keyExtractor={(item) => item.id} 

          renderItem={({ item }) => (
            <Cards titulo ={item.nome} img={item.img} nota={item.nota} sinopse={item.sinopse}/>

          )}
        />
                           
      </View>

    </View>
    
  );
}              

