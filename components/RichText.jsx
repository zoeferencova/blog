import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import { Carousel, Card } from 'flowbite-react';

function RichText({ rawText }) {
    useEffect(() => {
        hljs.highlightAll();
    });

    const images = [];

    const getContentFragment = (index, text, obj, type, className) => {
        if (className === 'image-carousel') {
            if (type === 'image') {
                images.push({ img: obj, text: '' });
            } else {
                images[images.length - 1].text = obj;
            }
            return;
        }

        if (className === 'carousel-end') {
            return createImageCarousel(images);
        }

        // Save all text
        let formattedItem = text;

        // Modify text if it is bold, italic, underlined, link, or a code snippet
        if (obj) {
            if (obj.bold) formattedItem = (<b key={index}>{text}</b>);
            if (obj.italic) formattedItem = (<em key={index}>{text}</em>);
            if (obj.underline) formattedItem = (<u key={index}>{text}</u>);
            if (obj.code) formattedItem = (<span key={index} className='bg-[#ededeb] rounded inline-block px-2 mx-1 font-mono text-code leading-[1.5rem] text-red-500 wrap'>{text}</span>);
            if (obj.type === 'link') {
                formattedItem = (
                    <a key={index} href={obj.href} target='_blank' className={`${className} border-b border-[#759dbd]/50 text-[#759dbd]`} rel='noreferrer'>
                        {obj.children.map((item) => item.text)}
                    </a>
                );
            }
        }

        // Convert object to JSX by type
        if (type === 'heading-three') formattedItem = (<h3 key={index} className={`${className} text-[1.7rem] font-medium pt-14 sm:pt-16`}>{formattedItem}</h3>);
        if (type === 'heading-four') formattedItem = (<h4 key={index} className={`${className} text-posth4 font-medium pt-12 sm:pt-14`}>{formattedItem}</h4>);
        if (type === 'paragraph') formattedItem = (<p key={index} className={`${className} text-base sm:text-rtbase mt-4 sm:mt-6 leading-relaxed sm:leading-rt`}>{formattedItem}</p>);
        if (type === 'image') formattedItem = (<img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} className={`${className} mt-12`} />);

        if (type === 'code-block') {
            formattedItem = (
                <div key={index} className={`${className} px-5 py-4 mt-10 rounded-lg bg-[#1a2b34] codeblock`}>
                    <pre>
                        <code key={index} className={`${className} text-codeblock`}>{formattedItem.map((item) => <React.Fragment key={item}>{item}</React.Fragment>)}</code>
                    </pre>
                </div>
            );
        }

        if (type === 'block-quote') {
            const splitText = text[0].split(/\s*[\[\]]\s*/).filter(Boolean);
            formattedItem = (
                <Card key={index} className='mt-5 hover:bg-white hover:cursor-auto'>
                    <h5 className='text-lg sm:text-xl font-serif text-gray-900 dark:text-white'>
                        {splitText[0]}
                    </h5>
                    <p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
                        {splitText[1]}
                    </p>
                </Card>
            );
        }

        if (type === 'bulleted-list') {
            formattedItem = (
                <ul key={index} className='list-disc ml-6 sm:ml-10 pt-3 sm:pt-6'>
                    {obj.children.map((bulletPoint, index) => (
                        <li key={index} className='text-base sm:text-rtbase pl-3 mb-3 sm:mb-3'>{bulletPoint.children[0].children.map((item, index) => getContentFragment(index, item.text, item))}</li>
                    ))}
                </ul>
            );
        }

        return formattedItem;
    };

    const createImageCarousel = (imageObjects) => (
        <div key='carousel' className='h-[90%] max-[450px]:mt-[-20px] max-[450px]:mb-0 mb-10 pt-4'>
            <Carousel slide={false} indicators={false} id='carousel'>
                {imageObjects.map((image) => (
                    <div key={image.text} className='relative bg-transparent h-full py-4 flex justify-center items-center flex-col overflow-visible'>
                        <div>
                            <img src={image.img.src} className=' max-h-full w-full' alt='...' />
                            <p className='text-xs mt-2'>{image.text.children.map((child, index) => getContentFragment(index, child.text, child))}</p>
                        </div>

                    </div>
                ))}
            </Carousel>
        </div>
    );

    const renderText = (textItems) => {
        const textChildren = [...textItems.content.raw.children];
        textChildren.map((item, index) => {
            if (item.type === 'class') {
                item.children.forEach((child) => {
                    child.className = item.className;
                });
                textChildren.splice(index, 1, item.children);
            }
            return textChildren;
        });

        return textChildren.flat().map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type, typeObj.className);
        });
    };

    return (
        <div className='mb-20'>
            {renderText(rawText)}
        </div>
    );
}

export default RichText;

RichText.defaultProps = {
    rawText: {},
};

RichText.propTypes = {
    rawText: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};
