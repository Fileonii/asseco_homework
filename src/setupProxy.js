import proxy from "http-proxy-middleware";

app.use(proxy("/*", { target: "http://localhost:5000/" }));
