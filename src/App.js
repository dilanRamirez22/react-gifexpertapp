import React ,{useState} from 'react';
import ListGif from './components/ListGif';
import SearchGif from './components/SearchGif';

function App() {
  const [Categoria, setCategoria] = useState('');
  
  return ( 
  <div className="container">
    <header>
       <nav><h1>Git expert</h1></nav>
    </header> 
    <SearchGif
    setCategoria={setCategoria} 
    />
    <ListGif
    Categoria={Categoria}
    />
  </div>
  );
}

export default App;
