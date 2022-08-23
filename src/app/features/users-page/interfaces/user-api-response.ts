export interface UserApiResponse {
    results: UserApi[];
}

interface UserApi {
    name: Name;
    location: Location;
    email: string;
    dob: Dob;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Street {
    number: number;
    name: string;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Dob {
    date: string;
    age: number;
}

interface Id {
    name: string;
    value: null;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
