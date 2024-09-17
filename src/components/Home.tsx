import React from 'react'
import ReactPlayer from "react-player";
import '../styles.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
        <div className='video-container'>
            <iframe style={{borderRadius: "12px", border: "none"}} src="https://open.spotify.com/embed/album/1SFDtUTWaK2wANp6ipg9Gz?utm_source=generator" width="100%" height="400" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <p>Listen to Black Poison Morning</p>
        </div>
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