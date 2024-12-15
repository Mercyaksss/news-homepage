import { useState, useEffect } from 'react';
import './main.scss'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'



function Main() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 700);
  };

  // Use useEffect to listen for window resize
  useEffect(() => {
    updateScreenSize(); // Check screen size on initial load
    window.addEventListener('resize', updateScreenSize); // Listen for screen resize

    return () => window.removeEventListener('resize', updateScreenSize); // Cleanup listener
  }, []);

  return (
    <section className='main'>
      <div className='item item-1'>
        <img src={isSmallScreen ? image5 : image1} alt="Responsive" />
      </div>

      <div className='item item-2'>
        <h1>The Bright Future of Web 3.0?</h1>
      </div>

      <div className='item item-3'>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
        But is it really fulfilling its promise?</p>
        <button>Read more</button>
      </div>

      <div className='item item-4'>
        <h1> New </h1>
        <h3>Hydrogen VS Electric Cars</h3>
        <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr/>
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
        <hr/>
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>

      <div className='item item-5'>
        <img src={image2}/>
        <div>
            <h1> 01</h1>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className='item item-6'>
        <img src={image3}/>
        <div>
            <h1> 02</h1>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className='item item-7'>
        <img src={image4}/>
        <div>
            <h1> 03</h1>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>

    </section>
  )
}

export default Main
