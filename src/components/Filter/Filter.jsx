import { React } from 'react';
import style from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        Find contacts by name:
        <input
          className={style.input}
          onChange={filterHandler}
          type="text"
          name="filter"
          id="filter"
          value={useSelector(selectFilter)}
          disabled={useSelector(selectContacts).length === 0}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
