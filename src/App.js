import './App.css';

const title = 'My Hacker Stories';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <h5>Reload time: {time}</h5>
        <Search />
        <hr />
        <List list={stories} />
      </header>
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li key={props.item.objectID}>
    <span><a href={props.item.url}>{props.item.title}</a></span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

const Search = () => {
  const handleChange = (event) =>{
    console.log(event);
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default App;
