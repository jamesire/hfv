import React from 'react'
import ReactPlayer from "react-player";
import '../styles.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
        <div className='video-container'>
            <div className="player-wrapper">
                <ReactPlayer className='react-player'
                    url="https://www.youtube.com/watch?v=BwidOaKZJaY"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <p>The Blues</p>
        </div>
        <div className='video-container'>
            <div className="player-wrapper">
                <ReactPlayer className='react-player'
                    url="https://www.youtube.com/watch?v=ND_WpG6Wdls"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <p>Arm's Length</p>
        </div>
    </div>
  )
}

export default Home