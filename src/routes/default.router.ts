import * as express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.status(200).send("Node API with Typescript"));
router.get('/health',(req,res)=>res.status(200).json({status:'Up'}));

export default router;