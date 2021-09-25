// import React, {useReducer} from 'react';

// const BlogContext = React.createContext();

// // const App = () => {
// //     <Comp>
// //     <Text>asdfasd</Text>
// //     </Comp>
// // }
// // In the example above, component "App" will render/call component "Comp"
// // and pass in "<Text>...</Text>" as "children" object


// // 1) define const [blogPosts,dispatch]=useReducer(myReducer,[]);
// // ===> BlogPost will be referred to from "blogPosts".
// // ===> Initial value is []
// // 2) dispatch({type:'add_blogPost',payload:1})
// // ===> 'type' will be used in Reducer 'switch' statement
// // 3) reducer will return an array object that adds new object to existing list

// const myReducer= (state,action) => {
//     switch (action.type) {
//         case 'add_blogPost':
//             return [...state,{title:`Blog Post #${state.length+action.payload}`}]
//         default:
//             return state;
//     }  

// }

// export const BlogProvider = ({children}) => {
//     const [blogPosts,dispatch]=useReducer(myReducer,[]);
//     // const blogPosts = [
//     //     { title : 'Blog 1'},
//     //     { title : 'Blog 2'}

//     // ];
//     const addBlogPost = ()=>{
//         // setBlogPost([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
//         dispatch({type:'add_blogPost',payload:1})
//     }
//     //{{data:blogPosts,addBlogPost}} = {{data:blogPosts:addBlogPost}}
//     return <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

// export default BlogContext; 


import React from 'react';
import createDataContext from './createDataContext';

const myReducer= (state,action) => {
        switch (action.type) {
            case 'add_blogPost':
                return [...state,{title:`Blog Post #${state.length+action.payload}`}]
            default:
                return state;
        }
}
    const addBlogPost = (dispatch)=>{
        // setBlogPost([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
        return () => {dispatch({type:'add_blogPost',payload:1})}
    }

export const {Context, Provider} = createDataContext(myReducer,{addBlogPost},[]) 