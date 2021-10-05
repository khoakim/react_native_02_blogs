import React, {useState,useContext} from "react";
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
const EditScreen = ({navigation}) => {
    const {state,updateBlogPost} = useContext(BlogContext);
    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    console.log(navigation.getParam('id'));

    const [title,setTitle] = useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);
    
    return (
                
            <View>      
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input}
                value={content}
                onChangeText={(text)=>setContent(text)}/>
            <Button title="Update"
                onPress={()=>
                    updateBlogPost(navigation.getParam('id'),title,content, () => navigation.navigate('Home'))
                    }/>
        </View>
        

        
    )
};

const styles = StyleSheet.create({
    input : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        marginBottom : 15,
        marginHorizontal : 5
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
    }
});

export default EditScreen;