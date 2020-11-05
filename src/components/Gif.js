import React from 'react'

const Gif = ({id,title,images}) => {
    return (
        <div className="card">
            <img src={images.downsized_medium.url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default Gif
