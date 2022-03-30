/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { Button, Modal, Form} from 'semantic-ui-react'
import { MdCreate } from 'react-icons/md';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    case 'save':
      console.log(' que muestra?', title,description);
      return{open:false}
    default:
      throw new Error('Unsupported action...')
  }
}

export const ModalEdit = ({note}) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state



  const [title, setTitle]= useState(note.title);
  const [description, setDescription]= useState(note.description);


  const handleTitle = (e) =>{
    setTitle(e.target.value);       
  }

  const handleDescription = (e) =>{
    setDescription(e.target.value);       
  }

  return (
    <>
    <MdCreate className='edit-icon' size='1.3em' onClick={() => dispatch({ type: 'open', size: 'mini' })}></MdCreate>
      
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Content>
          <Form>
                <Form.Field>
                  <input placeholder='Title' defaultValue={title} onChange={handleTitle}/>
                </Form.Field>
                <Form.Field>
                  <input type='text' placeholder='Description' defaultValue={description} onChange={handleDescription}/>
                </Form.Field>
                <Modal.Actions>
                  <Button color='red' onClick={() => dispatch({ type: 'close' })}>Cancel</Button>
                  <Button color='green'onClick={() => dispatch({ type: 'save' })}>Save Chages</Button>
                </Modal.Actions>
            </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}