import { CurrentModule } from './current.module';

describe('CurrentModule', () => {
  let currentModule: CurrentModule;

  beforeEach(() => {
    currentModule = new CurrentModule();
  });

  it('should create an instance', () => {
    expect(currentModule).toBeTruthy();
  });
});
