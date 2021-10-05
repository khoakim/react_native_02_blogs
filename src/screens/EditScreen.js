import React, {useContext} from "react";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";
const EditScreen = ({navigation}) => {
    const {state,updateBlogPost} = useContext(BlogContext);
    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return <BlogPostForm 
                initialValues={{title:blogPost.title,content:blogPost.content}}
                onSubmit={(title,content)=>{
                    updateBlogPost(navigation.getParam('id'),title,content, () => navigation.navigate('Home'))
            }}
    /> 
};

export default EditScreen;