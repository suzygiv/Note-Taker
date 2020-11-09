// Connect routes to journal data.
var noteData = require("../data/noteData");

// Routing
module.exports = function (app) {

  // GET request
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  // POST request
  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json("true");
  });

  // DELETE request
  app.delete("/api/notes/:id", function (req, res) {
    var id = parseInt(req.params.index);
    var notes = [];
    for (var i = 0; i < noteData.length; i++) {
      if (i !== id) {
        notes.push(noteData[i]);
      }
    }
    noteData = notes;

    res.json("delete complete");
  });


}