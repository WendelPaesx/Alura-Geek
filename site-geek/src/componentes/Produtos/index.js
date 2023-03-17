import './StarWars.css'
import storm from '../img/storm.png'







function StarWars() {







    return (



        <body className='produtos'>
            <h2 className='tema'> StarWars</h2>

            <div className='itens'>
                <div className='it'>
                    <img src={storm} alt='storm Tropper'></img>
                    <p>Produto A</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={storm} alt='storm Tropper'></img>
                    <p>Produto A</p>
                    <p>R$60,00</p>
                </div>
                <div className ='it'>
                <img src={storm} alt='storm Tropper'></img>
                    <p>Produto A</p>
                    <p>R$60,00</p>
                </div>
            </div>






        </body>

    )


}
export default StarWars