import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";


const UploadImg = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedFileTypes= ["image/png","image/jpg","image/jpeg"];


    const onChangeHandler=(e)=>{
        const selectedImg= e.target.files[0];
        if(selectedImg && allowedFileTypes.includes(selectedImg.type)){
            setFile(selectedImg);
        }else{
            setFile(null);
            setError("Oops! You uploaded wrong Image Type")
        }
    }
    console.log(error, file);
    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={onChangeHandler}/>
                <span>+</span>
                </label>
                
            </form>
            <div className="output">
                {error && <div className="errors">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}

            </div>
        </div>
    )
}

export default UploadImg
