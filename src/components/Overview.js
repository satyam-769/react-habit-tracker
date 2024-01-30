import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';

import '../style.css';
import CreateHabit from './CreateHabit';
import { deleteHabit } from './habitsSlice';

const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { habits } = useSelector((state) => state.allHabits);


  // Delete habit handler
  const deleteHandler = (name) => {
    console.log('name', name)
    dispatch(deleteHabit(name));
  }

  return (
    <>
      <div className='left-title m-0'>
        <div>
          <h4>Habits</h4>
        </div>
      </div>
      <ListGroup>
        {habits.map((habit, index) => (
          <ListGroup.Item key={index} className='gradient mb-2 rounded habit-container'>
            <Row>
              <Col md={2} className='icons'>
                {' '}
                <i className="fas fa-tasks"></i>
              </Col>
              <Col md={8} className='habit-title pl-1'>{habit?.title}</Col>
                <Button
                  type='button'
                  className='delete-icon'
                  onClick={() => deleteHandler(habit?.title)}
                >
                  <i className='fas fa-solid fa-trash' style={{ fontSize: '12px' }}></i>
                </Button>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row>
        <Col className='d-flex justify-content-end'>
          <Button
            type='button'
            className='mt-2 mobile'
            onClick={() => setModalShow(true)}
          >
            <i className='fa-solid fa-circle-plus'></i> &nbsp; New Habit
          </Button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </>
  )
}

export default Overview;