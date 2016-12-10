var _ = require('lodash');
var JournalEntry = require('../models/journal_entry.js');

module.exports = function (app) {

    /* Create */
    app.post('/journal_entry', function (req, res) {
        var newJournal_entry = new JournalEntry(req.body);
        newJournal_entry.save(function (err) {
            if (err) {
                res.json({ info: 'error during journal_entry create', error: err });
            };
            res.json({ info: 'journal_entry created successfully' });
        });
    });

    /* Read */
    app.get('/journal_entry', function (req, res) {
        JournalEntry.find(function (err, journal_entrys) {
            if (err) {
                res.json({ info: 'error during find journal_entrys', error: err });
            };
            res.json({ info: 'journal_entry found successfully', data: journal_entrys });

        });
    });

    app.get('/journal_entry/:id', function (req, res) {
        JournalEntry.findById(req.params.id, function(err, journal_entry) {
            if (err) {
                res.json({info: 'error during find journal_entry', error: err});
            };
            if (journal_entry) {
                res.json({info: 'journal_entry found successfully', data: journal_entry});
            } else {
                res.json({info: 'journal_entry not found'});
            }
        });
    });

    /* Update */
    app.put('/journal_entry/:id', function (req, res) {
        JournalEntry.findById(req.params.id, function(err, journal_entry) {
            if (err) {
                res.json({info: 'error during find journal_entry', error: err});
            };
            if (journal_entry) {
                _.merge(journal_entry, req.body);
                journal_entry.save(function(err) {
                    if (err) {
                        res.json({info: 'error during journal_entry update', error: err});
                    };
                    res.json({info: 'journal_entry updated successfully'});
                });
            } else {
                res.json({info: 'journal_entry not found'});
            }
        });
    });

     /* Delete */
    app.delete('/journal_entry/:id', function (req, res) {
        JournalEntry.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove journal_entry', error: err});
            };
            res.json({info: 'journal_entry removed successfully'});
        });
    });
};
