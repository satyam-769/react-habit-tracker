import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { changeStatus } from './habitsSlice';

// Constants
const DONE = 'done';
const NONE = 'none';
const NOT_DONE = 'not done';

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();

  const getStatusClass = (status) => {
    if (status === NONE) return 'none'
    if (status === DONE) return 'done'
    return 'not-done'
  }
  // Handler to change status
  const handleStatusChange = (info, newStatus) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: newStatus,
          },
        ],
      })
    );
  };

  return (
    <div>
      {details.map((detail) => (
        <Fragment key={detail.day}>
          <div className="day">
            <p className='day-headings'>{detail.day}</p>
            <select
              className={`select ${getStatusClass(detail?.status)}`}
              value={detail.status}
              onChange={(e) => handleStatusChange([habit.title, detail.day], e.target.value)}>
              <option value={DONE}>Done</option>
              <option value={NOT_DONE}>Not Done</option>
              <option value={NONE}>None</option>
            </select>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default HabitDetails;
