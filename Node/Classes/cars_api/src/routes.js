import {Router} from 'express';

import connection from './knexfile.js';
import addCarSchema from './schemas/addCar.js';
import * as carController from './controllers/car.js';
import * as apiController from './controllers/api.js';
import getCarsQuerySchema from './schemas/getCarsQuery.js';
import {validateBody, validateQueryParams} from './middlewares/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.get('/abcd', async (req, res, next) => {
    const data = await connection('cars').select('*');

    res.json(data);
});

router.get('/cars', validateQueryParams(getCarsQuerySchema), carController.getCars);

router.get('/cars/:carIdentifier', carController.getCar);

router.post('/cars', validateBody(addCarSchema), carController.saveCar);

router.put('/cars/:carIdentifier', carController.updateCar);

router.delete('/cars/:carIdentifier', carController.removeCar);

export default router;