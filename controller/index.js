import express from 'express';
import dayjs from 'dayjs';
import adminController from './admin/index.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    const _currentDt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    res.status(200).json({message: `${_currentDt} Hello World`});
})

router.use('/admin', adminController);

export default router;