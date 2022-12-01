import nc from 'next-connect';
import { getAllEvents, addNewEvent } from '../../../controllers/events';
import verifyToken from '../../../middleware/verifyToken';

const handler = nc().use(verifyToken).get(getAllEvents).post(addNewEvent);

export default handler;