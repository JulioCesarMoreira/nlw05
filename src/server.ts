import express, { request, response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3010, () => console.log("Server is running on port 3010"));

