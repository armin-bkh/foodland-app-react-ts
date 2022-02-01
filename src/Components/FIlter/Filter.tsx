import { BiSearchAlt } from "react-icons/bi";

const Filter = () => {
  return (
    <section>
      <div className="flex rounded-sm overflow-hidden shadow focus-within:shadow-md">
        <input
          className="px-5 flex-1 outline-none py-2"
          type="text"
          placeholder="searching for..."
        />
        <button className="p-3 rounded-sm bg-red-400 text-white">
          <BiSearchAlt />
        </button>
      </div>
    </section>
  );
};

export default Filter;
