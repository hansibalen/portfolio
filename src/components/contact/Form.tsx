import React from 'react';
import { motion } from 'framer-motion';
import { formArray } from '@src/utils/Content';
import Line from '@src/components/base/Line';
import { hoverProperty } from '../anim/Values';

const Form = () => {
  return (
    <>
      <form className='col' name='contact' method='POST'>
        <input type='hidden' name='form-name' value='contact' />
        {formArray.map((input) => (
          <div key={input.type}>
            <label className='description'>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.hold}
                required
              />
            </label>
            <Line />
          </div>
        ))}
        <div>
          <label className='description'>
            <textarea name='message' placeholder='Message' required />
          </label>
          <Line />
        </div>
        <motion.button
          whileHover={{ backgroundColor: '#fcefdf', color: '#3e3b36' }}
          transition={hoverProperty}
          whileTap={{ scale: '0.9' }}
          className='description'
          type='submit'
        >
          Send
        </motion.button>
      </form>
    </>
  );
};

export default Form;
