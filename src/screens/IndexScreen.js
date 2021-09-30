import React, {useContext} from 'react';
import { View, Text, StyleSheet,FlatList, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import BlogContext from '../context/BlogContext';
import { Context as BlogContext} from '../context/BlogContext';
const IndexScreen = ({navigation}) => {

    const {state,addBlogPost , deleteBlogPost}=useContext(BlogContext);
    // const {data,addBlogPost}=useContext(Context);
    console.log(navigation)
    return (
        <View>

        <Button title="Add Post"
            // onPress={addBlogPost}
            onPress={()=>navigation.navigate("Create")}
        />
            <FlatList 
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate("Show", {id:item.id})}>
                        <View style={styles.blog}>
                        
                        <Text style={styles.title}>Title {item.title} - {item.id}</Text>
                        
                        <TouchableOpacity onPress={ () => deleteBlogPost(item.id)}>
                        <AntDesign name="delete" style={styles.deleteIcon} />
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
                <AntDesign name="plus" style={styles.addIcon}/>
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
        fontSize : 20
    },
    title : {
        fontSize : 18
    }
})
export default IndexScreen;