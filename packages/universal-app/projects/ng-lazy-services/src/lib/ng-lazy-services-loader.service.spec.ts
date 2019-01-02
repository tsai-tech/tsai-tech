import { TestBed } from '@angular/core/testing';

import { NgLazyServicesLoaderService } from './ng-lazy-services-loader.service';

describe('NgLazyServicesLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLazyServicesLoaderService = TestBed.get(NgLazyServicesLoaderService);
    expect(service).toBeTruthy();
  });
});
