import React from 'react'
import styled from 'styled-components'

function ImageInfo (props) {
    const {author, title} = props 

    const StyledIMGInfo = styled.div `
        font-family: Arial, Helvetica, sans-serif;
        border: 3px solid dodgerblue;
        width: 60%;
        margin: 2% auto;

        
    `

    return (
        <StyledIMGInfo >
            <h2>{title}</h2>
            <h3>Photographer: {author}</h3>
        </StyledIMGInfo>
    )
}

export default ImageInfo;