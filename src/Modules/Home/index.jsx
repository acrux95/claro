/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import resp from '../../mocks/response.json';
import { setSelected as setSelectedActions, setVideos as setVideosActions, setSearch as setSearchActions } from '../../actions';
import { getVideos } from '../../api';

import './Home.scss';

const Home = ({videos, search, setVideos, setSelected, setSearch}) => {
  useEffect(() => {
    const fetchVideos = async () => {
      const videosRes = await getVideos();
      videosRes === undefined
        ? setVideos(resp.response.groups)
        : setVideos(videosRes)
      console.log(videosRes)
    };
    fetchVideos();
  }, [setVideos]);

  const handleSelect = (event) => {
    const videoSelected = videos.filter((sel) => sel.id === event.target.id)
    setSelected(videoSelected[0])
  };
  const filteredTitles = useMemo(() =>
    videos.filter((title) => {
      return title.title.toLowerCase().includes(search.toLowerCase());
    }),[search, videos]);
  const handleSearch = (event) => {
    setSearch(event.target.value)
  };

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
    search: state.search,
  });
const mapDispatchToProps = (dispatch) => ({
  setVideos: (value) => dispatch(setVideosActions(value)),
  setSelected: (value) => dispatch(setSelectedActions(value)),
  setSearch: (value) => dispatch(setSearchActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);