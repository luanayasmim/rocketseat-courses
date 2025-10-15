import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../helpers/api";
import type { User } from "../models/user";

export default function useUsers(){
    const queryKey = 'users';
    const {data, isLoading} = useQuery<User[]>({
        queryKey:[queryKey],
        queryFn:() => fetcher(queryKey),
    });

    return{
        users: data || [],
        isLoadingUsers: isLoading,
    }
}