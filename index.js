import { startServer } from "./server.js";

(async () => {
  const server = await startServer();
  server.close();
})();