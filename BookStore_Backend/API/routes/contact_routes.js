import express from 'express'
import { getcontactmesg } from '../controller/contact_controller.js';
const router = express.Router();


router.post('/message', getcontactmesg);
export default router;