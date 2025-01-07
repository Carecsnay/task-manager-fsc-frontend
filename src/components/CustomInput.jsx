const CustomInput = (label, value) => {
    return (
        <>
            {/* label pode ser dinâmica (pode ser email ou senha por exemplo) */}
            <div className="custom-input-container">
                <input type="text" className="custom-input" />
                {/* se tiver uma label e existir alguma coisa mela vai utilizar a classe shrink se não tiver uma label ela não vai mostrar nada "null" a label sempre tem a classe custom-input-label = caso tenha label + alguma coisa -> shrink custom-input-label*/}
                {label ? <label className={`${value.length !== "" ? "shrink" : ""}custom-input-label`}></label> : null}
            </div>
        </>
    );
};

export default CustomInput;
