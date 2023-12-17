import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    
    <div className="nav-bar">
      <Link className='logo' to="/">
        <img src={LogoS} alt="logo" />
        <h2>Hilal Karagülmez</h2>
      </Link>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/hilalkrglmz'>
            <FontAwesomeIcon icon={faGithub} color='4d4d4e'/>
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/hilalkaragulmez/'>
            <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;