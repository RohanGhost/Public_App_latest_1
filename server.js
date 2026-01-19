// server.js (CommonJS)
const express = require("express");
const app = express();

app.get("/voice", (req, res) => {
  res.set("Content-Type", "application/xml; charset=utf-8");
  const xml = `
<Response>
  <Speak voice="WOMAN">Test OK</Speak>
</Response>`.trim();
  res.status(200).send(xml);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/voice`);
});
