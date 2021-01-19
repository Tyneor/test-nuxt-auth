const jsonServer = require("json-server");
const auth = require("json-server-auth");
const jwt = require("jsonwebtoken");

const app = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults();
app.use(middlewares);

const router = jsonServer.router("db.json");

const authConstants = require("./node_modules/json-server-auth/dist/constants");
const JWT_SECRET_KEY = authConstants.JWT_SECRET_KEY;

app.get("/user", (req, res, next) => {
  if (!req.header("Authorization")) {
    res.status(403).json("Authorization token missing");
    return;
  }
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    res.status(403).json("Wrong authorization token");
    return;
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    const { db } = req.app;
    const user = db.get("users").find({ email: data.email }).value();
    res.json({ user });
  } catch (error) {
    res.status(404).json(error);
  }
});

app.db = router.db;
app.use(auth);
app.use(router);

app.listen(3000, () => {
  console.log("JSON Server is running");
});
