import { AuthToken } from "../auth/authToken";
import service from 'src/modules/provider/providerService';
import authAxios from "../shared/axios/authAxios";

export default class AuthCurrentProvider {
    static async getProviderInfo() {
        let currentUser ;
        const token = AuthToken.get();
        if (token) {
            currentUser = await service.fetchProviderInfo();
          }
    console.log(currentUser)
        return currentUser;
    
      }


}