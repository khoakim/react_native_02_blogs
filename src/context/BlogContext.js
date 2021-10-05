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
import { call } from 'react-native-reanimated';
import createDataContext from './createDataContext';

const myReducer= (state,action) => {
        switch (action.type) {
            case 'add_blogPost':
                return [...state,{
                    id : Math.floor(Math.random()*9999*Math.random()),
                    // title:`Blog Post #${state.length+action.payload}`
                    title: action.payload.title,
                    content: action.payload.content
                }]
            case 'delete_blogPost':
                // 'filter' will run against 'state' array and execute the function
                // all the element that makes the condition true will be returned
                return state.filter( (blogPost) => blogPost.id !== action.payload);
            case 'update_blogPost':
                // var newArray = [...state];
                // var foundIndex = newArray.findIndex(x => x.id == action.payload.id);
                // newArray[foundIndex].title = action.payload.title;
                // newArray[foundIndex].content = action.payload.content;
                // return newArray;

                // A better way is to call "map" which will return NEW array anyway
                return state.map( (blogPost) => {
                    return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
                })
            default:
                return state;
        }
}
    const addBlogPost = (dispatch)=>{
        // setBlogPost([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
        return (title,content, callback) => {
            dispatch({type:'add_blogPost',payload:{title,content}});
            callback();
        }
    }

    const updateBlogPost = (dispatch)=>{
        // setBlogPost([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
        return (id, title,content, callback) => {
            dispatch({type:'update_blogPost',payload:{id,title,content}});
            callback();
        }
    }

    const deleteBlogPost = (dispatch)=>{
        return (id) => {dispatch({type:'delete_blogPost',payload:id})}
    }

export const {Context, Provider} = createDataContext(
    myReducer,
    {addBlogPost, deleteBlogPost,updateBlogPost},
    // []
    // enter some initial values to save time
    [{title:'Initial',content:'New Content',id:1}]
    ) ;