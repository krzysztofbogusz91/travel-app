import { TripDetailsModule } from './trip-details.module';

describe('TripDetailsModule', () => {
  let tripDetailsModule: TripDetailsModule;

  beforeEach(() => {
    tripDetailsModule = new TripDetailsModule();
  });

  it('should create an instance', () => {
    expect(tripDetailsModule).toBeTruthy();
  });
});
