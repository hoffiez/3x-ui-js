export declare const decodeUri: (uri: string) => {
    protocol: string;
    host: string;
    port: number;
    path: string;
    username: string;
    password: string;
    endpoint: string;
};
