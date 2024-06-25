import React from 'react'

const PriceElement = ({ price }) => {
    const dollars = Math.floor(price);
    const cents = ((price - Math.floor(price)).toFixed(2)*100).toFixed(0) ;

    return (
      <>
        <p>{dollars}</p>
        <p className="cents">{cents}</p>
      </>
    );
  };

export default PriceElement