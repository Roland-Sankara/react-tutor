import React from 'react'

const Header = (props) => {
  return (
    <div className='header-nav'>
        {props.children}
    </div>
  )
}

export default Header;