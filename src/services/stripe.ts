import Stripe from 'stripe';
import { version } from '../../package.json';

//onsole.log(process.env.STRIPE_API_KEY)

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'ignews',
      version: version
    }
  }
)