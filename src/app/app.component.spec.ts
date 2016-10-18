/* tslint:disable:no-unused-variable */
import {
    RouterTestingModule
} from '@angular/router/testing';

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HackerNewsAPIService } from './hackernews-api.service';

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('App: Ng2News', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestRouterComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports: [ RouterTestingModule, RouterModule ],
      providers: [ provideRoutes(config) ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});
