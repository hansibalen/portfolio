import React from 'react';

const Arrow = ({
  width,
  height,
  className,
}: {
  width: string;
  height: string;
  className: string;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      viewBox='0 0 24 24'
    >
      <polygon points='7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7' />
    </svg>
  );
};

export default Arrow;
