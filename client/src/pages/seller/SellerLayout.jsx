import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link, NavLink, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';

const SellerLayout = () => {
    const { axios ,navigate} = useAppContext();

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async () => {
        try {
            const {data} =await axios.get('/api/seller/logout');
             if(data.success){
                toast.success(data.message)
                navigate('/')
             }
             else{
                toast.error(data.message)
             }
        } catch (error) {
             toast.error(data.message)
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-[#f1fdf2] shadow-sm">
                <Link to='/'>
                    <img src={assets.logo} alt="logo" className='cursor-pointer w-16' />
                </Link>
                <div className="flex items-center gap-5 text-[#2e7d32] font-medium">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border border-[#2e7d32] text-[#2e7d32] hover:bg-[#2e7d32] hover:text-white rounded-full text-sm px-4 py-1 transition'>
                        Logout
                    </button>
                </div>
            </div>

            {/* Body */}
            <div className='flex flex-1'>
                {/* Sidebar */}
                <div className="md:w-64 w-16 bg-white border-r border-gray-200 pt-4 shadow-sm">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 gap-3 transition-all
                                 ${isActive
                                    ? "border-r-4 md:border-r-[6px] bg-[#2e7d32]/10 border-[#2e7d32] text-[#2e7d32] font-semibold"
                                    : "hover:bg-gray-50 text-gray-700"
                                }`
                            }
                        >
                            <img src={item.icon} alt="" className='w-7 h-7' />
                            <p className="md:block hidden">{item.name}</p>
                        </NavLink>
                    ))}
                </div>

                {/* Main Outlet Content */}
                <div className='flex-1 p-4 bg-[#fcfdfc] min-h-[calc(100vh-64px)] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default SellerLayout;
