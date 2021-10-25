import React from 'react'
import Loader from "../assests/loader/spinner.svg";
const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={ Loader } alt="loader spinner" height="50px" width="50px" />
        </div>
    )
}

export default Loading
