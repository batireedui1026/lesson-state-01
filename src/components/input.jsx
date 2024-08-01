import { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("uu");
  const [users, setUsers] = useState(profiles);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <div>
      <input
        className="border-gray-400 border"
        type="text"
        onChange={handleChange}
      />
      <p>search value:{searchValue}</p>
    </div>
  );
};
export default Input;
