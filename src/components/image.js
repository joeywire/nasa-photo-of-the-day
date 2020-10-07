import React, {useState} from 'react';

function NasaImage (props) {
    const {imgURL, hdImgURL, explanation} = props;
    const [url, setUrl] = useState("")

    return(
        <div className='imgContainer'>
            <img src={url} />
            <p>{explanation}</p>
        </div>
    );

};

export default NasaImage;