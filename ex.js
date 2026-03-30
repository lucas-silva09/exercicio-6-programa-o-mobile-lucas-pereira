const form = document.getElementById('form-cadastro');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');

const validacoes = {
    nome: (val) => val.length > 3,
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    senha: (val) => val.length >= 6,
    'confirma-senha': (val) => val === document.getElementById('senha').value && val !== ''
};

function validarCampo(input) {
    const isValid = validacoes[input.id](input.value);
    const errorSpan = input.nextElementSibling;

    if (isValid) {
        input.classList.replace('invalid', 'valid') || input.classList.add('valid');
        errorSpan.textContent = '';
    } else {
        input.classList.replace('valid', 'invalid') || input.classList.add('invalid');
        errorSpan.textContent = 'Campo inválido';
    }
    
    // Habilita o botão apenas se todos estiverem válidos
    const todosValidos = [...inputs].every(i => i.classList.contains('valid'));
    btn.disabled = !todosValidos;
}

inputs.forEach(input => {
    input.addEventListener('input', () => validarCampo(input));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});
