import './Getstart.css'
const Getstart = ({text1, text2 , button}) => {
  return (
    <div className="getstart">
      <p>{text1}<br/><span>{text2}</span></p>
      <button>{button}</button>
    </div>
  )
}

export default Getstart