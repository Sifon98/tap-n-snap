const express = require('express')
const mongoose = require('mongoose')
const cors = requir('cors')

const app = express()

app.use(express.json())
app.use(cors())

const postRouter = require('./backend/routes/posts')
app.use('/posts', postRouter)

// ----- SSE -----

// Store open connections in a list
let connections = []

// Route for SSE
app.get('/api/sse', (req, res) => {
  // Add res to open connections
  connections.push(res)

  // Remove res when client disconnects
  req.on('close', () => {
    connections = connections.filter(openRes => openRes != res)
  })

  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  })

  broadcast({
    message: 'client connected'
  })
})

function broadcast(data) {
  for (let res in connections) {
    res.write('data:' + JSON.stringify(data) + '\n\n')
  }
}

// Connect to DB
mongoose.connect(
  'mongodb+srv://admin:pa55w0rd@cluster0.cmulc.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('DB connected') }
)

app.listen(4000, () => console.log('server started on port 4000'))
