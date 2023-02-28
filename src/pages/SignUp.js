import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../components/Authentication/firebase.init';
import Loading from '../components/Alerts/Loading';

const SignUp = () => {

    // New user create function from Firebase
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true }
    );

    // React Hook Form function
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // Handling the user create form submission
    const onSubmit = async data => {
        if (data?.password === data?.confirmpass) {
            await createUserWithEmailAndPassword(data.email, data.password);
            reset();
        } else {
            Swal.fire(
                'Error',
                'Your password did not matched',
                'error'
            )
        }
    };

    // After completing the signup process, it will navigate main route
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    // Notification after success
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [from, navigate, user]);

    // Error massage
    useEffect(() => {
        if (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [error])

    return (
        <>
            {
                loading ?

                    <Loading />

                    :
                    <section className="">
                        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                            <aside
                                className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                            >
                                <img
                                    alt="Pattern"
                                    src="https://images.unsplash.com/photo-1605106901227-991bd663255c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </aside>

                            <main
                                aria-label="Main"
                                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 p-0"
                            >
                                <div className="max-w-xl lg:max-w-3xl">

                                    <h1
                                        className="mt-6 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl"
                                    >
                                        Welcome to Dashboard Pro
                                    </h1>

                                    <p className="my-6 leading-relaxed text-neutral-900">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                        dolorum aliquam, quibusdam aperiam voluptatum.
                                    </p>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered input-primary text-black" {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: "Provide a valid email"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered input-primary text-black" {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required"
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters required"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input type="password" placeholder="Confirm your password" className="input input-bordered input-primary text-black" {...register("confirmpass", {
                                                required: {
                                                    value: true,
                                                    message: "Confirm Password is required"
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters required"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.confirmpass?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                                                {errors.confirmpass?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                                            </label>
                                        </div>

                                        <input type="submit" value='Create A New Account' className="btn btn-primary text-white capitalize w-full mt-3" />
                                    </form>

                                </div>
                            </main>
                        </div>
                    </section>
            }
        </>
    );
};

export default SignUp;