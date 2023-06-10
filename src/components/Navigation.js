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
    <ul className="flex flex-row  justify-between font-bold p-5">
        <li className="text-left">
        <a className={"hover:text-stone-500"} href="#" onClick={handleHomeClick}>CarboPrint.ai</a>
        </li>
        <li className="space-x-4">
            <a className={"hover:text-stone-500"} href="#" onClick={handleRecommendationClick}>Recommendation</a>    
            <a className={"hover:text-stone-500"} href="#" onClick={handleEstimationClick}>Estimation</a>
            <a className={"hover:text-stone-500"} href="#" onClick={handleAboutClick}>About</a>
        </li>
    </ul>
    </nav>
    
  );
};

export default Navigation;