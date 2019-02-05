import * as express from 'express';
import movieCtrl from '../controllers/movie.ctrl';

const router = express.Router();

router.get('/', movieCtrl.get);
router.post('/', movieCtrl.post);

export default router;