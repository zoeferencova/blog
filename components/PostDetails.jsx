import React from 'react'
import moment from 'moment'

const PostDetails = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {

        // Save all text
        let modifiedText = text;

        // Modify text if it is bold, italic, or underlined
        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        // Convert object to JSX by type
        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className='mb-20 '>
            <h1 className='text-3 xl pb-4 font-medium sm:text-4xl'>{post.title}</h1>
            <span className='pb-10 block'>{moment(post.createdAt).format('MMM Do YYYY')}</span>
            <div className='flex flex-row justify-between'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='w-[47%] rounded-lg'
                />
                <img
                    src={post.secondaryImage.url}
                    alt={post.title}
                    className='w-[47%] rounded-lg'
                />
            </div>
            <div className='mt-10'>
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </div>
        </div>
    )
}

export default PostDetails