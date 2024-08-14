// in this module we will define a component through a function

import { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';

// VERY IMPORTANT - in functional components the logic defined 
// within the function works as the render in a class component
export function Doggy(props : any) {

    // in order to add a variable to a state we need to use a hook
    const[isHappy, setIsHappy] = useState(false);
    const[count, setCount] = useState(0);
    const[testInput, setTestInput] = useState("");

    return(
        <View>
            <Text>Woof. {props.name} {props.age} i'm {isHappy? "HAPPY!" : "SAD :(" }</Text>
            <Text>input: {testInput}</Text>
            <Text>Today's bark count: {count}</Text>
            <Button 
                title="Change Happiness"
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title="WOOF."
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <TextInput 
                placeholder='TEXT INPUT TEST'
                onChangeText={ text => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}

export function DoggyRow(props : any) {

    return(
        <View>
            <Text>My name is {props.name}</Text>
            <Image 
                source={{uri : props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}