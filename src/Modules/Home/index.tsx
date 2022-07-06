import {Header} from '../../Components/Header'
import './Home.scss';

const Home = () => {

  return(
    <section className='list'>
      <Header/>
      <section className='list_search'>
        <div>
          <p>Buscar:</p>
          <input type="text" />
        </div>
      </section>
      <section className='list_section'>
        <div className='card'>
          <a href="/" className='card_link'>
            <img src="https://clarovideocdn3.clarovideo.net/PELICULAS/RIDDICK/EXPORTACION_WEB/SS/RIDDICKWHORIZONTAL.jpg?size=290x163" alt="" />
          </a>
        </div>
      </section>
    </section>
  )
};

export {Home};