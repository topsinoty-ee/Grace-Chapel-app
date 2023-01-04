//import { Field, Contact } from "./Data";
import React from 'react'
import { AiFillMail, AiFillPhone } from 'react-icons/ai'
import { Socials, link, Mail, num, Box } from '../Data'

const ContactDetails = () => {
  return (
    <div id="Contact-details">
      <h3 className="text-header">Contact Us</h3>
      <div className="flex flex-row gap-1">
        <Box
          text=<AiFillMail />
          display={Mail}
          link={link.Mail}
          className="bg-green box"
        />
        <Box
          text=<AiFillPhone />
          display={num}
          link={link.tel}
          className="bg-ring-orange box"
        />
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <div className="flex flex-col space-y-4">
      <ContactDetails />
      <Socials className="text-4xl hover:text-opacity-50 text-green" />
    </div>
  )
}
export { ContactSection }
