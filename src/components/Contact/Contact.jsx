import './contact.scss'
import AnimatedLetter from '../AnimatedLetters/AnimatedLetter'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from '../Loader'


const Contact = () => {

    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm =useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Clean-up fonksiyonu
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    const sendEmail= (e) => {
        
        e.preventDefault()
        emailjs
        .sendForm(
            'service_zjh1n92',
            'template_qcxxomg',
            refForm.current,
            'a8cTpCykmU19Q1Eih'
        )
        .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
        )
        e.target.reset()
    }

  return (
    <>
    <div className="container contact-page">
    <div className="text-zone">
        <h1>
            <AnimatedLetter
            letterClass={letterClass} 
            strArray={['C','o','n','t','a','c','t',' ','m','e']}
            idx={15}
            />
        </h1>
        <p>
            I am interested in freelance opprtunities - especially ambitious or large projects. 
            However, if you have other request or question,
            don't hesitate to contact me usiing below from either.
        </p>
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name='name' placeholder='Name' required />
                    </li>
                    <li className="half">
                        <input type="text" name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type="text" placeholder='Subject' name='subject' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input type="submit" className='flat-button' value="send"/>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    <div className="info-map">
        Hilal Karagülmez
        <br />
        Ankara,Turkey
        <br />
        <span>hllkrg6@gmail.com</span>
    </div>
    <div className="map-wrap">
        <MapContainer center={[39.92408,32.88546]} zoom={8}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[39.92408,32.88546]}>
            </Marker>
        </MapContainer>
    </div>
    </div>
    <Loader/>
    </>
    )
}

export default Contact