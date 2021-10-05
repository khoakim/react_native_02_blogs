import React, {useContext} from "react";
import {View, StyleSheet,Text} from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
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

const styles = StyleSheet.create({

})

export default ShowScreen;