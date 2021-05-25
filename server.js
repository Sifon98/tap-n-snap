/*const express = require('express')
const formidable = require('formidable')
const fs = require('fs')

// create an app instance
const app = express()

// body parsing to enable req.body
app.use(express.json())

// endpoint to handle formData uploads
app.post('/api/upload', (req, res) => {
  // uses npm module 'formidable' to read the formData
  const form = formidable();
 
  form.parse(req, (err, fields, file) => {
    if (err) {
      res.end(err);
      return;
    }

    fields.location && console.log('location', JSON.parse(fields.location));
    fields.address && console.log('address', JSON.parse(fields.address));

    // get the file, from file
    file = file.file
    
    // open file with 'fs' to enable it to be 
    // saved as a file
    let fileData = fs.readFileSync(file.path)
    fs.writeFileSync(__dirname + '/www/uploads/' + file.name, fileData)

    res.json({ fields, file });
  });
});

// serve /www folder to let clients read from uploads
app.use(express.static(__dirname + '/www'))

app.listen(4000, () => console.log('Server started on http://localhost:4000'))
*/

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const postRouter = require('./backend/routes/posts')
app.use('/posts', postRouter)


// function broadcast(data) {
//   for (let res in connections) {
//     res.write('data:' + JSON.stringify(data) + '\n\n')
//   }
// }

// Connect to DB
mongoose.connect(
  'mongodb+srv://admin:pa55w0rd@cluster0.cmulc.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('DB connected') }
)

app.listen(4000, () => console.log('server started on port 4000'))

/*
// Require and setup mongoosy
const { app } = require('mongoosy')({
  query: {
    route: '/api/posts'
  },
  expressJson: {
    limit: '100mb'
  },
  connect: {
    url: 'mongodb+srv://admin:pa55w0rd@cluster0.cmulc.mongodb.net/Cluster0?retryWrites=true&w=majority'
  },
  // Please change the salt before creating any users
  login: {
    encryptionSalt: 'unique and hard to guess'
  }
});

// Add logic to handle SSE (Server Sent Events)
// require('./SSE-handler')(app);

// Start the Express web server
app.listen(4000, () =>
  console.log('Backend running!')); */