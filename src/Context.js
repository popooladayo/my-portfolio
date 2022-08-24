import { useReducer, useContext, createContext } from 'react';
const reducer = (state, action) => {
    if (action.type === 'SET_NAME') {
        return {
            ...state,
            name: action.payload
        }

    }

    if (action.type === 'SET_NAV') {
        return {
            ...state,
            nav:action.payload
        }
    }
    return state;
}


const defaultState = {
    name: '',
    age: null,
    color: '',
    nav: false

}


const AppContext = createContext()
const useGlobalContext = () => {
    return useContext(AppContext)
}
const Appprovider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, defaultState)
    const setName = (name) => {
        dispatch({ type: 'SET_NAME', payload: name })

    }
    const setNav = (bol) => dispatch({ type: 'SET_NAV', payload: bol })

    return <AppContext.Provider value={{ ...state, setName, setNav }}>{children}</AppContext.Provider>
}

export { Appprovider, useGlobalContext }




