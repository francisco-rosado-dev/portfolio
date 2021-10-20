import './home.css'

function Home() {
  return (
    <div>
      <div>
        <h1 className="greet">Hello 🌱</h1>
        <p className="introduction">Welcome to my portfolio. <br /> I am a New York based Full-Stack Software Engineer.</p>
        <p className="stackTitle">Tech Stack</p>
        <ul className="stackItems">
          <li className="stackItem">Html</li>
          <li className="stackItem">CSS</li>
          <li className="stackItem">JavaScript</li>
          <li className="stackItem">React.js</li>
          <li className="stackItem">Ruby</li>
          <li className="stackItem">SQL</li>
          <li className="stackItem">PostgreSQL</li>
          <li className="stackItem">Node</li>
          <li className="stackItem">Express</li>
          <li className="stackItem">MongoDb</li>
        </ul>
      </div>
    </div >
  )
}

export default Home;