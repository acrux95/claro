/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useMemo } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import resp from '../../mocks/response.json';
import { setSelected as setSelectedActions, setVideos as setVideosActions } from '../../actions';
import { getVideos } from '../../api';

import './Home.scss';
const Home = ({videos, setVideos, setSelected}) => {
  const [search, setSearch] = useState('');
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const VideosRes = await getVideos();
  //     setVideos(VideosRes);
  //   };
  //   fetchVideos();
 
  // }, [videos]);
 setVideos(resp.response.groups)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const filteredTitles = useMemo(() =>
    videos.filter((title) => {
      return title.title.toLowerCase().includes(search.toLowerCase());
    }),[search, videos]);
  const handleSelect = (event) => {
    const videoSelected = videos.filter((sel) => sel.id === event.target.id)
    setSelected(videoSelected[0])
  }
  return(
    <section className='list'>
        <section className='list_search'>
          <div>
            <p>Buscar:</p>
            <input type="text" value={search} onChange={handleSearch}/>
          </div>
        </section>
        <section className='list_section'>
      {
        filteredTitles.map((title) => (
      <>
          <div className='list_section_card' key={title.title} id={title.id}>
            <Link to="/details" className='card_link' onClick={handleSelect} key={title.title} id={title.id}>
              <img src={title.image_small} alt={title}  key={title.title} id={title.id} object={title}/>
            </Link>
          </div>
      </>
        ))
      }
      </section>
    </section>
  )
};

const mapStateToProps = (state) => ({
    videos: state.videos,
  });
const mapDispatchToProps = (dispatch) => ({
  setVideos: (value) => dispatch(setVideosActions(value)),
  setSelected: (value) => dispatch(setSelectedActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);