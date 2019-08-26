import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class AuthService {

    public token_id: string;
    public error;

    constructor(private router: Router) {}

    public registerUser(user: User): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res: any) => {
                delete user.password;
                firebase.database().ref(`user_details/${btoa(user.email)}`)
                    .set(user)
            })
            .catch((error: Error) => {
                this.error = error;
            })
    }

    public authUser(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken;
                        localStorage.setItem('idToken', this.token_id)
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) => {
                this.error = error
            })
    }

    public authenticated(): boolean {        
        if(this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')
        }
        if(this.token_id === undefined) {
            this.router.navigate(['/'])
        }
        return this.token_id !== undefined;
    }

    public logout(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.token_id = undefined
                this.router.navigate(['/'])
            })
    }
}