import github from "./github.jpg"
import linkedin from "./linkedin.png"
import "./contact.css"

function Contact() {
  return (
    <div>
      <p>Email: Francisco.Rosado.Dev@gmail.com</p>
      <a href="https://www.linkedin.com/in/francisco-rosado-dev" target="_blank" rel="noreferrer"><img className="contactLink" src={linkedin} alt="LinkedIn" /></a>
      <br />
      <a href="https://github.com/francisco-rosado-dev" target="_blank" rel="noreferrer"><img className="contactLink" src={github} alt="GitHub" /></a>
    </div >

  )
}

export default Contact;