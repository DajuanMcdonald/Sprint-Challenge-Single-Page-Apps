import React from "react";

export default function SearchForm({handleSearch, search}) {
 
  return (
    <section className="search-form">

        <form action="">
            <input
                type="text"
                onChange={handleSearch}
                value={search}
                placeholder="Search Characters...."

            />
        </form>
    </section>
  );
}
