import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, FlatList} from 'react-native';
import styles from './style.js'
import Header from './components/header/header.js'
import Banner from './components/banner/banner.js'
import Cards from './components/cards/cards.js'
import { db_films } from './database.js';
import Routes from './components/Routes/index.js';


export default function App(){
  return (
      <Routes></Routes>
  );
}

