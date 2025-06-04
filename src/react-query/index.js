import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router';
import { login, register,logout, getUserInfo } from "@/api/fireAuth";



export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (_, variables) => {
      const { redirect } = variables || {};
      queryClient.invalidateQueries(['userInfo']);
      // Redirect to the specified path after successful login
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,
    onSuccess: (_, variables) => {
      const { redirect } = variables;
      queryClient.invalidateQueries(['userInfo']);      
      // Redirect to the specified path after successful login
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    },
  });
};



export const useUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    initialData: null,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout, 
    onSuccess: () => {
      queryClient.removeQueries(['userInfo']); 
      navigate("/auth/login");    
    },
  });
};