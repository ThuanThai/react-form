/* eslint-disable react/prop-types */
import { useWatch } from "react-hook-form";
import useClickOutside from "../../hooks/useClickOutside";
import { useEffect, useState } from "react";

const DropdownHook = ({ control, name, setValue, data, title }) => {
    const { state, setState, nodeRef } = useClickOutside();

    // eslint-disable-next-line no-unused-vars
    const jobVal = useWatch({
        name,
        control,
        defaultValue: "",
    });
    const [label, setLabel] = useState(title);

    const handleClickDropdownItem = (e) => {
        setLabel(e.target.textContent);
        setValue(name, e.target.dataset.value);
    };

    useEffect(() => {
        if (jobVal === "") {
            setLabel(title);
        }
    }, [jobVal]);

    return (
        <div
            onClick={() => setState((prev) => !prev)}
            ref={nodeRef}
            className="relative">
            <div className="p-3 bg-white rounded-md cursor-pointer select-none">
                <span>{label}</span>
            </div>
            <div
                className={`absolute left-0 w-full mt-1 bg-white rounded-md top-full ${
                    state ? "" : "opacity-0 invisible"
                }`}>
                {data &&
                    data.length > 0 &&
                    data.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <div
                            key={item.id}
                            onClick={handleClickDropdownItem}
                            data-value={item.value}
                            className="p-3 cursor-pointer select-none hover:bg-gray-100">
                            {item.text}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DropdownHook;
