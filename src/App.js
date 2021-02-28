import './App.css';
import SearchPhotos from './Components/SearchBar/SearchPhotos';


function App() {

  return (
      <div className="App">
        <div className="container">
          <h1 className="title">React&Unsplash<br/> Search</h1>
            <SearchPhotos />
        </div>
      </div>
  );
}

export default App;

