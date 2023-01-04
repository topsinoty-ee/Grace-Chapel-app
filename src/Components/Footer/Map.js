import { AiFillEnvironment } from 'react-icons/ai'
import React from 'react'
import { link } from '../Data'

const Location = () => {
  return (
    <div id="location-text">
      <div className="text-xl items-baseline bg-green flex flex-row">
        <AiFillEnvironment />
        <h4> Find us</h4>
      </div>
    </div>
  )
}
const MapImage = () => {
  return (
    <iframe
      title="Map"
      src={link.mapLocation}
      width="500"
      height="300"
      style={{ border: 0 }}
      allowFullScreen={{}}
      loading="lazy"
    ></iframe>
  )
}

const Map = () => {
  return (
    <div className='flex flex-col  mt-6 border-x-[0.5px] border-b-2'>
      <Location />
      <MapImage />
    </div>
  )
}
export default Map
