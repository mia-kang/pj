import React, { Component } from "react";
import "./Home.css";
import Searchbox from "./Searchbox";
import Spinner from "../../utilities/Spinner/Spinner";
import axios from "axios"; // npm install axios
import Cities from "../../utilities/CIty/Cities";
import Activities from '../../utilities/Activity/Activities'
import Venues from '../../utilities/Venue/Venues';


class Home extends Component {

    state = {
      cities: [],
      europeCities: {},
      asiaCities: {},
      exoticCities: {},
      activities:[],
      recVenues: {}
    };

  async componentDidMount() {

    const citiesURL = `${window.apiHost}/cities/recommended`;
    const erURL = `${window.apiHost}/cities/europe`;
    const asiaURL = `${window.apiHost}/cities/asia`;
    const exoticURL = `${window.apiHost}/cities/exotic`;
    
    // 만약에 네 가지를 동시에 불러오고싶음? 하나fetch끝날 때까지 기달이 아니라
    // 한꺼번에 네 개 다 가지고 오는 거 시작하고 싶음?

    const citiesPromise =[];

    citiesPromise.push(axios.get(citiesURL));
    citiesPromise.push(axios.get(erURL));
    citiesPromise.push(axios.get(asiaURL));
    citiesPromise.push(axios.get(exoticURL));
    
    Promise.all(citiesPromise).then((data)=> {
      //완성되는 속도에 상관없이 위에 나열된 순서대로 data
      const recommendedCities = data[0].data;
      const europeCities = data[1].data;
      const asiaCities = data[2].data;
      const exoticCities = data[3].data;

      this.setState({ 
        cities: recommendedCities, 
        europeCities, 
        asiaCities, 
        exoticCities, 
      });

    });

    const activitiesurl = `${window.apiHost}/activities/today`;
    const activities = await axios(activitiesurl);
    this.setState({
      activities: activities.data,
    })

    const recVenuesUrl = `${window.apiHost}/venues/recommended`;
    const venues = await axios(recVenuesUrl);
    this.setState({
      recVenues: venues.data,
    })

  };

  render() {
    
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (<>
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12">
            <div className="upper-fold">
              <Searchbox />
            </div>
          </div>          
        </div>  
      </div>
      <div className='container-fluid lower-fold'>
      <div className='row'>

        <div className="col s12">
          <Cities cities={this.state.cities} header='Recommended Cities for You' />
        </div>

        <div className='col s12'>
          <Activities activities={this.state.activities} header='Today in your area'/>
        </div>

        <div className="col s12">
          <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
        </div>

        <div className="col s12">
          <Venues venues={this.state.recVenues.venues} header={this.state.recVenues.header} />
        </div>

        <div className="col s12">
          <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
        </div>

        <div className="col s12">
          <Cities cities={this.state.exoticCities.cities} header={this.state.exoticCities.header} />
        </div>
      </div>
    </div>
    </> //div 두 개면 빨간줄 난리난리 큰 div안에 넣기
    );
  }
}

export default Home;
