import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      console.log('Formulario enviado exitosamente', { name, email });
      alert(`Gracias ${name}, Nos pondremos en contacto contigo por correo electrónico.`);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <button type="submit">Enviar</button>
      {error && <p>Por favor, verifica tu entrada</p>}
    </form>
  );
};

export default Form;
