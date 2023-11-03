import { useController } from "react-hook-form";

const RadioHook = ({ control, name, ...props }) => {
    const { field } = useController({
        name,
        control,
    });
    return (
        <label className="cursor-pointer custom-radio">
            <input
                className="hidden"
                {...field}
                value={props.value}
                type="radio"
                {...props}
            />
            <div className="w-full h-full bg-white rounded-full"></div>
        </label>
    );
};

export default RadioHook;
