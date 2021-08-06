

export class OnlineStatus {
  static get() {
    return (
       localStorage.getItem('IsOnline') as unknown as boolean || false
    );
  }

  static set(IsOnline) {
    localStorage.setItem('IsOnline', IsOnline || false);
  }

  

}
