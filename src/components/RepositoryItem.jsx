

const RepositoryItem = ({ name, description, url }) => {
  return (
    <div className="repository-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>{url}</a>
    </div>
  )
}

export default RepositoryItem