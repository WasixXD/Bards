import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Queue from "./components/Queue"
import Table from "./components/Table"
const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Queue"
            component={Queue}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Table info"
            component={Table}
            options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;