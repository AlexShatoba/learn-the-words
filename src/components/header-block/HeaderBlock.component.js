import React, {Component} from 'react';
import {Cover,
  wrap,
  header,
  descr} from './HeaderBlock.module.css'

const HeaderBlock = ({title}) => {
  console.log('###', Cover)
  return (
    <div className={Cover}>
      {Cover}
      <div className={wrap}>
        <h1 className={header}>{title}</h1>
        <p className={descr}>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов</p>
      </div>
    </div>
  )
}

export default HeaderBlock;
