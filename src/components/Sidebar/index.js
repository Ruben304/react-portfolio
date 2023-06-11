import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/R.png'
import LogoSubtitle from '../../assets/images/ruben_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faUser, faEnvelope, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className ='nav-bar'>
    <Link className='logo' to='/'>
      <img src = {LogoS} alt="Logo"/>
      <img className='sub-logo' src = {LogoSubtitle} alt="Ruben"/>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="about-link" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="portfolio-link" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="contact-link" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rubenfc304/'>
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target='_blank' rel='noreferrer' href='https://github.com/Ruben304'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar