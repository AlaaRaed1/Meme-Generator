import React from 'react'

function Header() {
    return (
        <header className='header'>
            
            <img src='./trollface.png'  alt='trollface' className='header--image'/>
            <h1 className='header--title'>Meme Generator</h1>
            <h3 className='header--project'>React Course - Project 3</h3>
            
        </header>

    )
}

export default Header;