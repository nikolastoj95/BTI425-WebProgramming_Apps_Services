export default function handler (req,res){
    const {method} = req;
    
    const {id} = req.query;
    const {status}= req.body;

    switch (method) {
        case 'GET': 
          res.status(200).json({userId: `${id}`, status: "active" });
          break;
        case 'PUT':
            res.status(200).json({message:`Updated User with id: ${id} - Set status to: ${status}`, userId: `${id}`, status: `${status}` });
            break;

        case 'DELETE':
            res.status(200).json({message: `Deleted User with id: ${id}`});
            break;

        default:
            res.setHeader('Allow', ['GET','PUT','DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);

    }

   




}