import './index.scss'
import Loader from 'react-loaders'
import AnimationLetters from '../AnimationLetters'
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
   }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_3651g7n', 'template_c1k3dwc', form.current, 'vEDLRoEWHnCFkgRAo')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }  
   
  return(
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimationLetters letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}/>
          </h1>
          <p>
            I am looking for new ways to break out of my comfort zone or to network with new people so please reach out 
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          THE Photonics Building,
          <br />
          Boston,
          <br />
          8 St Mary's St, 02215 <br />
          United States <br />
          <span>ruben.carbajal6502@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[42.34916, -71.10602]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.34916, -71.10602]}>
              <Popup>Ruben studies here, doing his best to survive :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      <Loader type="ball-grid-pulse"/>
      </div>
    </>
  )
}

export default Contact