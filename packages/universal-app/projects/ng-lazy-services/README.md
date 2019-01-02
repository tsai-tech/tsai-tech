# `ng-lazy-services`

Module for making lazy-loading services in Angular.

## Motivation
Angular has a lazy-loading feature integrated with a router, and it's really convenient to work with this,
for example when you need to make some top-level component (screen) as a lazy-loading component.

But you have nothing out of the box to use this feature **for componentless modules,**
for example when you need to make services with some high weight libraries (like
moment.js, d3.js, etc.) in different places of your application.

## Usage

### Install package
```
  npm install ng-lazy-services --save
```

### Create a new module and service (for example moment)

`moment/moment.module.ts`
```ts
import { NgModule } from '@angular/core';
import { FACADE_SERVICE } from 'ng-lazy-services';
import { MomentService } from './moment.service';

@NgModule({
  providers: [
    {
      provide: FACADE_SERVICE,
      useClass: MomentService // <-- Our lazy service
    }
  ]
})
export class MomentModule { }
```

`moment/moment.service.ts`
```ts
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  // <-- important to remove providedIn: 'root'!
}) 
export class MomentService {
  constructor() { }

  showCurrentTime(): string {
    return moment().format('hh:mm a');
  }
}
```

### Add module to angular.json "lazyModules"
projects > YOUR_APP_NAME > architect > build > options > lazyModules
```json
  ...

  "projects": {
    "YOUR_APP_NAME": {
      "architect": {
        "build": {
          "options": {
            "lazyModules": [
              "src/app/moment/moment.module"
            ]
          }
        }
      }
    }
  }

```
You need to restart your `ng serve` process after any angular.json changes

### Import and configure `NgLazyServicesModule`
`app.module.ts`
```ts

import { NgLazyServicesModule } from 'ng-lazy-services';

...

imports: [
  ...

  NgLazyServicesModule.forRoot({
    moment: 'src/app/moment/moment.module#MomentModule'
  })
]

```

### And just use it:

`app.component.ts`
```ts
import { ngLazyServicesLoader } from 'ng-lazy-services';
import { MomentService } from './moment/moment.service';

@Component({
  selector: 'app-root',
  template: `<div>{{ currentTime }}</div>`
})
export class AppComponent implements OnInit {
  currentTime: 'I don\'t know, I haven\'t a moment.js :(';

  constructor(
    private loader: ngLazyServicesLoader
  ) { }

  ngOnInit() {
    this.loader.load<MomentService>('moment')
      .subscribe(service =>
        this.time = service.showCurrentTime()
      );
  }
}
```

### And the must important thing:

`Look at the Chrome DevTools Network tab and be happy :-)`
