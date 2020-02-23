import React, { useState, useEffect } from "react";
import { useFriendStatus } from "./useFriendStatus";

type Props = {
  friend: {
    id: string;
    name: string;
  };
};

export const FriendListItem: React.FC<Props> = props => {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
};
