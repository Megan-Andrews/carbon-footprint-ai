import React from 'react';
import Pages from '../contexts/Pages.js';
import Context from '../contexts/Context.js';
import { useContext } from 'react';

const Navigation = () => {
    // Context: user, opened module, page, toast
    const { page, setPage } = useContext(Context)

    const checkIfActive = (pageName) => {
        if (page === pageName) {
            return ' active'
        }

        return ''
    }

    /**
     * Handles About page being opened.
     * @param {*} e 
     */
        const handleAboutClick = (e) => {
            e.preventDefault()
            setPage(Pages.ABOUT)
        }

    /**
     * Handles Home page being opened.
     * @param {*} e 
     */
    const handleHomeClick = (e) => {
        e.preventDefault()
        setPage(Pages.HOME)
    }

    /**
     * Handles Home page being opened.
     * @param {*} e 
     */
    const handleReccomendationClick = (e) => {
        e.preventDefault()
        setPage(Pages.RECCOMENDATION)
    }

  return (
    <nav>
        <ul className="flex layout-nav-main-list" id="navbarText">
            <li className="layout-nav-main-item">
                <a className={"nav-link" + checkIfActive(Pages.HOME)} href="#" onClick={handleHomeClick}>Home</a>
            </li>
            <li className="layout-nav-main-item">
                <a className={"nav-link" + checkIfActive(Pages.ABOUT)} href="#" onClick={handleAboutClick}>About</a>
            </li>
            <li className="layout-nav-main-item">
                <a className={"nav-link" + checkIfActive(Pages.RECCOMENDATION)} href="#" onClick={handleReccomendationClick}>Reccomendation</a>
            </li>
           
        </ul>
    </nav>
    
  );
};

export default Navigation;