import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

export class DatabaseService {

    public addPost(post: any): void {
        
        let nameImage = Date.now();
        
        firebase.storage().ref()
            .child(`images/${nameImage}`)
            .put(post.image)

        firebase.database().ref(`posts/${btoa(post.email)}`)
            .push({title: post.title})
    }
    
}