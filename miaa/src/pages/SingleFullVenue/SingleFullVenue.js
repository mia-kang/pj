// import './SingleFullVenue.css';
// import React, { Component } from 'react';
// import axios from 'axios';

// class SingleFullVenue extends Component {
    
//     componentDidMount(){
//         const vid = this.props.match.param.vid;
//         // 의문 1 : url숫자를 잡으려는 건 알겠는데, 페이지로 들어가면 id는 자동으로 생성되는 건가? 
//         const url= `${window.apiHost}/venue/${vid}`;
//         const res = await axios.get(url);
//         const SingleVenue = res.data;
//     }
    
//     render(){
//         return (
//             <div>
//                 <h1>SingleFullVenue</h1>
//             </div>
//         )
//     }
// }

// export default SingleFullVenue;