import { SearchIcon } from "@heroicons/react/outline";

export default function Trending() {
  return (
    <div className=" lg:flex ">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
        w-[300px] h-[44px] p-3 rounded-3xl mt-3"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
            focus:outline-none
            placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>

      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">

      </div>
    </div>
  );
}
