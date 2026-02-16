import { mongooseConnect, UserModel } from "@/lib/dbUtils";
import { Nanum_Myeongjo } from "next/font/google";
import { userAgentFromString } from "next/server";

export default async function handler(req, res) {
  const {method, body} = req;
  const me = req.method;



  try{
    // try to connect to DB
    await mongooseConnect();
    switch (method) {
      case "GET":
        // Read data from your database
        let users = await UserModel.find().exec();
        
        res.status(200).json(users);
        break;
      case "POST":
        // Read data from your database, to be inser})
        // createing new instance of model
        const newUser = new UserModel({name:body.name});
        await newUser.save();
        res.status(201).json({ message: `User: ${body.name} Created` });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      // 405 code is client error
    }

  } catch (err) {
    // if it fails error happens
    res.status(500).json({ message: err.message });

  }


  

}