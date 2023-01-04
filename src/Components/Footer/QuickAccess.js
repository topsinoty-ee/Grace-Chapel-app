import { Vert, Name } from '../Data'
import React from 'react'

const Links = () => {
  return (
    <ol>
      <nav className="flex flex-row space-x-3">
        <li className="footer-link">
          <a href="/contact" title="Contact us">
            Contact Us
          </a>
        </li>
        <li className="footer-link">
          <a href="/cookies" title="Cookies">
            Cookies
          </a>
        </li>
        <li className="footer-link">
          <a href="/policy" title="Policies">
            Policies
          </a>
        </li>
      </nav>
    </ol>
  )
}
const Copyright = () => {
  const date = new Date()
  let year = date.getFullYear()

  return (
    <span>
      &copy;{year}&nbsp;{Name}
      {Vert}
      All rights reserved
      {Vert}
      Registered in Tallinn, Estonia
    </span>
  )
}
const QuickAccess = () => {
  return (
    <div className="flex flex-col items-center mt-4 bg-gray-dark text-gray-light">
      <Links />
      <hr />
      <Copyright />
    </div>
  )
}
export default QuickAccess
