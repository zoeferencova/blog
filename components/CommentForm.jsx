import React, { useRef, useState, useEffect } from 'react'


const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = commentEl.current
    const { value: email } = commentEl.current

    if (!comment || !name || !email) {
      setError(true)
      return;
    }

    const commentObj = {
      name, email, comment, slug
    }


  }

  return (
    <div className=''>
      <h3 className='text-xl mb-8 font-medium'>Comments</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <input
          type='text' ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input
          type='text' ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required.</p>}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='transition duration-500 ease bg-gray-100 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-300'
        >
          Submit
        </button>
        {showSuccessMessage && <span className='float-right mt-2 text-green-300'>Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentForm