import * as types from '../actions/actionType';

const initState = {
    contacts:[
        {
            id:1234567678,
            name:'Vasya',
            lastName:'Pupkin'
        },
        {
            id:34556677,
            name:'Moshe',
            lastName:'Katz'
        },
        {
            id:6632457354,
            name:'Petya',
            lastName:'Ivanov'
        }
    ]
}


export default function contactReducer(state = initState,{type,payload}){
    switch(type){
        case types.ADD_CONTACT: return addContact(state,payload);
        case types.RM_CONTACT: return removeContact(state,payload);
        case types.UPDATE_CONTACT: return updateContact(state, payload);
        default: return state;
    }
}

function addContact(state,contact){
    contact.id = new Date().getTime();
    return {
        ...state,
        contacts: [...state.contacts, contact]
    }
}

function removeContact(state, id){
    let arr = [...state.contacts];
    let index = arr.findIndex(c => c.id === id);
    arr.splice(index,1);
    return {
        ...state,
        contacts:arr
    }
}

function updateContact(state, contact){
    let arr = [...state.contacts];
    let index = arr.findIndex(c => c.id === contact.id);
    arr[index] = contact;
    return {
        ...state,
        contacts:arr
    }
}