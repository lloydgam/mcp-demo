const express = require("express");
const { getTasks } = require("./tasks");

const app = express();
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(getTasks());
});

app.get("/tasks/search", (req, res) => {
  const q = req.query.q;
  if (!q || q.trim() === "") {
    return res.status(400).json({ error: "Query parameter q is required" });
  }
  const query = q.toLowerCase();
  const filtered = getTasks().filter((t) =>
    t.title.toLowerCase().includes(query)
  );
  res.json(filtered);
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;