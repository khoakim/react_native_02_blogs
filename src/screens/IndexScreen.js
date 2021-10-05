import React, {useContext} from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import BlogContext from '../context/BlogContext';
import { Context as BlogContext} from '../context/BlogContext';
const IndexScreen = ({navigation}) => {

    const {state, deleteBlogPost}=useContext(BlogContext);
    // const {data,addBlogPost}=useContext(Context);
    // console.log(navigation)
    return (
        <View>

            <FlatList 
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate("Show", {id:item.id})}>
                        <View style={styles.blog}>
                        
                        <Text style={styles.title}>Title {item.title} - {item.id}</Text>
                        
                        <TouchableOpacity onPress={ () => deleteBlogPost(item.id)}>
                        <Feather name="trash" style={styles.deleteIcon} />
                        </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

// Whenever Index Screen is about to be displayed by Navigator
// React will call "navigationOptions" and it inpsects the object this function returns
// We can use this object to customise what is displayed inside our header and what happens if user taps on them
//
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : ()=>(
            <TouchableOpacity onPress={ () => navigation.navigate("Create")}>
                <Feather name="plus" style={styles.addIcon}/>
            </TouchableOpacity>
        )
    };
}


const styles=StyleSheet.create({
    blog : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical:10,
        borderTopWidth : 1,
        borderColor : 'gray',
        paddingHorizontal : 10
    },
    deleteIcon : {
        fontSize : 30
    },
    addIcon : {
        fontSize : 30
    },
    title : {
        fontSize : 18
    }
})
export default IndexScreen;