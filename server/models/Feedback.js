const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  fullName: String,
  department: String,
  wentWell: String,
  didntGoWell: String,
  challenges: String,
  lessons: String,
  shoutOuts: String,
  startDoing: String,
  stopDoing: String,
  continueDoing: String,
  ratings: {
    teamCollab: String,
    crossTeamCollab: String,
    workLifeBalance: String,
    productivity: String,
    motivation: String,
    orgInput: String,
    suggestions: String
  },
  followUp: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
