import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { masterDetailResolver } from './master-detail.resolver';

describe('masterDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => masterDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
