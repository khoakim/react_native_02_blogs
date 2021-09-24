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
    const addBlogPost = ()=>{
        setBlogPost([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
    }
    //{{data:blogPosts,addBlogPost}} = {{data:blogPosts:addBlogPost}}
    return <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext; 