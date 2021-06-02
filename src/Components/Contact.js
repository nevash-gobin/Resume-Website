import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
     // var street = this.props.data.address.street;
     // var city = this.props.data.address.city;
      //var country = this.props.data.address.country;
      //var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
         </div>
         <div className="row">
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Phone Number & Email Address</h4>
					   <p className="address">
						   {name}<br />
                     <span> <a href="tel:18687037114">{phone}</a> </span><br />
                     <span>
                     <a href = "mailto: nevash19@gmail.com">{email}</a>
                     </span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
