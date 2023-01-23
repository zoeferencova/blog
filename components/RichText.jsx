import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import { Carousel, Card } from 'flowbite-react';

const RichText = ({ rawText }) => {

    useEffect(() => {
        hljs.highlightAll();
    });

    const images = []

    const getContentFragment = (index, text, obj, type, className) => {
        if (className === 'image-carousel') {
            images.push(obj)
            return
        }

        if (className === 'carousel-end') {
            return createImageCarousel(images)
        }

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
                modifiedText = (<span key={index} className='bg-[#ededeb] rounded inline-block p-1 mx-1 leading-3 font-mono text-[12px] text-red-500'>{text}</span>)
            }

            if (obj.type === 'link') {
                modifiedText = (
                    <a
                        key={index}
                        href={obj.href}
                        target={obj.openInNewTab ? '_blank' : '_self'}
                        className={`${className} border-b border-[#759dbd]/50 text-[#759dbd]`}
                    >
                        {obj.children.map((item, i) => <React.Fragment key={i}>{item.text}</React.Fragment>)}
                    </a>
                );
            }
        }


        // Convert object to JSX by type
        switch (type) {
            case 'heading-three':
                return <h3 key={index} className={`${className} text-2xl font-medium mb-6 pt-10`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className={`${className} text-[17px] mb-6 leading-[1.64rem]`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className={`${className} text-2xl font-medium pt-4 mb-4`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                        className={`${className}`}
                    />
                );
            case 'code-block':
                return <div key={index} className={`${className} px-4 pt-3 pb-5 mt-10 rounded-lg bg-[#1a2b34]`}><pre><code key={index} className='text-[13px] overflow-scroll'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</code></pre></div>;
            case 'block-quote':
                const splitText = text[0].split(/\s*[\[\]]\s*/).filter(Boolean);
                return (
                    <Card href="#" className='mb-5 hover:bg-white hover:cursor-auto'>
                        <h5 className="text-xl font-serif text-gray-900 dark:text-white">
                            {splitText[0]}
                        </h5>
                        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            {splitText[1]}
                        </p>
                    </Card>
                )
            default:
                return modifiedText;
        }
    };

    const createImageCarousel = (images) => {
        return (<div className="h-[420px] md:h-[480px] flex items-top mb-10">
            <Carousel>
                {images.filter(img => img.type === 'image').map(img => <img src={img.src} alt="..." />)}
            </Carousel>
        </div>)
    }

    const renderText = (textItems) => {
        const textChildren = [...textItems.content.raw.children];
        textChildren.map((item, index) => {
            if (item.type === 'class') {
                item.children.forEach((child) => {
                    child.className = item.className
                })
                textChildren.splice(index, 1, item.children)
            }
        })

        return textChildren.flat().map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
            return getContentFragment(index, children, typeObj, typeObj.type, typeObj.className)
        })
    }

    return (
        <div className='mb-20'>
            {renderText(rawText)}
        </div>
    )
}

export default RichText