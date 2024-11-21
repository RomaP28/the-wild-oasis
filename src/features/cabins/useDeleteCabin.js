import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCabin as deleteCabinApi } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useDeleteCabin() {
	const queryClient = useQueryClient();
	
	//mutating data on db with useMutation and onSuccess invalidating the cache to update the UI
	const {isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: deleteCabinApi,
		onSuccess: () => {
			toast.success('Cabin successfully deleted')
			queryClient.invalidateQueries({
				queryKey: ['cabin'],
			})
		},
		onError: (error) => {
			toast.error(error.message)
		}
	})
	
	return { isDeleting, deleteCabin };
}
