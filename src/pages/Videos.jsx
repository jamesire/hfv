import ReactPlayer from "react-player";
import { useEffect } from "react";
import './../styling.css';

export default function Videos() {
    return(
        <div id="video-container">
            <div className='video'>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=VRdw68u7D50"
                />
                No Room for Romantics
            </div>
            <hr className="line" />
            <div className='video'>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=nkSQZh2Xrs0"
                />
                In the Shade
            </div>
            <hr className="line" />
            <div className='video'>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=TH52tN76gl4"
                />
                Close
            </div>
        </div>
    )
}