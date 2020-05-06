import axios from "axios";
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';
import './alert.css';

export const register = ({name,email,password}) => async dispatch => {
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify({name,email,password});

      try {

        const res = await axios.post(
          "http://localhost:8080/signup",
          body,
          config
        );
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
            
        });
        console.log(res.data);
        
      } catch (error) {
          console.log(error.response.data);
        const errors = [];
        errors.push(error.response.data);
        if (errors) {
            console.log(error.response.msg);
            console.log(errors);

            errors.forEach( () => dispatch(setAlert("errors.msg", 'danger')));
        }

        dispatch({
            type: REGISTER_FAILED
        });
      }

};






