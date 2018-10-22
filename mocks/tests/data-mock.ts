import { TripDateRange } from 'src/app/shared/models/trip-date-range.interface';
import { Trip } from 'src/app/shared/models/trip.interface';

export const mockTripApiResponse: Trip[] = [
  {
    id: '1',
    name: 'Go to Thailand',
    country: 'Thailand',
    city: 'Puckett',
    price: '2000.00$$',
    startDate: '20 Dec 2018',
    endDate: '28 Dec 2018',
    image:
      'https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '2',
    name: 'Brazil recovery',
    country: 'Thailand',
    city: 'City',
    price: '2000.00$$',
    startDate: '20 Jun 2018',
    endDate: '28 Jun 2018',
    image:
      'https://images.pexels.com/photos/416998/pexels-photo-416998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '3',
    name: 'Moscow shot out',
    country: 'Russia',
    city: 'Moscow',
    price: '2000.00$$',
    startDate: '20 Nov 2018',
    endDate: '28 Nov 2018',
    image:
      'https://images.pexels.com/photos/417322/pexels-photo-417322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

export const mockDatesRange: TripDateRange = {
  startDate: new Date(2018, 11, 17, 3, 24, 0),
  endDate: new Date(2018, 12, 17, 3, 24, 0)
};
