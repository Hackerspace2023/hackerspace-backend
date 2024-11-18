const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  domain: String,
  tag: String,
  description: String,
  image: String,
  video: String,
  contributors: [
    {
      name: String,
      image: String,
    },
  ],
  showOnHighlights: Boolean,
  repo: String,
  url: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
