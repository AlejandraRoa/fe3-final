import Card from '../Components/Card';

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className="card-grid">
      {favs.length > 0 ? (
        favs.map(dentist => <Card key={dentist.id} dentist={dentist} />)
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favs;
