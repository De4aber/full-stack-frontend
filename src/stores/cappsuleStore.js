import {makeAutoObservable, action, observable } from "mobx";
import cappsuleService from "../services/cappsuleService";

export class CappsuleStore{
    cappsules = [];

    getCappsules = async (id) =>{
        const response = await cappsuleService.getCappsules(id)
        this.cappsules = response.data
        console.log(this.cappsules);
    }

    constructor() {
        makeAutoObservable(this, {
            cappsules: observable,
            getCappsules: action
        });
    }
}