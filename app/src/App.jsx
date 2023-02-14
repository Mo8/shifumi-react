import './App.css';
import { useState } from 'react';

function Player(props){
  const [value,setValue] = useState(null);
  return <>
  <h2>{props.name}  {value}</h2>
  <button onClick={() => setValue("Pierre")}>Pierre</button>
  <button onClick={() => setValue("Papier")}>Papier</button>
  <button onClick={() => setValue("Ciseaux")}>Ciseaux</button>
  </>;
}

function App() {
  const title = (<h1> Pierre papier ciseaux</h1>);
  return (
    <div className="App">
      {title}
      <div>
      <Player name="Joueur 1"/>
      <Player name="Joueur 2"/></div>
    </div>
  );
}

export default App;
