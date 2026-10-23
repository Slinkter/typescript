import { useState } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';
import AddToPeople from './components/AddToPeople';
import type { Person } from './types/person';

function App() {
  const [people, setPeople] = useState<Person[]>([
    {
      name: 'John',
      age: 30,
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      note: 'John is a very good person'
    },
    {
      name: 'Jane',
      age: 25,
      img: 'https://randomuser.me/api/portraits/women/22.jpg',
      note: 'Jane is a very good person'
    }
  ]);

  return (
    <div className="App">
      <h1>People List - Birthday Party</h1>
      <PeopleList people={people} />
      <AddToPeople people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
