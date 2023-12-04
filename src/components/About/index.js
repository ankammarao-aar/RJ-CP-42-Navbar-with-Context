// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <div className="about-container dark-about-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-img"
                />
                <h1 className="about-heading dark-about-head">About</h1>
              </div>
            ) : (
              <div className="about-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-img"
                />
                <h1 className="about-heading">About</h1>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
