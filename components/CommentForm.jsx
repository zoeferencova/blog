import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { submitComment, getComments } from '../services';

function CommentForm({ slug }) {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
    getComments(slug)
      .then((result) => setComments(result));
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name, email, comment, slug,
    };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then(() => {
        setShowSuccessMessage(true);
        commentEl.current.value = '';
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      });
  };

  return (
    <div className=''>
      <h3 className='text-xl mb-8 font-medium'>
        Comments (
        {comments.length}
        )
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className={`p-4 ${error ? 'border-red-500 border-2 border-opacity-30' : 'border-none'} outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700`}
          placeholder='What are your thoughts?'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <input
          type='text'
          ref={nameEl}
          className={`${error ? 'border-red-500 border-2 border-opacity-30' : 'border-none'} py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700`}
          placeholder='Name'
          name='name'
        />
        <input
          type='text'
          ref={emailEl}
          className={`${error ? 'border-red-500 border-2 border-opacity-30' : 'border-none'} py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700`}
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='flex flex-row items-center mt-2'>

          <label
            className='text-gray-500 cursor-pointer ml-2 text-sm tracking-normal'
            htmlFor='storeData'
          >
            <input
              ref={storeDataEl}
              type='checkbox'
              id='storeData'
              name='storeData'
              value='true'
              className='cursor-pointer mr-2'
            />
            Save email and name for the next time.

          </label>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between flex-wrap'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='mt-4 bg-gray-800 rounded-lg px-4 py-2 cursor-pointer text-white font-semibold text-base sm:text-rtsm tracking-wide'
        >
          Submit
        </button>
        {(showSuccessMessage || error)
          && (
            <div className={`mt-4 flex items-center rounded-md px-2 py-1 ${showSuccessMessage ? 'bg-green-100' : 'bg-red-100'}`}>
              <span className={`text-sm ${showSuccessMessage ? 'text-green-700 success-message' : 'text-red-700 error-message'}`}>
                {error ? 'All fields are required' : 'Comment submitted for review'}
              </span>
            </div>
          )}
      </div>
    </div>
  );
}

export default CommentForm;

CommentForm.defaultProps = {
  slug: '',
};

CommentForm.propTypes = {
  slug: PropTypes.string,
};
