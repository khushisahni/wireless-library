import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'}}>
            <Text>Search Books</Text>


            </View>
        );
    }
}