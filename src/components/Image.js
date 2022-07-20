import React, { Component } from 'react';

const Image = () =>{
    
    const styles= {
        width: '300px',
        margin: '1em auto'
    }
    return (
        <div style={styles}>
            <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/4d/d8/der-berliner-fernsehturm.jpg?w=1200&h=1200&s=1' width='100%' alt='Imagen Increible'/>
        </div>
    )
}

export default Image;