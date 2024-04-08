import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-info'>
      <h1 id='contact'>Contact</h1>
      <p>If you don't hire me, no problem. But if you have enough time then <br/> please give a feedback so that I can improve next time.</p>
      <h3>Get in tough <i class="fa-solid fa-caret-down"></i></h3>
      <div className='meassge'>
        <div className='email'>
        <h2><i class="fa-regular fa-envelope"></i> Email</h2>
        <a href="mailto:web.tahmid.safiq@gmail.com?subject=Subject%20Here&body=Message%20Here" target="_blank">web.tahmid.safiq@gmail.com</a>
        </div>
        <div className='email'>
        <h2><i class="fa-brands fa-facebook-messenger"></i> Messenger</h2>
        <a href="https://m.me/tahmidsafiq" target="_blank">Open Messenger Chat</a>
        </div>
        <div className='email'>
        <h2><i class="fa-brands fa-whatsapp"></i> Whatsapp</h2>
        <a href="https://wa.me/8801793372099" target="_blank">Open WhatsApp Chat</a>
        </div>
      

      <div className='email'>
        <h2><i class="fa-brands fa-linkedin"></i> Linkedin</h2>
        <a href="https://www.linkedin.com/in/tahmidsafiq" target="_blank">Open LinkedIn Profile</a>

        </div>
        <div className='email'>
        <h2><i class="fa-brands fa-square-github"></i> Github</h2>
        <a href="https://github.com/tahmidsafiq" target="_blank">Open GitHub Profile</a>

        </div>
        <div className='email'>
        <h2><i class="fa-brands fa-square-facebook"></i> Facebook</h2>
        <a href="https://www.facebook.com/tahmidsafiq" target="_blank">Open Facebook Profile</a>

        </div>
        </div>
      </div>
  );
};

export default Contact;