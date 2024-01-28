// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './hello';
import Next from './next';
import Question from './question';
import { RootStackParamList } from '@/types/types';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Hello" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Next" component={Next} />
        <Stack.Screen name="Question" component={Question}/>
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
