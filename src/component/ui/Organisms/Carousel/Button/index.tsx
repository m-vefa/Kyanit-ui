import './icon.scss';

type Props = {
    type: "previous" | "next";
    handleClick: () => void;
};

const Button: React.FC<Props> = ({
    type,
    handleClick
}) => {
    return (
        <button
            className={`arrow ${type === 'previous' ? 'prev' : 'next'}`}
            onClick={handleClick}>

           
        </button>

    );
};

export default Button;