import './about.css'

function About() {
  return (
    <div>
      <div className="about">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGu4GDrkMtsAw/profile-displayphoto-shrink_800_800/0/1633041161316?e=1640217600&v=beta&t=7sTDe-zK45sQg2-DxzvgjtTWFr-jzuLkTPbTsuWCsvA" className="profileImage" alt="" />
        <p className="description">From working in kitchens across NYC to coding web development projects, I have always been focused on finding innovative and creative ways to solve problems. As a software engineer, I look forward to bringing my open mindedness, adaptability, and willingness to accept any challenge to a future team focused on making an impact in the industry. </p>
      </div>
      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/19AfCHOVRtjMZuLOzs_lsmLBO5MdS8nXY/view?usp=sharing"><button type="button" className="resume">Resume</button></a>

    </div >
  )
}

export default About;


