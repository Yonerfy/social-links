
interface ButtonProps {
    buttonName: string;
    hrefLink: string; 
}

const Button = ({buttonName,hrefLink}: ButtonProps) => {
    return (
        <a className="button" href={hrefLink}>{buttonName}</a>
    );
}

export default Button;