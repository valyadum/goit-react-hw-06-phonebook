import React from 'react'
import { useDispatch} from 'react-redux';
import { filterContacts } from 'store/filterSlice';

import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        
        <input
          className={css.filter}
          placeholder='Find contacts by name'
          type="text"
          name="searching"
          onChange={(event)=>{dispatch(filterContacts(event.currentTarget.value))}}
        />
      </label>
    </div>
  );
};

export default Filter