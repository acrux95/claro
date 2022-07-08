import { useEffect, useState, useMemo, SetStateAction } from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';
import resp from '../../mocks/response.json';

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const API = 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=8ssspdg7rjufgbgk823q1irqv1&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270';
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(
        (response) => {
        setIsLoaded(true);
        setData(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      console.log(data);
      console.log(resp);
  }, [data]);

  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value)
  }
  const filteredTitles = useMemo(() =>
    resp.response.groups.filter((title) => {
      return title.title.toLowerCase().includes(search.toLowerCase());
    }),[search]);
  return(
    <section className='list'>
      {/* {data.response.groups.map((d) => (
        <p>{}</p>
      ))} */}
        <section className='list_search'>
          <div>
            <p>Buscar:</p>
            <input type="text" value={search} onChange={handleSearch}/>
          </div>
        </section>
        <section className='list_section'>
      {
        resp.response.groups.map((title) => (
      <>
          <div className='list_section_card' key={title.title}>
            <Link to="/details" className='card_link'>
              <img src={title.image_small} alt={title.title}  key={title.title}/>
            </Link>
          </div>
      </>
        ))
      }
      </section>
    </section>
  )
};

export {Home};