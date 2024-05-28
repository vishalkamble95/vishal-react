import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function myApp(){
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotheruser = "  chai aur react"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
)
