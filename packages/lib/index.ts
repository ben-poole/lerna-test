export interface User {
    id: string;
    name: string;
}

export const helperFunction = async (): Promise<User> => {
    
    const user: User = {
        id: "123",
        name: "bennyyy-User1"
    }

    return user;
}

export default User 
