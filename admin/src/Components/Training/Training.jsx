import React from 'react'
import VideoPlayer from '../Videoplayer/Videoplayer';
import './Training.css'

const Training = () => {

    const handicraftIds = ['9XKv4-Px5_c', 'JXYIIA3R0rM'];
    const handloomIds = ['BjaTubnDtm0', 'GE_6DD4t0Xg'];
    const carpetIds = ['TufaYueZxFQ', '5c24D5JqFhw'];
    const agroIds = ['orOLNNjZKDc', '4WqRzGDDLu0'];
    const footwearIds = ['i65JZ_3Wi6w', 'apvDzZnUKFc'];
    const potteryIds = ['WQCQZeYKC64', 'cSuWvUav5QA'];

    return (
        <>
            <div className="container">
                <div className="section">
                    <h1>Handicraft</h1>
                    <div className="videos">
                        {handicraftIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1>Handloom & Textile</h1>
                    <div className="videos">
                        {handloomIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1>Carpet</h1>
                    <div className="videos">
                        {carpetIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1>Agriculture</h1>
                    <div className="videos">
                        {agroIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1>Footwear</h1>
                    <div className="videos">
                        {footwearIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1>Pottery</h1>
                    <div className="videos">
                        {potteryIds.map((videoId, index) => (
                            <div key={index} className="video-wrapper">
                                <VideoPlayer videoId={videoId} width="800" height="450" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Training