import React from 'react'

const Button = (props) => {
  return (
    <div>
        {/* <button onClick={props.clickFunc}>
          Hello World
        </button> */}
        <button type="button" className={'btn btn-' + props.color}>Button</button>
    </div>
  )
}

export default Button