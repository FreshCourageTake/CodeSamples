import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class ProfileService {

  constructor(private authHttp: AuthHttp) {
  }

  getUserProfile(profileId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authHttp.get('<API endpoint removed>' + profileId)
        .map(res => res.json())
        .subscribe(
          data => {
            if (data.success) {
              localStorage.setItem('current_profile', JSON.stringify(data.profile));
              resolve(data.profile);
            }
            else {
              reject("Unable get user from server");
            }
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
  }

  updateUserProfile(profileId, params): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authHttp.post('<API endpoint removed>' + profileId, params)
        .map(res => res.json())
        .subscribe(
          data => {
            if (data.success) {
              localStorage.setItem('current_profile', JSON.stringify(data.profile));
              resolve(data.profile);
            }
            else {
              reject("Unable to update user profile");
            }
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
  }

}
