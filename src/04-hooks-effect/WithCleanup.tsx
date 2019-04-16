import React, { useState, useEffect } from "react";

declare const ChatAPI: any;

type Props = {
  friend: { id: string },
};

// NOTE: React.FC で string を返すとエラーだった
export const FrientStatus = (props: Props) => {
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
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};
