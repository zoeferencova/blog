import React, { useRef, useState, useEffect } from 'react'

import { submitComment, getComments } from '../services';

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()
  const [comments, setComments] = useState([]);


  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
    getComments(slug)
      .then(result => setComments(result))
  }, [])

  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return;
    }

    const commentObj = { name, email, comment, slug }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then(res => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
  }

  return (
    <div className=''>
      <h3 className='text-xl mb-8 font-medium'>Comments ({comments.length})</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 border-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='What are your thoughts?'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <input
          type='text' ref={nameEl}
          className='border-none py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input
          type='text' ref={emailEl}
          className='border-none py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='flex flex-row items-center mt-2'>
          <input
            ref={storeDataEl} type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
            className='cursor-pointer'
          />
          <label
            className='text-gray-500 cursor-pointer ml-2 text-sm tracking-normal'
            htmlFor='storeData'
          >
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='bg-gray-800 rounded-lg px-4 py-2 cursor-pointer text-white font-semibold text-sm tracking-wide'
        >
          Submit
        </button>
        {showSuccessMessage || error &&
          <span className={`float-right mt-2 text-green-300`}>
            {error ? 'All fields are required' : 'Comment submitted for review'}
          </span>
        }
      </div>
    </div>
  )
}

export default CommentForm