import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, Image, SafeAreaView, RefreshControl } from 'react-native';




export default function Card(props) {
   
    return (
        <View style={styles.card}>
            <Text style={[styles.state, props.state == "waiting"? styles.waiting : styles.calling]}>{props.state}</Text>
            <View style={{flexDirection: 'row', gap: 50, alignItems: 'center'}}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.name}>TABLE FOR {props.places}</Text>
            </View>

            <Text style={styles.name}>for {props.hour}</Text>

        </View>
    )
  
}

const styles = StyleSheet.create({
  card: {
    zIndex: -1,
    backgroundColor: '#FFF0DC',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 6,
    margin: 20

  },

  state: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 30,
  },
  waiting: {
    color: "#FCC31C"
  },
  calling: {
    color: "#1C0900"
  },
  name: {
    fontWeight: 400,
    fontSize: 20,
    paddingVertical: 10
  }
});
