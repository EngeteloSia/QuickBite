//Stripe setup for payments

import { StripeProvider } from '@stripe/stripe-react-native';

export const StripeWrapper = ({ children }) => (
  <StripeProvider publishableKey="YOUR_STRIPE_PUBLISHABLE_KEY">
    {children}
  </StripeProvider>
);
