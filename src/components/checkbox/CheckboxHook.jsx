import { useController } from "react-hook-form";

const CheckboxHook = ({ control, name, text, ...props }) => {
    const { field } = useController({
        name,
        control,
    });

    return (
        <label className="cursor-pointer custom-checkbox">
            <input
                checked={field.value}
                className="hidden"
                {...field}
                id="checkbox"
                type="checkbox"
            />
            <div className="flex items-center gap-x-3">
                <div className="flex items-center justify-center w-full h-full transition-all bg-white rounded-md custom-checkbox-square">
                    <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.02233 1.09556C8.96283 1.03557 8.89205 0.987962 8.81405 0.95547C8.73606 0.922978 8.65241 0.90625 8.56793 0.90625C8.48344 0.90625 8.39979 0.922978 8.3218 0.95547C8.24381 0.987962 8.17302 1.03557 8.11353 1.09556L3.34552 5.86997L1.34232 3.86036C1.28054 3.80069 1.20762 3.75377 1.12771 3.72228C1.04781 3.69079 0.96248 3.67535 0.876604 3.67683C0.790728 3.67832 0.705986 3.6967 0.627216 3.73094C0.548446 3.76517 0.47719 3.81459 0.417517 3.87636C0.357844 3.93814 0.310924 4.01106 0.279433 4.09097C0.247942 4.17088 0.232499 4.2562 0.233985 4.34208C0.23547 4.42795 0.253856 4.5127 0.288092 4.59147C0.322328 4.67024 0.371743 4.74149 0.433517 4.80117L2.89112 7.25877C2.95062 7.31875 3.0214 7.36637 3.09939 7.39886C3.17738 7.43135 3.26103 7.44808 3.34552 7.44808C3.43001 7.44808 3.51366 7.43135 3.59165 7.39886C3.66964 7.36637 3.74042 7.31875 3.79992 7.25877L9.02233 2.03636C9.08729 1.97643 9.13913 1.90369 9.17459 1.82273C9.21006 1.74177 9.22836 1.65435 9.22836 1.56596C9.22836 1.47758 9.21006 1.39015 9.17459 1.30919C9.13913 1.22823 9.08729 1.15549 9.02233 1.09556Z"
                            fill="#FCFCFD"
                        />
                    </svg>
                </div>
                <label
                    htmlFor="checkbox"
                    className="text-sm font-semibold cursor-pointer">
                    {text}
                </label>
            </div>
        </label>
    );
};

export default CheckboxHook;
