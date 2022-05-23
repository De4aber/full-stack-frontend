import {makeAutoObservable, action, observable } from "mobx";
import authService from "../services/authService";

export class AuthStore{
    user;

    attemptLogin = async (user) =>{
        localStorage.clear();
        const response = await authService.attemptLogin(user)
        this.user =  this.getUser(response.data.id)
    }

    getUser = async (id) => {
        const response = await authService.getUser(id)
        this.user = response.data
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