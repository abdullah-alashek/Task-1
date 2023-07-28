import './Hero.css'

const Hero = ({text}) => {
  return (
  
    <div className='hero'>
      <div className='content'>
        <h1>{text[0]}</h1>
        <span>{text[1]}</span>
        <p>{text[2]}</p>
        <a>{text[3]}</a>
      </div>
    </div>
  )
}

export default Hero