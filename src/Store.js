import React from 'react';
import {io} from 'socket.io-client';
// import classes from './Store.css';

export const CTX = React.createContext();

const initState = {
    hansBelo: [
        {from: 'Belo', msg: 'Just another project in "you have to start somewhere" series, right?'},
        {from: 'Hans', msg: 'oh yeah, baby!'},
        {from: 'Hans', msg: 'Still much to do, man... :/'}
    ],
    general: [],
    misc: []
}

const reducer = (state, action) => {

    const {topic, from, msg} = action.payload;

    switch (action.type) {
        case'RECEIVE_MESSAGE':
            // make a change in this string
            console.log('if anything is changed in this string, state begins to update.. .');
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default: {
            return state;
        }
    }
}


let socket;

const sendChatAction = (value) => {
    socket.emit('chat message', value);
}

const user = 'user' + Math.random(100).toFixed(2);

const Store = (props) => {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', msg => {
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
        });
    }


    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;