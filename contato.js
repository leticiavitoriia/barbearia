const form = document.getElementById('agendamento-form');
const listaAgendamentos = document.getElementById('lista-agendamentos');

form.onsubmit = function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const dataAgendamento = document.getElementById('data-agendamento').value;
    const horario = document.getElementById('horario').value;

  
    const dataAtual = new Date();
    const dataAgendamentoObj = new Date(dataAgendamento);

    if (dataAgendamentoObj < dataAtual.setHours(0, 0, 0, 0)) {
        alert('Erro: A data de agendamento não pode ser anterior ao dia de hoje.');
        return;
    }

    const novoAgendamento = document.createElement('li');
    novoAgendamento.textContent = `Nome: ${nome}, Data: ${dataAgendamento}, Horário: ${horario}`;
    
    listaAgendamentos.appendChild(novoAgendamento);
    
    alert('Agendamento realizado com sucesso!');
};
