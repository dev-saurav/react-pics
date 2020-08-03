import React from 'react';
import './ImageList.css';

import ImageCard from './ImageCard';

export default function ImageList({ images }) {
    const imagesList = images.map(img => <ImageCard key={img.id} img={img} />)
    return (
        <div className='image-list'>
            {imagesList}
        </div>
    )
}
