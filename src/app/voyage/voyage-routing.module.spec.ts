import { VoyageRoutingModule } from './voyage-routing.module';

describe('VoyageRoutingModule', () => {
  let voyageRoutingModule: VoyageRoutingModule;

  beforeEach(() => {
    voyageRoutingModule = new VoyageRoutingModule();
  });

  it('should create an instance', () => {
    expect(voyageRoutingModule).toBeTruthy();
  });
});
