import React from 'react'

const Header = ({title}) => {
    const headerStyle = {
        backgroundColor: 'lightblue',
        padding: '10px'
    }
  return (
    <header style={headerStyle}>
        <h1>{title}</h1>
      
    </header>
  )
}

// Header.defaultProps = {
//     title: 'Groceries'
// }

export default Header
