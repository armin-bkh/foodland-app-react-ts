import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface filterProps {
  search: string;
  handleSearch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ search, handleSearch, onChange }: filterProps) => {
  const submitSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form
      onSubmit={submitSearchHandler}
      className="flex flex-col sticky md:top-32 z-50"
    >
      <div className="text top-12 flex rounded-l-sm shadow focus-within:shadow-md">
        <input
          className="px-5 flex-1 w-4/5 outline-none py-2"
          type="text"
          placeholder="searching for..."
          value={search}
          onChange={onChange}
        />
        <button className="p-3 rounded-r-sm bg-red-400 text-white">
          <BiSearchAlt />
        </button>
      </div>
    </form>
  );
};

export default Filter;
