import React from 'react'
import Style from './CSS/searchbar.module.scss'

function Searchbar() {
  return (
    <form className={Style.formSection}>
      <input
        type="search"
        className={Style.searchBar}
        placeholder="Search for photos"
      ></input>

      <button type="submit" className={Style.submitButton}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;
