import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  constructor() { }
  private registerforms = document.getElementsByClassName('register-form');
  private loginforms = document.getElementsByClassName('login-form');
  private tabButtons = document.getElementsByClassName('card-button');

  ngOnInit() {
  }

  public loginClicked() {
    this.swap_views(this.loginforms[0], this.registerforms[0], 'hide');
    this.swap_views(this.tabButtons[1], this.tabButtons[0], 'active-button');
  }


  public registerClicked() {
    this.swap_views(this.registerforms[0], this.loginforms[0], 'hide');
    this.swap_views(this.tabButtons[0], this.tabButtons[1], 'active-button');
  }

  private swap_views(adding_elem, removing_elem, klasa) {
    adding_elem.classList.remove(klasa);
    removing_elem.classList.add(klasa);
  }

}
