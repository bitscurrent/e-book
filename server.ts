import app from "./src/app";

const startServer = () => {
    const PORT = process.env.PORT || 4600;
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
}

startServer()