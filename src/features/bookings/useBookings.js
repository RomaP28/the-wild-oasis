import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useBookings() {
	const [searchParams] = useSearchParams();
	
	const filterValue = searchParams.get('status');
	const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue };
	
	
	const {isLoading, error, data: bookings} = useQuery({
		queryKey: ['bookings', filter],
		queryFn: () => getBookings({ filter }),
	})
	console.log(bookings)
	return { isLoading, error, bookings };
}