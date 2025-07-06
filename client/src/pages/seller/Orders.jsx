import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const Orders = () => {
  const { currency, axios } = useAppContext(); // ✅ Make sure axios comes from context
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/seller');
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Failed to fetch seller orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll bg-white">
      <div className="md:p-10 p-4 space-y-6">
        <h2 className="text-lg font-semibold text-[#2e7d32]">Orders List</h2>

        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-5 justify-between items-start md:items-center p-5 max-w-5xl rounded-md border border-gray-300 bg-[#f9f9f9]"
          >
            {/* Product Info */}
            <div className="flex gap-4 w-full md:w-1/3">
              <div className="flex flex-wrap gap-2">
                {order.items.map((item, index) => (
                  <img
                    key={index}
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded border"
                  />
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="text-sm text-gray-600 w-full md:w-1/3">
              <p className="font-medium text-gray-800 mb-1">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street}, {order.address.city}</p>
              <p>{order.address.state} - {order.address.zipcode}</p>
              <p>{order.address.country}</p>
              <p className="mt-1">📞 {order.address.phone}</p>
            </div>

            {/* Price and Status */}
            <div className="space-y-2 text-sm text-gray-700 w-full md:w-1/3">
              <p><span className="font-medium">Amount:</span> {currency}{order.amount}</p>
              <p><span className="font-medium">Payment:</span> {order.paymentType}</p>
              <p><span className="font-medium">Status:</span> {order.isPaid ? "✅ Paid" : "❌ Pending"}</p>
              <p><span className="font-medium">Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
