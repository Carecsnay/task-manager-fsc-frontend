import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <>
            {/* label pode ser dinâmica (pode ser email ou senha por exemplo) */}
            <div className="custom-input-container">
                <input type="text" value={value} className="custom-input" onChange={(e) => onChange(e)} />{" "}
                {/*Pegando o valor do estado do on change do addTask e guardando, o value serve para atualizar o input quando tiver uma nova tarefa (limpa input) se tiver uma label e existir alguma coisa mela vai utilizar a classe shrink se não tiver uma label ela não vai mostrar nada "null" a label sempre tem a classe custom-input-label = caso tenha label + alguma coisa -> shrink custom-input-label*/}
                {label ? (
                    <label className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}>{label}</label>
                ) : null}
            </div>
        </>
    );
};

export default CustomInput;
