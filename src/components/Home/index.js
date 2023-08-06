
import LogoTitle from '../../assets/images/R.png';

import './index.scss';
import { useEffect, useState } from 'react';
import AnimationLetters from '../AnimationLetters';
import Himage from '../../assets/images/home-image.png';
import Loader from 'react-loaders';
import Resume from '../../assets/resume/RubenFC-Resume.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['u', 'b', 'e', 'n', ' ', 'C', 'a', 'r', 'b', 'a', 'j', 'a', 'l']
  const jobArray = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r','i', 'n', 'g', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  return(
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
          <br /> 
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m</span>
          <img src = {LogoTitle} alt="developer"/>
          <AnimationLetters letterClass={letterClass}
          strArray= {nameArray}
          idx={15}/>
          <br />
          <AnimationLetters letterClass={letterClass}
          strArray= {jobArray}
          idx={15}/>
          </h1>
          <h2>Interested in all things Tech / Promoting Educational Equity</h2>
          <a href={Resume} download className='Ruben-Resume'>Download Resume</a>
        </div>
        <div className='home_img'>
          <svg className='home_blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  <image className='home_blob-img' x='3' y='3' href={Himage}/>
              </g>
          </svg>
        </div>
      </div>
      <Loader type="ball-grid-pulse"/>    
    </>
  )
}

export default Home
