import React from 'react'
import history from './history'

const Link = props => {
  const handleClick = event => {
    const isNewTab = event.metaKey || event.ctrlKey
    const isExternalLink = props.to.startsWith('http')

    if (!isNewTab && !isExternalLink) {
      event.preventDefault()
      history.push(props.to)
    }
  }

  return (
    <a href={props.to} onClick={handleClick}>
      {props.children}
    </a>
  )
}

export default Link
