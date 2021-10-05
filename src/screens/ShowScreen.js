import React, {useContext} from "react";
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';
const ShowScreen = ({navigation}) => {
    // console.log(navigation.getParam('id'));
    const {state}=useContext(BlogContext);
    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'))
    return (
        <View>
            <Text>Title: {blogPost.title}</Text>
            <Text>Content: {blogPost.content}</Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : ()=>(
            <TouchableOpacity onPress={ () => navigation.navigate("Edit",{id:navigation.getParam('id')})}>
                <Feather name="edit" style={styles.editIcon}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    editIcon : {
        fontSize : 30
    },
});

export default ShowScreen;