import React from 'react'
import{FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item'>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)} 
            />
            <label style={{textDecoration: item.checked ? 'line-through' : 'none'}}>
                {item.item}
            </label>
            <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0" 
                ariel-lable={`Delete ${item.item}`}
                className="delete"
            />
        </li>
  )
}

export default LineItem
