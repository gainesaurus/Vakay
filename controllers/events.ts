import { NextApiRequest, NextApiResponse } from 'next';
import Events from '../models/Events';
import Trip from '../models/Trip';
import { IEvent, ITripItem } from '../Types';

export async function getAllEvents(
  req: NextApiRequest,
  res: NextApiResponse<IEvent[]>,
) {
  const events = await Events.find<IEvent>({
    tripId: req.query.tripId,
  }).exec();
  res.status(200).json(events);
}

export async function addNewEvent(
  req: NextApiRequest,
  res: NextApiResponse<IEvent | { error: unknown }>,
) {
  try {
    const trip = await Trip.findOne<ITripItem>({
      $and: [{ _id: req.body.tripId }, { attendees: req.body.uid }],
    }).exec();
    if(trip) {
      const event = new Events({
        tripId: req.body.tripId,
        title: req.body.title,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        eventType: req.body.eventType,
        info: req.body.info,
      });
      await event.save();
      trip!.events?.push(event._id);
      await Trip.findByIdAndUpdate(req.body.tripId, trip!).exec();
      res.status(200).json(event);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

export async function deleteEvent(
  req: NextApiRequest,
  res: NextApiResponse<IEvent | { error: unknown }>,
) {
  try {
    const trip = await Trip.findOne<ITripItem>({
      _id: req.body.tripId
    }).exec();
    let res:any = trip!.events?.indexOf(req.body._id)
    trip!.events?.splice(res, 1);
    const event = await Events.findOneAndDelete<IEvent>({
      _id: req.body.eventId,
    }).exec();
    res.status(200);  
  } catch (error) {
    console.log(error)
    res.status(500).json({ error });
  }
} 
