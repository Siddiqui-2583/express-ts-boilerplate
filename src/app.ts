import express, { Request, Response } from "express";
import cors from "cors";
import setRoutes from "./app/utils/route";

const app = express();

app.use(express.json())
app.use(cors())

setRoutes(app)

app.get("/", (req: Request, res: Response) => {
  const a=50
  res.json(a);
});

export default app