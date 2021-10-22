import './projects.css'
import humancoin from '.././humancoin.png'

function Work() {
  return (
    <div className="projectsContainer">
      <div className="project">
        <img src={humancoin} />
        <h3>Human Coin</h3>
        <p>Human Coin is a React application that introduces the innovative concepts of cryptocurrencies to manual labor. By tapping or clicking on the coin found in your wallet, you chip closer to finding a coin.</p>
        <a target="_blank" href="https://drive.google.com/file/d/1fnEgX2b9t4NGHhBwP2Yrey427OVb5aUM/view?usp=sharing"><button type="button" className="resume">GitHub</button></a>
        <a target="_blank" href="https://drive.google.com/file/d/1fnEgX2b9t4NGHhBwP2Yrey427OVb5aUM/view?usp=sharing"><button type="button" className="resume">Live Site</button></a>
      </div>
    </div>
  )
}

export default Work;