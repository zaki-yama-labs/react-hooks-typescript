import React from "react";
import { useFriendStatus } from "./useFriendStatus";

type Props = {
  friend: {
    id: number;
    name: string;
  };
};

export const FriendListItem: React.FC<Props> = props => {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
};
