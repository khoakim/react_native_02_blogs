import React, {useContext} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native'
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogs=useContext(BlogContext);
    // console.log(blogs)
    return (
        <View>
            <FlatList 
                data={blogs}
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