import express from 'express';

import {
  saveCrimeRate,
} from 'src/controllers/crimeRates';

const router = express.Router();

router.post('', saveCrimeRate);

export default router;