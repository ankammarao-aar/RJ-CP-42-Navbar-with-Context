// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <div className="not-fount-container dark-not-fount-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-img"
                />
                <h1 className="not-found-heading dark-not-head">
                  Lost Your Way?
                </h1>
                <p className="not-found-para dark-not-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="not-fount-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-img"
                />
                <h1 className="not-found-heading">Lost Your Way?</h1>
                <p className="not-found-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
