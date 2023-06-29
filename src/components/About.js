import React from 'react'

const About = () => {
  return (
    <div className='container' >
      <h2>About Us </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Introduction
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <strong>
              iNoteBook is a simple and easy-to-use notes app </strong> that allows you to create, edit, and delete notes. You can also log in and out of the app, and your notes will be saved even when you log out.
                <br /><br />
              We created iNoteBook because we believe that everyone should have a simple and convenient way to keep track of their thoughts and ideas. We wanted to create an app that was easy to use, but also powerful enough to help people stay organized and productive.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>iNoteBook offers a variety of features to help you stay organized, including:</strong>
              <li>
              The ability to create, edit, and delete notes
              </li>
              <li>The ability to organize your notes in HomePage</li>
              <li> The ability to password protect your account</li>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
