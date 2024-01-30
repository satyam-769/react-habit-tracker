import { ListGroup} from 'react-bootstrap';
import { useSelector } from 'react-redux';

import HabitDetails from './HabitDetails';

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);
 
  return (
    <div className='d-flex'>
      {habits.map((habit, index) => (
        <ListGroup.Item key={index} className='mb-3 mr-3 rounded gradient1'>
          <p className="card-title">
            {habit.title} {' : '}
            <span>{habit.description}</span>
          </p>
          <HabitDetails key={habit.title}  habit={habit} />
        </ListGroup.Item>
      ))}
    </div>
  )
}

export default HabitDisplay;