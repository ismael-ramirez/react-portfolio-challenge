import React from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume' ]
  
    return (
        <header>
            <li>
                    <h1>Ismael Ramirez</h1>
                </li>
            <nav>
                {tabs.map(tab => (
                    <li key={tab}>
                        <a
                        href={'#' + tab}
                        onClick={() => props.setCurrentTab(tab)}
                        className=".."
                        >
                            {tab}
                        </a>
                    </li>
                ))}
                
            </nav>
        </header>
    )
}

export default Nav;