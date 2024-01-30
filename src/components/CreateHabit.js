import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addHabit } from './habitsSlice';
import { details } from './habitsSlice';

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // handle new habits
  const AddHabitHandler = () => {
    dispatch(addHabit({ title, description, details }));
    props.onHide();
    setTitle('');
    setDescription('');
  }
  
  // Modal Component
  return (
    <Modal {...props} className="habit-modal" size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Dialog>
        <Modal.Body>
          <Form onSubmit={() => AddHabitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
               className="mb-1"
                type='text'
                placeholder='Enter title...'
                value={title}
                autoFocus={true}
                required={true}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label className="pt-3 mb-1">Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='Description...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Modal.Footer>
            {title ?
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
              : <Button className="disabled">Add Habit</Button>}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit;