import React, { useState, useEffect } from "react";
import { ChatAPI } from "../04-hooks-effect/ChatAPI";

type Props = {
  friend: {
    id: string;
    name: string;
  };
};

const FriendListItem: React.FC<Props> = props => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    function handleStatusChange(status: { isOnline: boolean }) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
};
