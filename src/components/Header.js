import { Nav, Container } from 'react-bootstrap';

const Header = () => {
  const date = new Date();
  return (
    <Nav className='nav-header p-2'>
      <Container className='d-flex justify-content-between align-items-center pl-0'>
        <h3 className='fw-bold'>
        <i className="far fa-list-alt pr-2"></i>
        <span>Habits Tracker</span></h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header;