import { MongoClient } from "mongodb";

const handleComments = async (req, res) => {
    const eventId = req.query.eventId;
    let client;
    let db;
    try {
        client = await MongoClient.connect('mongodb+srv://Sengiria:SteampoweredClown717!!@cluster0.vousydc.mongodb.net/comments')
        db = client.db();
    } catch (error) {
        res.status(500).json({message: 'Connecting to the database failed.'});
        return;
    }


    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        const newComment = {
            email: body.email,
            name: body.name,
            text: body.text,
            eventId
        }
        try {
            const response = await db.collection('comments').insertOne(newComment)
            newComment.id = response.insertedId;
            res.status('200').json({message: 'Success! The comment was submitted.', comment: newComment})
            client.close();
        } catch (error) {
            res.status(500).json({message: 'Inserting to the database failed.'});
            return;
        }

    } 
    else {
        try {
            const response = await db.collection('comments').find().sort({_id: -1}).toArray();
            res.status('200').json({message: 'Success! The comments were fetched.', comments: response})
            client.close();
        } catch (error) {
            res.status(500).json({message: 'Fetching comments from the database failed.'});
            return;
        }

    }


}

export default handleComments;