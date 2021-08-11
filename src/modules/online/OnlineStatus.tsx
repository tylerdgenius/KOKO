

export class OnlineStatus {
  static get() {
    console.log(localStorage.getItem('IsOnline'));
    return ( 
        Boolean(localStorage.getItem('IsOnline') || false )
    );
  }

  static set(IsOnline) {
    localStorage.setItem('IsOnline', IsOnline || false);
  }

  

}
