import {makeAutoObservable, action, observable } from "mobx";
import authService from "../services/authService";

export class AuthStore{
    user;

    attemptLogin = async (user) =>{
        localStorage.clear();
        const response = await authService.attemptLogin(user)
        return await this.getUser(response.data.userId)
    }

    getUser = async (id) => {
        const response = await authService.getUser(id)
        this.user = response.data
        localStorage.setItem("user", JSON.stringify(this.user))
    }

    test = () => {
        
        return this.user
    }

    attemptRegister = async (user) =>{
        const response = await authService.attemptRegister(user)
        this.user = response.data;
    }

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            attemptLogin: action,
            attemptRegister: action,
            getUser: action
        });
    }
}