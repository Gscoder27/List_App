import React from 'react'

const Footer = ({lenght}) => {
    const today = new Date();
  return (
    <footer>
      <span className="footer-left">Copyright  &copy; {today.getFullYear()}</span>
      <span className="footer-right">{lenght} List {lenght > 1 ? 'items' : 'item'}</span>
    </footer>
  )
}

export default Footer
