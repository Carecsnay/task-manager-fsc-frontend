import "./CustomButton.scss";
//Children é o conteúdo "customizável" que o botão irá ter, por exemplo <CustomButton>SAIR</CustomButton> o children será SAIR
const CustomButton = ({ children, onClick }) => {
    return (
        <div className="custom-button-container" onClick={onClick}>
            {children}
        </div>
    );
};

export default CustomButton;
