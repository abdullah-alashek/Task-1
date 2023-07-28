import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import Content from './Components/Content/Content'
import Getstart from './Components/Getstart/Getstart'
import Footer from './Components/Footer/Footer'
import viteLogo from './assets/LogoMakr-7FT3Xj.png'
import images from './assets/image2.png'
import images1 from './assets/images1.svg'
import images2 from './assets/images2.svg'
import images3 from './assets/images3.svg'

const App = () => {
  return (
    <>
      <Navbar logo ={viteLogo} 
              list={[
              { id: 1, name: "GitHub" },
              { id: 2, name: "Sign in" },
            ]} 
      />
      <Hero text={['The modern landing page for' , 'React developers','The easiest way to build a React landing page in seconds.' , 'Download Your Free Theme']} 
      /> 
      <Title title = {['Your title here','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.']}
      />
      <Content  
              list={[
              { id: 1, titleArtical: "Your title here", artical: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim" , image:images1},
              { id: 2, titleArtical: "Your title here", artical: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim" , image:images2,reverse:'active'},
              { id: 3, titleArtical: "Your title here", artical: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim" , image:images3},
              ]}
      />
      <Getstart text1='Lorem ipsum dolor sit amet consectetur adipisicing elit.' text2='Start your Free Trial.' button='Get Started'
      />
      <Footer/>
    </>
  )
}
export default App



