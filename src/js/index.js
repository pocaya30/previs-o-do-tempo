const chaveDaApi = "84df65056d2443ad87225721242403";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.querySelector("#input-busca").value;

    if(!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);

    if(dados) preecherDadosNaTela(dados, cidade);

});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if(resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function preecherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;


    document.querySelector("#cidade").textContent = cidade;

    document.querySelector("#temperatura").textContent = `${temperatura} °C`;

    document.querySelector("#condicao").textContent = condicao;

    document.querySelector("#humidade").textContent = `${humidade}%`;

    document.querySelector("#velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;

    document.querySelector("#icone-condicao").setAttribute("src", iconeCondicao);
}
