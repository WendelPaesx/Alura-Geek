import './StarWars.css'
import storm from '../img/storm.png'
import head from '../img/head.png'
import iodaBebe from '../img/iodinha.png'
import iodaVelho from '../img/ioda1.png'
import tropper from '../img/tropper.png'
import seth from '../img/seth.png'









function StarWars() {


    return (



        <body className='produtos'>
            <h2 className='tema'> StarWars</h2>

            <div className='itens'>
                <div className='it'>
                    <img src={storm} alt='storm Tropper'></img>
                    <p>chaveiro Storm Tropper</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={head} alt='storm Tropper'></img>
                    <p>chaveiro Darth Vader</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={iodaVelho} alt='storm Tropper'></img>
                    <p>Ioda mini</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={tropper} alt='storm Tropper'></img>
                    <p>storm Tropper Mini</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={iodaBebe} alt='storm Tropper'></img>
                    <p>Ioda bêbe</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={seth} alt='storm Tropper'></img>
                    <p>Jedi mini</p>
                    <p>R$60,00</p>
                </div>
                
                
            </div>
            






        </body>

    )


}
export default StarWars