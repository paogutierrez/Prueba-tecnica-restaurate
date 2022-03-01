import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import { google } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const loginEmailPassword = (email,password) =>{
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then (({user}) =>{
            dispatch(
                loginSincrono(user.uid,user.displayName)
            )
            Swal.fire('Bienvenid@')
        })
        .catch(e => {
            console.log(e);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Aun no tienes cuenta con nosotros',
              })
        })
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);

        })
    }
}

export const loginSincrono = (id, displayName) => {

    return{
        type: types.login, 
        payload: {
            id, 
            displayName
        }
    }
}