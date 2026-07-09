interface ButtonType{
    children: any,
    className: string,
    onClick?: any
};

export default function Button(ButtonProps: ButtonType) {
    return(
        <button 
        className={ButtonProps.className} 
        onClick={ButtonProps.onClick}>{ButtonProps.children}</button>
    )
};