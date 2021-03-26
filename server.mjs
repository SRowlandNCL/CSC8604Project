/*Server Example provided within the module found here : Practical-Web4-ServerSide Web API
Original Author Dan Jackson Editing Author Scarlett Rowland */

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const currentFolder = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use('/', express.static(path.join(currentFolder, 'Public')))

app.get('/birds', (req, res) => {
  res.json({
    birds: birdCount
  })
})

console.log(path.join(currentFolder, 'Public'))

import { birdCount} from './scanbird.mjs'

app.listen(3001, () => {
  console.log('Listening at http://localhost:3001')
})