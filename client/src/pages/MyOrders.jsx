import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency ,user,axios} = useAppContext();

  const fetchMyOrders = async () => {
  try {
    const { data } = await axios.get('/api/order/user');
    console.log("Fetched data:", data); // 👈 ADD THIS

    if (data.success) {
      setMyOrders(data.orders);
    }
  } catch (error) {
    console.log("Fetch error:", error);
  }
};


  useEffect(() => {
    if(user){
         fetchMyOrders();
    }
   
  }, [user]);

  return (
    <div className='mt-16 pb-16 px-4'>
      <div className='flex flex-col items-end w-max mb-8'>
        <p className='text-2xl font-medium uppercase text-[#2e7d32]'>My Orders</p>
        <div className='w-16 h-0.5 bg-[#2e7d32] rounded-full'></div>
      </div>

      {myOrders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        myOrders.map((order, index) => (
          <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl shadow-sm'>
            <div className='flex flex-col md:flex-row justify-between gap-2 text-gray-600 font-medium mb-3'>
              <span>Order ID: <span className="text-[#2e7d32]">{order._id}</span></span>
              <span>Payment: <span className="text-[#2e7d32]">{order.paymentType}</span></span>
              <span>Total: <span className="text-[#2e7d32]">{currency}{order.amount}</span></span>
            </div>

            <div className='flex flex-col md:flex-row justify-between gap-2 text-sm text-gray-500 mb-2'>
              <span>Status: <span className="text-[#2e7d32] font-medium">{order.status}</span></span>
              <span>Date: <span className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</span></span>
              <span>Delivery To: <span className="text-gray-700">{order.address.city}, {order.address.state}</span></span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
              {order.items.map((item, i) => (
                <div key={i} className='flex gap-4 items-center border p-3 rounded'>
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className='w-16 h-16 object-cover rounded'
                  />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-[#2e7d32]">{item.product.name}</p>
                    <p className="text-gray-500">Category: {item.product.category}</p>
                    <p>Qty: {item.quantity || "1"}</p>
                    <p>Price: {currency}{item.product.offerPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
