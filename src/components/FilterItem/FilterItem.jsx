import React from 'react';
import styles from './FilterItem.module.css';

const Filter = ({ filter, onChange, onToggleSearchByPhone, searchByPhone }) => {
  return (
    <div className={styles.filterForm}>
       <label className={styles.filterNumberSearch}>
        <input
          type="checkbox"
          checked={searchByPhone}
          onChange={onToggleSearchByPhone}
        />Пошук за номером телефону</label>
        <input
        className={styles.filterFormInput}
        type="text"
        name="filter"
        placeholder="Пошук за іменем/прізвищем"
        value={filter}
        onChange={onChange}
        hidden={searchByPhone}
      />
      <input
        className={styles.filterFormInput}
        type="text"
        name="filterPhone"
        placeholder="Пошук телефону"
        value={filter}
        onChange={onChange}
        hidden={!searchByPhone}
      />
    </div>
  );
};

export default Filter;
