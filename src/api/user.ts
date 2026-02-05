import { User } from "@/types/user";

export const getUser = async (): Promise<User | null> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return response.json();
    } catch (error) {
        return null
    }
}