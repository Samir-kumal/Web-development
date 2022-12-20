const router = require("express").Router();

router.get("/router", (req,res)=>{
    res.send("Register");
});

module.exports = router;
