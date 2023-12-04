// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <div className="home-container dark-home-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-img"
                />
                <h1 className="home-heading dark-home-head">Home</h1>
              </div>
            ) : (
              <div className="home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-img"
                />
                <h1 className="home-heading">Home</h1>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
