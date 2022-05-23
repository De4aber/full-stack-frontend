import { createContext, useContext } from "react";
import {AuthStore} from "./authStore";


export const store = {
    authStore: new AuthStore()
};

export const StoreContext = createContext({});

export function useStore(){
    return useContext(StoreContext);
}