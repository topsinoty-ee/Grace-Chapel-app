import { ContactSection } from './Contact'
import Form from './Form'
import Map from './Map'
import QuickAccess from './QuickAccess'
import React from 'react'
const Footer = () => {
  return (
    <footer>
      <Form />
      <div className="px-4 bg-footer-texture">
        <div className="w-full flex flex-row place-content-between">
          <ContactSection />
          <Map />
        </div>
        <QuickAccess />
      </div>
    </footer>
  )
}
export default Footer
