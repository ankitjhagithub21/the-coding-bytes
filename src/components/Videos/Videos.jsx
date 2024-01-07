import React from 'react';
import YouTubeVideo from '../YoutubeVideo/YoutubeVideo';
import data from './data';
import './video.css';

const Videos = () => {
    return (
        <section className='py-24'>
            <h1 className="text-center text-3xl lg:text-4xl font-bold mb-10">
                Our Latest Videos
            </h1>
            <div id='videos'>
                {data.map((video) => (
                    <YouTubeVideo key={video.id} src={video.src} />
                ))}
            </div>
        </section>
    );
};

export default Videos;
