import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from '../user.service';
import { ChangeemailComponent } from './changeemail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ConfigService } from '../config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


describe('ChangeemailComponent', () => {
  let component: ChangeemailComponent;
  let trueMockEvent;
  let falseMockEvent;
  let mockUserService;
  let fixture: ComponentFixture<ChangeemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeemailComponent,
        DashboardComponent,
        NotfoundComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
           {
             path: 'dashboard',
             component: DashboardComponent
            },
           {
             path: 'notfound',
             component: NotfoundComponent
            }
        ]),
        HttpClientModule],
      providers: [
        UserService,
        ConfigService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = {
      setUserLoggedIn: () => { }
    };

    trueMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'newemail'
        },
        {
          value: 'newemail'
        }],
      }
    };
    falseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'newemail'
        },
        {
          value: 'notnewemail'
        }],
      }
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
