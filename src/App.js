import React from 'react';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className='App canvas_container'>
      <Card
        style={{ width: '20rem', height: '25rem' }}
        className='card bg-info'
      >
        <Card.Img variant='top' />
        <ProfilePhoto />
        <Card.Body>
          <Card.Title>
            {' '}
            <FullName />{' '}
          </Card.Title>
          <Card.Text>
            <Address />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
