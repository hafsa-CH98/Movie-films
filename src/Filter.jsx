import React, { useState } from 'react';

const Filter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); 
    onSearch(searchQuery); 
  };

  return (
    <div className="bg-zinc-700 ml-[300px] mt-[10px] flex p-[10px] rounded-md justify-center w-[1000px]">
      <form className="flex gap-4" onSubmit={handleSearch}>
        <input
          type="text"
          size="90"
          placeholder="Search the film"
          className="bg-zinc-600 p-[10px] rounded-md"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Note"
          className="bg-zinc-600 p-[10px] rounded-md"
        />
        <div>
          <button type="submit" className="w-[100px] h-[50px] bg-red-700 rounded-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
