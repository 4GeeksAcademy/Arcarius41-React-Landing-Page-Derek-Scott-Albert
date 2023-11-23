import React from 'react';

export default function Cards({ title, text, imageUrl, buttonUrl, buttonText }) {
  return (
    <div>
      <div className="card mt-4" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={buttonUrl} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
}
