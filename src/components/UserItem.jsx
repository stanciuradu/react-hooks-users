import React from "react";

function UserItem(props) {
  const { name, username, email } = props;
  return (
    <div>
      <h4>{name}</h4>
      <h4>{username}</h4>
      <p>{email}</p>
    </div>
  );
}

export default UserItem;
