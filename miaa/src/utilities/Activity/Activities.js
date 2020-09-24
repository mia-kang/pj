import React, { Component } from "react";
import "./Activity.css";
import Activity from "./Activity";

class Activities extends Component {
  render() {
    //   console.log(this.props.activities)
    const activities = this.props.activities.map((activity,i) => {
        return(
            <div className='col s2' key={i}>
                <Activity activity={activity}></Activity>
            </div>
        )
    })

    return (
        <div className='activities'>
            <h1 className='main-header-text'>{this.props.header}</h1>
            {activities}
        </div>
    )
 
  }
}

export default Activities;

