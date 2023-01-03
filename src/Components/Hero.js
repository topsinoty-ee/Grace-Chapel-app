/* eslint-disable react/style-prop-object */
import React from 'react'
import { Socials, link, Video } from './Data'
import testVid from '../Assets/movie.mp4'

const Hero = () => {
  return (
    <div className="px-4">
      <section className="min-h-90vh flex flex-col space-y-6">
        {/* add announcement later */}
        {/* <div id='hero--announcement'></div> */}
        <div
          id="hero--main"
          className="min-w-full w-full max-w-full h-4/5 min-h-fit max-h-full"
        >
          <h1 className="text-[10rem] leading-none uppercase">
            Christ the way, the truth and the life.
          </h1>
        </div>
        <div className="flex flex-row place-content-between">
          <div id="hero--subtext">
            <h3 className="text-xl">
              Join us on Sundays at 12:00 PM&nbsp;
              {/* Data */}
              <a
                href={link.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray"
              >
                online
              </a>
              &nbsp;or
              <a
                href={link.location}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray"
              >
                &nbsp;in person
              </a>
            </h3>
          </div>
          <div id="hero--socials">
            <Socials className="text-4xl hover:text-gray" />
          </div>
        </div>
      </section>
      {/*  id='hero--video' */}
      <div className='-mb-20'>
        <Video
          video={testVid}
          format="ALM"
          className="aspect-video pointer-events-none w-full rounded-xl z-50"
        />
      </div>
    </div>
  )
}
export default Hero
