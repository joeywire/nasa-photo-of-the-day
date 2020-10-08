import React, {useState} from 'react';
import styled from 'styled-components'

const StyledIMG = styled.div`
    max-width: 95%;
    margin: 0 auto;
    display: flex; 
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    p {
        background: whitesmoke;
        width: 95%;
        padding: 2%;
        font-style: italic;
    }

    img {
        width: 90vw;
        margin-bottom: 2%;
    }

    button {
        padding: 10px;
        background-color: grey;
        color: gold;
        font-size: 1rem;
        font-weight: bold;
    }
`

function NasaImage (props) {
    const {imgURL, hdImgURL, explanation} = props;
    const [url, setUrl] = useState(imgURL);
    const [buttonText, setButtonText] = useState('See it in HD');
    
    function urlToggle() { 
        if (url === imgURL){
            return(
                setUrl(hdImgURL),
                setButtonText('Back to SD')
            )
        }
        return (
            setUrl(imgURL),
            setButtonText('See it in HD')
        )
    };

    return(
        <StyledIMG>
            <img src={url} />
            <button onClick={urlToggle}>{buttonText}</button>
            <p>{explanation}</p>
        </StyledIMG>
    );

};

export default NasaImage;