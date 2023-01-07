import React from 'react'
import '../blog.css/create-blog.css'
export default function CreatePost() {
  return (
    <div className='create-post-container'>
      <div className='img-parent'>
        <img src="https://images.unsplash.com/photo-1553044020-8c90843adf96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdCUyMGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      </div>
      <form>
        <input type='file' />
        <input type='text' placeholder='Title'/>
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
        <button>Create Post</button>
      </form>
    </div>
  )
}
