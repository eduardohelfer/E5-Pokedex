import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

  const pagesPerBlock = 7
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blocksLength = Math.ceil(pagesLength / pagesPerBlock)

  const firstPage = (currentBlock - 1) * pagesPerBlock + 1
  const lastPage = Math.min(currentBlock * pagesPerBlock, pagesLength)

  const arrPages = []
  for (let i = firstPage; i <= lastPage; i++) {
    arrPages.push(i)
  }

  const handleRewind = () => {
    if (currentBlock >= 2) {
      setPage(Math.ceil((page - pagesPerBlock) / pagesPerBlock) * pagesPerBlock)
      // setPage(page - pagesPerBlock)
    }
  }

  const handleForward = () => {
    if (currentBlock < blocksLength) {
      if (Math.floor((page + pagesPerBlock - 0.1) / pagesPerBlock) * pagesPerBlock + 1 <= pagesLength) {
        setPage(Math.floor((page + pagesPerBlock - 0.1) / pagesPerBlock) * pagesPerBlock + 1)
      }
    }
  }

  const handleToPage = e => {
    if (page != +e.target.innerHTML) {
      setPage(+e.target.innerHTML)
    }
  }

  const handleNext = () => {
    if (page < pagesLength) setPage(page + 1)
  }


  const handlePrevious = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleLastOne = () => {
    if (page < pagesLength) setPage(page = pagesLength)
  }


  const handleFirstOne = () => {
    if (page > 1) setPage(page = 1)
  }

  return (
    <div className='pagination'>
      <div className='pagination__btn-group'>
        <div onClick={handleFirstOne} className={`pagination__first${page === 1 ? ' pagination__active' : ''}`}>▯◁</div>
        <div onClick={handleRewind} className={`pagination__rewind${currentBlock === 1 ? ' pagination__active' : ''}`}>◀◀</div>
        <div onClick={handlePrevious} className={`pagination__previous${page === 1 ? ' pagination__active' : ''}`}>◀</div>
      </div>
      <ul className='pagination__numbers' style={{ width: `${43 * pagesPerBlock}px` }}>
        {
          arrPages.map(num => (
            <li onClick={handleToPage} className={`pagination__num${num === page ? ' pagination__active' : ''}`} key={num}>
              {num}
            </li>
          ))
        }
      </ul>
      <div className='pagination__btn-group'>
        <div onClick={handleNext} className={`pagination__previous${page === pagesLength ? ' pagination__active' : ''}`}>▶</div>
        <div onClick={handleForward} className={`pagination__forward${currentBlock === blocksLength ? ' pagination__active' : ''}`}>▶▶</div>
        <div onClick={handleLastOne} className={`pagination__last ${page === pagesLength ? ' pagination__active' : ''}`}>▷▯</div>
      </div>
    </div >

  )
}

export default Pagination