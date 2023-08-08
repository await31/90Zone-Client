export interface UserObj {
    Username: string;
    Email: string;
    Password: string;
}

export interface LoginObj {
    Email: string;
    Password: string;
    AccessToken: string;
    RefreshToken: string;
}