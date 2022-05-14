import { Router } from "express";
import { uuid } from "uuidv4";
import { startOfHour, parseISO, isEqual } from "date-fns";

const appointmentsRouter = Router();

interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {

    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date));
    
    const findAppointmentInSameDate = appointments.find(appointment =>
        isEqual(appointment.date, parsedDate)
    );

    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ 
                message: 'This appointment is already booked' 
            });
    }

    const _appointment = { 
        id: uuid(),
        provider, 
        date: parsedDate
    };

    appointments.push(_appointment);

    return response.json(_appointment);
});

export default appointmentsRouter;