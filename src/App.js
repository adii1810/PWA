import {Nav,Navbar,Container} from 'react-bootstrap'
import {Route,BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Users from './Users';

function App() {
  return (
      <Router>
        <div className='container-fliud'>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>User Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav className='px-md-2'><Link to={"/"}>Home</Link></Nav>
            <Nav className='px-md-2'><Link to={"/Users"}>Users</Link></Nav>
          </Nav>
        </Container>
      </Navbar> 
      </div>
      <Routes>
        <Route path='/Users' exact element={<Users/>}/>
        <Route path='/' exact element={<Home/>}/> 
      </Routes>
      </Router>
  );
}

export default App;
