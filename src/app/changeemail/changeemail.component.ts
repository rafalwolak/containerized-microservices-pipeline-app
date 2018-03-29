import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.less']
})
export class ChangeemailComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) {
    super();
  }

  public message: string;
  private newemail1 = '';
  private newemail2 = '';
  private config: Object;
  private userToken: string;

  public ngOnInit(): void {
    this.message = '';
    this.userToken = this.user.getToken();
  }

  changeEmail(e: any) {
    e.preventDefault();
    if (e.target && e.target.elements) {
      this.newemail1 = e.target.elements[0].value;
      this.newemail2 = e.target.elements[1].value;

      if (this.newemail1 === this.newemail2) {
        this.showConfig();
        this.router.navigate([ 'dashboard' ]);
      } else {
        this.message = 'Your new emails do not match. Please try again.';
      }
    }
  }

  showConfig() {
    this.configService.postChangeEmail(this.newemail1, this.userToken)
      .subscribe(data => { });
    }
}