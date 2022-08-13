import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
<footer class="text-center text-white" style={{"background-color": "#f1f1f1"}}>
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <SocialIcon className='m-2' style={{ height: 30, width: 30 }} url="https://facebook.com/jaketrent" />
      <SocialIcon className='m-2' style={{ height: 30, width: 30 }} url="https://whatsapp/jaketrent" />
      <SocialIcon className='m-2' style={{ height: 30, width: 30 }} url="https://instagram/jaketrent" />
      <SocialIcon className='m-2' style={{ height: 30, width: 30 }} url="https://imo/jaketrent" />
      <SocialIcon className='m-2' style={{ height: 30, width: 30 }} url="https://twitter/jaketrent" />
    </section>
  </div>

  <div class="text-center p-3" style={{"background-color": "red"}}>
    © 2020 Copyright:
    <a class="text-white" href="#">Derana.com</a>
  </div>
</footer>
  )
}

export default Footer