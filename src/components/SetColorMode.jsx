import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { selectLightMode, setColorMode } from "@/redux/colorSlice";

export default function SetColorMode() {
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
      if (lightMode) {
         document.documentElement.setAttribute('data-theme', 'dark');
       } else {
         document.documentElement.setAttribute('data-theme', 'light');
       }
   }

   return (
      <div onClick={toggleColor} className="cursor-pointer" >
         {
            lightMode ? (
               <Sun className="w-8 h-auto sm:w-10 text-current hover:scale-105 transition-transform" />
            ) : (
               <Moon className="w-8 h-auto sm:w-10 text-current hover:scale-105 transition-transform" /> 
            )
         }
      </div>
   );
}