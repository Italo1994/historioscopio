import React from "react"
import LinkButton from './link-button'

const explodeButton = onButtonClick => (button, index) => {
  const {name, key=index} = button
  const handleClick = () => onButtonClick(button)
  return <LinkButton key={key} name={name} onClick={handleClick} />
}

const ButtonList = ({ onButtonClick, buttons, ...props }) => (
    <div {...props}>{ buttons.map(explodeButton(onButtonClick)) }</div>
)

export default ButtonList
