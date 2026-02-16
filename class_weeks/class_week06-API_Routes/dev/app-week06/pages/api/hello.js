// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {method} = req;
  
switch (method) {
  case "GET":
    // Read data from your database
    res.status(200).json({ name: "John Doe" });
    break;
 
  default:
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    // 405 code is client error
}








  // res.status(200).json({ name: "John Doe" });
}


// // simlear to above same as in node  express
// app.get("/api/hello", (req, res) => {
//   res.status(200).json({ name: "John Doe" }); 
// });

// app.all("/api/hello", (req, res) => {
//   res.status(200).json({ name: "John Doe" }); 
// });