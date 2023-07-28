import './Title.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      <h1>{title[0]}</h1>
      <p>{title[1]}</p>
    </div>
  )
}

export default Title