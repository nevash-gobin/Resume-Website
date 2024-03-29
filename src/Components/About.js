import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nevash Gobin Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
               {bio} 
               {bio2} 
               <br/>
               {bio3}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street},<br />
						         {city} <br/> {country} {zip}
                   </span><br />
                   <span>{phone} </span><br />
                     <span>{email} </span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} download={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
               
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
