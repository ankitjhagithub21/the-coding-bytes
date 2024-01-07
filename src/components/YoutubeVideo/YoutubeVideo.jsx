import React from 'react';

function YouTubeVideo({ src }) {
    return (


        <div className='p-3 card'>
            <iframe
                title={`YouTube Video - ${src}`}
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${src}`}
                allowFullScreen
                loading='lazy'
                className='w-full h-full'
            ></iframe>
        </div>

    );
}

export default YouTubeVideo;
