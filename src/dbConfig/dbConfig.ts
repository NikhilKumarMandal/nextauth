import { log } from "console";
import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on( 'connected', () => {
            console.log("MongoDB Connected");       
        })

        connection.on('error', (err) => {
            console.log("MongoDb connection error,Please make sure db is up and running: " + err);
            process.exit()
        })
        
    } catch (error) {
        console.log("Something went wrong  while connecting to the Database: ", error);   
    }
}