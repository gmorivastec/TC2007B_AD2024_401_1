import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

// remember - 
// a functional component body is the render() method
// in the lifecycle

export default function RequestFunction(props : any) {
    
    const[data, setData] = useState([]);

    // the function to do the request
    async function request() {

        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);

        /*
        setData(
            [
                {brand: json[1]['marca']}
            ]
        );*/
        setData(json);
    }

    // this will not work as expected
    // normally what a request like this would do would be 
    // looping the update

    // LETS USE A HOOK!
    useEffect(() => {
        request();
    }, []);
    

    return(
        <View>
            {
                data.length > 0 ?
                    <FlatList 
                        data={data}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <Text>{item['anio']}</Text>
                                </View>
                            );
                        }}
                    />
                :
                    <ActivityIndicator size="large" /> 
            }
        </View>
    );
}