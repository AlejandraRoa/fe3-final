import facebookIcon from '/public/images/ico-facebook.png';
import instagramIcon from '/public/images/ico-instagram.png';
import tiktokIcon from '/public/images/ico-tiktok.png';
import whatsappIcon from '/public/images/ico-whatsapp.png';
import PropTypes from 'prop-types'; 


const Footer = ({ theme }) => {
  const isDarkMode = theme === 'dark';
  return (
    <footer>
      <p>© 2024 Clinica Dental. Todos los derechos reservados.</p>
      <img src="./images/DH.png" alt='DH-logo'/>

      <a href="https://facebook.com">
          <img src={facebookIcon} alt="Facebook" style={{ width: '25px', height: '25px', backgroundColor: isDarkMode ? 'transparent' : '#000', 
            borderRadius: '50%'}}/>
        </a>
        <a href="https://instagram.com">
          <img src={instagramIcon} alt="Instagram" style={{ width: '25px', height: '25px', backgroundColor: isDarkMode ? 'transparent' : '#000', 
            borderRadius: '50%'}}/>
        </a>
        <a href="https://tiktok.com">
          <img src={tiktokIcon} alt="TikTok"  style={{ width: '25px', height: '25px', backgroundColor: isDarkMode ? 'transparent' : '#000', 
            borderRadius: '50%'}}/>
        </a>
        <a href="https://whatsapp.com" className='a'>
          <img src={whatsappIcon} alt="WhatsApp" style={{ width: '25px', height: '25px', backgroundColor: isDarkMode ? 'transparent' : '#000', 
            borderRadius: '50%'}}/>
        </a>
        
    </footer>
  )
}

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
