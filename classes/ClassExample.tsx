import { Component } from 'react';
import { Text, View, Button } from 'react-native';

// any component we define MUST Extend the Component class
export class ClassExample extends Component {

    // let's work with a component's lifecycle
    // lifecycle?
    // - a set of methods are ran in a particular point in the life of a component
    // we DO NOT control the flow in the component, we just inject logic into
    // specific points

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // PROPS - values that can be received from the outside
    // the constructor in a component receives the props 
    // these are values that can be used within the component
    constructor(props : any){
        super(props);
    }

    // THE ONLY METHOD WE ARE FORCED TO IMPLEMENT IS RENDER
    render() {
        // render MUST return a View
        return (
            <View>
                <Text>HEY GUYS I'M A COMPONENT!</Text>
            </View>
        );
    }

}