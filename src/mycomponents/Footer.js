import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faTrash} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp,faTwitter,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brand-svg-icons'
// import{} from '@'
const Footer = () => {
  return (
    <div>
      <footer id="foot" className="foot">
            <div className="icons">
              For Further Details
               {/* <FontAwesomeIcon icon={faCoffee} />
              <FontAwesomeIcon icon={faTrash} />  */}
              {/* <i class="fa-brands fa-facebook"></i>
              <FontAwesomeIcon icon={["fa-brands fa-facebook"] }/>
              <FontAwesomeIcon icon={["fab", "github"]} /> */}
               {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" />  */}
               <a href="https://www.twitter.com/" target="_blank"  className='linki'>
               <FontAwesomeIcon icon={faTwitter} size="xl" /></a>
              <a href="https://www.whatsapp.com/" target="_blank" className='linki'>
              <FontAwesomeIcon icon={faWhatsapp} size="xl" /></a>
              <a href="https://www.instagram.com/" target="_blank" className='linki'>
              <FontAwesomeIcon icon={faInstagram} size="xl" /></a>
              <a href="https://www.facebook.com/" target="_blank" className='linki'> <FontAwesomeIcon icon={faFacebook} size="xl" /> </a>
              {/* <a href="https://www.gmail.com/" target="_blank">
              <FontAwesomeIcon icon={faGmail} /></a>  */}
            </div>
            Copyright &copy; www.Mianwebs.com. All rights reserved! 
        </footer>
    </div>
  )
}

export default Footer
