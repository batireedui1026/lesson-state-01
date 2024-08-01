import React from "react";

const UserCard = ({ profileImg, firstName }) => {
  return (
    <div className="flex items-center gap-3 mb-5 mt-4 ">
      <img className="rounded-full" src={profileImg} alt="" />
      <p>{firstName}</p>
    </div>
  );
};

export default UserCard;
