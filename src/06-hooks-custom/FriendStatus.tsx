import React, { useState, useEffect } from "react";
import { useFriendStatus } from "./useFriendStatus";

type Props = {
  friend: { id: string };
};

export const FriendStatus: React.FC<Props> = props => {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return <>Loading...</>;
  }
  return <>{isOnline ? "Online" : "Offline"}</>;
};
