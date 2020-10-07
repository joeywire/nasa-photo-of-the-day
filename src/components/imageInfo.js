import React from 'react'

function ImageInfo (props) {
    const {author, title} = props 

    return (
        <div className="imageInfo">
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
    )
}

export default ImageInfo;