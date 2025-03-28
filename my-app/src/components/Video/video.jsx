import './video.css';
import React from 'react';
class VideoComp extends React.Component {
    render(){
        
        return (
            <section className="section-video">
                <div className="section-video-left">
                    <iframe
                        src="https://www.youtube.com/embed/78bXV1ZqQWI"
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="section-video-right">
                    <iframe
                        src="https://www.youtube.com/embed/oAQxk9dOJ8k"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        );
    }
}
export default VideoComp