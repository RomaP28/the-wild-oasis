import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";
// import {useNavigate} from "react-router-dom";

export function useSignUp() {
	// const navigate = useNavigate();
	
	
	const {mutate: signup, isLoading} = useMutation({
		mutationFn: () => signupApi,
		onSuccess: (user) => {
			console.log(user)
			// navigate('/dashboard', { replace: true })
			toast.success('Account successfully created! Please verify the new account from the user\'s email address')
		},
		onError: err => {
			console.log('Error', err)
			toast.error('Provided email or password are incorrect');
		}
	})
	
	return { signup, isLoading }
}