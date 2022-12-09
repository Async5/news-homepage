import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="hover:bg-neutral-veryDarkBlue transition-all my-6 lg:my-0 lg:self-start px-11 py-3 text-body tracking-wide font-bold uppercase text-neutral-offWhite bg-primary-softRed">
      {text}
    </button>
  )
}

export default Button
