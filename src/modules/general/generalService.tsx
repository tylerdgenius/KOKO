import authAxios from 'src/modules/shared/axios/authAxios';
import authSelectors from 'src/modules/auth/authSelectors';

export default class generalService {

 

  static async getTodaysNews() {
    const params = {
      role:''
    };

    console.log(authSelectors.selectCurrentUser);

    const response = await authAxios.get(`/general/todaysnews`, {
      params,
    });

    return response.data;
  }

  static async getNotification() {
    const params = {
      userID:''
    };

    console.log(authSelectors.selectCurrentUser);

    const response = await authAxios.get(`/general/Notifications`, {
      params,
    });

    return response.data;
  }
}
