import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./Filter.module.scss";
// import { filterContactAction } from "../../redux/actions";
import { filterContact } from "../../redux/filter/filter-slice";

const Filter = () => {
  const dispatch = useDispatch();

  const filterId = nanoid();

  function handleFilter({ target }) {
    dispatch(filterContact(target.value));
  }

  return (
    <div className={styles.thumb}>
      <label htmlFor={filterId} className={styles.label}>
        Find contacts by name:
      </label>
      <input
        id={filterId}
        className={styles.field}
        onChange={handleFilter}
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Filter"
      ></input>
    </div>
  );
};

export default Filter;
