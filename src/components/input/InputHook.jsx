import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const InputHook = ({ control, name, ...props }) => {
    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });
    return <input {...field} {...props}></input>;
};

export default InputHook;
