import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className='nav'>
        <img src="/public/DH.ico" alt='DH'/>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button className="button" onClick={toggleTheme}>
            {theme === 'Día' ? 'Noche' : '🌙'}
        </button>
    </nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;
