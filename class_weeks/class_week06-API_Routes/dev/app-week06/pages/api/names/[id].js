export default function handler(req, res) {
  const {method, body,  query} = req;
  
  
switch (method) {
  case "GET":
    // Read data from your database
    res.status(200).json({ message: `TODO: Get Name with id: ${query.id}`});
    break;
   case 'PUT':
      // Update data in your database
      res.status(200).json({ message: `TODO: Update name for id: ${query.id} TO Name ${body.name}` });
      break;
    case 'DELETE':
      // Delete data in your database
      res.status(200).json({ message: `TODO: Delete Name with id: ${query.id}` });
      break;



    //Get by id

    

    //Post 

    //Delete
 
  default:
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    // 405 code is client error
}
}