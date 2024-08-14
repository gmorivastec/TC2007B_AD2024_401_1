import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

// any component we define MUST Extend the Component class

// GENERIC TYPES - THE DIAMOND <>
// there are classes that we extend from that have types parametrized
export class ClassExample extends Component<{name : string, lastName: string}, {count : number, nombre: string }> {

    // let's work with a component's lifecycle
    // lifecycle?
    // - a set of methods are ran in a particular point in the life of a component
    // we DO NOT control the flow in the component, we just inject logic into
    // specific points

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    /*
    *********** MOUNT ******************
    */

    // PROPS - values that can be received from the outside
    // the constructor in a component receives the props 
    // these are values that can be used within the component
    constructor(props : any){
        super(props);
        console.log("CONSTRUCTOR");

        // STATE - a set of variables that are part of the inner definition
        // of a component. SIMILAR to instance variables BUT with an important difference:
        // on change they trigger a redraw

        // HOW TO DEFINE STATE
        // JUST DO THIS ONCE
        // only in the constructor
        this.state = {count: 0, nombre: this.props.name};
    }

    // THE ONLY METHOD WE ARE FORCED TO IMPLEMENT IS RENDER
    render() {
        console.log("RENDER");
        // render MUST return a View
        return (
            <View>
                <Text>HEY GUYS I'M A COMPONENT! MY NAME IS {this.state.nombre}</Text>
                <Text>ANOTHER PROP: {this.props.lastName}</Text>
                <Text>Current count: {this.state.count}</Text>
                <Button
                    title="INCREMENT COUNT"
                    onPress={() => {

                        this.setState((state) => {
                            return {count: state.count + 1};
                        });
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    /*
    *********** UPDATE ******************
    */

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("DID UPDATE");
    }


    /*
    *********** UNMOUNT ******************
    */

    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ERROR!");
    }
}