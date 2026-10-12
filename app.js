const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const members = [];
const travelBuddies = [];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", application: "Campus Connect" });
});

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.post("/api/members", (req, res) => {
  const { name, email, clubName, year, role, interests } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  const member = {
    id: members.length + 1,
    name: String(name).trim(),
    email: String(email).trim(),
    clubName: String(clubName || "").trim(),
    year: String(year || "").trim(),
    role: String(role || "").trim(),
    interests: String(interests || "").trim()
  };
  members.push(member);
  res.status(201).json({ message: "Member added successfully.", member });
});

app.get("/api/travel-buddies", (req, res) => {
  res.json(travelBuddies);
});

app.post("/api/travel-buddies", (req, res) => {
  const { name, destination, travelDate } = req.body;
  if (!name || !destination) {
    return res.status(400).json({ error: "Name and destination are required." });
  }
  const buddy = {
    id: travelBuddies.length + 1,
    name: String(name).trim(),
    destination: String(destination).trim(),
    travelDate: String(travelDate || "").trim()
  };
  travelBuddies.push(buddy);
  res.status(201).json({ message: "Travel buddy request added.", buddy });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Campus Connect is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
