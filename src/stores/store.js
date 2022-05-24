import { createContext, useContext } from "react";
import cappsuleService from "../services/cappsuleService";
import { AuthStore } from "./authStore";
import { CappsuleStore } from "./cappsuleStore";


export const storesContext = createContext({
    authStore: new AuthStore(),
    cappsuleStore: new CappsuleStore()
});

export const useStores = () => useContext(storesContext);