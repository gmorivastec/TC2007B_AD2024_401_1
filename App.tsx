import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';

// everything in react's UI is a component
// you can build a complex component using simpler ones
// modules can have whatever amount of components defined inside
// for your main module (App.tsx) you MUST have a default component 
// it will be the one shown when running the app
// componets can be defined through a class or through a function
export default function App() {

  // JSX - syntax extension for javascript
  // pseudohtml 
  // you must return a View
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ClassExample></ClassExample>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
