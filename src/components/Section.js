import React from 'react'
import './Section.css'
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/three.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'
import six from '../images/six.jpg'

const Section = () => {
  return ( 
    <section>
        <h3 className='sub'>Features</h3>
        <div className="feature">
        <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
            <img src={one} alt="" />

            <img src={two} alt="" />
            <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
           


            <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
            <img src={three} alt="" />

            <img src={four} alt="" />
            <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
           

            <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
            <img src={five} alt="" />

            <img src={six} alt="" />
            <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi praesentium saepe dignissimos voluptate sapiente. Rerum pariatur, quasi doloribus, beatae ab maxime nostrum aliquam eveniet sint dolores unde id recusandae?</p>
        </div>
         
        </div>
    </section>
  )
}

export default Section