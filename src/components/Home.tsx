import React from 'react'
import ReactPlayer from "react-player";
import '../styles.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
        <div className='video-container'>
            <div className="player-wrapper">
                <ReactPlayer className='react-player'
                    url="https://www.youtube.com/watch?v=VRdw68u7D50"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <p>No Room for Romantics</p>
        </div>
        <div className='video-container'>
            <div className="player-wrapper">
                <ReactPlayer className='react-player'
                    url="https://www.youtube.com/watch?v=nkSQZh2Xrs0"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <p>In the Shade</p>
        </div>
        <div className='video-container'>
            <div className="player-wrapper">
                <ReactPlayer className='react-player'
                    url="https://www.youtube.com/watch?v=TH52tN76gl4"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <p>Close</p>
        </div>
    </div>
  )
}

export default Home