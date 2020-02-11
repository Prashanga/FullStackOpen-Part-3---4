const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const mongo_url = process.env.MONGODB_URI

mongoose
    .connect(mongo_url,{ useNewUrlParser: true,  useFindAndModify: false })
    .then(result => {console.log('connected to MongoDB')})
    .catch((error) => {console.log('error connecting to MongoDB:', error.message)})

const contactSchema= new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3},
    number: { type: String, required: true, unique: true, minlength:8 },
   
})

contactSchema.plugin(uniqueValidator);

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})


module.exports = mongoose.model('Contact', contactSchema)