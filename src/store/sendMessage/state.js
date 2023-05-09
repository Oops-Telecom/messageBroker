export default function () {
  return {
    optionsCity: ["Arapiraca", "Palmeira dos Índios", "Batalha"],
    optionsStatus: [
      "Liberado",
      "Liberado (Com resttrições)",
      "Bloqueado (Pendência Financeira)",
      "Bloqueado (Situação Contratual)",
      "Bloqueado (Contrato Em ativação)",
      "Desconhecido: Sem ponto de acesso configurado",
      "Bloqueado (Manualmente)"
    ],
    optionsDay: ["01", "05", "07", "10", "15", "22", "25"],
    optionsSituation: ["Em Ativação", "Ativo", "Congelado", "Cancelado", "Cancelado (Pendência Financeira)"],
    dataContacts: [
      {
        id: "01",
        name: "Tiago",
        status: "Liberado",
        situation: "Ativo",
        number: "82999448308",
        city: "arapiraca",
        dateActivation: "01/01/2022",
        dateCancel: "05/03/2023",
        dateBirth: "01/08/1985",
        dayPay: "10",
        send: "Falhou"
      },
      {
        id: "02",
        name: "Lucas",
        status: "Liberado",
        situation: "Ativo",
        number: "82999448308",
        city: "arapiraca",
        dateActivation: "01/01/2022",
        dateCancel: "05/03/2023",
        dateBirth: "01/08/1985",
        dayPay: "05",
        send: "Ok"
      },
      {
        id: "03",
        name: "Jullio",
        status: "Liberado",
        situation: "Ativo",
        number: "82999448308",
        city: "arapiraca",
        dateActivation: "01/01/2022",
        dateCancel: "05/03/2023",
        dateBirth: "01/08/1985",
        dayPay: "07",
        send: "Aguardando"
      },
      {
        id: "04",
        name: "Gabriel",
        status: "Liberado",
        situation: "Ativo",
        number: "82999448308",
        city: "arapiraca",
        dateActivation: "01/01/2022",
        dateCancel: "05/03/2023",
        dateBirth: "01/08/1985",
        dayPay: "10",
        send: "Ok"
      },
      {
        id: "05",
        name: "Marilia",
        status: "Liberado",
        situation: "Ativo",
        number: "82999448308",
        city: "arapiraca",
        dateActivation: "01/01/2022",
        dateCancel: "05/03/2023",
        dateBirth: "01/08/1985",
        dayPay: "10",
        send: "Ok"
      }
    ],
    columns: [
      {
        name: 'id',
        required: true,
        label: 'Código',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'name', align: 'center', label: 'Nome', field: 'name', sortable: true },
      { name: 'status', label: 'Status', field: 'status', sortable: true },
      { name: 'situation', label: 'Situação', field: 'situation', sortable: true },
      { name: 'number', label: 'Telefone', field: 'number', sortable: true },
      { name: 'city', label: 'Cidade', field: 'city', sortable: true },
      { name: 'dateActivation', label: 'Data de ativação', field: 'dateActivation', sortable: true },
      { name: 'dateCancel', label: 'Data de Cancelamento', field: 'dateCancel', sortable: true },
      { name: 'dateBirth', label: 'Data de Nascimento', field: 'dateBirth', sortable: true },
      { name: 'dayPay', label: 'Dia de vencimento', field: 'dayPay', sortable: true },
      { name: 'send', label: 'Envio', field: 'send', sortable: true }
    ]
  }
}
