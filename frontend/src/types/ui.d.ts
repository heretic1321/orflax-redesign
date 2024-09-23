
export type MenuItem = {
    name: string;
    subItems: { name: string, link: string,  state?: {
        subject: string;
        type: string;
        message: string;
    }; }[];
   
};