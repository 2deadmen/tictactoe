const express = require("express");
const router = express.Router();
const Log = require('./schema');

router.post(
    "/storeresult",
    async (req, res) => {
  
      try {
        const { status,player1,player2 } = req.body;
        const exists = await Log.findOne({ status: status ,player1:player1,player2:player2});
        if (exists){
          return res.status(400).json({error:"log exists"});
        }
        const log = new Log({
            status:status,player1:player1,player2:player2
        })
        const savedlog= await log.save()

        res.json(savedlog)
  
       
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
    }
  );

  router.get('/history', async (req, res) => {
    try {
        const logs = await Log.find().sort({ _id: -1 });
        res.json(logs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports=router