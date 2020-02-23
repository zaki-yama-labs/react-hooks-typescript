const fakeRequest = (request: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${request} finished`);
    }, 1000);
  });
};

export class ChatAPI {
  static async subscribeToFriendStatus(id: string, cb: Function) {
    const _ = await fakeRequest("subscribe");
    cb({
      isOnline: true
    });
  }

  static async unsubscribeFromFriendStatus(id: string, cb: Function) {
    const _ = await fakeRequest("unsubscribe");
    cb({
      isOnline: true
    });
  }
}
