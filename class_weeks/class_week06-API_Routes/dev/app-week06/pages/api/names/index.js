//api/names
export default function handler(req, res) {
  const {method, body} = req;


  
switch (method) {
  case "GET":
    // Read data from your database
    res.status(200).json({ message: "TODO: Get All Names" });
    break;
    case "POST":
    // Read data from your database
    res.status(201).json({ message: `TODO: Add Name with value: ${body.name}` });
    break;

 
  default:
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    // 405 code is client error
}
}