import { DnsMiddleware } from './dns.middleware';

describe('DnsMiddleware', () => {
  it('should be defined', () => {
    expect(new DnsMiddleware()).toBeDefined();
  });
});
