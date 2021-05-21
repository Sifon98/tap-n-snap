// const [fs, path] = [require('fs'), require('path')];
const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  url: {
    type: String,
    default: 'https://i.imgur.com/aSQakCu.png'
  },
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [String]
})


// the whole image data is sent from frontend as the property url
// convert to only a file name and save photo in public/uploads
// (the mongoose save hook let us do changes before saving...)
/*
PostSchema.pre('save', function (next) {
  let [type, base64] = this.url.split(',');
  let extension = type.split('/')[1].split(';')[0];
  let buffer = Buffer.from(base64, 'base64');
  let fileName = `${this.user}_${Date.now()}.${extension}`;
  let filePath = path.join(
    __dirname, '../', '../', 'public', 'uploads', fileName
  );
  this.url = fileName;
  fs.writeFile(filePath, buffer, next);
});
*/



module.exports = mongoose.model('Posts', PostSchema)