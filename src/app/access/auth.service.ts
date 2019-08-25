import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class AuthService {

    public token_id: string;

    constructor(private router: Router) {}

    public registerUser(user: User): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res: any) => {
                delete user.password;
                firebase.database().ref(`user_details/${btoa(user.email)}`)
                    .set(user)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }

    public authUser(email: string, password: string): void {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken;
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}