import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { logout as logoutApi } from "../../services/apiAuth.js";

export function useLogout() {
	const queryClient = useQueryClient()
	const navigate = useNavigate();
	
	const { mutate: logout, isLoading } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.removeQueries();
			navigate('/login', { replace: true })
		},
		onError: err => {
			console.log('Error', err)
			toast.error('Provided email or password are incorrect');
		}
	})
	
	return { logout, isLoading }
}