import './App.css';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  const myarr = [1,2,3,4];
  const cars = ["Saab", "Volvo", "BMW"];

  return (
    <div className="App">
      <div className="content">
      <h1>{title}</h1>
      <h2>App Component</h2>
      <p>Liked {likes} times</p>
      <p>{"hello ninjas"}</p>
      <p>{myarr}</p>
      <p>{cars}</p>
      <p>{Math.random * 10}</p>
      </div>
    </div>
  );
}

export default App;
