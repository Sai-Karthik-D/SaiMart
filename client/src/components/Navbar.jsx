import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const {
    user, setUser, setShowUserLogin, navigate,
    setSearchQuery, searchQuery, getCartCount, axios
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout')
      if (data.success) {
        toast.success(data.message)
        setUser(null);
        navigate('/');
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ✅ Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery])

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-40">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-12" src={assets.logo} alt="SaiMartLogo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img src={assets.search_icon} alt="search" className='w-4 h-4' />
          </div>

          <div onClick={() => { navigate("/cart") }} className="relative cursor-pointer">
            <img src={assets.cart_icon} alt="cart-icon" className='w-8 h-8 opacity-80' />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
          </div>

          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
              Login
            </button>
          ) : (
            <div className='relative group'>
              <img src={assets.profile_icon} alt="Profile" className='w-10' />
              <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                <li onClick={() => { navigate("my-orders") }} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Right: Cart + Menu Icon */}
        <div className='flex items-center gap-6 sm:hidden'>
          <div onClick={() => { navigate("/cart") }} className="relative cursor-pointer">
            <img src={assets.cart_icon} alt="cart-icon" className='w-8 h-8 opacity-80' />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
          </div>
          <button onClick={() => setOpen(prev => !prev)}>
            <img src={assets.menu_icon} alt="menu-icon" className='w-12 h-12' />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Fullscreen Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white px-6 py-8 flex flex-col gap-4 text-sm sm:hidden overflow-auto">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
          {user && <NavLink to="/my-orders" onClick={() => setOpen(false)}>My Orders</NavLink>}
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
              Logout
            </button>
          )}
          <button
            onClick={() => setOpen(false)}
            className="mt-4 text-primary underline text-left">
            Close Menu
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
