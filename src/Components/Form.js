import React from 'react'

const Form = () => {
  return (
    <div className="min-h-90vh bg-green px-4">
      <div className="max-w-1/2">
        <h3 className="text-[4rem]">Get in touch</h3>
        <p className="text-xl">
          <span>
            We love to hear from people, so if you'd like to ask a question, get
            some info or just want to say hi, drop us a message below.
          </span>
        </p>
      </div>
      <form
        className="max-w-1/2 pt-4"
        action="mailto:contact@yourdomain.com"
        method="post"
        encType="text/plain"
        name="Contact_Us"
      >
        <ul>
          <li>
            <h3>
              <span className="after:content-['*'] after:ml-0.5 after:text-warning-red block text-2xl font-semibold">
                Name
              </span>
            </h3>
            <section className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label for="fname" className="after:content-['*'] after:ml-0.5 after:text-warning-red ">
                  First Name
                </label>
                <input
                  id="fname"
                  name="fname"
                  required
                  className="p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label for="lname" className="after:content-['*'] after:ml-0.5 after:text-warning-red ">Last Name</label>
                <input
                  id="lname"
                  name="lname"
                  required
                  className="p-2 rounded-lg"
                />
              </div>
            </section>
            <section className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label for="email" className="after:content-['*'] after:ml-0.5 after:text-warning-red ">
                  E-mail
                </label>
                <input
                  id="mail"
                  name="mail"
                  required
                  className="p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label for="tel">Tel</label>
                <input
                  id="tel"
                  name="tel"
                  required
                  className="p-2 rounded-lg"
                />
              </div>
            </section>
            <div>
                <textarea rols>

                </textarea>
            </div>
          </li>
        </ul>
      </form>
    </div>
  )
}
export default Form
