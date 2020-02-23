import React, { useState, useEffect } from "react";
import { ChatAPI } from "./ChatAPI";

type Props = {
  friend: { id: number };
};

export const FriendStatus: React.FC<Props> = props => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    function handleStatusChange(status: { isOnline: boolean }) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return <>Loading...</>;
  }
  return <>{isOnline ? "Online" : "Offline"}</>;
};
