import React from "react";
import { render } from "react-dom";
import { FriendStatus } from "./04-hooks-effect/WithCleanup";

render(<FriendStatus friend={{id: '1' }}/>, document.getElementById('main'));
