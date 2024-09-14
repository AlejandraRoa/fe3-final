import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Card = ({ dentist, addToFav }) => {
  const { id, name, username } = dentist;


  const [confirmationMessage, setConfirmationMessage] = useState('');


  const handleAddToFav = (dentist) => {
    addToFav(dentist);
    setConfirmationMessage(`¡${name} ha sido agregado a favoritos con éxito!`); 
    setTimeout(() => setConfirmationMessage(''), 5000); 
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Dentist" style={{ width: '200px', height: '200px' }}/>
      <h2>{name}</h2>
      <p>{username}</p>
      <button className="favButton" onClick={() => handleAddToFav(dentist)}>Agregar a Favoritos ⭐</button>
      <Link to={`/dentist/${id}`}>Ver detalles 🔎</Link>
      {confirmationMessage && <p style={{ color: 'green', marginTop: '10px' }}>{confirmationMessage}</p>}
    </div>
  );
};

Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
    username: PropTypes.string.isRequired, 
  }).isRequired,
  addToFav: PropTypes.func.isRequired, 
};

export default Card;
