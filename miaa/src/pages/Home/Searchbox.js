import React, { Component } from "react";
import "./Searchbox.css";

class Searchbox extends Component {
  state = {
    where: "",
    chekcin: "",
    checkout: "",
    guests: "0",
  };

  changeWhere = (e) => {
    this.setState({ where: e.target.value });
  };
  changeCheckIn = (e) => {
    this.setState({ chekcin: e.target.value });
  };
  changeCheckOut = (e) => {
    this.setState({ checkout: e.target.value });
  };
  changeGuests = (e) => {
    this.setState({ guests: e.target.value });
  };

  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do</h1>

        <form className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input
                className="browser-default"
                onChange={this.changeWhere}
                placeholder="Anywhere"
                value={this.state.where}
                // 위 changeWehre에서 받아온 state값으로 re render됨
                type="text"
              ></input>
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">CHECK-IN</div>
            <div className="input-field" id="check-in">
              <input
                className="browser-default"
                onChange={this.changeCheckIn}
                placeholder="Anywhere"
                value={this.state.checkin}
                type="date"
              ></input>
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">CHECK-OUT</div>
            <div className="input-field" id="check-out">
              <input
                className="browser-default"
                onChange={this.changeCheckOut}
                placeholder="Anywhere"
                value={this.state.checkout}
                type="date"
              ></input>
            </div>
          </div>

          <div className="col m12">
            <div className="form-label">Guests</div>
            <div className="input-field" id="where">
              <input
                className="browser-default"
                onChange={this.changeGuests}
                value={this.state.guests}
                type="number"
              ></input>
            </div>
          </div>

          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input
                className="btn-large waves-effect waves-light red accent-2"
                type="submit"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbox;
