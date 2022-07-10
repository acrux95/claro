/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setSelected as setSelectedActions,
  setVideos as setVideosActions,
  setSearch as setSearchActions,
} from "../../actions";
import { getVideos } from "../../api";

import "./Home.scss";

function Home({ videos, search, setVideos, setSelected, setSearch }) {
  useEffect(() => {
    const fetchVideos = async () => {
      const videosRes = await getVideos();
      setVideos(videosRes);
    };
    fetchVideos();
  }, [setVideos]);
  const handleSelect = (event) => {
    setSelected(event.target.id);
  };
  const filteredTitles = useMemo(
    () => videos.filter((title) => title.title.toLowerCase().includes(search.toLowerCase())),
    [search, videos],
  );
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="list">
      <section className="list_search">
        <div className="list_search_input">
          <p>Buscar:</p>
          <input type="text" value={search} onChange={handleSearch} />
        </div>
      </section>
      <section className="list_section">
        {filteredTitles.map((title) => (
          <div className="list_section_card" key={title.title} id={title.id}>
            <Link
              to="/details"
              className="card_link"
              onClick={handleSelect}
              key={title.title}
              id={title.id}
            >
              <img
                src={title.image_small}
                alt={title}
                key={title.title}
                id={title.id}
                object={title}
              />
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}

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
