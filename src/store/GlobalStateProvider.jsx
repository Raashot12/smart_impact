import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();
const url = 'https://indapi.kumba.io/webdev/assignment'
const GlobalStateProvider = ( { children } ) => {
    const [order, setOrder] = useState( [] )

    const fetchdata = async () => {

        try {
            const response = await fetch( url )
            const data = await response.json()
            setOrder( [data] )

        } catch ( error ) {
            console.log( error )
        }
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return <Context.Provider value={ order }>{ children }	</Context.Provider>
}
export default GlobalStateProvider;


// localStorage.setItem( "counterStat", JSON.stringify() )

// const getStateFromLocalStorage = () => {
//     const storage = localStorage.getItem( 'counterState' );
//     console.log( storage )
//     if ( storage ) return JSON.parse( storage );
//     return { count: 0 }
// }

// const storeStateFromLocalStorage = () => {
//     localStorage.setItem( "counterState", JSON.stringify( this.state ) )
//     console.log( localStorage )
// }

