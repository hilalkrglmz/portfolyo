import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import './home.scss';
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters/AnimatedLetter';
import Logo from './Logo/Logo';
import Loader from '../Loader';


const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['i', 'l', 'a', 'l','','K','a','r','a','g','ü','l','m','e','z' ]
    const jobArray = [ 'W','E','B','','D','E','V','E','L','O','P','E','R']


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Clean-up fonksiyonu
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span>Hello I'm</span>
            <br />
            <img src={LogoS} alt=""/> 
            <AnimatedLetter letterClass={letterClass}
            strArray={nameArray}
            idx={15}
            />
            <br />
            <AnimatedLetter letterClass={letterClass}
            strArray={jobArray}
            idx={22}
            />
            </h1>
            <h2>Frontend / React / Software Developer</h2>
            <Link to={"/contact"} className='flat-button'>CONTACT ME</Link>
        </div>
            <Logo/>
    </div>
    <Loader/>
    </>
  )
}

export default Home