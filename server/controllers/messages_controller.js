let messages = [];
let id = 0;

module.exports = {
   create: (req, res) => {
      const text = req.body.text;
      const time = req.body.time;

      messages.push({id, text, time});
      id++;
      res.json(messages);
   },
   read: (req, res) => {
      res.json(messages);
   },
   update: (req, res) => {
      const tgtId = +req.params.id;
      const text = req.body.text;
      const tgtIndex = messages.findIndex(el => el.id === tgtId);
      let message = messages[tgtIndex];

      messages[tgtIndex] = {
         id: message.id,
         text: text,
         time: message.time
      }
      res.json(messages);
   },
   delete: (req, res) => {
      const tgtId = +req.params.id;
      tgtIndex = messages.findIndex(el => el.id === tgtId);
      messages.splice(tgtIndex, 1);
      res.json(messages)
   }
}