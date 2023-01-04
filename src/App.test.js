import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
it('<li> has key', () => {
  const list = document.querySelectorAll('li')
  for (let index = 0; index < list.length; index++) {
    const selected = list[index]
    console.warn(`this is a ${selected.value}`)
    expect(selected).toHaveAttribute('key')
  }
})


// it('form works', ()=>{

// })
