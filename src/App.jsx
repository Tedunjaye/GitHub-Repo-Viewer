import { useState } from "react";
import axios from "axios";
import "./App.css";
import UserSearch from "./components/UserSearch";
import RepositoryList from "./components/RepositoryList";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  const fetchRepositories = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: import.meta.env,
          },
        }
      );
      setRepositories(response.data);
      setError("");
      setUsername(username)
      console.log(response.data)
    } catch (err) {
      setError("User not found or an error occurred.");
      setRepositories([]);
      setUsername('')
    }
  };

  return (
    <div>
      <div className='container'>
        <h1 className="header">GitHub Repository Viewer</h1>
      </div>
      <div className="card">
        <UserSearch onSearch={fetchRepositories} />

        {error && <p className="error-message">{error}</p>}

        {username && <div className="result">
          Showing Result for : <span style={{color: 'rgb(71, 84, 143)'}}>{username.toUpperCase()}</span> ({repositories.length} Repositories)
        </div>}

        <RepositoryList repositories={repositories} />
      </div>
    </div>
  );
}

export default App;
