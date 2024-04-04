import { MongoClient } from 'mongodb';

const subscribeToNewsletter = async (req, res) => {
    if (req.method === 'POST') {
        const email = req.body.email;

        const client = await MongoClient.connect('mongodb+srv://Sengiria:SteampoweredClown717!!@cluster0.vousydc.mongodb.net/newsletter')
        const db = client.db();
        await db.collection('emails').insertOne({email})

        client.close();

        res.status(200).json({message: 'Success!', email})
    }
}


export default subscribeToNewsletter;