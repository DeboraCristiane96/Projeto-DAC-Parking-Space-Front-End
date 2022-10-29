import { useState } from 'react';
import logo from './img/gifUser.gif'

import './styles.css'

function App(){
  const[name,setName] = useState("");const[birthDate,setBirthDate] = useState("");
  const[fone,setFone] = useState("");const[apatamentNumber,setApatamentNumber] = useState("");
  const[block,setBlock] = useState("");
  return(
    <div className="container">
      <div className="container-registration">
        <div className="wrap-registration">
          <form className="registration-form">

            <span className = "registration-form-title">Bem Vindo!</span>

            <span className = "registration-form-title">
              <img src ={logo} alt="Parting Space"/>
            </span>

            <div className='wrap-input'>
              <input className={name !== "" ? 'has-val input':'input' }
               type = "name"
               value ={name}
               onChange={e => setName(e.target.value)}
               />
              <span className='focus-input' data-placeholder='Nome*'></span>
            </div>

            <div className='wrap-input'>
              <input className={birthDate !== "" ? 'has-val input':'input' }
               type = "birthDate"
               value ={birthDate}
               onChange={e => setBirthDate(e.target.value)}
               />
              <span className='focus-input' data-placeholder='Data de Nascimento*'></span>
            </div>

            <div className='wrap-input'>
              <input className={fone !== "" ? 'has-val input':'input' }
               type = "fone"
               value ={fone}
               onChange={e => setFone(e.target.value)}
               />
              <span className='focus-input' data-placeholder='Telefone*'></span>
            </div>

            <div className='wrap-input'>
              <input className={apatamentNumber !== "" ? 'has-val input':'input' }
              type = "apatamentNumber"
              value ={apatamentNumber}
              onChange={e => setApatamentNumber(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nº do Apartamento*'></span>
            </div>

            <div className='wrap-input'>
              <input className={block !== "" ? 'has-val input':'input' } 
              type = "block"
              value ={block}
              onChange={e => setBlock(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Bloco*'></span>
            </div>
            <div className='container-registration-form-btn'>
              <button className='registration-form-btn'>Cadastrar</button>
            </div>

            <div className='true-registration'>
              <span className='txt1'>Já possui cadastro!</span>
            </div>

            <div className= 'true-registration'>
              <h3>Entrar</h3>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default App;