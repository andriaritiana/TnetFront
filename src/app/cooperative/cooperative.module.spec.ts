import { CooperativeModule } from './cooperative.module';

describe('CooperativeModule', () => {
  let cooperativeModule: CooperativeModule;

  beforeEach(() => {
    cooperativeModule = new CooperativeModule();
  });

  it('should create an instance', () => {
    expect(cooperativeModule).toBeTruthy();
  });
});
