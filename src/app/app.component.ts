import { Component } from '@angular/core';
import { RecaptchaService } from './services/recaptcha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-recaptcha-v3';

  constructor(private recaptchaService: RecaptchaService) { }

  executeRecaptcha(action: string) {
    this.recaptchaService.execute(action).then((token) => {
      console.log("recaptcha token: ", token)
      console.log("send request to backend with token for checking")
    })
  }
}
