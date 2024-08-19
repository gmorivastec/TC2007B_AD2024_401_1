import { Component } from "react";
import { View, Text } from 'react-native';

export default class RequestClass extends Component<{url : string}, {model : string}>{

    // JSON - javascript object notation
    // language used to model data
    // popular for data exchange on the web

    // XML?

    // JSON STRUCTURE
    // every tuple has 2 parts which are:
    // - key
    // - value
    // "key" : "value"
    // tuples are bundled in objects 
    /*
    {
        "name" : "some_name",
        "age" : 25,
        "married" : true
    }

    */

    // we can use arrays in json 
    // arrays can contain either primitive types or objects
    /*
    { some_array: [2, 5, 10, 22] }
    
    { 
        another_array: [
            {"name" : "A", "age" : 20},
            {"name" : "B", "age" : 20},
            {"name" : "C", "age" : 20},
        ] 
    }


    [
        {"name" : "A", "age" : 20},
        {"name" : "B", "age" : 20},
        {"name" : "C", "age" : 20},
    ] 
    */

    // LET'S DO THE REQUEST
    // first time in this semester we will talk about asynchronous code
    // what's that?
    async request(url : string) {

        var response = await fetch(url);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);
        
        this.setState((state) => {
            return {model: json[1]['modelo']};
        });
    }

    constructor(props : any) {
        super(props);
        this.state = {model: ""};
        this.request(this.props.url);
    }

    render() {
        return(
            <View>
                <Text>
                HEY I'M A: {this.state.model}
                </Text>
            </View>
        );
    }
}