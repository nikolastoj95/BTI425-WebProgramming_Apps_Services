export default function handler (req,res) {
    const {method} = req;

    res.status(200).json({app: "Lab Demo", lab: "API Routes & Middleware"});
}