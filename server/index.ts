// Minimal server stub; not used in static deployment. Kept to satisfy the build script.
export function noop() {
  return "ok";
}

if (process.env.NODE_ENV === "production" && process.env.RUN_SERVER === "true") {
  // Optional: start a simple server only if explicitly requested
  const http = await import("node:http");
  const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Server stub running.\n");
  });
  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server stub listening on port ${port}`);
  });
}