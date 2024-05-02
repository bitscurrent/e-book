import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";


const startServer = async() => {

    await connectDB()
    const PORT = config.port || 4600;
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
}

startServer()