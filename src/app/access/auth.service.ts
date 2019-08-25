import { User } from './user.model';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export class AuthService {
    public registerUser(user: User): void {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((data: any) => {
                delete user.password;
                firebase.database().ref(`user_details/${btoa(user.email)}`)
                    .set(user)
            })
            .catch((error: Error) => {
                console.log(error)
            })

    }

    public authUser(email: string, password: string): void {
        console.log(email, password)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data: any) => {
                console.log(data)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}