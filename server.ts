import app from "./src/app";
import { config } from "./src/config/config";
const startServer = () => {
    const PORT = config.port || 4600;
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
}

startServer()