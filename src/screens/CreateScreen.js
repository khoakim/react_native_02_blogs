import React, {useContext, useState} from 'react';
import { Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';
const CreateScreen = ({navigation}) => {

    const {addBlogPost}=useContext(BlogContext);
    return <BlogPostForm 
                onSubmit={(title,content)=>{
                    addBlogPost(title,content, () => navigation.navigate('Home'))
                }}
                />
};

export default CreateScreen;