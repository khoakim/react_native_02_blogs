import React, {useState} from 'react';

const BlogContext = React.createContext();

// const App = () => {
//     <Comp>
//     <Text>asdfasd</Text>
//     </Comp>
// }
// In the example above, component "App" will render/call component "Comp"
// and pass in "<Text>...</Text>" as "children" object

export const BlogProvider = ({children}) => {
    const [blogPosts,setBlogPost]=useState([]);
    // const blogPosts = [
    //     { title : 'Blog 1'},
    //     { title : 'Blog 2'}
    
    // ];
    const addBlogPost = (newPost)=>{
        setBlogPost([...blogPosts,{newPost}])
    }
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext; 