import {Router} from 'express';

import connection from './knexfile.js';
import addCarSchema from './schemas/addCar.js';
import * as carController from './controllers/car.js';
import * as apiController from './controllers/api.js';
import getCarsQuerySchema from './schemas/getCarsQuery.js';
import * as manufacturerController from './controllers/manufacturer.js';
import {validateBody, validateQueryParams} from './middlewares/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.get('/manufacturers', manufacturerController.getManufacturers);

router.get('/cars', validateQueryParams(getCarsQuerySchema), carController.getCars);

router.get('/cars/:carIdentifier', carController.getCar);

router.post('/cars', validateBody(addCarSchema), carController.saveCar);

router.put('/cars/:carIdentifier', carController.updateCar);

router.delete('/cars/:carIdentifier', carController.removeCar);

export default router;