import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "@/redux/cartSlice";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BasketModal({ isOpen, toggleDrawer }) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const getTotalPrice = () =>
      cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  className="fixed inset-0 bg-black/50 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => toggleDrawer(false)}
               />

               <motion.div
                  className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-content-bg p-6 shadow-lg z-40 text-content-text overflow-y-auto"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
               >
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-2xl sm:text-3xl font-semibold font-serif">Shopping Cart</h3>

                     <button
                        onClick={() => toggleDrawer(false)}
                        className="block sm:hidden text-content-text hover:opacity-100 opacity-70 focus:outline-none focus:ring-0"
                     >
                        <X size={24} strokeWidth={2} />
                     </button>
                  </div>

                  {cartItems.length === 0 ? (
                     <div className="mt-8 text-sm sm:text-base">Cart is empty</div>
                  ) : (
                     <ul className="space-y-8 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] pr-1 pt-4 pb-10">
                        {cartItems.map((item) => (
                           <li
                              key={item.id}
                              className="flex flex-row items-start justify-between gap-4"
                           >
                              <Link
                                 to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}
                                 onClick={() => toggleDrawer(false)}
                                 className="flex-shrink-0"
                              >
                                 <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 object-cover rounded-md cursor-pointer"
                                 />
                              </Link>

                              <div className="flex-1 w-full">
                                 <div className="font-semibold text-base sm:text-lg font-serif">{item.name}</div>
                                 <div className="text-xs sm:text-sm mt-2 flex items-center gap-2">
                                    Quantity
                                    <select
                                       value={item.qty}
                                       onChange={(e) =>
                                          dispatch(
                                             addCartItems({
                                                id: item.id,
                                                name: item.name,
                                                image: item.image,
                                                price: item.price,
                                                countInStock: item.countInStock,
                                                qty: Number(e.target.value),
                                             })
                                          )
                                       }
                                       className="border rounded px-2 py-1 bg-content-text text-primary font-serif"
                                    >
                                       {[...Array(item.countInStock).keys()].map((x) => (
                                          <option key={x + 1} value={x + 1}>
                                             {x + 1}
                                          </option>
                                       ))}
                                    </select>
                                 </div>
                                 <div className="flex font-semibold text-sm mt-3 justify-end">
                                    ${(item.price * item.qty).toFixed(2)}
                                 </div>
                              </div>

                              <button
                                 onClick={() => dispatch(removeCartItems(item.id))}
                                 className="text-right text-content-text opacity-60 hover:opacity-100 focus:outline-none focus:ring-0"
                              >
                                 <X size={18} strokeWidth={2} />
                              </button>
                           </li>
                        ))}
                     </ul>
                  )}

                  <div>
                     <div className="flex text-base sm:text-lg font-semibold justify-end mt-6 gap-2">
                        <span>Total:</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                     </div>

                     <div className="flex justify-center mt-4">
                        <button
                           onClick={() => {
                              toggleDrawer(false); // 關閉購物車抽屜
                              navigate("/auth/login");  // 導向登入頁
                           }}
                           className="font-bold font-serif bg-content-text text-primary text-sm sm:text-base px-6 py-2 rounded-[16px] border border-content-text transition hover:bg-transparent hover:text-content-text"
                        >
                           Check Out
                        </button>
                     </div>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
}
