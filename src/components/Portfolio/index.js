import './index.scss'
import AnimationLetters from '../AnimationLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Card from '../Card'
import MyImage from '../../assets/images/one-step.png'
import PokImage from '../../assets/images/pokemon-game.png'
import ClkImage from '../../assets/images/dig_clk.jpg'
import TickImage from '../../assets/images/tick-stock.png'
import CpuImage from '../../assets/images/pipeline-cpu.png'
import NetImage from '../../assets/images/usageByProcess.png'
import FloodImage from '../../assets/images/flood-detector.png'
import ThermImage from '../../assets/images/thermo.jpg'
import ClassImage from '../../assets/images/classification.png'

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])


  return(
    <>
      <div className='container portfolio-page'>
        <div className='text-zone'>
        <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={['P','o','r','t','f','o', 'l','i', 'o']}
              idx={15}/>
          </h1>
          <p>
            Here are some of the projects I have been working on recently &#8594; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
            You can check the websites on the git or the source code for all projects
          </p>
          <p>
            Also, classes i've taken are: &#x2022; Computer Hardware &#x2022; Applied Algorithms &#x2022; Computer Networking &#x2022; Signals & Systems
            &#x2022; Elctrical Circuits &#x2022; Modern Physics &#x2022; Probability, Statistics, & Data Science &#x2022; Business Innovation
          </p>
          <p>
            I have also accomplished certifactes through Forage, some being:
             &#x2022; J.P. Morgan Software Engineering Virtual Experience 
             &#x2022; Goldman Sachs FinTech Engineering 
             &#x2022; Accenture North America Strategy Consulting
          </p>
        </div>
      <div className='container-card'>
      <Card title='Pipeline CPU' 
        imageUrl= {CpuImage}
        body='Processor design that allows for the concurrent execution of multiple instructions by dividing the instruction execution process into several stages with forwarding unit.'/>
      <Card title='ONE STEP Website' 
        imageUrl= {MyImage}
        body={<button>
          <a target='_blank' rel='noreferrer' href='https://jpmc-olumbus-hackathon.vercel.app/my-steps'>
            In Action
          </a>
        </button>}/>
        <Card title='Digit Clock' 
        imageUrl= {ClkImage}
        body={<button>
          <a target='_blank' rel='noreferrer' href='https://youtube.com/shorts/EJ00PPrNpW8'>
            In Action
          </a>
        </button>}/>
      <Card title='Flood Detector' 
        imageUrl= {FloodImage}
        body={<button>
          <a target='_blank' rel='noreferrer' href='https://youtu.be/9RuJzXz1EhA'>
            In Action
          </a>
        </button>}/>
      <Card title='Network Usage Monitor' 
        imageUrl= {NetImage}
        body={<button>
          <a target='_blank' rel='noreferrer' href='https://youtu.be/JOCwlJT3F-E'>
            In Action
          </a>
        </button>}/>
        <Card title='Tick-Stock Website' 
        imageUrl= {TickImage}
        body={<button>
        <a target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=UMad2r16zcE'>
          In Action
        </a>
      </button>}/>
      <Card title='Pet Classification' 
        imageUrl= {ClassImage}
        body='Utilizing Machine Learning, I can use LDA and QDA to decipher the difference between a cat or dog image'/> 
      <Card title='Custom Pokemon Game' 
        imageUrl= {PokImage}
        body={<button>
          <a target='_blank' rel='noreferrer' href='https://youtu.be/2f5a-11hiCQ'>
            In Action
          </a>
        </button>}/>
        <Card title='Temperature Alarm' 
        imageUrl= {ThermImage}
        body= 'A thermometer triggers alerts (buzzer, LED, and LCD) when the temperature sensor deviates from the desired range'/>
      </div>
      </div>
    <Loader type="ball-grid-pulse"/> 
    </>
  )
} 

export default Portfolio