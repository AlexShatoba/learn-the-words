import React from 'react';
import style from './ContentBlock.module.scss'

const ContentBlock = ({ content, addItem, li, count }) => {
  return (
    <div className={style.cover}>
      {li.map(el =>
        <ul>
          <li>{el}</li>
        </ul>
      )}
      <button style={{width: '50px', height: '20px'}} onClick={addItem}></button>
    </div>
  )
}

export default ContentBlock;
