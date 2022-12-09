import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="my-6 px-11 py-3 text-body tracking-wide font-bold uppercase text-neutral-offWhite bg-primary-softRed">
      {text}
    </button>
  )
}

export default Button
