export interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
}
