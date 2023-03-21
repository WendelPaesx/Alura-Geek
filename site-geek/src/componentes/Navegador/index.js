
import './navegador.css'
import logo from '../img/Logo.png'


function Navegador() {
    return (
        <><div className='nav'>
            <div className='menu'>
                <img src={logo} alt='Logo'></img>
                <input type="search" name="buscador" id="buscador" placeholder=" O que deseja encontrar?" />
            </div>
            <button id="login" type="submit">Login</button>
        </div>
        </>
    )
    
}
export default Navegador 