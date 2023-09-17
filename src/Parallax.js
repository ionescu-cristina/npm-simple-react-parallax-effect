import React from 'react';

function Parallax({ imageUrl, minHeight = '500px', title, description }) {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    minHeight: minHeight,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center'
  };

  return (
    <div style={styles}>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default Parallax;
