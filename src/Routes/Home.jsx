import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentists(response.data))
      .catch(error => console.log(error));
  }, []);

  const addToFav = (dentist) => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!favs.some(fav => fav.id === dentist.id)) {
      favs.push(dentist);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  };

  return (
    
    <div className="card-grid">
            
      {dentists.map(dentist => (
        <Card key={dentist.id} dentist={dentist} addToFav={addToFav} />
      ))}
    </div>
  );
};

export default Home;
