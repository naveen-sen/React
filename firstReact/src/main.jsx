import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h2>Custom App</h2>
        </div>
    )
}

const reactElement = React.createElement(
    'a',
    {href:'https://github.com',target:'_blank'},
    'Click Me to Visit Github'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
