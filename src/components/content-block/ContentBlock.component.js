import React from 'react';
import style from './ContentBlock.module.scss'

const ContentBlock = ({title, addItem, count}) => {
  return (
    <div className={style.cover}>
      {count}
      <div className={style.wrap}>
        <h1 className={style.header}>{title}</h1>
        <button onClick={addItem}> </button>
        <p className={style.descr} >!!!Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов</p>
      </div>
    </div>
  )
}

export default ContentBlock;
