import { BsSearch } from "react-icons/bs";
import CommonInput from "./CommonInput";

const SearchInput = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
      <BsSearch className="text-gray-400 w-5 h-5" />
      <CommonInput
        type="text"
        placeholder="찾고 있는 맛집이 있나요?"
        classNames="bg-transparent pl-2 placeholder-gray-400 text-gray-700 border-none"
      />
    </div>
  );
};

export default SearchInput;