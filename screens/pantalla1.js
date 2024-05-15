import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import dataEX from '../data/dataEX';
import { StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';

 
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const PantallaEX = ({ navigation }) => {
  const informacion = dataEX;
 
 
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={informacion}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
 
      <View style={styles.flatListContainer}>
        <FlatList
          data={informacion}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
 
      <View style={styles.flatListContainer}>
        <FlatList
          data={informacion}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={informacion}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      
    </View>
  );
};
 
export default PantallaEX;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:statusBarHeight,
  },
  contenedor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%', // Ocupa todo el ancho disponible
  },
  flatListContainer: {
    height: 160, // Altura fija para evitar el crecimiento automático
    marginHorizontal: 5,
    marginBottom: 20,
  },
  tarjeta: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%', // Aproximadamente 3 tarjetas por fila
    margin: 10,
    borderRadius: 10,
    elevation: 3, // Sombra para Android
    shadowOpacity: 0.2, // Sombra para iOS
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 }
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  nombre: {
    marginTop: 10
  },
  boton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});