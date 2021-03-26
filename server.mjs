/*Server Example provided within the module found here : Practical-Web4-ServerSide Web API
Original Author Dan Jackson Editing Author Scarlett Rowland 

This code creates a server, passes the variable to the html using birdCount from /scanbird */

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const currentFolder = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use('/', express.static(path.join(currentFolder, 'Public')))

// This enables the variable to be passed to the HTML file
app.get('/birds', (req, res) => {
  res.json({
    birds: birdCount
  })
})

console.log(path.join(currentFolder, 'Public'))

import { birdCount} from './scanbird.mjs'

app.listen(3001, () => {
  console.log('Listening at http://localhost:3001') //Click this link/the one in the terminal to view the webpage
})
