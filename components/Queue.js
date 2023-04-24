import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, Image, SafeAreaView, RefreshControl } from 'react-native';

import { onSnapshot, getDoc, collection} from "firebase/firestore"
import { db } from "./firebase/firebase"
import { useEffect, useState } from 'react';
import Card from './Card';


export default function Queue({ navigation }) {
    const [queue, PushQueue] = useState([])
    useEffect(() => {
        const collec = collection(db, 'table')
        onSnapshot(collec, (snapshot) => PushQueue(
            snapshot.docs.map(doc => ({
                id: Math.random(),
                name: doc.data().name,
                hours: doc.data().hour.toDate().toLocaleTimeString(),
                places: doc.data().places,
                state: doc.data().state
            }))
        ))
        
        
    },[])

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 64, fontWeight: 700, color: "#FFF0DC", marginTop: 30, paddingLeft: 20}}>QUEUE</Text>


    
        
        <SafeAreaView style={{alignSelf: 'center', height: "64%"}}>
            <FlatList
             
                data={queue.reverse()}
                renderItem={({item}) => <Card name={item.name} state={item.state} places={item.places} hour={item.hours}/>}
                keyExtractor={item => item.id}
            
            />

        </SafeAreaView>
          


        
        
            <Pressable 
                style={{borderRadius: 100, backgroundColor: "#FFF0DC", width: 125, height: 125, alignSelf: 'center',  margin: 20,justifyContent: 'center', alignItems: 'center'}}
                onPress={() => {navigation.navigate("Table info")}}
            >
                <Image source={require('../assets/plus.png')}
                    style={{width: 100, height: 100}}
                
                />

                

            </Pressable>

       


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCC31C',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
