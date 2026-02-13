import e from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes/user.routes.js";

const app = e();

const allowedOrigins = [
  "http://localhost:5173",
  "https://street-sync.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);


app.options("*", cors());

app.use(e.json());
app.use(cookieParser());

app.use(`/api/v1/user`, userRouter);

export default app;
