import React from "react";
import './imagelinkform.css'

const ImageLinkForm = ({onInputChange}) => {
    return (
        <div>
            <p>
                {'This will detect Faces'}
            </p>
            <input type="text" onChange={onInputChange}/>
            <button>Detect</button>
        </div>
    )
};

export default ImageLinkForm;