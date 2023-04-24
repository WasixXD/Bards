
import { Pressable, StyleSheet, Text, View,  SafeAreaView,  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';


import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase/firebase.js"

export default function Table({ navigation }) {
    const [mode, setMode] = useState(null)
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date())
    const [tableName, currentName] = useState("unk")
    const [placesInTable, currentPlaces] = useState(1)

    async function pushToQueue() {
        const tableInfo = {
            name: tableName,
            places: placesInTable,
            hour: date,
            state: 'waiting'
        }

        const collec = collection(db, 'table')
        const snap = await addDoc(collec, tableInfo)
        

        
        navigation.navigate("Queue")

    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

    const showMode = (mode) => {
        setMode(mode)
    }
    const showTimePicker = () => {
        setShow(true)
        showMode('time')
    }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 64, fontWeight: 700, color: "#FFF0DC", marginTop: 30, paddingLeft: 20}}>TABLE INFO</Text>


        <SafeAreaView style={{width: "100%", justifyContent: "flex-start", flex: 1, alignItems: 'center'}}>

            <View style={styles.box}>
                <Text style={styles.label}> NAME </Text>
                <TextInput
                    style={styles.input}
                    textAlign='center'
                    onChangeText={currentName}
                />

            </View>

            <View style={styles.box}>
                <Text style={styles.label}> TABLE FOR </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    textAlign='center'
                    onChangeText={currentPlaces}
                    
                    
                />

            </View>

            <View style={styles.box}>
                <Pressable onPress={() => {showTimePicker()}} style={{paddingHorizontal: 50, borderRadius: 4, backgroundColor: "#FFF0DC"}}>
                    <Text style={styles.label}> CHOOSE A HOUR </Text>
                    {show && (
                        <DateTimePicker mode={mode} value={new Date()} is24Hour={true} onChange={onChange}/>


                    )}

                </Pressable>
            

            </View>

            <Pressable
                style={{backgroundColor: "#FFF0DC", padding: 30, borderRadius: 4, alignSelf: 'center', marginTop: 40}}
                onPress={pushToQueue}
            > 
    
                <Text style={{fontWeight: 700, }}>
                    ENTER QUEUE
                </Text>
            </Pressable>

        </SafeAreaView>

        
        
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

  input: {
    borderWidth: 3,
    borderColor: "#FFF0DC",
    width: "80%",
    height: 50,
    borderRadius: 3,
    alignItems: 'center',
    color: "#FFF0DC",
    fontWeight: '700',
  },
  label: {
    paddingVertical: 10,
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    
  },
  box: {
    width: "100%", 
    alignItems: 'center',
    marginVertical: 40
  }
});
