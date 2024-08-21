import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { DoggyRow } from './classes/DoggyComponent';
import Request from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// the package we are using for navigation uses a native navigation stack
// stack? 
const Stack = createNativeStackNavigator();


// everything in react's UI is a component
// you can build a complex component using simpler ones
// modules can have whatever amount of components defined inside
// for your main module (App.tsx) you MUST have a default component 
// it will be the one shown when running the app
// componets can be defined through a class or through a function

// https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json
function App() {

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
        ]}
        renderItem={({item}) => {
          return(
            <Pressable onPress={() => {
              alert("ROW HAS BEEN PRESSED!");
            }}>
              <DoggyRow name={item.name} uri={item.uri} />
            </Pressable>
          );
        }}
      />
      <Request url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" />
      {/*
      <RequestFunction url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" />
      */}
      <StatusBar style="auto" />
    </View>
  );
}

// components that will be used for navigation 
function NavRoot({navigation} : any) {

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    ]}>
      {/*
      
      // FLEX - arbitrary distribution of screen space
      // screen height or width size is equal to the addition of all flex values
      // each element size is defined as a proportion of its flex value / total size
      <Text style={{height:30, backgroundColor: 'white', flex: 2}}>THIS IS JUST SOME DUMMY TEXT</Text>
      <Text style={{height:30, backgroundColor: 'blue', flex: 3}}>HEY GUYS THIS IS NAVIGATION!</Text>
      <Text style={{height:30, backgroundColor: 'pink', flex: 5}}>JUST A THIRD ONE</Text>
      */}

      <Text style={{height:30, backgroundColor: 'white', }}>THIS IS JUST SOME DUMMY TEXT</Text>
      <Text style={{height:30, backgroundColor: 'blue', }}>HEY GUYS THIS IS NAVIGATION!</Text>
      <Text style={{height:30, backgroundColor: 'pink', position: 'absolute', top: 20, left: 30}}>JUST A THIRD ONE</Text>
      {/* 
      <Button 
        title="NAVIGATE"
        onPress={() => {

          navigation.navigate("NavExample", {data : "SOME DATA FROM THE OUTSIDE!"});
        }}
      />
      */}
    </View>
  );
}

function NavExample({navigation, route} : any){
  return(
    <View>
      <Text>Nav Example here! {route.params.data}</Text>
    </View>
  );

}

export default function Navigation() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="NavRoot"
          component={NavRoot}
        /> 
        <Stack.Screen 
          name="NavExample"
          component={NavExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// within react native we will be using stylesheets
// NOT THE SAME but similar to CSS

// factory method - StyleSheet.create
// factory design pattern?
// https://en.wikipedia.org/wiki/Factory_method_pattern

// flexbox
// flexible box layout 
// a standard used to arrange UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA600',
    padding: 10,
  },
});
