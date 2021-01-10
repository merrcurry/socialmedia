import React, { useState } from 'react';
import s from './Pagination.module.css'

const Pagination = (props) => {

   // pagination
   let pagesCount = Math.ceil(props.totalUsers / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   // pagination portions
   let portionSize = 10
   let portionCount = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1)
   let leftBorder = (portionNumber - 1) * portionSize + 1
   let rightBorder = portionNumber * portionSize

   return (
      <div className={ s.pagination }>
         { portionNumber > 1 && <button onClick={ () => { setPortionNumber(1) } }>Начало</button> }
         { portionNumber > 1 && <button onClick={ () => { setPortionNumber(portionNumber - 1) } }>Назад</button> }
         {
            pages
               .filter(p => p >= leftBorder && p <= rightBorder)
               .map(p => {
               return <span className={ props.currentPage === p ? s.selected_page : s.pagination_page }
                            onClick={ () => {
                               props.onPaginationClick(p)
                            } }
                            key={ p }
               >{ p }</span>
            })
         }
         { portionNumber < portionCount && <button onClick={ () => { setPortionNumber(portionNumber + 1) } }>Вперед</button> }
         { portionNumber < portionCount && <button onClick={ () => { setPortionNumber(portionNumber = portionCount ) } }>Конец</button> }
      </div>
   )
}

export default Pagination;
