import { TravelFormTemplate } from 'src/app/shared/models/travel-form-template.interface';

export const formMock: TravelFormTemplate = {
  personalData: {
    email: 'string',
    firstName: 'string@string',
    lastName: 'string'
  },
  tripDetails: {
    price: 'string',
    tripName: 'string',
    upgrade: false
  }
};
