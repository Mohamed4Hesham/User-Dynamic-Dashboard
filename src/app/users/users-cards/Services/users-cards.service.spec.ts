import { TestBed } from '@angular/core/testing';

import { UsersCardsService } from '../Services/users-cards.service';

describe('UsersCardsService', () => {
  let service: UsersCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
