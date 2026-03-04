export default function handler(req,res) {
    const {method} = req;
    const {bodyM} = req.body;

    const {name} = req.query; // "name" route param

    switch (method) {
        case 'GET':
            res.status(200).json({greeting: `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`});
            break;
        case 'POST': 
            res.status(201).json({greeting: `${bodyM},  ${name.charAt(0).toUpperCase() + name.slice(1)}!`});
            break;
        default:
            res.setHeader('Allow', ['GET','POST']);
            res.status(405).end(`Method ${method} Not Allowed`);

    }

    
}