import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Activity.css";

class Activity extends Component {

  render() {
    const { activityType, cost, id, image, rating, title, totalRatings } = this.props.activity;
    return (
      <div className='activity'>
        <Link to={`/activity/${id}`}>
          <img src={image}></img>
          <div className='activity-type'>{activityType}</div>
          <div className='title'>{title}</div>
          <div className='cost'>From ${cost}/person</div>
          <div className='rating'>
            <i className="material-icons">star</i>{rating} ({totalRatings})</div>
            {/* MATEIRALIZE들어가서 ICON LINK PUBLIC INDEX에 추가해야 함 */}
        </Link>

      </div>
    );
  }
}

export default Activity;

