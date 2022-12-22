import React, { useEffect } from 'react'
import moment from 'moment'
import hljs from 'highlight.js';

const PostDetails = ({ post }) => {

    useEffect(() => {
        hljs.highlightAll();
    });

    const getContentFragment = (index, text, obj, type) => {

        // Save all text
        let modifiedText = text;

        // Modify text if it is bold, italic, underlined, or a code snippet
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

            if (obj.code) {
                modifiedText = (<span key={index} className='bg-[#ededeb] rounded inline-block p-1 mx-1 -mb-1 leading-3 font-mono text-[12px] text-red-500'>{text}</span>)
            }

            if (obj.type === 'link') {
                console.log(obj)
                modifiedText = (
                    <a
                        key={index}
                        href={obj.href}
                        target={obj.openInNewTab ? '_blank' : '_self'}
                        className='border-b border-[#759dbd]/50 text-[#759dbd]'
                    >
                        {obj.children.map((item, i) => <React.Fragment key={i}>{item.text}</React.Fragment>)}
                    </a>
                );
            }
        }


        // Convert object to JSX by type
        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-medium mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8 leading-[1.52rem]">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-medium mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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
            case 'code-block':
                return <div key={index} className='px-4 pt-3 pb-6 rounded-lg bg-[#1a2b34]'><pre><code key={index} className='text-[13px]'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</code></pre></div>;
            default:
                return modifiedText;
        }
    };

    return (
        <div className='mb-20 '>
            <h1 className='pb-3 font-medium text-3xl'>{post.title}</h1>
            <span className='pb-10 text-gray-500 block'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
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