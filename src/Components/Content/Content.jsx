import './Content.css'
const Content = ({list}) => {

  return (
    <>
      {
        list.map((item) =>(
          <div key={item.id} className={(item.reverse) ? "contents reverse" : "contents"}>
          <div className='artical'>
            <h2>{item.titleArtical}</h2>
            <p>{item.artical}</p>
          </div>
          <div className='img'>
            <img src={item.image}></img>
          </div>
          </div>

        ))
      }
    </>
  )
}

export default Content