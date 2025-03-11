import { Metadata } from 'next';
// import { getMyOrders } from '@/lib/actions/order.actions';

import {
  Table,
  TableBody,
 
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


export const metadata: Metadata = {
  title: 'My Orders',
};

const OrdersPage = async () => {


 

  return (
    <div className='space-y-2'>
      <h2 className='h2-bold'>Orders</h2>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TOTAL</TableHead>
              <TableHead>PAID</TableHead>
              <TableHead>DELIVERED</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
           
          </TableBody>
        </Table>
     
      </div>
    </div>
  );
};

export default OrdersPage;
