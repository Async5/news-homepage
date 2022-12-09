import { useState } from 'react'

import Logo from '../assets/images/logo.svg'
import MenuIcon from '../assets/images/icon-menu.svg'
import MenuIconClose from '../assets/images/icon-menu-close.svg'

const menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false)

  const toggleMenu = () => {
    document.body.style.overflow = !menuStatus ? 'hidden' : 'unset'
    setMenuStatus((prevState) => {
      return !prevState
    })
  }

  return (
    <header className="">
      <nav className="flex justify-between items-center h-20 md:h-44">
        <img className="w-11 md:w-14" src={Logo} alt="logo" />

        <img
          className="md:hidden md:cursor-pointer z-10"
          onClick={toggleMenu}
          src={menuStatus ? MenuIconClose : MenuIcon}
          alt="menu"
        />

        {menuStatus && (
          <div
            onClick={toggleMenu}
            className="bg-neutral-veryDarkBlue opacity-40 absolute top-0 bottom-0 left-0 right-0"
          />
        )}

        {/* Mobile menu */}
        {menuStatus && (
          <ul className="md:hidden flex text-lg pt-36 p-6 flex-col absolute right-0 top-0 bottom-0 bg-neutral-offWhite w-3/4 text-neutral-veryDarkBlue">
            {menuItems.map((item, index, list) => {
              if (index + 1 === list.length) {
                return (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary-softRed transition-all">
                    {item}
                  </li>
                )
              }
              return (
                <li
                  className="mb-6 cursor-pointer hover:text-primary-softRed transition-all"
                  key={index}>
                  {item}
                </li>
              )
            })}
          </ul>
        )}

        {/* Desktop menu */}
        <ul className="hidden md:flex text-neutral-darkGrayishBlue">
          {menuItems.map((item, index, list) => {
            if (index + 1 === list.length) {
              return (
                <li
                  key={index}
                  className="md:cursor-pointer hover:text-primary-softRed transition-all">
                  {item}
                </li>
              )
            }
            return (
              <li
                className="mr-10 md:cursor-pointer hover:text-primary-softRed transition-all"
                key={index}>
                {item}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
