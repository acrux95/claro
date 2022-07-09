import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setVideos } from '../../actions';

import './Details.scss';

const Details = (props) => {
  const { id, title, description_large, image_large, image_clean_horizontal, year, duration } = props;

  return (
    <section className="details">
      <div className="details_image">
        <img src={image_large} alt={title} />
      </div>
      <div className="details_description">
        <p>{description_large}</p>
      </div>
    </section>
  )
}

Details.propTypes = {
  description_large: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  image_clean_horizontal: PropTypes.string,
  image_large: PropTypes.string,
};

const mapDispatchToProps = {
  setVideos,
};
export default connect(null, mapDispatchToProps)(Details);