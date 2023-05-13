import React, { useEffect } from 'react'

export default function Button({ type, classes, children, clickHandler }) {

    const buttonColors = {
        'normal': 'shadow-button bg-bg-key-orange',
        'blue': 'shadow-button-2 bg-bg-key-blue text-neutral-white',
        'red': 'shadow-button-3 bg-bg-key-red text-neutral-white',
    }
  return (
    <button onClick={e => clickHandler(e.target.innerHTML)} className={`rounded-md ${classes} ${buttonColors[type]}`}>{children}</button>
  )

}
