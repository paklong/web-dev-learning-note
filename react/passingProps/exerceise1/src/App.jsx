import './App.css'

export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Avatar({ props }) {
  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(props.id)}
        alt={props.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.profession}
        </li>
        <li>
          <b>Awards: {props.awards.length} </b>
          ({props.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered}
        </li>
      </ul>
    </>
  );
}

function App() {

  const data = {
    name: "Maria Skłodowska-Curie",
    id: "szV5sdG",
    profession: "physicist and chemist",
    awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
    discovered: "polonium (chemical element)"
  }

  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{data.name}</h2>
        <Avatar props={data} />
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App
