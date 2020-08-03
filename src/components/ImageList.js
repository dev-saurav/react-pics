import React from 'react'

export default function ImageList({ images }) {
    console.log(images)
    const imagesList = images.map((image) => <img key={image.id} src={image.urls.regular} alt={image.urls.description} />)
    return (
        <div>
            {imagesList}
        </div>
    )
}
