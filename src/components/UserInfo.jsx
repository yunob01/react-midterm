import { User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useUserInfo } from '@/react-query/index.js';

export default function UserInfo(props) {
   const navigate = useNavigate();
   const { data: userInfo } = useUserInfo();
   const goToProfile = () => {
      if (userInfo?.email)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };
   const userName = userInfo?.displayName || userInfo?.email?.split("@")[0] || "Login";

   return (
      <nav
         onClick={goToProfile}
         style={{ ...props.style }}
         className="cursor-pointer flex flex-col items-center group"
      >
         <User className="w-8 h-auto sm:w-10 text-current group-hover:scale-105 transition-transform" />
         <p className="hidden sm:block text-xs text-secondary-text mt-1">
            {userName}
         </p>
      </nav>
   );
}