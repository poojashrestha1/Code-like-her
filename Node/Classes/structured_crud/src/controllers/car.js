import * as carService from '../services/car.js';


export function getCars(req, res, next) {

	try{
		console.log('query', req.query);
		const data = carService.getAllCars(req.query);
		res.json(data);
	}
	catch(err) {
		res.status(400).json({
			message: 'This is Error in the GET of controller',
		});
	}    
}

export function getCar(req, res, next) {
	const id = req.params.carIdentifier;

	try{
		const data = carService.getCar(id);
		res.json(data);
	}
	catch(err) {
		res.status(400).json({
			message: err.message,
		});
	}    
}

export function saveCar(req, res, next) {

	try{
		const data = carService.addCar(req.body);
		res.json(data);
	}
	catch(err) {
		res.status(400).json({
			message: err.message
		});
	}    
}


export function updateCar(req, res, next) {
	const id = req.params.carIdentifier;
	const body = req.body;

	try{
		const data = carService.updateCar(id, body);
		res.json(data);
	}
	catch(err) {
		res.status(400).json({
			message: err.message,
		});
	}    
}

export function removeCar(req, res, next) {
	const id = req.params.carIdentifier;

	try{
		const data = carService.removeCar(id);
		res.json(data);
	}
	catch(err) {
		res.status(400).json({
			message: 'Here is the delete error',
		});
	}    
}


