import React, {useContext} from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native'
// import BlogContext from '../context/BlogContext';
import { Context as BlogContext} from '../context/BlogContext';
const IndexScreen = () => {
    const {state,addBlogPost}=useContext(BlogContext);
    // const {data,addBlogPost}=useContext(Context);
    // console.log(blogs)
    return (
        <View>
        <Button title="Add Post"
            onPress={addBlogPost}
        />
            <FlatList 
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return (
                        <Text>Title {item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

export default IndexScreen;