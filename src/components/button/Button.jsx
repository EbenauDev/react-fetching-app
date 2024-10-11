import './button.less';

function Button({ label, onClick, color = "btn-primary", disabled = false }) {
    return <>
        <button
            className={color}
            onClick={onClick}
            disabled={disabled}>
            {label}
        </button>
    </>
}

export default Button;