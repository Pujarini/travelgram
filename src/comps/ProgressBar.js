import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({file, setFile}) => {
    const {progress, url}= useStorage(file);

    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [file, setFile, url])
    return (
        <div className="progress" style={{width: `${progress}%`}}>
            {/* Progress Bar */}
        </div>
    )
}

export default ProgressBar
