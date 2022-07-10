/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setDetails as setDetailsActions } from "../../actions";
import mock from "../../mocks/details.json";
import "./Details.scss";

function Details({ selected, details, setDetails }) {
  useEffect(() => {
    const fetchVideos = async (id) => {
      try {
        const detailsRes = await axios.get(
          `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web62c5d605af24a&user_id=59352999&group_id=${id}`,
        );
        // eslint-disable-next-line no-unused-expressions, no-undefined
        setDetails(detailsRes.data.response.group.common);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos(selected);
  }, [5]);

  return (
    <section className="details">
      <h3>{details.title}</h3>
      <section className="details_section">
        <div className="details_section_image">
          <img src={details.image_large} alt={details.title} />
        </div>
        <section className="details_section_description">
          <div>
            <p>{details.large_description}</p>
            <p>{`${details.extendedcommon.media.publishyear} Duración: ${details.duration}`}</p>
            <div className="details_section_description_info">
              {details.extendedcommon.roles.role[0].talents.talent.map((actor) => (
                <p>{actor.fullname}</p>
              ))}
            </div>
            <div className="details_section_description_info">
              <p className="details_section_description_info_talent">Director:</p>
              {details.extendedcommon.roles.role[1].talents.talent.map((dir) => (
                <p>{dir.fullname}</p>
              ))}
            </div>
            <div className="details_section_description_info">
              <p className="details_section_description_info_talent">Escritor:</p>
              {details.extendedcommon.roles.role[2].talents.talent.map((esc) => (
                <p>{esc.fullname}</p>
              ))}
            </div>
            <div className="details_section_description_info">
              <p className="details_section_description_info_talent">Productor:</p>
              {details.extendedcommon.roles.role[3].talents.talent.map((prod) => (
                <p>{prod.fullname}</p>
              ))}
            </div>
            <div className="details_section_description_info">
              <p className="details_section_description_info_talent">Género:</p>
              {details.extendedcommon.genres.genre.map((gen) => (
                <p>{gen.name}</p>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

const mapStateToProps = (state) => ({
  selected: state.selected,
  details: state.details,
});
const mapDispatchToProps = (dispatch) => ({
  setDetails: (value) => dispatch(setDetailsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
