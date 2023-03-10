import React from 'react';
import './NavBar.css';
export default function NavBar() {
    return (
        <>
            <div className='header nav-header'>
                <h2>CMS+</h2>
            </div>
            <div className='Dashboard'>
                <div className='Collection'>
                    <h3>COLLECTION TYPES </h3>

                </div>
                <div className='Content-builder'>
                    <h3>CONTENT TYPE BUILDER </h3>
                </div>
            </div>
        </>
    );
}