// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-container dark-nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="nav-website-logo"
              />
              <ul className="nav-list-container">
                <Link to="/" className="link">
                  <li className="nav-list-item dark-nav-item">Home</li>
                </Link>
                <Link to="about" className="link">
                  <li className="nav-list-item dark-nav-item">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="button"
                data-testid="theme"
                onClick={onClickTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="nav-theme-img"
                />
              </button>
            </nav>
          ) : (
            <>
              <nav className="nav-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="nav-website-logo"
                />
                <ul className="nav-list-container">
                  <Link to="/" className="link">
                    <li className="nav-list-item">Home</li>
                  </Link>
                  <Link to="about" className="link">
                    <li className="nav-list-item">About</li>
                  </Link>
                </ul>
                <button
                  type="button"
                  className="button"
                  data-testid="theme"
                  onClick={onClickTheme}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="nav-theme-img"
                  />
                </button>
              </nav>
              <hr className="line" />
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
