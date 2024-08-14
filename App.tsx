import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { DoggyRow } from './classes/DoggyComponent';

// everything in react's UI is a component
// you can build a complex component using simpler ones
// modules can have whatever amount of components defined inside
// for your main module (App.tsx) you MUST have a default component 
// it will be the one shown when running the app
// componets can be defined through a class or through a function

// https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json
export default function App() {

  // JSX - syntax extension for javascript
  // pseudohtml 
  // you must return a View
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ClassExample name="A NAME" lastName="SOMETHING ELSE"></ClassExample> */}
      {/* <Doggy name="Killer" age={5} /> */}
      <FlatList 
        data={[
          {name: "doggy1", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
          {name: "doggy2", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
          {name: "doggy3", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
        ]}
        renderItem={({item}) => {
          return <DoggyRow name={item.name} uri={item.uri} />;
        }}
      />
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
