var mongoose = require('mongoose');

var journalEntrySchema = mongoose.Schema({
    appreciation: String
});

module.exports = mongoose.model('JournalEntry', journalEntrySchema);
