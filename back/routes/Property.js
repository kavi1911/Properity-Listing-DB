const express = require('express')
const router = express.Router();
const Model = require('../models/Database')

router.get('/player', async (req, res) => {
    try {
        const datas = await Model.find();
        res.json(datas);
    } catch (err) {
        console.log("Error in Player", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { name, location,price  } = req.body;
        await Model.create({ name, location,price })
            .then(res.json('done'))
            .catch(res.json("not"));

    } catch (error) {
        console.error('Error in Player Creation:', error);
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Model.findOneAndDelete({name:id});
        res.json('deleted');
        console.log("Games deleted successfully");
    } catch (error) {
        console.error('Error in deleting games:', error);
    }
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name , location,price} = req.body;
    const update = await Model.findOneAndUpdate({name:id},{name , location,price})
    res.json('update');
});




module.exports = router;
