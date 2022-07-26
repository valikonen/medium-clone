import { Injectable } from "@angular/core";

Injectable()
export class PersistanceService {

    set(key: string, data: unknown): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch(err) {
            console.error('Error saving in local stoarge: ', err)
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch(err) {
            console.error('Error saving in local stoarge: ', err);
            return null;
        }
    }
}