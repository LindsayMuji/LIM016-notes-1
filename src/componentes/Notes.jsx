import React, { useState } from 'react';
import { MdDeleteForever, MdCreate } from 'react-icons/md';
import {updateStateNote, getNote } from '../firebase/firestore';
import {ModalEdit} from './ModalEdit';

export const Notes = ( props ) => { 

    const deleteNotes = (idNote, title) => {
        const confirmDelete = confirm('Do you want to delete the note ' + title +'?');
        if(confirmDelete){
            updateStateNote(idNote, false).then(() => {
                const newArrayNotes = [...props.arrayNotes].filter((objNote)=>objNote.id!==idNote);
                props.setArrayNotes(newArrayNotes);
                props.setSearchArrayNotes(newArrayNotes);
            }).catch(() => { 
                alert('Error trying to delete note '+ idNote)
            });
        }      
    };

        
    const templateList = props.arrayNotes.map((note) => { 
        return (
            <div key={note.id} className='note-list'>
                <h3>{note.title}</h3>
                
                <p className='noteDescrip'>{note.description}</p>
                <div className='note-footer'>
                    <h2> {note.date}</h2>
                    <div>
                        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => deleteNotes(note.id, note.title)}></MdDeleteForever>
                        <ModalEdit note={note} arrayNotes={props.arrayNotes} setArrayNotes={props.setArrayNotes} ></ModalEdit>
                    </div>
                </div>
            </div>        
        )
    })
    return templateList;
};

