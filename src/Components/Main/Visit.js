import React from 'react'
import pic from '../../Assets/Visit--img.svg'
import { Button } from '../Data'

const Visit = () => {
  return (
    <div className="bg-hero-pattern pt-40 pb-20 px-4 flex-row place-items-start min-h-full grid grid-cols-1">
      <div>
        <h3>
          <span>At Grace Chapel {'> > >'} </span>
        </h3>
      </div>
      <div>
        <img className="" src={pic} alt="/" />
      </div>
      <div>
        <Button
          text="Plan a Visit"
          className="capitalize hover:bg-gray-light p-3 mt-4 place-self-center border-2 rounded "
        />
      </div>
    </div>
  )
}
export default Visit
