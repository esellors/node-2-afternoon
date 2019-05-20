const express = require('express');
const app = express();
const PORT = 3001;
const messagesController = require('./controllers/messages_controller')

app.use(express.json());
app.use(express.static(`${__dirname}/../public/build`))

app.post("/api/messages", messagesController.create);
app.get("/api/messages", messagesController.read);
app.put("/api/messages/:id", messagesController.update);
app.delete("/api/messages/:id", messagesController.delete);


app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}. Peace.`);
})