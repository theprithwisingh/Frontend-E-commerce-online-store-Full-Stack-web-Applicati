import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div>
      <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(999)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores nisi corporis consequatur vel obcaecati incidunt a voluptas temporibus explicabo accusantium at est, repudiandae tenetur neque et cumque eaque. Repellendus.</p>
            <p>
                E-Commerce Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit placeat laboriosam, adipisci voluptas facere necessitatibus veniam alias ipsa rem hic natus animi tenetur nesciunt excepturi quaerat, asperiores temporibus dolorum!
            </p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox;
