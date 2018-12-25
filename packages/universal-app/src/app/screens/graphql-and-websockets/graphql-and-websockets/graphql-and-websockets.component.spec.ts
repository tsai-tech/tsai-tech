import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlAndWebsocketsComponent } from './graphql-and-websockets.component';

describe('GraphqlAndWebsocketsComponent', () => {
  let component: GraphqlAndWebsocketsComponent;
  let fixture: ComponentFixture<GraphqlAndWebsocketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlAndWebsocketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlAndWebsocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
