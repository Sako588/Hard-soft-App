import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../Assest/Css/Contact.css'
import Navigation from '../Components/Navigation'
import MapContainer from './MapContainer';





const Contact = () => {

  const formSend = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4364j0w', 'template_t6y1i8p', formSend.current, 'ACkkz7silqXzPrNfY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='contact-section'>

      <Navigation
        Navigation1='Home'
        Navigation2='Contact'
        Section='CONTACT US'
      />
      <div className="contact-items">

        <div className="contact-me">

          <form className="form-items" ref={formSend} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label text-left h5">Full Name:</label>
              <input name='fullName' type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label text-left h5">Email address:</label>
              <input name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label text-left h5">Subject title:</label>
              <input name='subjectTitle' type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label text-left h5">Your Message:</label>
              <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
            </div>

            <div className="mb-3 btn-submit-reset">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-primary">Reset</button>
            </div>
          </form>

          <div className='google-map'>
            <MapContainer />
          </div>


        </div>

        <div className="adress-section">

          <ul>
            <li>Adress: <span> Azerbaijan Baku</span></li>
            <li>E-mail: <span>Sahil.azimov2013@gmail.com</span> </li>
            <li>Telefon number: <span>+99451 555-55-55</span> </li>
          </ul>


        </div>

      </div>



    </section>
  )
}

export default Contact