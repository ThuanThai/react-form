import { useController } from "react-hook-form";

const RadioHook = ({ control, name, value, ...props }) => {
    const { field } = useController({
        name,
        control,
    });
    return (
        <label className="cursor-pointer custom-radio">
            <input
                {...props}
                {...field}
                className="hidden"
                value={value}
                type="radio"
            />
            <div className="w-full h-full bg-white rounded-full"></div>
        </label>
    );
};

export default RadioHook;
