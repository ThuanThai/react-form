import { useForm, useWatch } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("Please enter your Username"),
    email: yup
        .string()
        .email("Please enter valid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Minimum eight characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
                message:
                    "At least one uppercase letter, one lowercase letter, one number and one special character",
            }
        )
        .required("Please enter your password"),
    gender: yup
        .string()
        .required("Please choose select gender")
        .oneOf(["male", "female"]),
    job: yup.string().required("Please select your job"),
    term: yup
        .boolean()
        .oneOf([true], "Please accept with the terms and condition"),
});

const dropdownData = [
    {
        id: 1,
        value: "teacher",
        text: "Teacher",
    },
    {
        id: 2,
        value: "developer",
        text: "Developer",
    },
    {
        id: 3,
        value: "doctor",
        text: "Doctor",
    },
    {
        id: 4,
        value: "constructor",
        text: "Constructor",
        term: false,
    },
];

const RegisterFormHook = () => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isValid, isSubmitting },
        reset,
        watch,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            job: "",
            term: false,
            gender: "male",
        },
    });

    const onSubmitHandler = (value) => {
        if (!isValid) return;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                reset({
                    username: "",
                    email: "",
                    password: "",
                    term: false,
                    gender: "male",
                    job: "",
                });
            }, 2000);
        });
    };

    const watchGender = watch("gender");
    console.log(
        "🚀 ~ file: RegisterFormHook.jsx:94 ~ RegisterFormHook ~ watch:",
        watchGender
    );

    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-[300px] mx-auto my-10">
            <div className="flex flex-col gap-3 mb-5">
                <label className="font-semibold text-md" htmlFor="username">
                    Username
                </label>
                <InputHook
                    control={control}
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    type="text"
                    className="p-3 transition-all rounded-md outline-none focus:border-blue-500 focus:border"></InputHook>
                {errors.username && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.username.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="font-semibold text-md" htmlFor="email">
                    Email
                </label>
                <InputHook
                    control={control}
                    name="email"
                    id="email"
                    placeholder="Enter your Email Address"
                    type="email"
                    className="p-3 transition-all rounded-md outline-none focus:border-blue-500 focus:border"></InputHook>
                {errors.email && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="font-semibold text-md" htmlFor="password">
                    Password
                </label>
                <InputHook
                    control={control}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    className="p-3 transition-all rounded-md outline-none focus:border-blue-500 focus:border"></InputHook>
                {errors.password && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="font-semibold cursor-pointer text-md">
                    Gender
                </label>
                <div className="flex items-center gap-x-5">
                    <div className="flex items-center gap-x-3">
                        <RadioHook
                            checked={watchGender === "male"}
                            value="male"
                            control={control}
                            name="gender"
                            id="gender-male"></RadioHook>
                        <label htmlFor="gender-male">Male</label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <RadioHook
                            checked={watchGender === "female"}
                            value="female"
                            control={control}
                            name="gender"
                            id="gender-female"></RadioHook>
                        <label htmlFor="gender-female">Female</label>
                    </div>
                </div>
                {errors.gender && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.gender.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="font-semibold cursor-pointer text-md">
                    Are you
                </label>
                <DropdownHook
                    title="Select your job"
                    setValue={setValue}
                    name="job"
                    control={control}
                    data={dropdownData}></DropdownHook>
                {errors.job && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.job.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <CheckboxHook
                    defaultChecked={false}
                    name="term"
                    control={control}
                    text="I accept the terms and conditions"></CheckboxHook>
                {errors.term && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.term.message}
                    </p>
                )}
            </div>
            <button
                disabled={isSubmitting}
                className={`w-full p-3 text-base font-semibold text-white bg-blue-500 rounded-md ${
                    isSubmitting ? "opacity-50" : ""
                }`}>
                {isSubmitting ? (
                    <div className="w-5 h-5 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
};

export default RegisterFormHook;
