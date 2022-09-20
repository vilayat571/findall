import React from 'react';
import Text from './Text';

function Title({ text }) {
  return (
    <div className='w-full h-10 mb-4 flex justify-between capitalize items-center '>
      <Text text={text} />
    </div>
  )
}

export default React.memo(Title);
