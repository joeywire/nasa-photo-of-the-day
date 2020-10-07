import React, {useState} from 'react';

function NasaImage (props) {
    const {imgURL, hdImgURL, explanation} = props;
    const [url, setUrl] = useState('');
    let buttonText = "See it in HD";

    // function urlToggle() { 
    //     if (url == imgURL){
    //         setUrl(hdImgURL)
    //         buttonText = "Back to SD";
    //     }
    //     setUrl(imgURL)
    // };

    return(
        <div className='imgContainer'>
            <img src={imgURL} />
            {/* <button onClick={evt => urlToggle}>{buttonText}</button> */}
            <p>{explanation}</p>
        </div>
    );

};

export default NasaImage;