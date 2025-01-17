import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const reactElement = {
  type: "a",
  attributes: {
    href: "https://google.com",
    target: "_blank",
  },
  content: "Click on me to visit google",
};

const areactElement = React.createElement(
    'a',
    {href : "https://google.com",target : "_blank"},
    'Click to visit Google'

)

const AnotherElement = <a href = "https://google.com" target = "_blank">Visit Google</a>

ReactDOM.createRoot(document.getElementById('root')).render(
  areactElement
)
