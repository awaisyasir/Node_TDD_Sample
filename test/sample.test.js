import axios from "axios";

import { expect } from "chai";
import { startServer } from "../server.js";

describe('Test simple API', () => {
  let server;
  before(async () => {
    server = await startServer()
  })
    
  after(() => {
    (server ? server.close() : false);
  })

  it('Should respond with "Hello World"', async () => {
    const baseUrlResponse = await axios({ method: 'GET', url: 'http://localhost:4000/' });
    expect(baseUrlResponse.status).to.equal(200);
    expect(baseUrlResponse.data).to.deep.equal({ message: 'Hello World' });
  })

  it('Should respond with pong', async () => {
    const pingResponse = await axios({ method: 'GET', url: 'http://localhost:4000/ping' });
    expect(pingResponse.status).to.equal(200);
    expect(pingResponse.data).to.deep.equal({ message: 'pong' });
  })
})