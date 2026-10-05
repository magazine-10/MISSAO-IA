const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto:
          "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao: [
          "Você utiliza a IA como ferramenta de pesquisa, mas busca compreender as informações.",
          "Você utiliza a tecnologia como apoio para aprender e desenvolver seu trabalho."
        ]
      },
      {
        texto:
          "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao: [
          "Você prefere realizar a pesquisa utilizando diferentes fontes e seus próprios conhecimentos.",
          "Você valoriza a busca por informações variadas para construir seu próprio entendimento."
        ]
      }
    ]
  },

  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto:
          "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: [
          "Você acredita que a IA pode criar novas oportunidades e ajudar no desenvolvimento das habilidades humanas.",
          "Você vê a tecnologia como uma ferramenta que pode contribuir para o crescimento profissional das pessoas."
        ]
      },
      {
        texto:
          "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
        afirmacao: [
          "Você demonstra preocupação com os impactos da IA sobre os empregos e a proteção dos trabalhadores.",
          "Você acredita que é importante encontrar maneiras de proteger as pessoas diante das mudanças causadas pela tecnologia."
        ]
      }
    ]
  },

  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto:
          "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: [
          "Você prefere criar a imagem utilizando ferramentas tradicionais de desenho.",
          "Você valoriza o uso de ferramentas que permitem criar imagens de maneira manual e criativa."
        ]
      },
      {
        texto:
          "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: [
          "Você decide utilizar um gerador de imagens baseado em Inteligência Artificial.",
          "Você utiliza a tecnologia para explorar novas formas de criação e produção de imagens."
        ]
      }
    ]
  },

  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto:
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: [
          "Você considera que utilizar o texto produzido pela IA é uma forma suficiente de contribuição.",
          "Você acredita que a utilização da IA pode facilitar a realização do trabalho em grupo."
        ]
      },
      {
        texto:
          "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao: [
          "Você entende que a IA pode ajudar, mas considera essencial revisar as informações e acrescentar conhecimentos próprios.",
          "Você acredita que a participação humana é importante para garantir que o trabalho tenha qualidade e informações corretas."
        ]
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas();
}

function mostraAlternativas() {
  caixaAlternativas.textContent = "";

  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;

  historiaFinal += afirmacao.join(" ") + " ";

  atual++;

  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";

  textoResultado.textContent = historiaFinal;

  caixaAlternativas.textContent = "";

  caixaResultado.style.display = "block";
}

mostraPergunta();
