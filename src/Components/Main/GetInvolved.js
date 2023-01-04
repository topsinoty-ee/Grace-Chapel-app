import { FamilyBranches } from '../Data'
import React from 'react'

const GetInvolved = () => {
  const GetInvolvedList = (props) => {
    const cards = props.cards
    cards.map((card) => (
      <li>
        <figure>
          <img alt={card.alt} src={card.src} />
          <figcaption>{card.description} red</figcaption>
        </figure>
      </li>
    ))
  }

  return (
    <div className="px-4 min-h-90vh">
      <header className="flex flex-col place-content-center space-y-5">
        <h3 className="text-header mx-auto w-auto flex place-content-center">
          Get Involved
        </h3>
        <p className="flex place-content-center">
          There are many ways you can get involved with the Grace Chapel Family
        </p>
      </header>
      <ul>
        <GetInvolvedList cards={FamilyBranches} />
      </ul>
    </div>
  )
}
export default GetInvolved
