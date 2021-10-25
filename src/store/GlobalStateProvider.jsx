/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect, createContext, } from "react";

export const Context = createContext();
const GlobalStateProvider = ( { children } ) => {
    const [categories, setCategories] = useState( [] )
    const [education, setEducation] = useState( [] )
    const [build, setBuild] = useState( [] )
    let [isLoaded, setIsLoaded] = useState( false );
    let [err, setErr] = useState( null );
    const generalContent = async () => {
        try {
            const response = await axios.get( `${ process.env.REACT_APP_BASE_URL }categories` );
            const data = await response.data
            const educationgen = await data[0].articles.slice( 0, 2 )
            const buildandDevgen = await data[1].articles.slice( 0, 2 )
            setCategories( [...educationgen, ...buildandDevgen] )
            setIsLoaded( true )
        } catch ( error ) {
            setErr( error.message )
            setIsLoaded( true )
        }
    }
    const fetchEducation = async () => {
        try {
            const response = await axios.get( `${ process.env.REACT_APP_BASE_URL }categories?id=1` );
            const data = await response.data
            setEducation( data[0].articles.slice( 0, 4 ) )
            setIsLoaded( true )
        } catch ( error ) {
            setErr( error.message )
            setIsLoaded( true )
        }
    }
    const fetchBuildDev = async () => {
        try {
            const response = await axios.get( `${ process.env.REACT_APP_BASE_URL }categories?id=3` );
            const data = await response.data
            setBuild( data[0].articles )
            setIsLoaded( true )
        } catch ( error ) {
            setErr( error.message )
            setIsLoaded( true )
        }
    }

    useEffect( () => {
        generalContent()
    }, [] )

    useEffect( () => {
        fetchEducation()
    }, [] )
    useEffect( () => {
        fetchBuildDev()
    }, [] )

    return <Context.Provider value={ { categories, isLoaded, education, err, build } }>{ children }	</Context.Provider>
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

