
import { Link, Routes, Route } from 'react-router-dom'


function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our cinema!</p>
      <Link to='/films'>Go to Film Library</Link>
    </div>
  )
}

export default HomePage