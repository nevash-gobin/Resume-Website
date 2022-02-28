import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var Certifications = this.props.data.Certifications.map(function(Certifications){
        return  <li key={Certifications.user}>
            <div class="card">
            <div class="card-body" style={{color:"white",fontWeight:"bold", fontSize:"18px", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
            <ul>
               {Certifications.text}<br/>
               <cite>{Certifications.user}</cite>
               
               </ul>
            </div>
            <br/>
         </div>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div >
               <h1><span>Courses</span></h1>
            </div>
            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Certifications}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Certifications;
