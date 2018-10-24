import { TripDateRange } from 'src/app/shared/models/trip-date-range.interface';
import { Trip } from 'src/app/shared/models/trip.interface';

export const mockTrips: Trip[] = [
  {
    id: '1',
    name: 'Go to Thailand',
    country: 'Thailand',
    city: 'Puckett',
    price: '2000.00$$',
    startDate: new Date('20 Dec 2018'),
    endDate: new Date('30 Dec 2018'),
    image:
      'https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '2',
    name: 'Brazil recovery',
    country: 'Thailand',
    city: 'City',
    price: '2000.00$$',
    startDate: new Date('20 Jun 2018'),
    endDate: new Date('28 Jun 2018'),
    image:
      'https://images.pexels.com/photos/416998/pexels-photo-416998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '3',
    name: 'Moscow shot out',
    country: 'Russia',
    city: 'Moscow',
    price: '2000.00$$',
    startDate: new Date('20 Nov 2018'),
    endDate: new Date('28 Nov 2018'),
    image:
      'https://images.pexels.com/photos/417322/pexels-photo-417322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '3',
    name: 'Blugaria thix',
    country: 'Blugaria',
    city: 'Sofia',
    price: '2000.00$$',
    startDate: new Date('1 Jan 2019'),
    endDate: new Date('28 Jan 2019'),
    image:
      'https://images.pexels.com/photos/417322/pexels-photo-417322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

export const mockServerResponse = [
  {
    id: '1',
    name: 'Go to Thailand',
    country: 'Thailand',
    city: 'Puckett',
    price: '2000.00$$',
    startDate: '20 Dec 2018',
    endDate: '30 Dec 2018',
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
  },
  {
    id: '3',
    name: 'Blugaria thix',
    country: 'Blugaria',
    city: 'Sofia',
    price: '2000.00$$',
    startDate: '1 Jan 2019',
    endDate: '28 Jan 2019',
    image:
      'https://images.pexels.com/photos/417322/pexels-photo-417322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

export const mockDatesRange: TripDateRange = {
  startDate: new Date(2018, 10, 17, 3, 24, 0),
  endDate: new Date(2018, 10, 30, 3, 24, 0)
};

export const mockDatesRangeForAllTrips: TripDateRange = {
  startDate: new Date('1 Jan 2016'),
  endDate: new Date('1 Jan 2020')
};
export const mockDatesRangeForNoTrips: TripDateRange = {
  startDate: new Date('1 Jan 2022'),
  endDate: new Date('1 Jan 2022')
};
