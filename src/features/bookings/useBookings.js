import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";

export function useBookings() {
	const {isLoading, error, data: bookings} = useQuery({
		queryKey: ['bookings'],
		queryFn: getBookings,
	})
	console.log(bookings)
	return { isLoading, error, bookings };
}