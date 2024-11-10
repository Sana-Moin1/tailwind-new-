

const Contact= () => {
    return (
        <>
      <div className="contact" id="contact-container">
          <div className= "contact-grid md:grid-cols-2">
            <div className="contact-space">
                  <h2  className="contact-heading">
         Contact Us
                      Feel free to contact us or send message by submitting a Form.
                  </h2>
                  <p className="contact-text">
                  Feel free to contact.
                  </p>
  <div className="contact-flex">
      <li><i className="bx-bxs-send"></i>sanamoe74@gmail.com</li>
      </div>
      <div className="contact-flex">
  <li> 0312-9223161</li>
  </div> 
  </div>
              
              <div className="contact-space">
  <div className='form' data-aos="zoom-in-left">
  <label htmlFor="name">Name</label>
  <input type="text"className='input-field' id='name'/>
  </div>
  
  <div className='form'data-aos="zoom-in-left">
  <label htmlFor="email">Email</label>
  <input type="text"className='input-field' id='email' />
  </div>
  <div className='form'data-aos="zoom-in-left">
  <label htmlFor="msg">Message</label>
  <textarea className='textarea-feld'id='msg' rows={8}></textarea>
  </div>
       <button className='button'data-aos="zoom-in-left">Send</button>           </div>
          </div>
          </div>
   
   </>
    )
  }
  
  export default Contact;
  
  