import { useEffect, useState } from 'react'
import AnimatedLetter from '../../AnimatedLetters/AnimatedLetter'
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from '../../Loader'

const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Clean-up fonksiyonu
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


  return (
    <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetter
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
                </h1>
                    <p>I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects
                    </p>
                    <p>I'm quitely confident, naturally curious, and perpetually working on
                        improving my chops design problem at a time.
                    </p>
                    <p>If I were to describe myself in a single sentence, I am diligent, open to communication, affectionate, cheerful, fond of music, and someone who enjoys exploring new places. </p>
                
            
        </div>

        <div className='stage-cube-cont'>
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>

        </div>
    </div>

    <Loader/>

    </>
  )
}

export default About