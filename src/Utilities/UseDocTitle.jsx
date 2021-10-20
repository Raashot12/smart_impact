/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function UseDocTitle( title ) {

    const [doctitle, setDocTitle] = useState( title );

    useEffect( () => {
        document.title = `Smart Impact Consult|LTD${ doctitle || "|Home" }`;
    }, [doctitle] );
    return [doctitle, setDocTitle];
}
export default UseDocTitle
