import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate ,axios } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
   try {
        event.preventDefault();
        const {data} =await axios.post('/api/seller/login', {email,password})
        if(data.success){
            setIsSeller(true)
            navigate('/seller')
        }
        else{
            toast.error(data.message)
        }
   } catch (error) {
     toast.error(data.message)
   }
    
  };

  useEffect(() => {
    if(isSeller) {
      navigate('/seller');
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center justify-center text-sm text-gray-600 px-4"
      >
        <div className="flex flex-col gap-5 bg-white p-8 py-12 sm:min-w-[280px] rounded-lg shadow-xl border border-gray-200 w-full max-w-sm">
          <p className="text-2xl font-semibold text-center">
            <span className="text-[#2e7d32]">Seller</span> Login
          </p>

          <div className="w-full">
            <label className="block mb-1">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} 
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded w-full p-2 outline-[#2e7d32] focus:ring-1 focus:ring-[#2e7d32]"
              required
              value={email}
              
            />
          </div>

          <div className="w-full">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded w-full p-2 outline-[#2e7d32] focus:ring-1 focus:ring-[#2e7d32]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-[#2e7d32] hover:bg-[#27682c] transition-all text-white w-full py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
