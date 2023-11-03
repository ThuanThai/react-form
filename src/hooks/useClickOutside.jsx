import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom = "button") {
    const [state, setState] = useState(false);
    const nodeRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                nodeRef &&
                !nodeRef.current.contains(e.target) &&
                !nodeRef.current.matches(dom)
            ) {
                setState(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dom]);
    return { state, setState, nodeRef };
}
