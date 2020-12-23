import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening");
});
app.get("/controls1", async (req, response) => {
  const api_url =
    "https://erpdemocloud.assecobs.pl/v100/homework_html/controlsTest.json";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});
app.get("/controls2", async (req, response) => {
  const api_url =
    "https://erpdemocloud.assecobs.pl/v100/homework_html/controlsTest2.json";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
}
