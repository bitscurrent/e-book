import express,{Request, Response,NextFunction} from "express"
import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express()

app.get("/", (req, res) => {
    
    const error = createHttpError(400, "Kuch galat hoi gaawa")
    throw error
    res.json({message: "Welcome"})
})

// global error handler
app.use(globalErrorHandler)

export default app;