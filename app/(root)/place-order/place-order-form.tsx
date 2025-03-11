'use client';


import { Button } from '@/components/ui/button';

const PlaceOrderForm = () => {

  const PlaceOrderButton = () => {
   
    return (
      <Button className='w-full'>
       
        Place Order
      </Button>
    );
  };

  return (
    <form  className='w-full'>
      <PlaceOrderButton />
    </form>
  );
};

export default PlaceOrderForm;
