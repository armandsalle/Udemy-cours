const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: '-t'
};

const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: '-b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List-all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var cmd = argv._[0];

if (cmd === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('-----\n-----');
        console.log('Note created !');
        notes.logNote(note);
    } else {
        console.log('-----\n-----');
        console.log('Note titile taken !');
        console.log('-----\n-----');
    }
} else if (cmd === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (cmd === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('-----\n-----');
        console.log('Note Found');
        notes.logNote(note);
        console.log('-----\n-----');
    } else {
        console.log('-----\n-----');
        console.log('Note not Found');
        console.log('-----\n-----');
    }

} else if (cmd === 'remove') {

    var noteRemoved = notes.removeNote(argv.title);
    console.log('-----\n-----');
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    console.log('-----\n-----');

} else {
    console.log('pas reconnu');
}