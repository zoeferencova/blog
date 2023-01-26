import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ messageTitle, messageSubtitle }) {
    return (
        <div className='max-w-lg p-6 my-10 mx-auto text-center'>
            <h2 className='big-error-message text-subtitle sm:text-2xl font-medium'>{messageTitle}</h2>
            <p className='mt-3'>{messageSubtitle}</p>
        </div>
    );
}

export default ErrorMessage;

ErrorMessage.defaultProps = {
    messageTitle: '',
    messageSubtitle: '',
};

ErrorMessage.propTypes = {
    messageTitle: PropTypes.string,
    messageSubtitle: PropTypes.string,
};
