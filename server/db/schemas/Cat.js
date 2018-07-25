const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Declare Schema for Cat Model
const catObject = {
  name: String,
  color: {
    furr: String,
    eyes: String
  },
  breed: String,
  sex: String
};
// Set collection name
const collection = { collection: "Cats" };
// Turn off key versioning
const versionKey = { versionKey: false };

// Create a new Cat Schema
const catSchema = new Schema(catObject, collection, versionKey);

// Create a Cat Model
const Cat = mongoose.model('Cat', catSchema);

// Export Cat model
module.exports = Cat;
