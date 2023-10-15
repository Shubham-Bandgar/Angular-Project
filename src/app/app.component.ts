import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''

  };
  loginObj:any={
    userName:'',
    
    password:''

  };
  constructor(){}
  title = 'Angular';
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));

  }
  onLogIn(){

  }
}
