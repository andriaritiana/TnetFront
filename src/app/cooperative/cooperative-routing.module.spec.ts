import { CooperativeRoutingModule } from './cooperative-routing.module';

describe('CooperativeRoutingModule', () => {
  let cooperativeRoutingModule: CooperativeRoutingModule;

  beforeEach(() => {
    cooperativeRoutingModule = new CooperativeRoutingModule();
  });

  it('should create an instance', () => {
    expect(cooperativeRoutingModule).toBeTruthy();
  });
});
