import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

const TeamBox = ({ data }) => {
  return (
    <section className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt={data.name}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={data.image}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <h3 className="mb-3 font-medium">{data.role}</h3>
          <p className="mb-4">{data.desc}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-2xl">
            <a
              href={data.socialMedia[0].facebook}
              target="_blank"
              style={{ color: '#316FF6' }}
              aria-label={`Follow ${data.name} on Facebook`}
            >
              <FaFacebookSquare />
            </a>
            <a
              href={data.socialMedia[0].linkedin}
              target="_blank"
              style={{ color: '#0077b5' }}
              aria-label={`Follow ${data.name} on LinkedIn`}
            >
              <FaLinkedin />
            </a>
            <a
              href={data.socialMedia[0].instagram}
              target="_blank"
              style={{ color: '#bc2a8d' }}
              aria-label={`Follow ${data.name} on Instagram`}
            >
              <FaInstagramSquare />
            </a>
            <a
              href={data.socialMedia[0].youtube}
              target="_blank"
              aria-label={`Subscribe to ${data.name} on YouTube`}
              className="text-2xl"
              style={{ color: '#CD201F' }}
            >
              <FaYoutubeSquare />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBox;
