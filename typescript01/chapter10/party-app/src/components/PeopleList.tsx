import type { Person } from '../types/person';

interface IProps {
  people: Person[];
}

const PeopleList = ({ people }: IProps) => {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={`${person.name}-${index}`} className="list">
          <div className="list-header">
            <img className="list-img" src={person.img} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="list-note">{person.note}</p>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
