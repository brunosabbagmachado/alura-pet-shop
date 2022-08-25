import { valida } from "./validacao";

const inputs = querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
});