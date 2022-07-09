import { connect } from 'react-redux';

import './Details.scss';

const Details = ({ selected }) => {

  return (
    <section className="details">
      <div className="details_image">
        <img src={selected.image_large} alt={selected.title} />
      </div>
      <div className="details_description">
        <p>{selected.description_large}</p>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
    selected: state.selected,
  });

export default connect(mapStateToProps, null)(Details);