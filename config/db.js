import { MongoClient } from 'mongodb';

export const connectDB = async () => {
    try {
        const client = new MongoClient('mongodb+srv://tey-user:PkYa4XBkhqpw4Cly@cluster0.l2kyezy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        await client.connect();
        console.log("DB Connected");

        // Don't forget to close the connection when you're done
        // client.close();
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
