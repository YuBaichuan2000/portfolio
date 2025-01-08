import React from 'react';
import Navlink from './Navlink';

const MenuOverlay = ( {links} ) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                links.map((link, idx) => (
                    <li key={idx}>
                        <Navlink href={link.path} title={link.title}></Navlink>
                    </li>
                    
                ))
            }
        </ul>
    )
}

export default MenuOverlay;