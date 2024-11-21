import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";

export function useCabins() {
	const {isLoading, data: cabins} = useQuery({
		queryKey: ['cabin'],
		queryFn: getCabins,
	})
	return { isLoading, cabins };
}