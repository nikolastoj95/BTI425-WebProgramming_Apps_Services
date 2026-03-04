export default function handler (req,res) {

    const currTime = new Date().toISOString();

    res.status(200).json({status: "OK", time: currTime });
}