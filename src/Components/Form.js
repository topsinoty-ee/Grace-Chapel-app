import React from 'react'
import { Mail } from './Data'

const Form = () => {
  let input = document.getElementById('textArea')
  const formAction = 'mailto:' + { Mail } + '?subject=' + { input }

  return (
    <div className="min-h-90vh bg-purple px-4">
      <div className="max-w-1/2 w-1/3">
        <h3 className="text-[4rem]">Get in touch</h3>
        <p className="text-xl">
          <span>
            We love to hear from people, so if you'd like to ask a question, get
            some info or just want to say hi, drop us a message below.
          </span>
        </p>
      </div>
      <form
        id="GetInTouch"
        className="max-w-1/2 w-1/3 pt-4"
        action="mailto:contact@yourdomain.com"
        method="post"
        encType="text/plain"
        name="Contact_Us"
      >
        <ul className="max-w-[30rem] mt-3 space-y-2">
          <li>
            <section className="flex flex-row w-full flex-wrap space-y-1">
              <div className="flex flex-col w-1/2 max-w-[50%] min-w-[40%]">
                <label for="fname">
                  First Name
                  <span className="after:content-['*'] after:ml-0.5 after:text-warning-red "></span>
                  <input
                    className="p-2 rounded-lg max-w-[95%] min-w-[90%]"
                    id="fname"
                    name="fname"
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col w-1/2 max-w-[50%] min-w-[40%]">
                <label for="lname">
                  Last Name
                  <span className="after:content-['*'] after:ml-0.5 after:text-warning-red "></span>
                  <input
                    className="p-2 rounded-lg max-w-[95%] min-w-[90%]"
                    id="lname"
                    name="lname"
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col w-1/2 max-w-[50%] min-w-[40%]">
                <label for="mail">
                  E-mail
                  <span className="after:content-['*'] after:ml-0.5 after:text-warning-red "></span>
                  <input
                    className="p-2 rounded-lg max-w-[95%] min-w-[90%]"
                    id="mail"
                    name="mail"
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col w-1/2 max-w-[50%] min-w-[40%]">
                <label for="tel">
                  Telephone
                  <input
                    id="tel"
                    name="tel"
                    className="p-2 rounded-lg max-w-[95%] min-w-[90%]"
                  />
                </label>
              </div>
            </section>
          </li>
          <li>
            <div>
              <textarea
                id="textArea"
                className="p-2 rounded-lg max-w-[97.5%] w-full resize-none scroll-m-0 h-24"
                placeholder="Send us a message!"
                required
                wrap="hard"
                cols="3"
              ></textarea>
            </div>
          </li>
          <li>
            <button className="capitalize hover:bg-gray-light px-3 py-2 place-self-center rounded">
              <input type="submit" />
            </button>
          </li>
        </ul>
      </form>
    </div>
  )
}
export default Form
