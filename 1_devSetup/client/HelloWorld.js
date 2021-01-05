import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
          <h1>Hello World!</h1>
			<h2>Full Stack Development</h2>
			<p>React is very simple and easy to learn.</p>
			<h3>Success is mine in this world.</h3>
        </div>
      )
}

export default hot(module)(HelloWorld)
