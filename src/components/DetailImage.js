import React from 'react';


const DetailImage = (props) => {
    const { image } = props;
    return (
        <div className="detail-image" style={{backgroundImage: `url(${image})`}}></div>
    )
}


export default DetailImage;