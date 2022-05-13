import { Router } from "express";
import { uuid } from "uuidv4";

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {

    const { provider, date } = request.body;

    const _appointment = { 
        id: uuid(),
        provider, 
        date
    };

    appointments.push(_appointment);

    return response.json(_appointment);
});

export default appointmentsRouter;