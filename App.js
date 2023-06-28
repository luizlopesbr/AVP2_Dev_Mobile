import { StatusBar, SafeAreaView, Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, {useState} from "react";

import images from './mocks/images'

export default function App() {

  const [opacity,setOpacity] = useState(1)

  const changeOpacity = () => {
    opacity == (1) ? setOpacity(0.2) : setOpacity(1)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />
      
     
      
      <View style={styles.list}>
        <FlatList
          data = {images}
          renderItem={({item}) => (
              <TouchableOpacity onPress={changeOpacity} >
                  <View>
                      <Image source={{uri:item.url}} style={{ opacity: opacity, width: 130, height: 130, flexDirection: 'row' }}/>
                      {/* <Image source={{uri:item.url}} style={styles.photo}/> */}
                  </View>
                  
              </TouchableOpacity>
              
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={3}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  list:{
    flex: 1,
    height: '75%',
    backgroundColor: '#fff',
    
    
   
  },
  // photo:{
  //   width: 130,
  //   height: 130,
  //   flexDirection: 'row',
    


  // }

})