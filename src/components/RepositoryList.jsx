import { useState } from 'react'
import RepositoryItem from './RepositoryItem'
import { Pagination } from '@mui/material'

const RepositoryList = ({ repositories }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const repositoriesPerPage = 10

  const totalRepositories = repositories.length
  const totalPages = Math.ceil(totalRepositories / repositoriesPerPage)

  const startIndex = (currentPage - 1) * repositoriesPerPage
  const endIndex = startIndex + repositoriesPerPage
  const currentRepositories = repositories.slice(startIndex, endIndex)

  const handleChangePage = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <div className='repository-list'>
      {currentRepositories.map((repository) => (
        <RepositoryItem key={repository.id} name={repository.name} description={repository.description} url={repository.html_url} />
      ))}
      <Pagination
        count={totalPages}
        variant="outlined"
        shape='rounded'
        page={currentPage}
        onChange={handleChangePage}
        className='pagination'
      />
    </div>
  )
}

export default RepositoryList