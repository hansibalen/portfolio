import React from 'react';

const Header = ({
  headTitle,
  headSub,
}: {
  headTitle: string;
  headSub: string;
}) => {
  return (
    <>
      <div className='header col'>
        <h1>{headTitle}</h1>
        <p>{headSub}</p>
      </div>
    </>
  );
};

export default Header;
