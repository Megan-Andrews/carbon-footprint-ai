import React from 'react';
import Pages from '../contexts/Pages.js';
import Context from '../contexts/Context.js';
import { useContext } from 'react';
import '../styles/Navigation.css'


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
     * Handles Recommendation page being opened.
     * @param {*} e 
     */
    const handleRecommendationClick = (e) => {
        e.preventDefault()
        setPage(Pages.RECOMMENDATION)
    }

     /**
     * Handles Estimation page being opened.
     * @param {*} e 
     */
     const handleEstimationClick = (e) => {
        e.preventDefault()
        setPage(Pages.ESTIMATION)
    }

  return (
    <nav>
    <ul className="flex layout-nav-main-list uppercase leading-none" id="navbarText">
        <li className="layout-nav-main-item align-left">
        <a className={"nav-link " + checkIfActive(Pages.HOME)} href="#" onClick={handleHomeClick}>Home</a>
        </li>
        <li className="layout-nav-main-item align-right">
        <a className={"nav-link" + checkIfActive(Pages.RECOMMENDATION)} href="#" onClick={handleRecommendationClick}>Recommendation</a>
        </li>
        <li className="layout-nav-main-item align-right">
        <a className={"nav-link" + checkIfActive(Pages.ESTIMATION)} href="#" onClick={handleEstimationClick}>Estimation</a>
        </li>
        <li className="layout-nav-main-item align-right">
        <a className={"nav-link" + checkIfActive(Pages.ABOUT)} href="#" onClick={handleAboutClick}>About</a>
        </li>
    </ul>
    </nav>
    
  );
};

export default Navigation;