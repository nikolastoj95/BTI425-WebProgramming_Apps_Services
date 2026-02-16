import { mongooseConnect, UserModel } from "@/lib/dbUtils";

export default async function handler(req, res) {
  const {method, body,  query} = req;
  
  try {

    // try to connect to DB
    await mongooseConnect();  

    switch (method) {
      case "GET":
        // Read data from your database by id 
        let users = await UserModel.find({_id: query.id}).exec();
        res.status(200).json(users[0]);
        break;
      case "PUT":
        // Update data in your database
        await UserModel.updateOne({_id: req.id}, {$set: {name: body.name}}).exec();
        res.status(200).json({
            message: `TODO: Update name for id: ${query.id} TO Name ${body.name} Updated! `,
          });
        break;
      case "DELETE":
        // Delete data in your database
        await UserModel.deleteOne({_id: query.id}).exec();
        res.status(200).json({ message: `TODO: Delete Name with id: ${query.id}` });
        break;

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      // 405 code is client error
    }




  } catch (err) {
    // if it fails error happens
    res.status(500).json({ message: err.message });
  }


}