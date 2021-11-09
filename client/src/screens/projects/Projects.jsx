import './projects.css'

function Work() {
  return (
    <div className="projectsContainer">
      <div className="project">
        <img src="https://lh3.googleusercontent.com/8Pnb1X-LwLzydyVk4i9sOqx4uRe2w9bSAl5ZP6U-fPOKS02Rp9k4TwjYLpiU8Ycwy9XHhPtV5NWgxJoomjhfGh1gYk3ZursaaT65hwNd3C7ja-OaMuULTMK8ROfsqg-RCGFRsqxm=w2400" alt="Space Search" className="portfolioImages" />
        <h3>Space Search</h3>
        <p class="projectDescription">Browse through millions of NASA images.</p>
        <a target="_blank" rel="noreferrer" href="https://github.com/francisco-rosado-dev/SpaceSearch"><button type="button" className="portfolioLinks">GitHub</button></a>
        <a target="_blank" rel="noreferrer" href="https://space-search.netlify.app"><button type="button" className="portfolioLinks">Live Site</button></a>
      </div>
      <div className="project">
        <img src="https://lh3.googleusercontent.com/bOiUSfU4NPnIsFPoSXCiBHDZYBmV3kmc58BxJOy7iR4Sfvul4WZ8IkNsQcoDyVFlaLox-NSPfmFxOE2ymILaBxdMTxg6x_9YaQ1676K6EqJlOazLS5Z6Oy7MkOwmpMmWkPCKp-wT=w2400" alt="Human Coin" className="portfolioImages" />
        <h3>Human Coin</h3>
        <p class="projectDescription">Human Coin is a React application that introduces the innovative concepts of cryptocurrencies to manual labor. By tapping or clicking on the coin found in your wallet, you chip closer to finding a coin.</p>
        <a target="_blank" rel="noreferrer" href="https://github.com/francisco-rosado-dev/human-coin"><button type="button" className="portfolioLinks">GitHub</button></a>
        <a target="_blank" rel="noreferrer" href="https://human-coin.netlify.app/"><button type="button" className="portfolioLinks">Live Site</button></a>
      </div>
      <div className="project">
        <img src="https://lh3.googleusercontent.com/iUx1xIK84JJpJ_wC4CblBlUbMtjrYWCYiaQn4g8kaPL0AUM1_9kDu3qvBwGfKn6396Ipwcmni4cJhzaM6OEj-8ZC99YnHQUtnF2nOOjd-jBAqdyFlUVgHPAZ-b5tcJX_dKtEysl1=w2400" alt="YSFJ" className="portfolioImages" />
        <h3>YSFJ</h3>
        <p class="projectDescription">From the creators of the famous blog 'four-eyes', YSFJ is a streamlined virtual eyewear boutique. Don't lose sight of what matters most. Glasses for adventure.</p>
        <a target="_blank" rel="noreferrer" href="https://github.com/yeana-dev/YSFJ/tree/main"><button type="button" className="portfolioLinks">GitHub</button></a>
        <a target="_blank" rel="noreferrer" href="https://ysfj.netlify.app/"><button type="button" className="portfolioLinks">Live Site</button></a>
      </div>
      <div className="project">
        <img src="https://lh3.googleusercontent.com/9HMxjVmkGZSenYbFoE-tnr_-FOPvTUR-m1cpUX2tnf-4KMO1wzISL8uQWVuwHy-C8tuXWE80oD7OEqcvxDJWpdEepcCrgCCCPVunIUTjtTGV-ahMQcDoNV4vUAxk88Cv1m5sveOR=w2400" alt="musicphile" className="portfolioImages" />
        <h3>Musicphile</h3>
        <p class="projectDescription">Musicphile is a music sharing library. Share what you find with the world, and amuse yourself with arcane tunes brought to you by other music enthusiasts.</p>
        <a target="_blank" rel="noreferrer" href="https://github.com/francisco-rosado-dev/musicphile"><button type="button" className="portfolioLinks">GitHub</button></a>
        <a target="_blank" rel="noreferrer" href="https://musicphile-app.netlify.app/"><button type="button" className="portfolioLinks">Live Site</button></a>
      </div>
    </div>
  )
}

export default Work;