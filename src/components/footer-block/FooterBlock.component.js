import React from 'react';
import style from './FooterBlock.module.scss'

const FooterBlock = ({title, addItem}) => {
  return (
    <div className={style.cover}>
      {style.cover}
      <div className={style.wrap}>
        <h1 className={style.header}>{title}</h1>
        <button onClick={addItem}> </button>
        <p className={style.descr} >!!!Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов</p>
      </div>
    </div>
  )
}

export default FooterBlock;
