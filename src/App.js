import { Row, Container } from 'react-bootstrap';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import HabitDisplay from './components/HabitDisplay';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Header />
      <Container>
        <Row className='mt-5'>
          <div className="left-div pr-3">
            <Overview />
          </div>
          <div className="col p-0">
            <HabitDisplay />
          </div>
        </Row>
        <h4 className='text-light d-flex  mt-5  justify-content-center'>
          <span className='tag'></span>
        </h4>
      </Container>
    </Provider>
  );
}

export default App;