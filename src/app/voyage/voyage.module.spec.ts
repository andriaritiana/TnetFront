import { VoyageModule } from './voyage.module';

describe('VoyageModule', () => {
  let voyageModule: VoyageModule;

  beforeEach(() => {
    voyageModule = new VoyageModule();
  });

  it('should create an instance', () => {
    expect(voyageModule).toBeTruthy();
  });
});
