import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import getLocalStorageData from '../utils/getLocalStorageData';
import Button from './ui/Button'
import { Form, FormGroup, Input, Label, TextArea } from './ui/Form'

const EditNotesForm = () => {
    const location = useLocation();
    const history = useHistory();
    const [allNotes, setAllNotes] = useState(null);
    const [currentNote, setCurrentNote] = useState({title: '', note: ''})

    useEffect(() => {
        const notes = getLocalStorageData('notes');

        setAllNotes(notes)

        const noteId = location.pathname.replace('/edit/', '');

        const currentNote = notes.filter((note) => note.id === noteId);

        setCurrentNote(currentNote[0]);
    }, [])

    const handleTitleChange = (e) => {
        setCurrentNote({ ...currentNote, title: e.target.value });
    };

    const handleNoteChange = (e) => {
        setCurrentNote({ ...currentNote, note: e.target.value });
    };
    
    const handleSubmit = (e) => {
        // update data notes
        const newNotes = allNotes.map((note) => {
          if (note.id === currentNote.id) {
            return { ...note, title: currentNote.title, note: currentNote.note };
          } else {
            return note;
          }
        });
        // replace data notes yang lama di local storage
        localStorage.setItem('notes', JSON.stringify(newNotes));
        e.preventDefault();
    };

    const handleDeleteNote = (e) => {
        const newNotes = allNotes.filter((note) => note.id !== currentNote.id);
        setCurrentNote(null);
        setAllNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        history.push('/');
    };

    const { title, note }  = currentNote;

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" name="title" value={title} onChange={handleTitleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Note</Label>
                <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
            </FormGroup>
            <FormGroup>
                <Button type="submit">Add</Button>
                <Button danger onClick={handleDeleteNote}>Delete</Button>
            </FormGroup>
        </Form>
    );
};

export default EditNotesForm;