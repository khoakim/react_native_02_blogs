import React, {useContext} from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const {data,addBlogPost}=useContext(BlogContext);
    // console.log(blogs)
    return (
        <View>
        <Button title="Add Post"
            onPress={addBlogPost}
        />
            <FlatList 
                data={data}
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