import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({message: "Welcome"})
})

app.use("/", (req, res,) => {
    res.json({})
})
export default app;