import React, { useState } from 'react'

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title)
    setTitle('')
  }
  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} className='input' value={title} />
        <button className='button'>Add</button>
      </form>
    </div>
  )
}

export default BookCreate



