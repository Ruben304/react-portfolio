import './index.scss'
import AnimationLetters from '../AnimationLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Clogo from '../../assets/images/c-logo.png'
import Vlogo from '../../assets/images/v-logo.png'
import Mlogo from '../../assets/images/Matlab_Logo.png'
import Hlogo from '../../assets/images/logo1.png'
import CSlogo from '../../assets/images/logo2.png'
import Plogo from '../../assets/images/python-logo.png'




const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
  }, [])



  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ', 'm','e']}
              idx={15}/>
          </h1>
          <p> I am currently a senior in Boston University studying Computer Engineering. I do enjoy the city of Boston, but nothing beats my hometown Houston, TX</p>
          <p> Outside of class I enjoy thrifting, music, and musuems &#9787;.
            Also I am president of my university's Society of Hispanic Proffesional Engineers (SHPE) chapter and part of Zen club. 
            Both have made me a better leader and person in their respective ways.</p>
          <p> Some technical skills i've learned are: &#x2022; C++ &#x2022; HTML &#x2022; CSS &#x2022; Vivado/Verilog &#x2022; Matlab.
             I am currently learing Javascript and Python to further familiarize myself in the coding space</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <img src = {Clogo} alt='c++ logo'/> 
            </div>

            <div className='face2'>
              <img src = {Hlogo} alt='html logo'/> 
            </div>

            <div className='face3'>
              <img src = {CSlogo} alt='css logo'/>
            </div>

            <div className='face4'>
              <img src = {Mlogo} alt='matlab logo'/>
            </div>

            <div className='face5'>
            <img src = {Plogo} alt='python logo'/> 
            </div>

            <div className='face6'>
              <img src = {Vlogo} alt='viv logo'/> 
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse"/>    
    </>
  )
}

export default About