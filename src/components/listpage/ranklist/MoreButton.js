import React from 'react';

const MoreButton = ({ onClick }) => {
  return (
    <button className="more-btn" onClick={onClick}>
      더보기
    </button>
  );
};

export default MoreButton;
