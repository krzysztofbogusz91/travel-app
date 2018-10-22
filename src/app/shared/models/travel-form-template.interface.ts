export interface TravelFormTemplate {
  personalData: {
    email: string;
    firstName: string;
    lastName: string;
  };
  tripDetails: {
    price: string;
    tripName: string;
    upgrade: boolean;
  };
}
