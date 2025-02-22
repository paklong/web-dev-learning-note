import './App.css'
import { people } from './data/data.js'
import { getImageUrl } from './utils/utils.js'

function MyHeroList({ title, people }) {
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      {people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}: </b>
            {person.profession}
            <br />
            Known for {person.accomplishment}
          </p>
        </li>
      )}
    </>
  );
}

function App() {
  const chemists = people.filter(person => person.profession == 'chemist');
  const otherCoolScientists = people.filter(person => person.profession !== 'chemist');
  return (
    <article>
      <MyHeroList
        title='Chemists'
        people={chemists}
      />
      <MyHeroList
        title='Other cool scientists'
        people={otherCoolScientists}
      />
    </article>
  );
}

export default App
