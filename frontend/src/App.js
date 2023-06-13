
import axios from 'axios';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputSwitch } from "primereact/inputswitch";
import './App.css';

function App() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const admin = isAdmin? 1 : 0;
    const body = { mail, password, admin };
    
    try {
      const response = await axios.post('http://localhost:4242/user/create', body);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      // ici le setTimeout est facultatif, il permet de representer le loader
      setTimeout(() => {
        setIsLoading(false);
      }, 20000);
    }
  }
  
  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Learn Register</h2>
        <InputText value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Mail" />
        <Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" feedback={false} />
        <div id='admin-switch'>
          <InputSwitch checked={isAdmin} onChange={(e) => setIsAdmin(e.value)} />
          <p>administrateur</p>
        </div>
        <Button type="submit" label="Register" />
      </form>
      {!isLoading && data && data.mail ? <p>{data.mail} is connected</p> : null}
      {isLoading && <ProgressSpinner />}
    </main>
  );
}

export default App;
