// // api/voice.js
// export default function handler(req, res) {
//   res.setHeader("Content-Type", "application/xml; charset=utf-8");
//   const xml = `
// <Response>
//   <Speak voice="WOMAN">Test OK</Speak>
// </Response>`.trim();
//   res.status(200).send(xml);
// }
export const config = {
  runtime: "edge",
};

export default function handler() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Speak voice="WOMAN">Test OK</Speak>
</Response>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
