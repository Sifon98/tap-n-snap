const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json({ limit: '100mb'}))
app.use(cors())

const postRouter = require('./backend/routes/posts')
app.use('/posts', postRouter)

// Connect to DB
mongoose.connect(
  'mongodb+srv://admin:pa55w0rd@cluster0.cmulc.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('DB connected') }
)

app.listen(4000, () => console.log('server started on port 4000'))
