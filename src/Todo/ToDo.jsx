import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade, id: id
        }]);
        setId(id + 1)
        console.log(lista)

    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((Lista) => {
            if (Lista.id !== id) {
                auxLista.push(Lista);
            }
        });
        setLista(auxLista);
    }
   
    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>Adicionar</button>
            </form>
            {lista.map((ativ)=>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                    
                </ul>

            )}
           
        </div>
    );
}