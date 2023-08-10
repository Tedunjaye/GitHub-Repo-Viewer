import { useState } from 'react'


const UserSearch = ({ onSearch }) => {
  const [username, setUsername] = useState('')
  
  const handleSearch = () => {
    onSearch(username)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='user-search-container'>
      <input 
        className='input-field'
        type="text"
        placeholder='Enter GitHub username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default UserSearch