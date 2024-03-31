/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function LinkTooltip({ tooltip, url, text, styleItem, styleLink }) {
    const tooltipRef = useRef(null);

    useEffect(() => {
        const tooltip = new window.bootstrap.Tooltip(tooltipRef.current, {
            container: 'body',
            trigger: 'hover',
            placement: 'bottom',
        });

        return () => {
            tooltip.dispose();
        };
    }, []);

    const closeToggler = () => {
        document.getElementById("toggler-btn").click();
        return;
    }
    return (
        <li className={styleItem}>
            <Link ref={tooltipRef} title={tooltip} to={url}
                className={styleLink}
                onClick={closeToggler} data-bs-toggle="tooltip"
            >{text}
            </Link>
        </li>);
}

export default LinkTooltip;