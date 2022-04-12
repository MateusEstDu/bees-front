import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './css/CredentialForm.css';

export interface IUserForm {
    name: string,
    adult: boolean
}

function CredentialsForm() {
    const { setNewUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IUserForm>({
        mode: "onChange"
    });
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<IUserForm> = data => {
        //console.log(data);
        try{
            setNewUser(data)
            navigate('/dashboard')
        } catch (err){
            console.log(err)
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='TesteForm'>
            <input type={'text'} placeholder="Full name" defaultValue="" 
                {...register(
                    "name",
                    {
                        required: "Your name is required to continue!",
                        pattern: {
                            value: /[a-zA-Z]/,
                            message: 'This field only accepts letters!'
                        }
                    }
                )} 
            />
            <p>{errors.name?.message}</p>
            <input type={'checkbox'} {...register("adult", {required: "You must be over 18 years old to continue"})} />
            <label htmlFor="adult">Are you older than 18 years old?</label>
            <p>{errors.adult?.message}</p>
            <input type={'submit'} disabled={!isValid} value='Enter'/>
        </form>
    );
}

export default CredentialsForm;
