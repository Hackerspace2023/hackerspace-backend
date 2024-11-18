const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: String,
  eventDate: String,
  eventTime: String,
  location: String,
  description: String,
  eventImage: String,
  registrationLink: String,
  category: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
