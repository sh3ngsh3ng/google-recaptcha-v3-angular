import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private siteKey = ""
  constructor() { }

  execute(action: string): Promise<string> {
    return new Promise((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(this.siteKey, { action }).then((token: string) => {
          resolve(token);
        }, (error: any) => {
          reject(error);
        });
      });
    });
  }
}
