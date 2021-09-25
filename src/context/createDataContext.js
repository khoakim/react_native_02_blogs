import React, {useReducer} from 'react';

export default (reducer,actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({children})=> {
        const [state,dispatch] = useReducer(reducer,initialState);

        // actions = { addBlogPosts: (dispatch) => {return () => {}}}

        const boundActions = {};
        for (let key in actions){
            // boundActions[key] = boundActions.addBlogPosts
            // actions[key] returns a function "(dispatch) => {return () => {}}"
            // we call that actions[key] function with argument of "dispatch"
            // ==> actions[key](dispatch)
            // the reason is we need to pass "dispatch" from createDataContext to BlogContext
            boundActions[key]=actions[key](dispatch);
        }
        return <Context.Provider value={{state,...boundActions}}>
        {children}
        </Context.Provider>

    }

    return {Context,Provider}
};