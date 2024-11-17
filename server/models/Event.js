// server/models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // New field for category
  reminder: { type: Number, required: true }, // New field for reminder (in minutes)
});

module.exports = mongoose.model("Event", eventSchema);
