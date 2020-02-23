import React, { useState, useEffect } from "react";
import { ChatAPI, Status } from "../04-hooks-effect/ChatAPI";

export function useFriendStatus(friendID: string) {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    function handleStatusChange(status: Status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
