var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResearchPapers = new Schema({
  research_papers : [{
    paper_title : String,
    type : String,
    journal : String,
    journal_link : String,
    paper_abstract : String,
    published_date : String
  }]
});

module.exports = mongoose.model('ResearchPapers',ResearchPapers);
