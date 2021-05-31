import React from 'react'
import Style from './CSS/searchbar.module.scss'

function Searchbar({search, test}) {
  return (
    <form className={Style.formSection}>
      <input
        id="searchPosts"
        type="search"
        className={Style.searchBar}
        placeholder="Search for photos"
        onChange={e => search(e.target.value)}
        autoComplete="off"
      ></input>

      <button type="button" className={Style.submitButton} onClick={test}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;
