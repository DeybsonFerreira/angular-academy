import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensagemLogin: string = '';

  constructor(private router: Router, private shared: SharedService) {}

  btnLogin(): void {
    if (this.username == 'admin' || this.username == '123') {
      //sucesso
      this.mensagemLogin = 'CORRETO !';
      this.shared.setUsername(this.username);
     this.router.navigate(['home']);
    } else {
      this.mensagemLogin = 'INCORRETO !';
    }
  }
}
