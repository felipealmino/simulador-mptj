// Arquivo: questoes.js
// Banco de Dados Oficial Expandido (Múltipla Escolha + Certo/Errado)

// ---------------------------------------------------------
// 1. DISCIPLINAS COMUNS (USO CRUZADO ENTRE CARGOS)
// ---------------------------------------------------------

const banco_pt = [
    { 
        topic: "Ortografia Oficial", 
        supportText: "",
        q: "Com base nas regras do Novo Acordo Ortográfico da Língua Portuguesa, assinale a alternativa em que o emprego do hífen está totalmente adequado:", 
        options: ["auto-conhecimento e co-reflexão.", "autoavaliação, coexistência e releitura.", "infra-estrutura e auto-estima.", "pré-requisitos e meio-ambiente.", "anti-social e micro-ondas."], 
        answer: 1, 
        disclaimer: "Prefixos terminados em vogal unem-se sem hífen à palavra seguinte se esta começar por consoante diferente de 'r' ou 's' (autoavaliação). O prefixo 'co' aglutina-se em regra (coexistência)." 
    },
    { 
        topic: "Concordância Verbal", 
        supportText: "",
        q: "O verbo indicado entre parênteses deverá flexionar-se numa forma do PLURAL para integrar adequadamente a frase:", 
        options: [
            "Não (poder) mesmo caber aos médicos tentar responder às questões metafísicas que nos afligem.", 
            "Às vezes se (apresentar) para um ser humano aflito questões que ele está longe de poder responder.", 
            "As iniciativas que (tomar), por sua boa vontade, um médico dedicado, nem sempre nos consolam.", 
            "Não se (dever) imaginar que as perguntas que são hoje irrespondíveis o sejam para sempre.", 
            "Mesmo os médicos a quem se (dedicar) todo o respeito pela competência não são oniscientes."
        ], 
        answer: 1, 
        disclaimer: "Na voz passiva sintética, o verbo concorda com o sujeito paciente posposto ('questões'): 'Às vezes se apresentam [...] questões'." 
    },
    { 
        topic: "Correlação Verbal e Concordância", 
        supportText: "",
        q: "Há adequada correlação entre os tempos verbais e pleno atendimento às normas de concordância na frase:", 
        options: [
            "Houvesse no gato e no cachorro outros atributos característicos desses animais, não seria aceitável a analogia que faz o ditado chinês.", 
            "Caso não se compreenda bem as distinções entre prosa e poesia, não seria fácil distinguir entre as alusões que o ditado chinês faz.", 
            "As atribuições em que se empenham o ditado chinês para distinguir entre cachorro e gato dificilmente fossem compreensíveis.", 
            "Se o cachorro encarnasse alguns dos atributos da poesia e o gato alguns da prosa, o ditado chinês poderá ser contestado.", 
            "À medida que fôssemos observando o comportamento do cachorro e do gato, seremos levados a concordar com o que se asseguram nas palavras."
        ], 
        answer: 0, 
        disclaimer: "O verbo 'haver' no sentido de existir é impessoal ('Houvesse') e correlaciona-se perfeitamente com o futuro do pretérito ('seria')." 
    },
    { 
        topic: "Pontuação", 
        supportText: "",
        q: "Está plenamente adequada a pontuação da seguinte frase:", 
        options: [
            "Não é comum note-se bem, que alguém considere a loucura, para além da mera insanidade, vendo nela uma possibilidade criativa embora pouco explorada, da nossa imaginação.", 
            "Não é comum note-se bem que alguém considere, a loucura, para além da mera insanidade: vendo nela uma possibilidade criativa, embora pouco explorada, da nossa imaginação.", 
            "Não é comum, note-se bem, que alguém considere a loucura, para além da mera insanidade, vendo nela, uma possibilidade criativa embora pouco explorada, da nossa imaginação.", 
            "Não é comum: note-se bem que alguém considere a loucura, para além da mera insanidade, vendo nela uma possibilidade criativa embora pouco explorada da nossa imaginação.", 
            "Não é comum, note-se bem, que alguém considere a loucura para além da mera insanidade, vendo nela uma possibilidade criativa, embora pouco explorada, da nossa imaginação."
        ], 
        answer: 4, 
        disclaimer: "A alternativa E isola corretamente as expressões intercaladas ('note-se bem' e 'embora pouco explorada') sem separar o verbo do seu objeto direto." 
    },
    { 
        topic: "Crase", 
        supportText: "",
        q: "Assinale a alternativa em que o emprego do sinal indicativo de crase está em pleno acordo com a norma-padrão:", 
        options: [
            "O promotor dirigiu-se à Vossa Excelência com extremo respeito.", 
            "A sessão extraordinária terá início exatamente às quatorze horas.", 
            "Os autos foram remetidos à uma comarca do interior.", 
            "O servidor passou à analisar os documentos pendentes.", 
            "As testemunhas ficaram frente à frente durante a acareação."
        ], 
        answer: 1, 
        disclaimer: "Usa-se crase na indicação exata de horas ('às quatorze horas'). Não ocorre crase antes de pronomes de tratamento, artigos indefinidos ('uma'), verbos ('analisar') ou palavras repetidas ('frente a frente')." 
    },
    { 
        topic: "Regência Verbal e Nominal", 
        supportText: "",
        q: "Segundo a norma-padrão, a regência verbal e o emprego do pronome relativo estão corretos em:", 
        options: [
            "O cargo o qual o candidato tanto aspira exige dedicação exclusiva.", 
            "A diretriz a que os servidores devem obedecer foi publicada hoje.", 
            "O processo cujo o teor é sigiloso tramita na vara criminal.", 
            "As provas que o promotor se referiu na denúncia são robustas.", 
            "Prefiro mais atuar na área cível do que na esfera administrativa."
        ], 
        answer: 1, 
        disclaimer: "O verbo 'obedecer' é transitivo indireto e rege a preposição 'a' ('obedecer à diretriz' -> 'a diretriz a que devem obedecer')." 
    },
    { 
        topic: "Colocação Pronominal", 
        supportText: "",
        q: "De acordo com as regras de colocação pronominal da norma culta, assinale a frase correta:", 
        options: [
            "Jamais afastar-me-ei dos deveres éticos inerentes à função pública.", 
            "Me entregaram o relatório de auditoria fora do prazo estipulado.", 
            "Quando encerraram-se os debates, o colegiado proferiu a decisão.", 
            "Não se tratando de matéria urgente, o parecer seguirá o fluxo ordinário.", 
            "Os autos tinham extraviado-se antes da remessa ao tribunal."
        ], 
        answer: 3, 
        disclaimer: "O advérbio de negação ('Não') é palavra atrativa e exige a próclise ('Não se tratando'). Não se usa mesóclise com palavra atrativa antes ('Jamais me afastarei'), nem se inicia período com pronome oblíquo átono." 
    },
    { 
        topic: "Vozes do Verbo", 
        type: "vf",
        supportText: "",
        q: "Na frase 'Revisaram-se todos os contratos administrativos do setor', o verbo encontra-se na voz passiva sintética e o termo 'todos os contratos administrativos do setor' exerce a função de sujeito paciente.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O pronome 'se' atua como partícula apassivadora de um verbo transitivo direto ('revisar'), equivalendo a 'Todos os contratos administrativos foram revisados'." 
    },
    { 
        topic: "Conjunções", 
        type: "vf",
        supportText: "",
        q: "No período 'Conquanto houvesse divergência doutrinária, o parecer ministerial foi acolhido integralmente', a conjunção 'Conquanto' introduz uma ideia de conclusão, podendo ser substituída por 'Portanto' sem alteração de sentido.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. 'Conquanto' é uma conjunção subordinativa adverbial CONCESSIVA (equivale a 'embora', 'ainda que'), e não conclusiva." 
    },
    {
        topic: "Semântica e Vocabulário",
        supportText: "Uma simples folha de papel... Ontem, num programa de TV, discutíamos entre escritores e jornalistas o drama do papel em branco na máquina e, diante dele, o pobre de nós que espreme o juízo até produzir qualquer coisa que encha as laudas necessárias e possa ir para a impressão. Acho que essa angústia existe desde que o primeiro escriba de cuneiforme, na Mesopotâmia, ficava aflito por uma ideia a gravar no tijolinho fresco, e depressa, antes que o barro secasse. Ou o emissário real, no Egito, diante do papiro virgem, rabiscando tentativamente um começo de hieróglifo sem saber o que contar na mensagem para o Faraó.<br>O curioso é que nem sempre, desse esforço de última hora, sai um resultado pífio. Às vezes, depois de minutos e minutos de indecisão e bloqueio, brota de repente uma ideia que é um clarão, o escriba bate freneticamente na máquina, tentando forçar os dedos a uma marcha mais veloz que a dos miolos; e em pouco ele entrega à oficina a sua melhor matéria do mês. Quando esse branco se dá na produção de livro, não tem tanta importância. O romance espera, o conto espera. E o poema só nasce na hora que quer. O jornal que vive à custa do cotidiano e é voraz por fatos atuais e comentários sobre esses fatos, mal se consolando com projeções sobre o futuro ou meditações sobre o passado, o jornal é que é o grande tirano. Ele é como um alto forno de usina siderúrgica que não pode se apagar nunca e exige, dia e noite, combustível, minério, e a atenção infatigável dos seus alimentadores e manobreiros.<br>Aliás, para fazer justiça, não é propriamente o jornal o nosso tirano. O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera, e por isso a bajulamos, hesitamos num fraseado, trocamos um verbo mais incisivo por outro mais ameno, polvilhamos com um sal de malícia qualquer flagrante inocente, descobrimos interpretações sutis ou sibilinas para o que seria apenas massudo e incolor, sem o nosso intempestivo inuendo. Mas quanto equilíbrio e cuidados são necessários para não transpor o frágil limite da verdade dos fatos e não cair no perigoso terreno da invenção! Às vezes, basta insinuar que o figurão sorriu antes da sua resposta e se derruba todo um laborioso esforço de credibilidade, em hora de crise política.<br>(Adaptado de: RACHEL de Queiroz, 1990)",
        q: "O adjetivo sublinhado está corretamente traduzido pelo que se encontra entre parênteses em:",
        options: [
            "interpretações sutis ou <u>sibilinas</u> (precisas)",
            "um resultado <u>pífio</u> (grandioso)",
            "a folha <u>enfadonha</u> (monótona)",
            "atenção <u>infatigável</u> (cansativa)",
            "um verbo mais <u>incisivo</u> (ambíguo)"
        ],
        answer: 2,
        disclaimer: "O adjetivo 'enfadonha' significa aquilo que causa enfado, tédio ou aborrecimento, sendo sinônimo direto de 'monótona'. 'Sibilinas' significa enigmáticas/obscuras; 'pífio' significa desprezível/vil; 'infatigável' significa incansável; e 'incisivo' significa direto/categórico."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Leia o terceiro parágrafo da crônica de Rachel de Queiroz:<br>Aliás, para fazer justiça, não é propriamente o jornal o nosso tirano. O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera, e por isso a bajulamos, hesitamos num fraseado, trocamos um verbo mais incisivo por outro mais ameno...",
        q: "O trecho em que a cronista indica que os escritores se submetem ao julgamento do público está em:",
        options: [
            "o frágil limite da verdade.",
            "Nessa trêmula serventia.",
            "perigoso terreno da invenção.",
            "bate freneticamente na máquina.",
            "E o poema só nasce na hora que quer."
        ],
        answer: 1,
        disclaimer: "A expressão 'Nessa trêmula serventia' retoma a condição de submissão e servidão temerosa dos escritores diante do público ('o déspota implacável', 'a fera'), que julga, aplaude ou descarta o trabalho jornalístico."
    },
    {
        topic: "Sintaxe e Partícula Expletiva",
        supportText: "",
        q: "Sem que nenhuma outra alteração seja feita e sem prejuízo para a correção gramatical, o trecho que pode ser removido da frase está sublinhado em:",
        options: [
            "o jornal <u>é que</u> é o grande tirano",
            "vivemos todos <u>os que</u> dependemos da fera",
            "Ontem, <u>num programa de TV</u>, discutíamos",
            "brota de repente uma ideia <u>que é um clarão</u>",
            "<u>Quando esse branco se dá</u> na produção de livro"
        ],
        answer: 0,
        disclaimer: "A expressão 'é que' atua como partícula expletiva (ou de realce), cuja função é meramente estilística/enfática. Sua retirada ('o jornal é o grande tirano') mantém a estrutura sintática e a correção gramatical intactas, sem exigir alterações na pontuação."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "O verbo empregado em sentido conotativo está no trecho:",
        options: [
            "o pobre de nós que espreme o juízo",
            "ele entrega à oficina a sua melhor matéria do mês",
            "discutíamos entre escritores e jornalistas o drama do papel em branco na máquina",
            "o figurão sorriu antes da sua resposta",
            "antes que o barro secasse"
        ],
        answer: 0,
        disclaimer: "O verbo 'espremer' em 'espreme o juízo' está empregado em sentido figurado (conotativo), indicando o esforço mental intenso para extrair ideias."
    },
    {
        topic: "Coesão e Elipse",
        supportText: "",
        q: "Omite-se uma palavra que se subentende pelo contexto em:",
        options: [
            "um alto forno de usina siderúrgica",
            "o drama do papel em branco na máquina",
            "Uma simples folha de papel",
            "uma marcha mais veloz que a dos miolos",
            "O romance espera"
        ],
        answer: 3,
        disclaimer: "No trecho 'uma marcha mais veloz que a [marcha] dos miolos', ocorre a elipse (omissão) do substantivo 'marcha', que fica subentendido após o pronome demonstrativo 'a'."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "Considere o trecho: 'desde que o primeiro escriba de cuneiforme, na Mesopotâmia, <u>ficava</u> aflito por uma ideia' (1º parágrafo).",
        q: "O verbo flexionado nos mesmos tempo e modo que o da frase acima está em:",
        options: [
            "o figurão <u>sorriu</u> antes da sua resposta",
            "ele quem <u>amarrota</u> a folha enfadonha a caminho da cesta.",
            "interpretações sutis ou sibilinas para o que <u>seria</u> apenas massudo e incolor",
            "qualquer coisa que <u>encha</u> as laudas necessárias",
            "<u>discutíamos</u> entre escritores e jornalistas o drama do papel em branco na máquina"
        ],
        answer: 4,
        disclaimer: "Tanto a forma verbal 'ficava' (do enunciado) quanto 'discutíamos' estão flexionadas no Pretérito Imperfeito do Modo Indicativo. ('sorriu' = pret. perfeito; 'amarrota' = presente do ind.; 'seria' = futuro do pretérito; 'encha' = presente do subjuntivo)."
    },
    {
        topic: "Relações Lógico-Semânticas",
        supportText: "Considere o trecho: 'Mas quanto equilíbrio e cuidados são necessários <u>para não transpor o frágil limite da verdade dos fatos</u>'",
        q: "No contexto em que se encontra, o elemento sublinhado expressa ideia de:",
        options: [
            "causa.",
            "concessão.",
            "condição.",
            "oposição.",
            "finalidade."
        ],
        answer: 4,
        disclaimer: "A oração reduzida de infinitivo introduzida pela preposição 'para' ('para não transpor...') exprime o objetivo, a finalidade para a qual o equilíbrio e os cuidados são necessários."
    },
    {
        topic: "Coesão Referencial",
        supportText: "Considere o terceiro parágrafo da crônica de Rachel de Queiroz:<br>'O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera...'",
        q: "Um termo usado pela cronista para se referir ao 'público' é:",
        options: [
            "fera (3º parágrafo)",
            "inuendo (3º parágrafo)",
            "emissário (1º parágrafo)",
            "clarão (2º parágrafo)",
            "usina (2º parágrafo)"
        ],
        answer: 0,
        disclaimer: "No terceiro parágrafo, a autora refere-se metaforicamente ao público leitor como 'o déspota implacável' e, logo em seguida, retoma-o pelo substantivo 'fera' ('todos os que dependemos da fera')."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Leia o poema 'Vela' de Sophia de Mello Breyner Andresen:<br><br>Em redor da luz<br>A casa sai da sombra<br>Intensamente atenta<br>Levemente espantada<br><br>Em redor da luz<br>A casa se concentra<br>Numa espera densa<br>E quase silabada<br><br>Em redor da chama<br>Que a menor brisa doma<br>E que um suspiro apaga<br>A casa fica muda<br><br>Enquanto a noite antiga<br>Imensa e exterior<br>Tece seus prodígios<br>E ordena seus milênios<br><br>De espaço e de silêncio<br>De treva e de esplendor",
        q: "No contexto da terceira estrofe, a 'chama' pode ser descrita como:",
        options: [
            "vigorosa.",
            "eterna.",
            "frágil.",
            "silenciosa.",
            "impaciente."
        ],
        answer: 2,
        disclaimer: "Ao afirmar que a chama é aquela 'Que a menor brisa doma / E que um suspiro apaga', o eu lírico destaca sua extrema vulnerabilidade e delicadeza, caracterizando-a como frágil."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere os versos da 1ª estrofe do poema 'Vela':<br>'A casa sai da sombra / Intensamente atenta'",
        q: "Nos versos acima observa-se a figura de linguagem conhecida como:",
        options: [
            "gradação.",
            "personificação.",
            "antítese.",
            "pleonasmo.",
            "eufemismo."
        ],
        answer: 1,
        disclaimer: "Atribuir características e ações próprias de seres animados/humanos (sair da sombra, ficar 'intensamente atenta', 'levemente espantada') a um ser inanimado ('A casa') configura personificação ou prosopopeia."
    },
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere a crônica 'Beijinho, beijinho', de Luis Fernando Verissimo:<br>Na festa dos 34 anos da Clarinha, o seu marido, Amaro, fez um discurso muito aplaudido. Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê? Porque a Clarinha era duas de 17. Tinha a vivacidade e o frescor de duas adolescentes.<br>No carro, depois da festa, o Marinho comentou:<br>— Bonito o discurso do Amaro.<br>— Não dou dois meses para eles se separarem — disse a Nair.<br>— O quê?<br>— Marido quando começa a elogiar muito a mulher...<br>Nair deixou no ar todas as implicações da duplicidade masculina.<br>— Mas eles parecem cada vez mais apaixonados — protestou Marinho.<br>— Exatamente. Apaixonados demais. Lembra o que eu disse quando a Janice e o Pedrão começaram a andar de mãos dadas?<br>— É mesmo...<br>Vinte anos de casados e de repente começam a andar de mãos dadas? Como namorados? Ali tinha coisa.<br>(VERISSIMO, Luis Fernando. Verissimo antológico. Rio de Janeiro: Objetiva, 2020)",
        q: "A voz do personagem mescla-se intimamente à voz do narrador, configurando o chamado discurso indireto livre, no seguinte trecho:",
        options: [
            "Vinte anos de casados e de repente começam a andar de mãos dadas? (11º parágrafo)",
            "— Mas eles parecem cada vez mais apaixonados — protestou Marinho. (8º parágrafo)",
            "Na festa dos 34 anos da Clarinha, o seu marido, Amaro, fez um discurso muito aplaudido. (1º parágrafo)",
            "Nair deixou no ar todas as implicações da duplicidade masculina. (7º parágrafo)",
            "Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê? (1º parágrafo)"
        ],
        answer: 4,
        disclaimer: "No trecho 'Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê?', a pergunta 'sabiam por quê?' reproduz diretamente a entonação e a fala do personagem Amaro aos convidados da festa inserida sem travessão no meio da narração em terceira pessoa, caracterizando o discurso indireto livre."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "Está empregada em sentido figurado a expressão sublinhada em:",
        options: [
            "Nair <u>deixou no ar</u> todas as implicações da duplicidade masculina.",
            "<u>Vinte anos de casados</u> e de repente começam a andar de mãos dadas?",
            "seu marido, Amaro, <u>fez um discurso</u> muito aplaudido.",
            "Marido quando começa a <u>elogiar muito</u> a mulher...",
            "quando a Janice e o Pedrão começaram a <u>andar de mãos dadas</u>?"
        ],
        answer: 0,
        disclaimer: "A locução 'deixou no ar' está empregada em sentido conotativo (figurado), significando 'insinuou', 'sugeriu sem declarar explicitamente'."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: 'Lembra o que eu disse <u>quando a Janice e o Pedrão começaram a andar de mãos dadas</u>?' (9º parágrafo)",
        q: "No contexto em que se insere, a oração sublinhada expressa ideia de:",
        options: [
            "causa.",
            "concessão.",
            "tempo.",
            "consequência.",
            "conclusão."
        ],
        answer: 2,
        disclaimer: "A conjunção 'quando' introduz uma oração subordinada adverbial temporal, situando o momento em que o fato ocorreu."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "Mas eles parecem cada vez <u>mais</u> apaixonados",
            "Nair deixou no ar <u>todas</u> as implicações",
            "<u>Bonito</u> o discurso do Amaro",
            "Não dou <u>dois</u> meses para eles se separarem",
            "No carro, depois da <u>festa</u>, o Marinho comentou"
        ],
        answer: 0,
        disclaimer: "Na frase A, 'mais' é um advérbio de intensidade (modifica o adjetivo 'apaixonados'), sendo uma classe gramatical invariável."
    },
    {
        topic: "Concordância Verbal",
        supportText: "",
        q: "O verbo em negrito deve sua flexão ao termo sublinhado em:",
        options: [
            "— <u>Vinte anos de casados</u> e de repente <b>começam</b> a andar de mãos dadas?",
            "— Mas eles <b>parecem</b> cada vez mais <u>apaixonados</u> — protestou Marinho.",
            "Na festa dos 34 anos da Clarinha, <u>o seu marido</u>, Amaro, <b>fez</b> um discurso muito aplaudido.",
            "Declarou que não <b>trocava</b> <u>a sua Clarinha</u> por duas de 17, sabiam por quê?",
            "— Marido quando <b>começa</b> a elogiar muito <u>a mulher</u>..."
        ],
        answer: 2,
        disclaimer: "O verbo concorda em número e pessoa com o seu sujeito. Em C, 'o seu marido' é o sujeito do verbo 'fez' (3ª pessoa do singular)."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "A revolução tecnológica do século XXI modificou toda a configuração da economia global, provocando uma verdadeira ruptura nas relações trabalhistas até então vigentes. Um dos setores da economia que melhor representa essa revolução e seu impacto nas relações de trabalho é o de serviços de transporte de passageiros e de entrega de bens de consumo.<br>Junto a essa radical transformação tecnológica, levando em conta a grande oferta de mão de obra disponível, escancarou-se uma controversa realidade social: a relação de trabalho estabelecida entre motoristas e entregadores e as empresas que operam por meio de plataformas digitais.<br>Desde o início das atividades das empresas de transporte e entrega por aplicativos no Brasil, os trabalhadores cadastrados em suas plataformas foram contratados como microempreendedores individuais (MEI) ou como autônomos.<br>Nesse contexto, o questionamento a ser feito é se esses motoristas e entregadores são ou não são, na realidade, empregados. Como empregados, se enquadrariam em uma das modalidades contratuais previstas na CLT. Já como não empregados, ou autônomos, a CLT não se aplicaria e, consequentemente, os direitos trabalhistas celetistas não seriam a eles devidos. O questionamento colocado é a razão da controvérsia atual que domina o campo trabalhista e que envolve diversos atores sociais e instituições públicas ligadas ao trabalho.<br>A relação de emprego, assim como a relação de trabalho autônomo, são espécies do gênero relação de trabalho. Para a caracterização da relação de emprego devem estar presentes, de forma cumulativa, os requisitos constantes dos arts. 2º e 3º da CLT, quais sejam: pessoalidade, não eventualidade, onerosidade e subordinação.<br>A subordinação é o elemento decisivo para a afirmação da existência, ou não, da relação de emprego, como também é o elemento principal de diferenciação entre a relação de emprego e as diversas modalidades de trabalho autônomo. Logo, pode-se dizer que a contraposição à subordinação é a autonomia. E é exatamente sobre o elemento subordinação que reside a controvérsia ora analisada.<br>Todas as empresas que ofertam serviços de transporte ou entrega por aplicativos afirmam inexistir entre elas e os trabalhadores cadastrados em suas plataformas qualquer tipo de subordinação. Pelo contrário, afirmam que há autonomia e independência desses trabalhadores na prestação dos serviços, já que esses profissionais têm total liberdade para se conectarem ou não ao aplicativo, podendo escolher o horário de trabalho, e para aceitarem ou recusarem o direcionamento (chamado/oferta) de serviços.<br>Na Justiça do Trabalho são inúmeras as ações individuais de motoristas e entregadores pleiteando o reconhecimento do vínculo empregatício com as empresas para as quais prestam e/ou prestaram serviços por meio de aplicativos. Ora é reconhecida a relação de emprego, configurando-se a existência de subordinação, ora tal relação não é reconhecida.<br>(Adaptado de: NEIVA, Rafael Brisque)",
        q: "Consideradas as ideias expostas no texto, identifica-se uma oposição entre:",
        options: [
            "relação de emprego e realidade social.",
            "subordinação e autonomia.",
            "revolução tecnológica e setor de serviços.",
            "instituições públicas e atores sociais.",
            "liberdade e trabalho."
        ],
        answer: 1,
        disclaimer: "O sexto parágrafo afirma expressamente: 'Logo, pode-se dizer que a contraposição à subordinação é a autonomia'."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "",
        q: "Identifica-se uma hipótese no trecho:",
        options: [
            "Como empregados, se enquadrariam em uma das modalidades contratuais previstas na CLT.",
            "pleiteando o reconhecimento do vínculo empregatício.",
            "Na Justiça do Trabalho são inúmeras as ações individuais de motoristas e entregadores.",
            "que envolve diversos atores sociais e instituições públicas.",
            "há autonomia e independência desses trabalhadores na prestação dos serviços."
        ],
        answer: 0,
        disclaimer: "O emprego do Futuro do Pretérito do Indicativo ('se enquadrariam') aliado à condição 'Como empregados' [caso fossem considerados empregados] projeta uma hipótese/possibilidade condicionada."
    },
    {
        topic: "Conjunções Coordenativas",
        supportText: "Considere o trecho: '<u>Ora</u> é reconhecida a relação de emprego, configurando-se a existência de subordinação, <u>ora</u> tal relação não é reconhecida' (final do texto).",
        q: "A locução conjuntiva [ora...ora] expressa:",
        options: [
            "causa.",
            "condição.",
            "finalidade.",
            "alternância.",
            "conclusão."
        ],
        answer: 3,
        disclaimer: "As conjunções coordenativas alternativas ('ou... ou', 'ora... ora', 'quer... quer') expressam ideia de alternância ou exclusão."
    },
    {
        topic: "Vozes do Verbo",
        supportText: "",
        q: "Identifica-se emprego da voz passiva no trecho:",
        options: [
            "escancarou-se uma controversa realidade social.",
            "já que esses profissionais têm total liberdade.",
            "A revolução tecnológica do século XXI modificou toda a configuração da economia global.",
            "há autonomia e independência desses trabalhadores.",
            "provocando uma verdadeira ruptura nas relações trabalhistas."
        ],
        answer: 0,
        disclaimer: "Em 'escancarou-se uma controversa realidade social', o verbo 'escancarar' é transitivo direto e o pronome 'se' atua como partícula apassivadora (voz passiva sintética = 'uma controversa realidade social foi escancarada')."
    },
    {
        topic: "Reescrita e Oração Desenvolvida",
        supportText: "Considere o trecho: 'Todas as empresas que ofertam serviços de transporte ou entrega por aplicativos afirmam <u>inexistir</u> entre elas e os trabalhadores cadastrados em suas plataformas qualquer tipo de subordinação.'",
        q: "Sem prejuízo para a correção e para as relações de sentido estabelecidas na frase, o termo sublinhado pode ser substituído por:",
        options: [
            "cuja inexistência",
            "na inexistência",
            "à inexistência",
            "que inexiste",
            "que inexistiam"
        ],
        answer: 3,
        disclaimer: "A oração subordinada substantiva objetiva direta reduzida de infinitivo ('inexistir... qualquer tipo de subordinação') equivale à forma desenvolvida 'que inexiste... qualquer tipo de subordinação' (no singular, concordando com o sujeito 'qualquer tipo')."
    },
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere o conto 'A velha contrabandista', de Stanislaw Ponte Preta:<br>Diz que era uma velhinha que sabia andar de lambreta. Todo dia, imaginem, ela passava na fronteira montada na lambreta, com um bruto saco atrás da lambreta. O pessoal da alfândega – tudo malandro velho – começou a desconfiar da velhinha. Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar. A velhinha parou e então o fiscal perguntou assim pra ela:<br>— Escuta aqui, vovozinha, a senhora passa por aqui todo dia, com esse saco aí atrás. Que diabo a senhora leva nesse saco?<br>A velhinha sorriu com os poucos dentes que lhe restavam e mais os outros, que ela adquirira no odontólogo, e respondeu:<br>— É areia!<br>Aí quem sorriu foi o fiscal. Achou que não era areia nenhuma e mandou a velhinha saltar da lambreta para examinar o saco. A velhinha saltou, o fiscal esvaziou o saco e dentro só tinha areia. Muito encabulado, ordenou à velhinha que fosse em frente. Ela montou na lambreta e foi embora, com o saco de areia atrás. Mas o fiscal ficou desconfiado ainda. Talvez a velhinha passasse um dia com areia e no outro com muamba, dentro daquele maldito saco. No dia seguinte, quando ela passou na lambreta com o saco atrás, o fiscal mandou parar outra vez. Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai! O fiscal examinou e era mesmo. Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.<br>Diz que foi aí que o fiscal se chateou:<br>— Olha, vovozinha, eu sou fiscal de alfândega com quarenta anos de serviço. Manjo essa coisa de contrabando pra burro. Ninguém me tira da cabeça que a senhora é contrabandista.<br>— Mas no saco só tem areia! — insistiu a velhinha. E já ia tocar a lambreta, quando o fiscal propôs:<br>— Eu prometo à senhora que deixo a senhora passar. Não dou parte, não apreendo, não conto nada a ninguém, mas a senhora vai me dizer: qual é o contrabando que a senhora está passando por aqui todos os dias?<br>— O senhor promete que não 'espaia'? — quis saber a velhinha.<br>— Juro — respondeu o fiscal.<br>— É lambreta.",
        q: "No chamado discurso indireto livre, a voz da personagem mescla-se intimamente à voz do narrador, a exemplo do que ocorre em:",
        options: [
            "Muito encabulado, ordenou à velhinha que fosse em frente.",
            "— O senhor promete que não 'espaia'? — quis saber a velhinha.",
            "Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai!",
            "Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar.",
            "— Escuta aqui, vovozinha, a senhora passa por aqui todo dia, com esse saco aí atrás."
        ],
        answer: 2,
        disclaimer: "Em 'Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai!', a interjeição 'uai!' ao final de uma estrutura narrativa indireta incorpora diretamente a voz e a expressividade da velhinha à fala do narrador."
    },
    {
        topic: "Interlocução e Metalinguagem",
        supportText: "Considere o conto 'A velha contrabandista', de Stanislaw Ponte Preta.",
        q: "No conto, o narrador dirige-se explicitamente a seus leitores no seguinte trecho:",
        options: [
            "Achou que não era areia nenhuma e mandou a velhinha saltar da lambreta para examinar o saco.",
            "Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.",
            "Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar.",
            "Todo dia, imaginem, ela passava na fronteira montada na lambreta, com um bruto saco atrás da lambreta.",
            "O pessoal da alfândega – tudo malandro velho – começou a desconfiar da velhinha."
        ],
        answer: 3,
        disclaimer: "Ao utilizar o verbo no imperativo plural 'imaginem' ('Todo dia, imaginem, ela passava...'), o narrador interpela diretamente os seus ouvintes/leitores."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: '[O fiscal] mandou a velhinha saltar da lambreta <u>para</u> examinar o saco.'",
        q: "No contexto em que se insere, o termo sublinhado acima introduz uma oração que expressa ideia de:",
        options: [
            "concessão.",
            "consequência.",
            "finalidade.",
            "condição.",
            "causa."
        ],
        answer: 2,
        disclaimer: "A preposição 'para' antes do infinitivo 'examinar' introduz uma oração subordinada adverbial final reduzida de infinitivo (indica o propósito/finalidade da ordem do fiscal)."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "o fiscal esvaziou o <u>saco</u> e dentro só tinha areia.",
            "<u>Muito</u> encabulado, ordenou à velhinha que fosse em frente.",
            "ela passava na fronteira montada na lambreta, com um <u>bruto</u> saco atrás da lambreta.",
            "Mas o fiscal ficou <u>desconfiado</u> ainda.",
            "a senhora passa por aqui <u>todo</u> dia, com esse saco aí atrás."
        ],
        answer: 1,
        disclaimer: "Em 'Muito encabulado', a palavra 'Muito' modifica o adjetivo 'encabulado', atuando como advérbio de intensidade — classe gramatical invariável."
    },
    {
        topic: "Pontuação e Vocativo",
        supportText: "",
        q: "Emprega(m)-se vírgula(s) para isolar um vocativo no seguinte trecho:",
        options: [
            "Olha, vovozinha, eu sou fiscal de alfândega com quarenta anos de serviço.",
            "Não dou parte, não apreendo, não conto nada a ninguém, mas a senhora vai me dizer.",
            "Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.",
            "A velhinha saltou, o fiscal esvaziou o saco e dentro só tinha areia.",
            "Muito encabulado, ordenou à velhinha que fosse em frente."
        ],
        answer: 0,
        disclaimer: "Em 'Olha, vovozinha, eu sou fiscal...', o termo 'vovozinha' é o vocativo (termo usado pelo fiscal para chamar/interpelar a interlocutora), obrigatoriamente isolado por vírgulas."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "Considere o trecho: 'A velhinha sorriu com os poucos dentes que lhe restavam e mais os outros, que ela adquirira no odontólogo, e respondeu: — É areia!'",
        q: "Nesse trecho, o narrador relata alguns fatos ocorridos no passado. Um fato anterior a esse tempo passado está indicado pela seguinte forma verbal:",
        options: [
            "respondeu.",
            "É.",
            "restavam.",
            "sorriu.",
            "adquirira."
        ],
        answer: 4,
        disclaimer: "A forma verbal 'adquirira' está no Pretérito Mais-Que-Perfeito do Indicativo, tempo verbal que expressa uma ação passada ocorrida antes de outra ação também passada ('sorriu', 'respondeu')."
    },
    {
        topic: "Sintaxe e Partícula Expletiva",
        supportText: "",
        q: "Palavra expletiva é aquela que não exerce função sintática, sendo empregada como realce ou ênfase. Constitui uma palavra expletiva aquela sublinhada no seguinte trecho:",
        options: [
            "Mas no saco <u>só</u> tem areia!",
            "Que <u>diabo</u> a senhora leva nesse saco?",
            "O senhor promete que <u>não</u> 'espaia'?",
            "<u>Aí</u> quem sorriu foi o fiscal.",
            "<u>Talvez</u> a velhinha passasse um dia com areia e no outro com muamba."
        ],
        answer: 1,
        disclaimer: "Na pergunta 'Que diabo a senhora leva nesse saco?', o substantivo 'diabo' não possui valor referencial nem função sintática, servindo apenas como partícula de realce/ênfase ('O que a senhora leva nesse saco?')."
    },
    {
        topic: "Coesão Referencial",
        supportText: "",
        q: "Retoma uma expressão mencionada anteriormente no conto a palavra sublinhada em:",
        options: [
            "Ninguém me tira da cabeça <u>que</u> a senhora é contrabandista.",
            "A velhinha sorriu com os poucos dentes <u>que</u> lhe restavam.",
            "Eu prometo à senhora <u>que</u> deixo a senhora passar.",
            "Achou <u>que</u> não era areia nenhuma.",
            "Muito encabulado, ordenou à velhinha <u>que</u> fosse em frente."
        ],
        answer: 1,
        disclaimer: "Na alternativa B, o 'que' é um pronome relativo e retoma o antecedente 'os poucos dentes'. Nas demais alternativas, o 'que' é conjunção integrante (não retoma termo anterior)."
    },
    {
        topic: "Análise Sintática e Semântica",
        supportText: "",
        q: "Em 'Manjo essa coisa de contrabando <u>pra burro</u>', a locução sublinhada funciona como um adjunto adverbial e expressa circunstância de:",
        options: [
            "dúvida.",
            "finalidade.",
            "negação.",
            "intensidade.",
            "lugar."
        ],
        answer: 3,
        disclaimer: "A locução coloquial 'pra burro' equivale a 'muito', 'bastante', expressando circunstância adverbial de intensidade."
    },
    {
        topic: "Transposição de Discurso",
        supportText: "Considere o trecho: 'Muito encabulado, ordenou à velhinha que fosse em frente.'",
        q: "Transposto para o discurso direto, o trecho acima assume a seguinte redação:",
        options: [
            "Muito encabulado, ordenou à velhinha: — Vá em frente.",
            "Muito encabulado, ordenou à velhinha: — Irá em frente.",
            "Muito encabulado, ordenou à velhinha que vá em frente.",
            "Muito encabulado, ordenou à velhinha que iria em frente.",
            "Muito encabulado, ordenou à velhinha: — Que fora em frente."
        ],
        answer: 0,
        disclaimer: "Na passagem do discurso indireto com verbo no pretérito imperfeito do subjuntivo ('ordenou... que fosse') para o discurso direto, o verbo assume a forma do Imperativo ('— Vá em frente')."
    },
    {
        topic: "Conjunções e Conectivos",
        supportText: "Considere o texto de Sérgio Rodrigues:<br>Para a maioria dos brasileiros a pronúncia é 'récorde', proparoxítona, e não, como recomendam dez entre dez sábios, 'recórde', paroxítona. Estamos diante de um caso clássico de desobediência civil, em que a língua da vida real vai para um lado e a dos sábios, para o outro.<br>Recorde, termo adaptado do inglês record, pode ser substantivo significando a melhor marca esportiva, o desempenho a ser superado ou adjetivo com sentido equivalente: 'tempo recorde', 'velocidade recorde'. Quanto a isso, estamos todos de acordo. A divergência começa na hora de definir a prosódia da palavra. Em seu Dicionário de palavras & expressões estrangeiras, Luís Augusto Fischer observa com irreverência que há 'duas pronúncias: a que os gramáticos preferem, recórde, ou a do resto da humanidade, récorde'. É mais ou menos isso. Basta trocar, na frase de Fischer, 'o resto da humanidade' por 'a maioria dos brasileiros' que ela fica perfeita. Em Portugal, a inclinação por 'recórde' parece inquestionável. Aqui, ocorre o inverso.<br>Sempre pronunciei 'récorde'. Puxando pela memória, não consigo pensar em ninguém que não o faça. Se, como em tantos casos, nossos dicionários e gramáticas ainda se aferram de maneira um tanto acrítica à preferência lusitana, isso é um problema deles, que precisa ser e certamente será corrigido um dia. O Houaiss foi o primeiro a abrir a porta. Veja a tímida mas significativa nota que constava ao pé do verbete recorde na edição de 2001: 'Pelo menos no Brasil, ocorre também como palavra proparoxítona: récorde.' Mais tarde, o dicionário suprimiu a nota, mas passou a trazer o verbete récorde como variação de recorde.<br>Uma explicação provável para o descompasso: os portugueses tendem a manter a pronúncia que record ganhou na França, de onde importaram o anglicismo por tabela, <u>enquanto</u> os falantes brasileiros estabeleceram ligação direta com o idioma de origem, no qual o acento (no caso em que record é substantivo, e não verbo) recai na primeira sílaba. No dia em que a língua brasileira dissolver mais este preconceito, é evidente que a grafia será forçada a seguir atrás: escreveremos récorde, com acento. E tudo ficará mais harmônico entre som e traço, como deve ser.",
        q: "No 4º parágrafo ('os portugueses tendem a manter a pronúncia [...], <u>enquanto</u> os falantes brasileiros estabeleceram ligação direta...'), a conjunção sublinhada pode ser substituída, sem prejuízo para o sentido do texto, por:",
        options: [
            "de modo que",
            "uma vez que",
            "na medida em que",
            "desde que",
            "ao passo que"
        ],
        answer: 4,
        disclaimer: "No trecho, 'enquanto' estabelece contraste/proporção simultânea entre o comportamento dos portugueses e o dos brasileiros, sendo perfeitamente substituível pela locução 'ao passo que'."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere o trecho: 'Em seu Dicionário de palavras & expressões estrangeiras, Luís Augusto Fischer observa com irreverência que há duas pronúncias: a que os gramáticos preferem, recórde, ou a do resto da humanidade, récorde.' (2º parágrafo)",
        q: "Ao vincular a pronúncia 'récorde' ao 'resto da humanidade', Luís Augusto Fischer faz uso da figura de linguagem denominada:",
        options: [
            "antítese.",
            "pleonasmo.",
            "personificação.",
            "eufemismo.",
            "hipérbole."
        ],
        answer: 4,
        disclaimer: "Generalizar a pronúncia brasileira para 'o resto da humanidade' inteira constitui um exagero intencional com finalidade expressiva e humorística, figura denominada hipérbole."
    },
    {
        topic: "Dêixis e Enunciação",
        supportText: "Os chamados dêiticos são termos linguísticos que se referem à situação em que o enunciado é produzido, ao momento da enunciação e aos atores do discurso. Assim, termos como 'ali', 'hoje' ou 'amanhã' devem ser interpretados em função de onde e em que momento se encontram os atores do discurso.",
        q: "Verifica-se um dêitico que se refere ao lugar em que o enunciado é produzido (ou seja, ao lugar onde se encontra o autor do texto) no seguinte trecho:",
        options: [
            "Sempre pronunciei 'récorde'.",
            "Mais tarde, o dicionário suprimiu a nota.",
            "Aqui, ocorre o inverso.",
            "É mais ou menos isso.",
            "Em Portugal, a inclinação por 'recórde' parece inquestionável."
        ],
        answer: 2,
        disclaimer: "O advérbio de lugar 'Aqui' (em 'Aqui, ocorre o inverso') é um dêitico espacial que aponta para o local onde o autor está situado no momento da enunciação (o Brasil), em oposição a 'Em Portugal'."
    },
    {
        topic: "Coesão e Substituição Verbal",
        supportText: "Considere o trecho: 'Sempre pronunciei récorde. Puxando pela memória, não consigo pensar em ninguém que não <u>o faça</u>.' (3º parágrafo)",
        q: "O segmento sublinhado pode ser substituído, sem prejuízo para o sentido do texto, por:",
        options: [
            "pense em alguém",
            "pronuncie 'récorde'",
            "faça nada",
            "puxe pela memória",
            "consiga pensar"
        ],
        answer: 1,
        disclaimer: "O verbo vicário 'fazer' acompanhado do pronome demonstrativo 'o' ('o faça') retoma a ação verbal declarada na frase anterior: 'pronunciar récorde' ('ninguém que não pronuncie récorde')."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "Está empregada em sentido figurado a expressão sublinhada no seguinte trecho:",
        options: [
            "<u>Uma explicação provável</u> para o descompasso (4º parágrafo).",
            "os portugueses <u>tendem a manter</u> a pronúncia (4º parágrafo).",
            "O Houaiss foi o primeiro a <u>abrir a porta</u> (3º parágrafo).",
            "<u>Para a maioria dos brasileiros</u> a pronúncia é 'récorde' (1º parágrafo).",
            "A divergência começa na hora de <u>definir a prosódia</u> da palavra (2º parágrafo)."
        ],
        answer: 2,
        disclaimer: "A expressão 'abrir a porta' está empregada em sentido conotativo (figurado), significando 'dar o primeiro passo', 'iniciar a aceitação/registro da forma nos dicionários'."
    },
    {
        topic: "Pronomes Relativos e Coesão",
        supportText: "Considere os trechos do 3º e 4º parágrafos:<br>- 'Veja a tímida mas significativa nota <u>que</u> constava ao pé do verbete recorde na edição de 2001'<br>- 'No dia em <u>que</u> a língua brasileira dissolver mais este preconceito'",
        q: "Os termos 'que' sublinhados no terceiro e no quarto parágrafos do texto referem-se, respectivamente, a:",
        options: [
            "'verbete' e 'língua'.",
            "'nota' e 'dia'.",
            "'nota' e 'preconceito'.",
            "'verbete' e 'dia'.",
            "'nota' e 'língua'."
        ],
        answer: 1,
        disclaimer: "No 3º parágrafo, o pronome relativo 'que' retoma o núcleo nominal 'nota' ('a tímida mas significativa nota que constava'). No 4º parágrafo, 'em que' retoma o substantivo 'dia' ('No dia em que...')."
    },
    {
        topic: "Vozes do Verbo",
        supportText: "Considere a oração: 'o dicionário suprimiu a nota' (3º parágrafo).",
        q: "Ao se transpor a oração acima para a voz passiva, a forma verbal resultante será:",
        options: [
            "seria suprimido.",
            "fora suprimida.",
            "foi suprimido.",
            "foi suprimida.",
            "seria suprimida."
        ],
        answer: 3,
        disclaimer: "O verbo 'suprimiu' está no Pretérito Perfeito do Indicativo e o objeto direto é 'a nota' (feminino singular). Na voz passiva analítica, o objeto torna-se sujeito paciente: 'a nota foi suprimida pelo dicionário'."
    },
    {
        topic: "Pontuação e Zeugma",
        supportText: "",
        q: "Verifica-res o emprego de vírgula para assinalar a supressão de um verbo no seguinte trecho:",
        options: [
            "Estamos diante de um caso clássico de desobediência civil, em que a língua da vida real vai para um lado e a dos sábios, para o outro.",
            "No dia em que a língua brasileira dissolver mais este preconceito, é evidente que a grafia será forçada a seguir atrás: escreveremos récorde, com acento.",
            "Mais tarde, o dicionário suprimiu a nota, mas passou a trazer o verbete récorde como variação de recorde.",
            "Em Portugal, a inclinação por 'recórde' parece inquestionável.",
            "E tudo ficará mais harmônico entre som e traço, como deve ser."
        ],
        answer: 0,
        disclaimer: "Em '...a língua da vida real vai para um lado e a dos sábios, para o outro', a vírgula após 'sábios' marca a elipse (zeugma) da forma verbal 'vai' ('e a dos sábios [vai] para o outro')."
    },
    {
        topic: "Flexão Verbal e Pessoas do Discurso",
        supportText: "",
        q: "Sérgio Rodrigues manifesta-se explicitamente em seu texto, valendo-se para tanto de verbo na primeira pessoa do singular, em:",
        options: [
            "a grafia será forçada a seguir atrás: escreveremos récorde, com acento.",
            "Veja a tímida mas significativa nota que constava ao pé do verbete recorde.",
            "A divergência começa na hora de definir a prosódia da palavra.",
            "Estamos diante de um caso clássico de desobediência civil.",
            "Puxando pela memória, não consigo pensar em ninguém que não o faça."
        ],
        answer: 4,
        disclaimer: "Na alternativa E, a forma verbal 'consigo' ('[eu] não consigo pensar') está flexionada na 1ª pessoa do singular do Presente do Indicativo. ('escreveremos' e 'Estamos' estão na 1ª pessoa do plural)."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Observa-se palavra formada com prefixo que exprime ideia de negação no seguinte trecho:",
        options: [
            "não consigo pensar em ninguém que não o faça.",
            "Mais tarde, o dicionário suprimiu a nota.",
            "Veja a tímida mas significativa nota que constava ao pé do verbete.",
            "o acento (no caso em que record é substantivo, e não verbo) recai na primeira sílaba.",
            "Estamos diante de um caso clássico de desobediência civil."
        ],
        answer: 4,
        disclaimer: "A palavra 'desobediência' (alternativa E) é formada por derivação prefixal com o prefixo 'des-', que exprime ideia de negação/oposição (falta de obediência)."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade:<br>1. A senhora subiu, Deus sabe como, em companhia de dois garotos. Cada garoto com sua merendeira e sua pasta de livros e cadernos indispensáveis para a aquisição dos preliminares da sabedoria. No ônibus não cabia mais ninguém. A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas.<br>2. — Deixa que eu carrego — falei na direção de um dos braços a meu alcance, executando um movimento complicado, para enxergar os rostos dos garotos. O menor olhou-me com surpresa e hesitação, porém o mais velho estendeu o braço, e o primeiro, depois de uma cotovelada ministrada pelo segundo, imitou-o. Fiquei de posse de duas bojudas pastas escolares, que acomodei da melhor maneira possível sobre os joelhos. Conheço perfeitamente a técnica de carregar embrulhos dos outros. Deve-se colocá-los de tal modo que fiquem seguros sem que seja necessário pôr a mão em cima deles. São coisas sagradas.<br>3. A voz da senhora saiu daquele bolo humano:<br>4. — Agradece ao moço, Serginho. Agradece, Raul.<br>5. Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. Mal se passaram alguns minutos, senti que a pasta de cima escorregava mansamente do meu colo. Muito de leve, a mão esquerda de Serginho, escondida sob um lenço, puxava-a para fora. Compreendi que ele prezava acima de tudo a sua pasta, e deixei que a tirasse. A mãe ordenou:<br>6. — Serginho, deixe a pasta com o moço!<br>7. Teve de levantar a voz, para torná-la enérgica. Passageiros em redor começaram a sorrir. Tive de sorrir também. Muito a contragosto, Serginho voltou a confiar-me sua querida pasta. Um estranho mereceria carregá-la? E se fugisse com ela? Como bem podem imaginar, Serginho suspeitava de minha honorabilidade, e os circunstantes se deliciavam com a suspeita.<br>8. Mais alguns quarteirões, Serginho repete a manobra. Dessa vez, é radical. Toma sua pasta e a de Raul. Raul protesta:<br>9. — Deixa com ele, seu burro. Não vê que eu não posso segurar nada?<br>10. A mãe, em apoio de Raul, exprobra o procedimento de Serginho. Este capitula, mas em termos. Só me restitui a pasta do irmão. A sua não correrá o risco. Coloca-a sobre o peito, sob as mãos cruzadas, como levaria o Santo Graal.<br>11. — Este menino é impossível. Desculpe, cavalheiro.<br>12. Não vejo o rosto da senhora, mas sua voz é doce, e compensa-me da desconfiança do Serginho. Sorrio para este, enquanto retribuo: 'Oh, minha senhora, por favor! Até que o seu filhinho é engraçado.'<br>13. Engraçado? Serginho faz-me uma careta e ferra-me um beliscão. A assistência ri. A mãe ferra outro em Serginho, que dispara a chorar. Bonito. É no que dá carregar embrulho dos outros.",
        q: "Com finalidade expressiva, Drummond lança mão de um enunciado paradoxal no seguinte trecho da crônica:",
        options: [
            "Muito de leve, a mão esquerda de Serginho, escondida sob um lenço, puxava-a para fora. (5º parágrafo)",
            "Cada garoto com sua merendeira e sua pasta de livros e cadernos indispensáveis para a aquisição dos preliminares da sabedoria. (1º parágrafo)",
            "Fiquei de posse de duas bojudas pastas escolares, que acomodei da melhor maneira possível sobre os joelhos. (2º parágrafo)",
            "A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. (1º parágrafo)",
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. (5º parágrafo)"
        ],
        answer: 3,
        disclaimer: "Afirmar que no ônibus 'não cabia nem o pessoal que se espremia lá dentro' constitui um paradoxo (contradição lógica aparente: as pessoas já estavam lá dentro, mas 'não cabiam lá dentro')."
    },
    {
        topic: "Interlocução e Metalinguagem",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade.",
        q: "Em sua crônica, Drummond dirige-se explicitamente a seus leitores no seguinte trecho:",
        options: [
            "O menor olhou-me com surpresa e hesitação, porém o mais velho estendeu o braço, e o primeiro, depois de uma cotovelada ministrada pelo segundo, imitou-o. (2º parágrafo)",
            "Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas. (1º parágrafo)",
            "Como bem podem imaginar, Serginho suspeitava de minha honorabilidade, e os circunstantes se deliciavam com a suspeita. (7º parágrafo)",
            "Mal se passaram alguns minutos, senti que a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "— Deixa com ele, seu burro. Não vê que eu não posso segurar nada? (9º parágrafo)"
        ],
        answer: 2,
        disclaimer: "Na expressão 'Como bem podem imaginar [vocês, leitores]', o narrador dirige-se diretamente ao leitor da crônica."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: 'Teve de levantar a voz, <u>para torná-la enérgica</u>.' (7º parágrafo)",
        q: "Em relação ao trecho que a antecede, a oração sublinhada expressa ideia de:",
        options: [
            "causa.",
            "oposição.",
            "consequência.",
            "condição.",
            "finalidade."
        ],
        answer: 4,
        disclaimer: "A oração reduzida de infinitivo introduzida pela preposição 'para' ('para torná-la enérgica') indica a finalidade pela qual a mãe levantou a voz."
    },
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade.",
        q: "No chamado discurso indireto livre, a voz de um personagem mescla-se intimamente à voz do cronista, a exemplo do que ocorre no seguinte trecho:",
        options: [
            "Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas. (1º parágrafo)",
            "Muito a contragosto, Serginho voltou a confiar-me sua querida pasta. Um estranho mereceria carregá-la? E se fugisse com ela? (7º parágrafo)",
            "— Deixa que eu carrego — falei na direção de um dos braços a meu alcance, executando um movimento complicado, para enxergar os rostos dos garotos. (2º parágrafo)",
            "Raul protesta: — Deixa com ele, seu burro. Não vê que eu não posso segurar nada? (8º/9º parágrafos)",
            "Sorrio para este, enquanto retribuo: 'Oh, minha senhora, por favor! Até que o seu filhinho é engraçado.' (12º parágrafo)"
        ],
        answer: 1,
        disclaimer: "As interrogações 'Um estranho mereceria carregá-la? E se fugisse com ela?' reproduzem o pensamento íntimo e a dúvida do menino Serginho diretamente inseridos no fluxo narrativo do cronista, sem verbo dicendi ou travessão (discurso indireto livre)."
    },
    {
        topic: "Semântica e Vocabulário",
        supportText: "Considere o trecho: 'A mãe, em apoio de Raul, <u>exprobra</u> o procedimento de Serginho.' (10º parágrafo)",
        q: "O verbo sublinhado pode ser substituído, sem prejuízo para o sentido da frase, por:",
        options: [
            "repreende.",
            "ignora.",
            "dissimula.",
            "estimula.",
            "reconhece."
        ],
        answer: 0,
        disclaimer: "O verbo 'exprobrar' significa censurar, reprovar severamente, repreende."
    },
    {
        topic: "Coesão Referencial",
        supportText: "",
        q: "Retoma um termo mencionado anteriormente na crônica a palavra sublinhada em:",
        options: [
            "— Deixa com ele, seu burro. Não vê <u>que</u> eu não posso segurar nada? (9º parágrafo)",
            "Mal se passaram alguns minutos, senti <u>que</u> a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "Compreendi <u>que</u> ele prezava acima de tudo a sua pasta, e deixei que a tirasse. (5º parágrafo)",
            "Compreendi que ele prezava acima de tudo a sua pasta, e deixei <u>que</u> a tirasse. (5º parágrafo)",
            "A mãe ferra outro em Serginho, <u>que</u> dispara a chorar. (13º parágrafo)"
        ],
        answer: 4,
        disclaimer: "Na alternativa E, o vocábulo 'que' é pronome relativo e retoma o substantivo próprio 'Serginho' ('Serginho, o qual dispara a chorar'). Nas demais, trata-se de conjunção integrante."
    },
    {
        topic: "Transposição de Discurso",
        supportText: "Considere o trecho:<br>A mãe ordenou:<br>— Serginho, <u>deixe</u> a pasta com o moço! (5º/6º parágrafos)",
        q: "Ao se transpor o trecho acima para o discurso indireto, o verbo sublinhado assume a seguinte forma:",
        options: [
            "deixasse.",
            "deixara.",
            "deixou.",
            "deixava.",
            "deixaria."
        ],
        answer: 0,
        disclaimer: "Na transposição do discurso direto para o indireto, o modo Imperativo ('deixe') converte-se no Pretérito Imperfeito do Subjuntivo ('A mãe ordenou a Serginho que deixasse a pasta com o moço')."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Emprega-se palavra formada com prefixo que exprime ideia de negação no seguinte trecho:",
        options: [
            "No ônibus não cabia mais ninguém (1º parágrafo)",
            "compensa-me da desconfiança do Serginho (12º parágrafo)",
            "sem que seja necessário pôr a mão em cima deles (2º parágrafo)",
            "Este capitula, mas em termos (10º parágrafo)",
            "Até que o seu filhinho é engraçado (12º parágrafo)"
        ],
        answer: 1,
        disclaimer: "A palavra 'desconfiança' é formada pelo acréscimo do prefixo 'des-' (que exprime negação/falta de confiança)."
    },
    {
        topic: "Pontuação e Vocativo",
        supportText: "",
        q: "Observa-se o emprego de vírgula para isolar um vocativo no seguinte trecho:",
        options: [
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. (5º parágrafo)",
            "A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. (1º parágrafo)",
            "— Este menino é impossível. Desculpe, cavalheiro. (11º parágrafo)",
            "Sorrio para este, enquanto retribuo: (12º parágrafo)",
            "A mãe ferra outro em Serginho, que dispara a chorar. (13º parágrafo)"
        ],
        answer: 2,
        disclaimer: "Em 'Desculpe, cavalheiro', o termo 'cavalheiro' é o vocativo utilizado pela mãe para se dirigir ao narrador, sendo isolado por vírgula."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se <u>reservado</u>. (5º parágrafo)",
            "A senhora subiu, Deus sabe <u>como</u>, em companhia de dois garotos. (1º parágrafo)",
            "Conheço perfeitamente a técnica de carregar embrulhos dos <u>outros</u>. (2º parágrafo)",
            "Mal se passaram <u>alguns</u> minutos, senti que a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "A mãe ferra <u>outro</u> em Serginho, que dispara a chorar. (13º parágrafo)"
        ],
        answer: 1,
        disclaimer: "Em 'Deus sabe como', a palavra 'como' é um advérbio interrogativo de modo (invariável em gênero e número)."
    },
    {
        topic: "Relações Sintático-Semânticas",
        supportText: "Texto 1: Sem cultura não há partilha; sem língua não há cidadania nem futuro (José Manuel Diogo)<br>Nesta segunda-feira (5), Dia Mundial da Língua Portuguesa, celebramos não apenas um idioma, mas uma comunidade. Uma língua não é apenas um conjunto de palavras – é um território partilhado, um exercício contínuo de cidadania. E é por isso que, ao olharmos para os recentes debates sobre imigração em Portugal, devemos recolocar a língua no centro da equação: como critério de integração, como vetor de cultura e, sobretudo, como fundamento da cidadania contemporânea.<br>Os dados falam por si: dos 4.500 imigrantes recentemente notificados para deixar Portugal, apenas cerca de 10% são brasileiros. Esse número, silencioso, revela uma prática que merece ser assumida como política – a valorização da língua como instrumento de inclusão.<br>Falar português é mais do que dominar um idioma: é participar de uma cultura, compreender códigos sociais, partilhar valores e histórias. É estar pronto para exercer uma cidadania ativa, mesmo antes de qualquer formalização administrativa.<br>A cidadania, aliás, é o fio que liga todos os argumentos sobre imigração. Porque não se trata apenas de entrar num país – trata-se de participar nele. E essa participação só se realiza de forma plena quando há cultura comum. A língua, nesse sentido, não é uma barreira: é a porta de entrada. Quem fala a nossa língua já iniciou o percurso da cidadania. E ignorar isso é negar a própria natureza do convívio democrático.<br>Portugal, como país historicamente emigrante, deveria ter essa consciência profundamente enraizada. Fomos – e somos – milhões lá fora. E o que nos manteve ligados ao país de origem não foi a distância medida em quilômetros, mas a continuidade da língua. Ela nos permitiu manter os afetos, transmitir memórias, educar os filhos. Ela foi – e é – a nossa forma mais duradoura de cidadania.<br>Por isso, quando se verificam identidades, quando se traçam fronteiras administrativas, é urgente reconhecer que, sem cultura partilhada, toda a política migratória será falha. A cidadania não se constrói apenas com documentos – constrói-se com convivência. E não há convivência duradoura sem linguagem comum.<br>Precisamos nos juntar cotidianamente em torno do que é diferente e partilhá-lo para que se torne comum. Isso fará com que a língua portuguesa não seja apenas celebrada em discursos, mas assumida como um pilar ativo de integração e de cidadania global.<br>Neste 5 de maio, que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos, antes mesmo de chegarmos. E que saibamos reconhecer nos que partilham essa língua o direito pleno de também pertencer.",
        q: "Em relação às relações sintático-semânticas estabelecidas entre as orações do Texto 1, assinale a alternativa correta:",
        options: [
            "Em '[...] ao olharmos para os recentes debates sobre imigração em Portugal, devemos recolocar a língua no centro da equação [...]', a primeira oração expressa um sentido de causa em relação à segunda.",
            "Em 'E essa participação só se realiza de forma plena quando há cultura comum.', a oração temporal se localiza no final do período porque expressa um sentido de adição em relação à primeira.",
            "Em 'A língua, nesse sentido, não é uma barreira: é a porta de entrada.', a segunda oração expressa um sentido de oposição em relação à primeira.",
            "Em '[...] <u>quando</u> se traçam fronteiras administrativas, é urgente reconhecer que [...]', o termo em destaque poderia ser substituído por 'porque' sem que isso modificasse a relação sintático-semântica estabelecida entre as orações.",
            "Em 'Precisamos nos juntar cotidianamente em torno do que é diferente e partilhá-lo para que se torne comum.', a última oração é classificada como consecutiva, pois expressa um sentido de consequência em relação às demais."
        ],
        answer: 2,
        disclaimer: "Em 'A língua, nesse sentido, não é uma barreira: é a porta de entrada', a segunda oração contrapõe-se diretamente à negação da primeira ('não é X, mas sim Y'), estabelecendo relação semântica de oposição/contraste."
    },
    {
        topic: "Coesão e Coerência",
        supportText: "Considere o excerto do Texto 1: 'Neste 5 de maio, que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos, antes mesmo de chegarmos.'",
        q: "Assinale a alternativa correta quanto ao uso de seus elementos de coesão:",
        options: [
            "O emprego de 'neste', ao invés de 'nesse', justifica-se porque o termo se refere a um elemento que já foi mencionado anteriormente no texto.",
            "A substituição do verbo 'saibamos', no modo subjuntivo, por 'sabemos', no modo indicativo, causaria problemas de coesão no excerto.",
            "A utilização da elipse do pronome 'nós' antes dos verbos 'saibamos', 'pertencemos' e 'chegarmos' não é um recurso de coesão indicado para textos jornalísticos.",
            "O termo 'ela' funciona como um pronome catafórico, apontando para um referente que será mencionado posteriormente no texto.",
            "O termo 'onde' pode ser substituído por 'que' mantendo-se a adequabilidade na norma-padrão da língua portuguesa."
        ],
        answer: 1,
        disclaimer: "A estrutura optativa 'que saibamos ver...' (e o paralelismo no período seguinte 'E que saibamos reconhecer...') exige o Presente do Subjuntivo para expressar desejo/exortação. A troca isolada por 'sabemos' (indicativo) quebraria o encadeamento sintático-coesivo da construção."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Em relação à estrutura e à formação de palavras no Texto 1, assinale a alternativa correta:",
        options: [
            "Em 'imigrantes', o prefixo 'i' é adicionado à palavra 'migrantes' para indicar 'aqueles que saem do seu país de origem'.",
            "Em 'recolocar', o prefixo 're' apresenta o mesmo sentido que em 'recente'.",
            "As palavras 'sobretudo' e 'duradoura' são formadas pelo mesmo processo: composição.",
            "As palavras 'brasileiro' e 'global' são formadas pelo mesmo processo: derivação sufixal.",
            "O plural da palavra 'qualquer' é formado a partir da adição do '-s' ao final: qualquers."
        ],
        answer: 3,
        disclaimer: "Tanto 'brasileiro' (Brasil + -eiro) quanto 'global' (globo + -al) são formadas por derivação sufixal. (O plural de qualquer é 'quaisquer'; 'duradoura' é derivação sufixal; 'imigrante' é quem entra no país)."
    },
    {
        topic: "Colocação Pronominal",
        supportText: "",
        q: "Assinale a alternativa em que o termo destacado pode ser colocado em outra posição sem que isso infrinja as regras de colocação pronominal da norma-padrão da língua portuguesa:",
        options: [
            "'Porque não <u>se</u> trata apenas de entrar num país [...]'.",
            "'[...] trata-<u>se</u> de participar nele.'",
            "'E essa participação só <u>se</u> realiza de forma plena [...]'.",
            "'[...] quando <u>se</u> verificam identidades [...]'.",
            "'Ela <u>nos</u> permitiu manter os afetos [...]'."
        ],
        answer: 4,
        disclaimer: "Em 'Ela nos permitiu', o sujeito é o pronome pessoal reto 'Ela', que não é fator obrigatório de próclise. Portanto, admite-se tanto a próclise ('Ela nos permitiu') quanto a ênclise ('Ela permitiu-nos'). Nas demais opções, há palavras atrativas ('não', 'só', 'quando') ou início de oração após travessão ('trata-se')."
    },
    {
        topic: "Locuções Verbais",
        supportText: "",
        q: "Quanto ao emprego de locuções verbais no Texto 1, assinale a alternativa correta:",
        options: [
            "Em '<u>Precisamos nos juntar</u> cotidianamente em torno do que é diferente [...]', o verbo 'precisamos' integra uma locução verbal e é classificado como um auxiliar modal.",
            "Em 'Portugal, como país historicamente emigrante, <u>deveria ter</u> essa consciência profundamente enraizada.', a troca de 'deveria ter' por 'teria' não alteraria o sentido do excerto.",
            "Em 'Neste 5 de maio, que <u>saibamos ver</u> na língua o que ela realmente é [...]', a expressão em destaque forma uma locução verbal que indica futuro.",
            "Em '[...] <u>devemos recolocar</u> a língua no centro da equação [...]', o verbo 'devemos' se combina com 'recolocar' para constituir voz passiva.",
            "Em '[...] <u>devemos recolocar</u> a língua no centro da equação [...]', o verbo 'devemos' se combina com 'recolocar' para constituir um tempo composto: o pretérito mais-que-perfeito do indicativo."
        ],
        answer: 0,
        disclaimer: "Em 'Precisamos nos juntar', o verbo 'precisar' atua como verbo auxiliar modal (expressando modalidade de necessidade) junto ao verbo principal no infinitivo 'juntar'."
    },
    {
        topic: "Pontuação",
        supportText: "",
        q: "Sobre o emprego dos sinais de pontuação no Texto 1, assinale a alternativa correta:",
        options: [
            "Em '[...] é participar de uma cultura, compreender códigos sociais, partilhar valores e histórias.', as vírgulas são de uso facultativo.",
            "Em 'A cidadania, aliás, é o fio que liga todos os argumentos sobre imigração.', as vírgulas são obrigatórias porque isolam um adjunto adverbial de tempo.",
            "Em 'Fomos – e somos – milhões lá fora.', os travessões podem ser substituídos por vírgulas ou por parênteses sem que isso cause prejuízo sintático ao excerto.",
            "Em '[...] que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos [...]', os dois-pontos podem ser omitidos sem que isso cause prejuízo sintático ao excerto.",
            "Em 'Sem cultura não há partilha; sem língua não há cidadania nem futuro', o ponto e vírgula representa uma pausa mais breve que a vírgula."
        ],
        answer: 2,
        disclaimer: "Os travessões duplos isolam a oração intercalada 'e somos', função que pode ser desempenhada igualmente por um par de vírgulas ou de parênteses sem qualquer prejuízo sintático."
    },
    {
        topic: "Pressupostos e Subentendidos",
        supportText: "",
        q: "Assinale a alternativa que NÃO apresenta uma interpretação correta para o excerto, considerando-se a presença do termo 'apenas' como uma marca linguística que orienta essa interpretação:",
        options: [
            "Em 'Uma língua não é apenas um conjunto de palavras [...]', é possível pressupor que a língua é também um conjunto de palavras.",
            "Em 'Nesta segunda-feira (5), Dia Mundial da Língua Portuguesa, celebramos não apenas um idioma [...]', é possível pressupor que, na data mencionada, celebra-se também um idioma.",
            "Em 'Isso fará com que a língua portuguesa não seja apenas celebrada em discursos [...]', é possível pressupor que isso fará com que a língua também seja celebrada em discursos.",
            "Em 'A cidadania não se constrói apenas com documentos [...]', é possível pressupor que a cidadania também se constrói com documentos.",
            "Em '[...] dos 4.500 imigrantes recentemente notificados para deixar Portugal, apenas cerca de 10% são brasileiros.', é possível pressupor que os 4.500 imigrantes também são portugueses."
        ],
        answer: 4,
        disclaimer: "Dizer que 'dos 4.500 imigrantes notificados para deixar Portugal, apenas cerca de 10% são brasileiros' indica que os outros 90% são imigrantes de outras nacionalidades estrangeiras, e jamais que são cidadãos portugueses."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Texto 2: Do burnout ao propósito: a nova jornada psicológica nas organizações (Clécio Branco)<br>O trabalho sempre ocupou um lugar central em nossas vidas – mas raramente a saúde de quem trabalha foi tratada com a mesma importância. Isso começa a mudar, ainda que lentamente. Agora, até mesmo a linguagem normativa dá sinais de transformação: a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor neste mês, passa a reconhecer os riscos psicossociais – como ansiedade, estresse e depressão – como parte da realidade que precisa ser cuidada no ambiente laboral.<br>Esse avanço regulatório é consequência de um cenário que já vinha se agravando: o crescimento dos transtornos mentais associados ao trabalho, os altos índices de afastamento e a dificuldade de retenção e engajamento dos profissionais. O adoecimento psíquico se tornou, infelizmente, uma marca da era contemporânea.<br>Desde os primórdios da industrialização, o bem-estar dos trabalhadores foi negligenciado. Os departamentos de pessoal, no passado, limitavam-se à lógica da produtividade. A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornaram evidentes.<br>Hoje, a transformação é mais profunda. Vivemos na chamada sociedade do desempenho, em que a pressão não vem apenas do chefe: ela está internalizada. Cada profissional tornou-se gestor de si mesmo, cobrando-se o tempo todo, respondendo a e-mails no jantar, gerenciando metas pessoais como se fosse uma empresa. O telefone celular se transformou no símbolo dessa vigilância constante, dissolvendo as fronteiras entre tempo de trabalho e tempo de vida.<br>Nesse contexto, o trabalho deixou de ser apenas atividade e passou a ser identidade. E isso trouxe consequências. Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado comuns – não por fragilidade individual, mas por estruturas que não reconhecem limites humanos.<br>As novas gerações não se reconhecem mais nos modelos tradicionais. A ideia de uma carreira estável numa única empresa parece anacrônica. Ganha espaço uma busca por propósito, por coerência entre o que se faz e o que se acredita. O trabalhador contemporâneo quer mais do que salário: quer sentido, autonomia e saúde emocional.<br>Esse cenário exige um novo olhar das empresas. A 'ecosofia', proposta pelo filósofo Félix Guattari, oferece uma chave de leitura interessante ao propor o cuidado simultâneo com três dimensões: o ambiente, as relações sociais e o mundo interno de cada pessoa. Negligenciar uma dessas esferas compromete o sistema como um todo.<br>A saúde no trabalho, portanto, não pode mais ser pensada apenas como ergonomia ou ergonomia emocional. É preciso ir além dos benefícios pontuais e promover uma mudança cultural real – onde cuidar da mente não seja exceção, mas prática cotidiana.<br>Apesar do avanço tecnológico, as relações de trabalho não acompanharam essa evolução. Elas se tornaram mais líquidas, mais impessoais e, muitas vezes, mais desumanas. Normas como a NR-17 já apontavam para fatores biopsicossociais, mas a mudança necessária não virá apenas por meio da legislação.<br>Sem saúde, a realização pessoal torna-se inviável; sem realização, o engajamento sustentável é impossível. O caminho consiste em políticas eficazes de saúde ocupacional, com abordagens preventivas, que fomentem um ciclo virtuoso de produtividade, comprometimento e bem-estar nas organizações.",
        q: "A partir da leitura do Texto 2, é correto afirmar que:",
        options: [
            "a nova redação da Norma Regulamentadora 1 (NR-1) obriga as empresas a fornecerem tratamentos para problemas psicossociais.",
            "problemas como burnout, déficit de atenção e ansiedade crônica estão relacionados a fatores de ordem social.",
            "o objetivo principal do texto é tratar das causas do adoecimento psíquico no ambiente de trabalho.",
            "a solução para melhorar a saúde mental no ambiente de trabalho é que o trabalhador não busque por propósito, mas apenas por salário.",
            "as relações de trabalho evoluíram em consonância com a tecnologia, visto que a produtividade, o comprometimento e o bem-estar dos trabalhadores aumentaram."
        ],
        answer: 1,
        disclaimer: "O texto aponta que vivemos na 'sociedade do desempenho' e que condições como burnout, déficit de atenção e ansiedade crônica tornaram-se comuns 'não por fragilidade individual, mas por estruturas que não reconhecem limites humanos' (fatores estruturais/sociais)."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Em relação à estrutura e à formação de palavras presentes no Texto 2, assinale a alternativa correta:",
        options: [
            "A palavra 'bem-estar' é formada pela adição do prefixo 'bem' ao verbo 'estar'.",
            "Tanto 'lentamente' quanto 'infelizmente' são formadas pelo mesmo processo: composição por justaposição.",
            "Na palavra 'impessoal', o prefixo 'im' apresenta o sentido de 'movimento para dentro' como em 'ingerir'.",
            "Na palavra 'Ecosofia', é possível inferir, pelas informações do texto, que ocorre a junção da palavra 'eco' (som) com o sufixo 'sofia' (beleza).",
            "Em 'infelizmente' e 'desumanas', os prefixos 'in' e 'des' apresentam o mesmo significado: negação."
        ],
        answer: 4,
        disclaimer: "Tanto o prefixo 'in-' (em 'infelizmente') quanto o prefixo 'des-' (em 'desumanas') possuem valor semântico de negação/privação."
    },
    {
        topic: "Locuções Verbais e Aspecto Verbal",
        supportText: "",
        q: "Assinale a alternativa que analisa corretamente o verbo auxiliar destacado:",
        options: [
            "Em 'Isso <u>começa</u> a mudar, ainda que lentamente.', o termo destacado é um verbo auxiliar modal que indica obrigação.",
            "Em 'Esse avanço regulatório é consequência de um cenário que já <u>vinha</u> se agravando [...]', o verbo auxiliar destacado indica o desenvolvimento gradual da ação de 'agravar-se'.",
            "Em 'Nesse contexto, o trabalho <u>deixou</u> de ser apenas atividade e passou a ser identidade.', o verbo auxiliar destacado constitui com o principal a voz passiva.",
            "Em 'Nesse contexto, o trabalho deixou de ser apenas atividade e <u>passou</u> a ser identidade.', o verbo auxiliar destacado constitui com o principal o futuro do presente composto.",
            "Em 'A saúde no trabalho, portanto, não <u>pode</u> mais ser pensada apenas como ergonomia [...]', o verbo auxiliar destacado indica o início de uma ação."
        ],
        answer: 1,
        disclaimer: "O verbo auxiliar 'vir' no pretérito imperfeito ('vinha') combinado com o gerúndio ('se agravando') confere aspecto cursivo/progressivo, indicando o desenvolvimento contínuo e gradual da ação no passado."
    },
    {
        topic: "Pontuação",
        supportText: "",
        q: "Assinale a alternativa em que o uso de vírgula(s) é opcional do ponto de vista sintático:",
        options: [
            "'[...] três dimensões: o ambiente, as relações sociais e o mundo interno de cada pessoa.'.",
            "'Desde os primórdios da industrialização, o bem-estar dos trabalhadores foi negligenciado.'.",
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor neste mês, passa a reconhecer os riscos psicossociais [...]'.",
            "'Hoje, a transformação é mais profunda.'.",
            "'Normas como a NR-17 já apontavam para fatores biopsicossociais, mas a mudança necessária não virá apenas por meio da legislação.'."
        ],
        answer: 3,
        disclaimer: "Em 'Hoje, a transformação é mais profunda', o advérbio 'Hoje' é um adjunto adverbial de curta extensão (uma única palavra) deslocado no início da oração, razão pela qual o emprego da vírgula é facultativo segundo a norma-padrão."
    },
    {
        topic: "Morfologia e Pronomes Relativos",
        supportText: "",
        q: "Assinale a alternativa em que o termo destacado NÃO retoma um referente já mencionado no Texto 2, não podendo ser classificado, portanto, como um pronome relativo:",
        options: [
            "'Vivemos na chamada sociedade do desempenho, em <u>que</u> a pressão não vem apenas do chefe [...]'.",
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), <u>que</u> entra em vigor neste mês [...]'.",
            "'[...] com abordagens preventivas, <u>que</u> fomentem um ciclo virtuoso de produtividade [...]'.",
            "'Isso começa a mudar, ainda <u>que</u> lentamente.'.",
            "'Esse avanço regulatório é consequência de um cenário <u>que</u> já vinha se agravando [...]'."
        ],
        answer: 3,
        disclaimer: "Em 'ainda que lentamente', o vocábulo 'que' integra a locução conjuntiva subordinativa concessiva 'ainda que' (equivalente a 'embora'), não sendo pronome relativo."
    },
    {
        topic: "Semântica e Sinonímia",
        supportText: "",
        q: "Assinale a alternativa que apresenta entre parênteses um sinônimo para a palavra destacada:",
        options: [
            "'<u>Negligenciar</u> uma dessas esferas compromete o sistema como um todo.' (Descuidar).",
            "'Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado <u>comuns</u> [...]' (Ocasional).",
            "'Sem saúde, a realização pessoal torna-se <u>inviável</u> [...]' (Exequível).",
            "'[...] com abordagens preventivas, que <u>fomentem</u> um ciclo virtuoso de produtividade [...]' (Esmorecem).",
            "'[...] com abordagens preventivas, que fomentem um ciclo <u>virtuoso</u> de produtividade [...]' (Vicioso)."
        ],
        answer: 0,
        disclaimer: "'Negligenciar' significa tratar com negligência, desleixar, descuidar, menosprezar. Nas demais opções, os termos entre parênteses são antônimos."
    },
    {
        topic: "Concordância Verbal",
        supportText: "",
        q: "Assinale a alternativa em que a reescrita fornecida entre parênteses para o excerto está correta em relação às regras de concordância verbal da norma-padrão da língua portuguesa:",
        options: [
            "'A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornaram evidentes.' (A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornou evidente).",
            "'É preciso ir além dos benefícios pontuais [...]' (São precisos irmos além dos benefícios pontuais).",
            "'Cada profissional tornou-se gestor de si mesmo [...]' (Cada um dos profissionais tornaram-se gestor de si mesmo).",
            "'Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado comuns [...]' (Condições como burnout, déficit de atenção e ansiedade crônica tem se tornado comuns).",
            "'[...] raramente a saúde de quem trabalha foi tratada com a mesma importância [...]' (Raramente a saúde dos que trabalham foi tratada com a mesma importância)."
        ],
        answer: 4,
        disclaimer: "Em 'Raramente a saúde dos que trabalham foi tratada com a mesma importância', o verbo 'trabalham' concorda no plural com o antecedente demonstrativo plural 'os' ('aqueles que trabalham'), e a locução passiva 'foi tratada' concorda no singular com o núcleo do sujeito 'a saúde'."
    },
    {
        topic: "Dêixis e Coesão",
        supportText: "",
        q: "Assinale a alternativa em que a expressão destacada aponta para um referente do contexto extralinguístico:",
        options: [
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor <u>neste mês</u> [...]' (1º parágrafo).",
            "'<u>Esse avanço regulatório</u> é consequência de um cenário que já vinha se agravando [...]' (2º parágrafo).",
            "'<u>Nesse contexto</u>, o trabalho deixou de ser apenas atividade e passou a ser identidade.' (5º parágrafo).",
            "'E <u>isso</u> trouxe consequências.' (5º parágrafo).",
            "'<u>Elas</u> se tornaram mais líquidas [...]' (9º parágrafo)."
        ],
        answer: 0,
        disclaimer: "A expressão 'neste mês' é um elemento dêitico temporal que aponta para fora do texto (contexto extralinguístico/situacional: o mês de maio de 2025, data em que o artigo foi publicado). As demais expressões são anafóricas (retomam termos dentro do próprio texto)."
    },
    {
        topic: "Modalização e Semântica",
        supportText: "",
        q: "Assinale a alternativa que analisa corretamente a função do(s) elemento(s) destacado(s):",
        options: [
            "Em 'A ecosofia, proposta pelo filósofo Félix Guattari, oferece uma chave de leitura <u>interessante</u> [...]', o termo destacado avalia negativamente a proposta do filósofo.",
            "Em 'É preciso ir <u>além dos benefícios pontuais</u> [...]', a expressão destacada avalia positivamente a saúde no trabalho.",
            "Em 'O adoecimento psíquico se tornou, <u>infelizmente</u>, uma marca da era contemporânea.', o termo destacado expressa descontentamento por parte do autor.",
            "Em 'A saúde no trabalho, <u>portanto</u>, não pode mais ser pensada apenas como ergonomia ou ergonomia emocional.', o termo destacado indica que a informação veiculada é uma causa para o que foi dito anteriormente no texto.",
            "Em '<u>Hoje</u>, a transformação é mais profunda.', o termo destacado adiciona um argumento ao período."
        ],
        answer: 2,
        disclaimer: "O advérbio 'infelizmente' atua como um modalizador discursivo apreciativo/atitudinal, revelando o juízo de lamentação/descontentamento do autor diante do fato narrado."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "",
        q: "No excerto 'Cada profissional tornou-se gestor de si mesmo [...], gerenciando metas pessoais <u>como se</u> fosse uma empresa.', o termo destacado sinaliza a presença de qual figura de linguagem?",
        options: [
            "Eufemismo.",
            "Onomatopeia.",
            "Metáfora.",
            "Comparação.",
            "Personificação."
        ],
        answer: 3,
        disclaimer: "A presença explícita do conectivo comparativo 'como se' estabelecendo paralelo entre o profissional e uma empresa caracteriza a figura de linguagem denominada comparação (ou símile)."
    },
    {
        topic: "Ortografia e Análise Sintática",
        supportText: "Considere o excerto: 'A ideia de uma carreira estável numa única empresa parece anacrônica. Ganha espaço uma busca por propósito [...]'.",
        q: "Assinale a alternativa que analisa corretamente o excerto acima:",
        options: [
            "O termo 'numa' é resultado da junção da preposição 'em' + artigo 'uma' e pertence à variedade não padrão da língua portuguesa.",
            "O termo 'ideia' não é acentuado porque se trata de uma palavra paroxítona que possui ditongo aberto.",
            "O verbo 'parece' pode ser substituído por 'é' sem que isso modifique o sentido original do excerto.",
            "O sujeito do verbo 'ganha' está oculto, mas pode ser recuperado pelo contexto.",
            "A expressão 'de uma carreira estável numa única empresa' é um adjunto que pode ser removido da oração sem que isso prejudique a estrutura sintática ou a semântica do excerto."
        ],
        answer: 1,
        disclaimer: "Pelo Novo Acordo Ortográfico da Língua Portuguesa, os ditongos abertos 'éi' e 'ói' deixaram de receber acento agudo nas palavras paroxítonas (como 'ideia', 'assembleia', 'heroico')."
    },
    {
        topic: "Redação Oficial",
        supportText: "",
        q: "De acordo com o Manual de Redação da Presidência da República, são atributos da redação oficial:",
        options: [
            "estilo e zelo; originalidade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "estilo e precisão; objetividade; detalhamento; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e suficiência; subjetividade; detalhamento; coesão e coerência; pessoalidade; informalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e precisão; originalidade; coesão e coerência; pessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa."
        ],
        answer: 4,
        disclaimer: "Segundo o Capítulo I do Manual de Redação da Presidência da República (3ª ed.), a redação oficial deve caracterizar-se pelos seguintes atributos: clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa."
    },
    {
        topic: "Redação Oficial (Pronomes de Tratamento)",
        supportText: "",
        q: "Assinale a alternativa que apresenta o uso correto dos pronomes de tratamento no vocativo das comunicações oficiais:",
        options: [
            "Tanto para um Ministro de Estado quanto para um Ministro dos Tribunais Superiores, utiliza-se 'Senhor Ministro,'.",
            "Para um Senador da República, utiliza-se 'Excelentíssimo Senador,'.",
            "Para o Presidente do Congresso Nacional, utiliza-se 'Senhor Presidente do Congresso Nacional,'.",
            "Para o Oficial-General das Forças Armadas, utiliza-se 'Senhor,'.",
            "Para o Presidente da República, utiliza-se 'Excelentíssimo Presidente da República,'."
        ],
        answer: 0,
        disclaimer: "De acordo com o MRPR, o vocativo 'Excelentíssimo Senhor' é restrito apenas aos Chefes de Poder (Presidente da República, Presidente do Congresso Nacional e Presidente do STF). Para todas as demais autoridades (incluindo Ministros de Estado, Ministros de Tribunais Superiores e Senadores), emprega-se 'Senhor' seguido do cargo ('Senhor Ministro,', 'Senhor Senador,')."
    },    
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "Texto CG2A1\nUm dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas. Ao reconhecer as necessidades e os sentimentos dos outros, somos capazes de nos colocar em seus lugares e compreender suas perspectivas, o que facilita a resolução de conflitos e a construção de relações mais saudáveis. Como afirma Marshall Bertram Rosenberg, em sua obra Comunicação não violenta, \"a CNV nos guia na reformulação do nosso modo de expressão e escuta dos outros, pela concentração em quatro áreas: o que observamos, o que sentimos, do que necessitamos e o que pedimos para nos enriquecer a vida\". A CNV promove uma escuta, um respeito e uma empatia profundos. Algumas pessoas usam a CNV para reagir compassivamente a si mesmas; outras, para estabelecer maior profundidade em suas relações pessoais, e outras, ainda, para gerar relacionamentos eficazes no trabalho ou na política. No mundo inteiro, utiliza-se a CNV para mediar disputas e conflitos em todos os níveis.\nParticularmente no que se refere à função ministerial, é preciso que se evite o que o autor chama de comunicação alienante da vida, isto é, \"os juízos morais, que atribuem erro ou ruindade às pessoas que não agem conforme certos valores\". Com efeito, um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações acerca da prática de ilícitos (uma denúncia criminal narrará a prática de uma conduta que se amolda a um tipo penal), o que não significa, contudo, que os agentes públicos que integram a instituição estejam autorizados a proferir julgamentos morais. No modelo de um Ministério Público dialógico, ou seja, aquele que efetivamente se abre à interlocução com a sociedade, a CNV é fator que transforma o discurso em prática, pois propicia o diálogo face a face com os mais diferentes e antagônicos setores e, a partir disso, a construção de confiança e o desenvolvimento do compromisso e da compreensão comuns entre os atores envolvidos.",
        q: "Infere-se do segundo parágrafo do texto que a relevância da CNV no contexto do Ministério Público reside em impedir que acusações formuladas por seus agentes sejam influenciadas por divergências axiológicas entre as partes.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O texto afirma que a relevância está em evitar 'juízos morais' ao formular imputações técnicas, não indicando que o objetivo seja impedir influência de divergências axiológicas entre as partes." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "Segundo o texto, uma das vantagens do uso da CNV é propiciar a empatia entre as pessoas.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O primeiro período do texto afirma literalmente: 'Um dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas'." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "As aplicações da CNV em diversos âmbitos, como o psicológico, o interpessoal ou o profissional, visam impedir o surgimento de conflitos.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O texto menciona que a CNV facilita a 'resolução de conflitos' e serve para 'mediar disputas', não tendo o condão de 'impedir o surgimento' deles." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "Entende-se da leitura do texto que, no contexto do modelo dialógico de Ministério Público, a CNV favorece a conformidade entre palavras e ações.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O texto corrobora essa afirmação ao dizer que a CNV é 'fator que transforma o discurso em prática'." //[cite: 24]
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "",
        q: "O termo \"autor\" (primeiro período do segundo parágrafo) faz referência a \"Marshall Bertram Rosenberg\" (terceiro período do primeiro parágrafo).", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "'Autor' retoma a referência do criador da obra mencionado explicitamente no parágrafo anterior." //[cite: 24]
    },
    {
        topic: "Coesão e Relações Lógico-Semânticas",
        type: "vf",
        supportText: "",
        q: "Mediante o emprego da expressão \"Com efeito\", no segundo período do segundo parágrafo, os autores reforçam a ideia apresentada no período anterior.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A locução adverbial 'com efeito' tem o valor semântico de confirmação, ênfase ou reforço de uma ideia (equivale a 'de fato')." //[cite: 24]
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "",
        q: "No último período do texto, o pronome presente na forma contraída \"disso\", em \"a partir disso\", retoma \"fator que transforma o discurso em prática\".", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O pronome anafórico 'disso' retoma a ideia imediatamente anterior: o 'diálogo face a face com os mais diferentes e antagônicos setores'." //[cite: 24]
    },
    {
        topic: "Colocação Pronominal",
        type: "vf",
        supportText: "",
        q: "No segmento \"que efetivamente se abre\" (último período do texto), o deslocamento do pronome \"se\" para a posição enclítica — que efetivamente abre-se — manteria a correção gramatical do texto.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A presença do pronome relativo 'que' e do advérbio 'efetivamente' constituem palavras atrativas que exigem obrigatoriamente a próclise." //[cite: 24]
    },
    {
        topic: "Morfologia e Classes de Palavras",
        type: "vf",
        supportText: "",
        q: "No penúltimo período do primeiro parágrafo, o termo \"ainda\" expressa circunstância de tempo.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "No trecho 'outras, ainda, para gerar relacionamentos', a palavra 'ainda' tem valor de inclusão/adição, e não temporal." //[cite: 24]
    },
    {
        topic: "Tempos e Modos Verbais",
        type: "vf",
        supportText: "",
        q: "O tempo e o modo verbais empregados em \"narrará\" (segundo período do segundo parágrafo) sinalizam a provável ocorrência da ação de narrar.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O futuro do presente do indicativo ('narrará') expressa um fato futuro tido como certo/categórico no contexto da frase, e não uma mera probabilidade." //[cite: 24]
    },
    {
        topic: "Pontuação e Figuras de Linguagem",
        type: "vf",
        supportText: "",
        q: "No trecho \"outras, para estabelecer maior profundidade em suas relações pessoais\" (penúltimo período do primeiro parágrafo), a vírgula indica supressão de palavras.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A vírgula após 'outras' marca a elipse (zeugma) da expressão 'usam a CNV' explícita na oração anterior." //[cite: 24]
    },
    {
        topic: "Sintaxe",
        type: "vf",
        supportText: "",
        q: "Na citação apresentada no terceiro período do primeiro parágrafo, o segmento 'dos outros' complementa o sentido dos substantivos 'expressão' e 'escuta'.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O termo 'dos outros' atua como complemento nominal apenas do substantivo 'escuta' (escuta dos outros). Não há ligação sintática ou de sentido com 'expressão'." //[cite: 24]
    },
    {
        topic: "Regência",
        type: "vf",
        supportText: "",
        q: "No segmento \"terá que formular\" (segundo período do segundo parágrafo), a substituição do vocábulo \"que\" por de comprometeria a correção gramatical do texto.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A substituição está correta. As locuções verbais 'ter que' e 'ter de' são sinônimas e igualmente aceitas na norma-padrão." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Na correspondência oficial, a formalidade de tratamento está associada tanto à civilidade quanto à necessidade de uniformização das comunicações.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "De acordo com o Manual de Redação da Presidência da República, a formalidade abrange a polidez, a civilidade e a uniformidade das comunicações." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Por ser a concisão uma das principais características da redação oficial, recomenda-se que o texto de documentos oficiais seja composto de, no máximo, quatro parágrafos.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A concisão é obrigatória, mas o Manual não estipula limite máximo de parágrafos para os documentos oficiais." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Em comunicações internas, via email, entre autoridades de mesma hierarquia, deve-se empregar o fecho Atenciosamente.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O MRPR estabelece o uso de 'Atenciosamente' para autoridades de mesma hierarquia ou de hierarquia inferior." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Cada parágrafo de um expediente oficial deve ser numerado, mediante o uso de números romanos, ainda que o documento apresente um único parágrafo.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Quando o documento contém apenas um parágrafo, não há numeração. Quando há mais de um, numeram-se com algarismos arábicos, e não romanos." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.",
        q: "De acordo com o texto,",
        options: [
            "é preciso criar leis mais eficientes para melhorar o papel das bibliotecas.",
            "as leis criadas para as bibliotecas carecem de rigidez técnica.",
            "as bibliotecas tornaram-se reféns dos anseios das comunidades.",
            "é preciso mudar o comportamento social em relação às bibliotecas.",
            "as bibliotecas são relevantes tão somente no aspecto material da vida."
        ],
        answer: 3,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.",
        q: "De forma global, o texto propõe-se a",
        options: [
            "construir um posicionamento diante de uma verdade científica e, por isso, o tipo dominante é o expositivo.",
            "convocar os leitores a defenderem uma causa social relevante e, por isso, o tipo dominante é o injuntivo.",
            "construir uma imagem precisa do arcabouço legal em relação ao papel social das bibliotecas, e, por isso, o tipo dominante é o descritivo.",
            "relatar a situação de limitação dos aspectos legais no que se refere à valorização das bibliotecas, e, por isso, o tipo dominante é o narrativo.",
            "construir um posicionamento diante de algo que não é consensual e, por isso, o tipo dominante é o argumentativo."
        ],
        answer: 4,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Pontuação",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.\n<hr class=\"my-3 border-slate-200\"><div class=\"font-semibold text-slate-900\">Leia o excerto reproduzido a seguir.\nÉ preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática.</div>",
        q: "Sobre a pontuação do excerto, é correto afirmar:",
        options: [
            "as duas vírgulas são justificáveis, pois delimitam uma oração adverbial intercalada.",
            "a retirada da primeira vírgula não compromete as relações sintático-semânticas do período.",
            "a retirada da segunda vírgula não compromete as relações sintático-semânticas do período.",
            "as duas vírgulas são justificáveis, pois delimitam um bloco de informação secundária.",
            "as duas vírgulas são justificáveis, pois indicam pausa respiratória em período extenso."
        ],
        answer: 3,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.\n<hr class=\"my-3 border-slate-200\"><div class=\"font-semibold text-slate-900\">Leia o excerto a seguir.\n[...] pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.</div>",
        q: "Sobre questões relacionadas à regência, é correto afirmar:",
        options: [
            "as duas ocorrências de uso do acento grave devem-se à regência de um mesmo nome",
            "as duas ocorrências de uso do acento grave devem-se à regência de um mesmo verbo.",
            "o primeiro “a” é uma preposição, devido à regência do nome.",
            "o primeiro “a” é uma preposição, devido à regência do verbo.",
            "o primeiro “a” é um artigo exigido pela regência do verbo."
        ],
        answer: 1,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.",
        q: "A palavra em destaque autoriza o resgate de uma informação implícita em:",
        options: [
            "“O grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos”.",
            "“E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca”.",
            "“Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor”.",
            "“É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade”.",
            "“É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática”."
        ],
        answer: 1,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.\n<hr class=\"my-3 border-slate-200\"><div class=\"font-semibold text-slate-900\">Analise o parágrafo a seguir.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?</div>",
        q: "Em relação às orações em destaque, é correto afirmar:",
        options: [
            "as três orações exercem funções sintáticas idênticas.",
            "a primeira oração exerce função de advérbio, enquanto as últimas, função de adjetivo.",
            "a primeira oração exerce função de advérbio, enquanto as últimas, função de substantivo.",
            "as duas primeiras exercem função de substantivo, enquanto a última, função de adjetivo.",
            "as três orações exercem funções sintáticas distintas."
        ],
        answer: 2,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.\n<hr class=\"my-3 border-slate-200\"><div class=\"font-semibold text-slate-900\">Analise o período a seguir.\nEsse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.</div>",
        q: "A palavra em destaque é classificada como uma",
        options: [
            "conjunção que introduz uma consequência.",
            "conjunção que introduz uma finalidade.",
            "preposição que introduz uma finalidade.",
            "preposição que introduz uma consequência.",
            "interjeição que introduz uma explicação."
        ],
        answer: 0,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.\n<hr class=\"my-3 border-slate-200\"><div class=\"font-semibold text-slate-900\">Analise o parágrafo abaixo.\nNeste momento, em que[1] um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde[2] diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.</div>",
        q: "Em relação ao termos em destaque, é correto afirmar:",
        options: [
            "os dois são considerados pronomes demonstrativos que retomam um substantivo e exercem função de adjunto adnominal.",
            "os dois são considerados pronomes interrogativos que retomam uma locução adverbial e exercem função de sujeito.",
            "o primeiro pode ser substituído por “onde”, sem alteração sintático-semântica.",
            "o segundo pode ser substituído por “que”, sem alteração sintático-semântica.",
            "os dois são considerados pronomes relativos que retomam um substantivo e exercem função de adjunto adverbial."
        ],
        answer: 4,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.",
        q: "Considerando a sua totalidade, o texto apresenta, de maneira",
        options: [
            "dominante, a linguagem conotativa, inadequada ao gênero textual.",
            "exclusiva, a linguagem denotativa, inadequada à sequência textual",
            "exclusiva, a linguagem conotativa, adequada ao gênero textual.",
            "dominante, a linguagem denotativa, adequada ao gênero textual.",
            "exclusiva, a linguagem conotativa, adequada à sequência textual."
        ],
        answer: 3,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "As questões de 01 a 10 referem-se ao texto a seguir.\nAlém das leis, precisamos promover o desejo por bibliotecas\n\nLeonardo Assis\nNos últimos 30 anos, temos acompanhado a criação de leis relacionadas às bibliotecas públicas, passando pelas escolares e, mais recentemente, chegando àquelas previstas nos empreendimentos do programa Minha Casa, Minha Vida. Essas medidas buscam garantir espaços legítimos de existência e atuação para as bibliotecas. Esse crescimento do interesse pela instituição é fruto do trabalho de muitos profissionais que lutam para criar espaços de fruição da informação e, consequentemente, da cultura em nossa sociedade.\nIniciativas como essas são fundamentais. Elas expressam posicionamentos estratégicos para assegurar que a população tenha acesso a ambientes propícios ao desenvolvimento pleno do ser. Esses guerreiros, como gosto de chamá-los, são aqueles que compreenderam e valorizam o poder transformador das bibliotecas na vida em sociedade.\nNeste momento, em que um mínimo legal foi e está sendo garantido, é necessário que a sociedade compreenda a importância das bibliotecas, ou melhor, da informação, para a sua vida, tanto no aspecto material quanto simbólico. Só esse espaço plural, onde diferentes discursos coexistem e o autoritarismo não encontra lugar, pode levar a sociedade à compreensão das desigualdades e à busca por uma prosperidade que, mesmo quando individual, tem reflexos coletivos.\nO grande desafio atual, no processo de institucionalização das leis sobre bibliotecas, é tornar esses espaços relevantes e significativos para os contextos em que estão inseridos. E isso exige uma formação profissional na área de biblioteconomia e de estudos da informação que vá além da técnica e abrace o contexto social.\nApenas um olhar atento às comunidades atendidas poderá transformar essa realidade, fazendo com que leis e decretos deixem de ser apenas formalidades para se tornarem ações concretas. É assim que as bibliotecas, especialmente as públicas e escolares, podem assumir um papel protagonista em nossa sociedade.\nAo olharmos para a história da humanidade, da Mesopotâmia às redes de informação contemporâneas, percebemos que o desenvolvimento das nações sempre esteve ligado ao fortalecimento de suas instituições de informação. Esse ensinamento nos coloca diante de um momento ímpar. Se já temos leis que favorecem as bibliotecas, por que elas ainda não se tornaram plenamente efetivas?\nA resposta, ainda que parcial, é clara: falta engajamento. A atuação profissional no campo das bibliotecas ainda é falha em muitos contextos. É preciso reduzir o tempo, aqui entendido como o tempo de formação, que o profissional leva para encarar o cenário real de sua prática. E essa formação não pode se restringir a métodos e formas; ela precisa instigar o desejo. Um desejo que seja coletivo, que nasça da comunidade, e não apenas da atuação isolada de um profissional diante de um acervo que, por si só, não tem valor.\nProfissionais, é preciso buscar a instalação desse desejo por bibliotecas em nossas comunidades. E esse desejo vem a partir do momento em que a sociedade percebe que os ganhos, não apenas no sentido material, são muitos quando proporcionados por uma biblioteca.",
        q: "Considerando a coesão e a progressão discursiva, a interligação",
        options: [
            "entre o segundo e o primeiro parágrafos do texto é feita por meio de um pronome, responsável pelo acréscimo de informações.",
            "entre o segundo e o primeiro parágrafos do texto é feita por meio de uma elipse, responsável pela repetição de informações.",
            "entre os períodos do segundo parágrafo do texto é feita, tão somente, por pronomes pessoais, responsáveis pelo acréscimo de informações.",
            "entre os períodos do segundo parágrafo do texto é feita, tão somente, por pronomes demonstrativos, responsáveis pelo acréscimo de informações.",
            "entre o segundo e o primeiro parágrafos do texto é feita por meio de um pronome, responsável pela repetição de informações."
        ],
        answer: 0,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Leia com atenção o texto a seguir.\nProcessamento de dados é a conversão de dados brutos em informações úteis por meio de etapas estruturadas, como coleta, preparação, análise e armazenamento de dados. As organizações podem ter insights praticáveis e informar a tomada de decisão processando dados de forma eficaz.\nHistoricamente, as empresas dependiam de processamento de dados e calculadoras para gerenciar conjuntos de dados menores. Como as empresas geravam volumes cada vez maiores de dados, tornaram-se essenciais os métodos avançados de processamento de dados.\nKRANTZ, Tom. JONKER, Alexandra. O que é processamento de dados? IBM.2025.",
        q: "As opções a seguir apresentam observações corretas sobre esse pequeno texto, à exceção de uma. Assinale-a.",
        options: [
            "O texto se inicia pela definição de “processamento de dados”.",
            "As duas ocorrências do conectivo “como” possuem o mesmo significado.",
            "Por meio do processamento de dados, informações úteis resultam da conversão de dados brutos.",
            "De acordo com o texto, os métodos avançados de processamento são respostas a uma necessidade.",
            "O advérbio “historicamente” se refere a realidades passadas no terreno do processamento de dados."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). As ocorrências da palavra 'como' exercem funções diferentes: na primeira ('como coleta, preparação'), introduz exemplificação; na segunda ('Como as empresas geravam volumes...'), atua como conjunção subordinativa causal, com sentido de 'já que' ou 'visto que'."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Leia com atenção o trecho a seguir.\n“Se os navios geralmente vão melhor do que os Estados, isso ocorre pela única razão de que naqueles cada um aceita a parte que lhe compete, enquanto nestes, na maioria das vezes, quanto menos se sabe, mais se tem o desejo de comandar.”",
        q: "Sobre esse trecho, assinale a afirmativa correta.",
        options: [
            "A conjunção “Se” inicial indica uma condição.",
            "O pronome demonstrativo “naqueles” tem como referente os navios.",
            "O advérbio “geralmente” se opõe semanticamente à expressão “na maioria das vezes”.",
            "Na comparação entre navios e Estados, o trecho indica a superioridade dos Estados sobre os navios.",
            "Enquanto o demonstrativo “isso” se refere a algo já dito, o pronome “cada um” se refere a algo futuro do trecho."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Em enumerações, o pronome 'aquele(s)' retoma o termo mencionado em primeiro lugar no discurso (o mais distante), que neste caso é 'navios'. 'Este(s)' retomaria o mais próximo ('Estados')."
    },
    {
        topic: "Coesão Referencial",
        supportText: "No texto a seguir, os pronomes demonstrativos sublinhados estão bem empregados.\nSe os navios geralmente vão melhor do que os Estados, isso ocorre pela única razão de que naqueles cada um aceita a parte que lhe compete, enquanto nestes, na maioria das vezes, quanto menos se sabe, mais se tem o desejo de comandar.",
        q: "Assinale a opção que mostra a frase em que o demonstrativo está erradamente empregado.",
        options: [
            "Esta é a regra de ouro dos governantes: respeitem os votos dos eleitores.",
            "Antigamente, as leis eram observadas com mais rigor, mas, naqueles tempos tudo era diferente.",
            "Os advogados devem manter sigilo sobre seus clientes e isso deve ser rigorosamente respeitado.",
            "Dicionários e enciclopédias fazem parte de boas bibliotecas, mas entre estes e aqueles há diferença de volume.",
            "Para os que não conseguem governar a própria casa nem os povos, uma boa desculpa é dizer que estes são ingovernáveis."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Ocorreu erro de concordância. 'Enciclopédias' é um substantivo feminino e é o termo antecedente mais próximo, logo, deveria ser retomado por 'estas' (feminino), e não por 'estes'."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Leia o texto a seguir.\nQuem governa uma instituição pública ou privada é sempre objeto do ódio e das queixas dos governados. Os homens estão sempre descontentes porque estão sempre infelizes. Por isso ficam descontentes com o próprio Estado, e também por isso ficam descontentes com quem o governa... Entretanto, no que concerne ao ato de governar, infelizmente existem apenas duas alternativas realmente sensatas: ou abster-se do governo, seja ele público ou privado, ou administrá-lo totalmente em vantagem própria e não dos governados.\nLeopardi, Giácomo. Ensaísta italiano.",
        q: "As opções a seguir apresentam observações de caráter linguístico sobre o texto. Assinale a única observação incorreta.",
        options: [
            "Os adjetivos “pública ou privada” são de conteúdo subjetivo, expressando uma opinião do enunciador do texto.",
            "O segundo período do texto traz uma justificativa para o que é afirmado no período anterior.",
            "O termo “e também” traz uma redundância, que é normalmente aceita.",
            "As duas ocorrências de “por isso” mostram o mesmo antecedente.",
            "O termo “Entretanto” traz o valor de oposição."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). 'Pública' e 'privada' são adjetivos relacionais/objetivos que delimitam a natureza institucional. Eles não expressam apreciação pessoal, julgamento ou juízo de valor subjetivo do autor."
    },
    {
        topic: "Concordância Verbal e Nominal",
        supportText: "Os que trabalham em espaços profissionais em que inserem textos devem preocupar-se com a correção gramatical.",
        q: "Entre as frases a seguir, assinale a que se mostra integralmente correta.",
        options: [
            "Vimos hoje aqui depois das aulas.",
            "Vieram ela e eu para a festa no mesmo táxi.",
            "Os policiais requiseram nossos documentos.",
            "Não restou nenhum segredo entre eu e meu advogado.",
            "As autoridades interviram nos problemas políticos surgidos na semana passada."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A forma 'vimos' está perfeitamente correta como presente do indicativo do verbo vir ('nós vimos pedir'). Os erros das demais são: B (o correto é 'viemos ela e eu'), C ('requereram', pois não deriva de querer), D ('entre mim e meu'), E ('intervieram', pois deriva de vir)."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "",
        q: "Assinale a opção que apresenta o único texto coerente.",
        options: [
            "Na Europa, nesta época, faz muito frio: vamos comprar roupas mais leves.",
            "A verdade é que ninguém pretende descobrir nada com essas investigações.",
            "A despeito dos altos preços dos restaurantes, não comemos fora durante a semana.",
            "Nessas situações há duas coisas a fazer: dirigir-se imediatamente a uma delegacia.",
            "Ela não sabia desde que momento de sua vida ela trazia aquela marca de nascença na testa."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A opção B apresenta coerência lógica e coesão. Nas demais há contradições lógicas: frio/roupas leves (A); 'A despeito de' (apesar de) quebra a lógica, deveria ser causa (C); anunciar duas coisas e listar uma (D); marca de nascença, por definição, está lá desde o nascimento (E)."
    },
    {
        topic: "Coesão Referencial",
        supportText: "As frases a seguir mostram um termo sublinhado que se refere a um termo anterior, estabelecendo coesão na frase.",
        q: "Assinale a opção em que a identificação do antecedente do termo sublinhado está correta.",
        options: [
            "A morte é um jeito de a natureza LHE dizer para pegar leve. / a natureza.",
            "Que apertada é a porta e que estreito o caminho QUE conduz à vida. / a porta.",
            "Todo homem deveria ser incendiário até os 25 anos de idade e bombeiro DAÍ em diante. / 25 anos.",
            "O jovem não raciocina, age; o velho raciocina e põe os outros para agirem em SEU lugar. / o jovem.",
            "Qual pode ser a vida que começa pelos gritos da mãe, que A dá, e os choros do filho que A recebe. / a vida."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Na opção E, os pronomes oblíquos átonos ('que a dá', 'que a recebe') atuam como objetos diretos resgatando o núcleo substantivo 'vida' mencionado no início da estrutura."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "As opções a seguir apresentam frases em que há a repetição de uma mesma palavra.",
        q: "Assinale aquela em que as palavras mostram sentidos diferentes.",
        options: [
            "Morrer por uma causa não faz com que essa causa seja justa.",
            "Para mim, velho é aquele sujeito 15 anos mais velho do que eu.",
            "Depois dos 70, tudo se resume a remendar, remendar, remendar.",
            "Fala-se muito em loucuras da juventude; não sei, porém, porque nada se diz das loucuras da velhice.",
            "Quarenta anos é uma idade terrível. Porque é a idade em que chegamos a ser o que somos."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Na primeira ocorrência, a palavra 'velho' é um substantivo que designa o indivíduo idoso. Na segunda ocorrência, atua como adjetivo qualificando a idade do sujeito em comparação."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Leia o texto abaixo, sobre gestão e governança.\nA governança não se confunde com gestão: enquanto a gestão executa atividades e processos, a governança direciona, define políticas, estabelece prioridades e supervisiona resultados, garantindo que os objetivos organizacionais da empresa sejam alcançados de forma ética e eficiente. Ela envolve a definição de responsabilidades, a alocação de recursos e a criação de mecanismos de controle de atividades e monitoramento.",
        q: "Sobre a estruturação desse texto, assinale a afirmativa correta.",
        options: [
            "O texto tem a finalidade de definir os dois processos.",
            "O texto pretende mostrar a superioridade da governança sobre a gestão.",
            "O texto pretende mostrar objetivamente a diferença entre gestão e governança.",
            "O texto pode ser definido como argumentativo, pois expõe opiniões do enunciador do texto.",
            "O texto indica uma série de atividades da governança em ordem cronológica, montando um texto narrativo."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A finalidade central (o propósito comunicativo primário do autor ao iniciar com 'não se confunde com' e usar o conector de contraste 'enquanto') é traçar um paralelo estritamente objetivo que diferencia os papéis."
    },
    {
        topic: "Sintaxe",
        supportText: "Leia o texto abaixo, sobre gestão e governança.\nA governança não se confunde com gestão: enquanto a gestão executa atividades e processos, a governança direciona, define políticas, estabelece prioridades e supervisiona resultados, garantindo que os objetivos organizacionais da empresa sejam alcançados de forma ética e eficiente. Ela envolve a definição de responsabilidades, a alocação de recursos e a criação de mecanismos de controle de atividades e monitoramento.",
        q: "Nas opções a seguir, assinale aquela que traz uma função diferente do conectivo de.",
        options: [
            "objetivos organizacionais da empresa.",
            "definição de responsabilidades.",
            "alocação de recursos.",
            "criação de mecanismos.",
            "controle de atividades."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Em 'objetivos da empresa', o termo preposicionado exerce função de Adjunto Adnominal com valor de posse (os objetivos pertencem à empresa). Nas demais opções, as locuções complementam substantivos abstratos derivados de ação com valor de paciente (Complemento Nominal: a responsabilidade é definida, o recurso é alocado)."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Um Analista de Negócios de TI desempenha um papel crucial em unir a tecnologia e os objetivos empresariais. Este profissional é responsável por garantir que as soluções de TI estejam alinhadas com as necessidades e objetivos empresariais, promovendo assim eficiência e inovação. Dentro da categoria de alinhamento entre TI e negócios, o Analista de Negócios de TI (IT BA) identifica áreas de melhoria, documenta requisitos e garante que as soluções tecnológicas sejam implementadas de forma eficaz para aprimorar os processos estruturais das empresas modernas.",
        q: "Pela sua estrutura, esse pequeno texto deve ser classificado, quanto ao seu tipo, como",
        options: [
            "injuntivo.",
            "informativo.",
            "descritivo e narrativo.",
            "descritivo e expositivo.",
            "argumentativo e expositivo."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A tipologia é predominantemente expositiva (por conceituar de forma direta e informativa o que faz a profissão) e descritiva (por elencar as características, funções e atribuições estáticas inerentes ao cargo de IT BA)."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Um Analista de Negócios de TI desempenha um papel crucial em unir a tecnologia e os objetivos empresariais. Este profissional é responsável por garantir que as soluções de TI estejam alinhadas com as necessidades e objetivos empresariais, promovendo assim eficiência e inovação. Dentro da categoria de alinhamento entre TI e negócios, o Analista de Negócios de TI (IT BA) identifica áreas de melhoria, documenta requisitos e garante que as soluções tecnológicas sejam implementadas de forma eficaz para aprimorar os processos estruturais das empresas modernas.",
        q: "Entre os adjetivos que aparecem nas opções abaixo, assinale aquele que mostra uma opinião do enunciador, indicando uma qualidade.",
        options: [
            "papel crucial.",
            "objetivos empresariais.",
            "soluções tecnológicas.",
            "processos estruturais.",
            "empresas modernas."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). 'Crucial' é um adjetivo valorativo (ou subjetivo), que denota o juízo de valor ou a apreciação que o autor faz a respeito da importância do papel. Os demais são adjetivos relacionais e de base mais estritamente objetiva."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "“Consideramos estas verdades como evidentes por si: que todos os homens são criados iguais; que são dotados pelo seu Criador de certos direitos inalienáveis; que entre esses direitos estão a vida, a liberdade e a procura da felicidade.”\nThomas Jefferson, Declaração de Independência dos EUA. (1776)",
        q: "Sobre a significação e a estruturação desse segmento, assinale a afirmativa correta.",
        options: [
            "Os três direitos citados ao final do texto são todos os direitos inalienáveis dos homens.",
            "O fato de a forma verbal “Consideramos” estar no plural indica que são vários os autores do texto.",
            "O termo “estas verdades” se refere a algo dito anteriormente, que não está registrado neste segmento.",
            "Ao afirmar que “todos os homens são criados iguais”, o texto indica que todos os homens têm os mesmos direitos.",
            "Ao dizer que as verdades citadas são “evidentes por si”, o autor do texto indica que elas necessitam de demonstração."
        ],
        answer: 3,
        disclaimer: "A afirmação de que 'todos os homens são criados iguais' sustenta logicamente a premissa de igualdade de direitos inalienáveis. A opção A é falsa pois o texto diz 'de CERTOS direitos', e não de 'todos'. A opção C é falsa pois 'estas verdades' é uma referência catafórica (aponta para o que vem a seguir, após os dois-pontos)."
    },
    {
        topic: "Semântica e Reescrita de Frases",
        supportText: "“O direito de voto para eleger representantes é o direito básico pelo qual os demais são protegidos. Retirar esse direito equivale a reduzir a pessoa à escravidão, pois escravidão consiste em estar sujeito à vontade de outrem.”\nThomas Paine. Dissertação sobre os Primeiros Princípios do Governo. (1795)",
        q: "Sobre a significação ou a estruturação desse fragmento textual, assinale a afirmativa correta.",
        options: [
            "O termo “para eleger representantes” poderia ser adequadamente substituído por “para a eleição de representantes”.",
            "Ao dizer que o direito de voto é “o direito básico”, o autor indica que a democracia é o melhor dos regimes.",
            "O termo “os demais” se refere a todas as demais pessoas.",
            "O termo “são protegidos” poderia ser passado para a voz ativa com a forma “pelo qual se protegiam”.",
            "A parte final do texto mostra o entendimento pessoal que o autor do texto dá à palavra “escravidão”."
        ],
        answer: 0,
        disclaimer: "A substituição da oração reduzida de infinitivo ('para eleger representantes') por um substantivo abstrato correspondente ('para a eleição de representantes') preserva perfeitamente a correção gramatical e a semântica original da frase."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "“As leis são como as teias de aranha: as simples mosquinhas e as pequenas borboletas se prendem nelas, enquanto as grandes varejeiras malfazejas as rompem e passam através.”",
        q: "Sobre esse fragmento textual, assinale a afirmativa correta.",
        options: [
            "A condenação expressa no texto se utiliza de linguagem lógica.",
            "O autor condena certas leis que não se dirigem a reais problemas da sociedade.",
            "O fragmento textual acima condena os privilégios de uma classe social sobre outras.",
            "No segmento “se prendem nelas”, o pronome pessoal “elas” se refere às “simples mosquinhas”.",
            "Segundo o texto, as leis são como teias de aranha porque servem para prender todos os que cometem crimes."
        ],
        answer: 2,
        disclaimer: "Através de uma linguagem figurada (conotativa), o autor critica a desigualdade e os privilégios sociais, onde os fracos ('mosquinhas') são punidos pela lei, enquanto os poderosos ('grandes varejeiras') conseguem escapar ilesos."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "",
        q: "As frases a seguir têm as leis como tema; assinale a frase que mostra uma visão positiva das leis.",
        options: [
            "Em meio às armas, calam-se as leis.",
            "Existem leis, mas não quem as proveja.",
            "O mais corrupto dos Estados tem o maior número de leis.",
            "A quem poderá ser aprazível uma cidade, se não lhe agradam as leis?",
            "A lei é a razão humana, enquanto governa todos os povos da Terra."
        ],
        answer: 4,
        disclaimer: "Na opção E, a lei é elevada ao status de 'razão humana' universal, conferindo-lhe uma conotação altamente positiva e organizadora da sociedade. As demais opções trazem visões cínicas, negativas ou de falência do sistema legal."
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        supportText: "Leia o texto a seguir.\n“Não devemos fazer da lei um espantalho / Armado para assustar a aves de rapina, / Mas deixado sempre estático, de modo que com o hábito / Ele não seja mais o terror delas, e sim o seu poleiro.”\nShakespeare, William. Medida por Medida (Ato 2, Cena 1).",
        q: "A afirmação correta sobre as leis, que está implícita no texto, é que elas devem",
        options: [
            "proteger a todos.",
            "modificar-se conforme as circunstâncias.",
            "funcionar, devido ao medo que provocam.",
            "ser amplamente divulgadas entre os cidadãos.",
            "ajudar a todos em sua tarefa de obter alimentação."
        ],
        answer: 2,
        disclaimer: "A metáfora sugere que a lei não pode ser estática a ponto de virar um 'poleiro' (perdendo o respeito dos criminosos). Ela precisa manter a sua eficácia punitiva e o poder de 'assustar' (causar temor/medo nas aves de rapina) para funcionar corretamente."
    },
    {
        topic: "Semântica e Vocabulário",
        supportText: "Uma das marcas de um bom texto é a utilização de palavras em seu sentido adequado;",
        q: "assinale a opção em que a palavra sublinhada está adequadamente empregada.",
        options: [
            "As leis CUMPRIDAS são difíceis de entender.",
            "É uma autoridade EMINENTE e por isso ninguém o respeita.",
            "A lei tem dois e apenas dois fundamentos: a EQUIDADE e a utilidade.",
            "As leis são sempre úteis aos que possuem POSSES e nocivas aos que nada têm.",
            "Quando vou a um país, não examino se tem boas leis, mas se as que lá existem são EXECUTADAS."
        ],
        answer: 2,
        disclaimer: "Na opção C, a palavra 'equidade' (senso de justiça, imparcialidade) está perfeitamente bem empregada no contexto jurídico. Erros nas demais: 'cumpridas' (deveria ser compridas/extensas), eminente/respeito (se é notável, deveria ser respeitado, o 'por isso' quebra a lógica), 'possuem posses' (pleonasmo)."
    },
    {
        topic: "Sintaxe e Norma Culta",
        supportText: "",
        q: "Assinale a opção que indica a frase que está rigorosamente dentro dos modelos da norma culta.",
        options: [
            "Todos os convidados vestiam trajes à rigor.",
            "Os policiais estavam cara a cara com os delinquentes.",
            "Os promotores ficaram receiosos ante seus adversários.",
            "As festas beneficientes nem sempre produzem dinheiro.",
            "Entreguei a Constituição as advogadas para que ficassem bem-informadas."
        ],
        answer: 1,
        disclaimer: "A opção B está correta (não se usa crase entre palavras repetidas como 'cara a cara'). Erros nas demais: A ('a rigor' não tem crase, pois 'rigor' é masculino), D (o correto é 'beneficentes', sem o 'i'), E (falta a crase: entreguei 'às advogadas')."
    },
    {
        topic: "Semântica e Reescrita de Frases",
        supportText: "As opções a seguir mostram duas formas corretas de uma mesma frase, à exceção de uma.",
        q: "Assinale-a.",
        options: [
            "Voltamos de Alagoas. / Voltamos das Alagoas.",
            "Vá até o tribunal e procure o Juiz. / Vá até ao tribunal e procure o Juiz.",
            "Houve um acidente grave durante o julgamento. / Houve um incidente grave durante o julgamento.",
            "A Constituição foi criada a 13 de junho de 1888. / A Constituição foi criada em 13 de junho de 1888.",
            "À exceção de Bernardo, todos estiveram presentes. / Com exceção de Bernardo, todos estiveram presentes."
        ],
        answer: 2,
        disclaimer: "A opção C altera drasticamente o sentido da frase original. 'Acidente' denota um evento trágico, fatalidade ou desastre, enquanto 'incidente' refere-se a um episódio secundário, contratempo ou atrito."
    },
    {
        topic: "Coesão Referencial",
        supportText: "Leia o segmento a seguir.\n“Agora que expliquei o título, passo a escrever o livro. Antes disso, porém, digamos os motivos que me põem a pena na mão. Vivo só, com um criado. A casa em que moro é própria; fi-la construir de propósito, levado de um desejo tão particular, que me vexa imprimi-lo, mas vá lá.\nUm dia, há bastantes anos, lembrou-me reproduzir no Engenho Novo a casa em que me criei na Rua de Matacavalos, dando-lhe o mesmo aspecto e economia daquela outra, que desapareceu.”\nMachado de Assis. Dom Casmurro. Livraria Garnier. 1ª ed. em 1899.",
        q: "Sobre a estruturação ou a significação desse texto, assinale a afirmativa incorreta.",
        options: [
            "O segmento inicial “Agora que expliquei o título” se refere a algo já dito anteriormente.",
            "O pronome “isso”, na expressão “Antes disso” se refere à ação de explicar o título do livro.",
            "O pronome relativo “que” no segmento “que me põem a pena na mão” se refere ao substantivo “motivos”.",
            "A frase “Vivo só, com um criado” mudaria de sentido se retirássemos a vírgula.",
            "O pronome indefinido “outra” e o pronome relativo “que” no segmento “daquela outra, que desapareceu” mostram o mesmo antecedente."
        ],
        answer: 1,
        disclaimer: "A opção B está incorreta. No trecho 'passo a escrever o livro. Antes disso, porém, digamos...', o pronome demonstrativo anafórico 'disso' recupera a ideia imediatamente anterior ('escrever o livro'), e não a de explicar o título."
    },
    {
        topic: "Tipologia Textual",
        supportText: "Os segmentos textuais a seguir foram retirados do romance Dom Casmurro.",
        q: "Assinale aquele que exemplifica o modo descritivo de organização discursiva.",
        options: [
            "Agora que expliquei o título, passo a escrever o livro.",
            "Fiquei tão alegre com esta ideia, que ainda agora me treme a pena na mão.",
            "Ia entrar na sala de visitas, quando ouvi proferir o meu nome e escondi-me atrás da porta.",
            "Cumprimentou-se, sentou-se ao pé de mim, falou da lua e dos ministros e acabou recitando-me versos.",
            "Não consultes dicionários. Casmurro não está aqui no sentido que eles lhe dão, mas no que lhe pôs o vulgo de homem calado e metido consigo."
        ],
        answer: 4,
        disclaimer: "A opção E apresenta uma pausa na ação para qualificar, explicar as características e descrever o significado atribuído à palavra/personagem 'Casmurro'. As demais opções são essencialmente narrativas, focadas em sucessão de ações e verbos de movimento/acontecimento."
    }
    
];

const banco_info = [
    { 
        topic: "Planilhas Eletrônicas (Excel)", 
        supportText: "",
        q: "Um técnico deseja somar em uma planilha do Microsoft Excel 2013, em português, somente os valores contidos nas células A1, C2, B6 e D8. Para isso, poderá utilizar a fórmula:", 
        options: ["SOMA (A1:C2:B6:D8)", "SOMA (A1, C2, B6, D8)", "SUM (A1:C2: B6: D8)", "SOMA (A1:D8)", "SOMA (A1; C2; B6; D8)"], 
        answer: 4, 
        disclaimer: "No Excel em Português-BR, o ponto e vírgula (;) separa células avulsas ('E'), enquanto os dois-pontos (:) definem um intervalo contínuo ('ATÉ')." 
    },
    { 
        topic: "Planilhas Eletrônicas (Calc)", 
        supportText: "",
        q: "No LibreOffice Calc 5.1, para somar na célula B8 os valores do intervalo de A3 a A7, SOMENTE quando os valores correspondentes do intervalo de B3 a B7 forem positivos, utiliza-se a fórmula:", 
        options: ["SE ((B3:B7)\"<0\"; SOMA (A3:A7))", "SOMASE (B3:B7;\">0\"; A3:A7)", "=SE((B3:B7)<0;SOMA(A3:A7))", "SOMASE (A3:A7;\">0\"; B3:B7)", "SOMASE ((A3:A7)>0;B3:B7)"], 
        answer: 1, 
        disclaimer: "A sintaxe da função SOMASE é: SOMASE(intervalo_avaliado ; critério ; intervalo_da_soma)." 
    },
    { 
        topic: "Edição de Textos (Word)", 
        supportText: "",
        q: "Um Advogado criou um documento no Microsoft Word 2013, em português, e deseja gerar um arquivo no formato PDF para levar em um pen drive. No Microsoft Word 2013:", 
        options: [
            "o Advogado conseguirá gerar o arquivo PDF clicando em Arquivo > Salvar Como. Depois, deverá selecionar PDF (*.pdf) no campo de tipo.", 
            "não será possível criar o arquivo PDF porque não há recursos nativos para isso nessa versão.", 
            "o Advogado poderá criar o arquivo PDF clicando em Arquivo > Exportar > Formato PDF.", 
            "só será possível gerar o arquivo se for instalado o plug-in PDF Generator baixado da Microsoft.", 
            "não há recursos para gerar PDF, devendo o Advogado realizar esse trabalho no Wordpad."
        ], 
        answer: 0, 
        disclaimer: "No Word 2013 é possível salvar diretamente em PDF através do caminho Arquivo > Salvar Como, escolhendo o tipo PDF (*.pdf)." 
    },
    { 
        topic: "Segurança da Informação (Malwares)", 
        supportText: "",
        q: "O tipo de código malicioso (malware) que torna inacessíveis os dados armazenados em um equipamento, geralmente usando criptografia, e que exige pagamento de resgate para restabelecer o acesso ao usuário é denominado:", 
        options: ["Spyware.", "Rootkit.", "Ransomware.", "Worm.", "Trojan (Cavalo de Troia)."], 
        answer: 2, 
        disclaimer: "O Ransomware sequestra os dados através de criptografia e cobra resgate (ransom), geralmente em criptomoedas." 
    },
    { 
        topic: "Sistema Operacional (Windows 10)", 
        supportText: "",
        q: "No Microsoft Windows 10, em português, o atalho de teclado utilizado para bloquear rapidamente a sessão do usuário, retornando à tela de login, é:", 
        options: ["Ctrl + Alt + L", "Tecla do logotipo do Windows + L", "Alt + F4", "Tecla do logotipo do Windows + D", "Ctrl + Shift + Esc"], 
        answer: 1, 
        disclaimer: "Win + L (Lock) bloqueia a estação de trabalho imediatamente. Win + D exibe a área de trabalho; Ctrl + Shift + Esc abre o Gerenciador de Tarefas." 
    },
    { 
        topic: "Navegadores e Correio Eletrônico", 
        supportText: "",
        q: "Ao enviar um e-mail corporativo para diversos destinatários utilizando o campo 'Cco' (Cópia Carbono Oculta ou Bcc), ocorre que:", 
        options: [
            "o e-mail é criptografado com chave pública antes do envio.", 
            "os destinatários inseridos em 'Cco' não conseguem visualizar os anexos da mensagem.", 
            "os endereços inseridos em 'Cco' ficam invisíveis para os demais destinatários da mensagem.", 
            "o remetente fica anônimo para todos os destinatários listados em 'Cco'.", 
            "a mensagem é entregue diretamente na caixa de prioridade alta."
        ], 
        answer: 2, 
        disclaimer: "Os destinatários colocados em Cco recebem a mensagem normalmente, mas seus endereços de e-mail não são exibidos para os outros destinatários." 
    },
    { 
        topic: "LibreOffice Writer", 
        type: "vf",
        supportText: "",
        q: "No LibreOffice Writer, o formato de arquivo padrão nativo para salvamento de documentos de texto é o '.odt' (OpenDocument Text).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O Writer utiliza '.odt', o Calc utiliza '.ods' (planilhas) e o Impress utiliza '.odp' (apresentações)." 
    },
    { 
        topic: "Computação em Nuvem e G Suite", 
        type: "vf",
        supportText: "",
        q: "No Google Drive, quando dois usuários editam simultaneamente um mesmo documento no Google Docs, o sistema cria cópias duplicadas do arquivo para evitar conflito de versões.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Google Docs permite colaboração em tempo real no mesmo arquivo, sincronizando as alterações instantaneamente no histórico de versões sem duplicar o documento." 
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Em um ambiente de Justiça Pública, os usuários utilizam o Microsoft Windows 11, em português, funcionando em condições ideais, para realizar suas atividades diárias. Dentre as funcionalidades e recursos básicos do sistema operacional, os usuários:",
        options: [
            "entendem que é possível organizar e ancorar várias janelas abertas na tela utilizando o recurso Layouts de Snap (ou Snap Layouts), que permite distribuir facilmente as janelas em diferentes áreas da tela com apenas alguns cliques.",
            "pressionam as teclas Ctrl + Shift para alternar entre janelas abertas de aplicativos diferentes.",
            "não utilizam o aplicativo Paint porque este foi removido e substituído pelo Paint 3D.",
            "pressionam as teclas Alt + Esc para bloquear rapidamente a estação de trabalho e impedir acessos não autorizados.",
            "entendem que a Lixeira não permite mais a recuperação de arquivos excluídos, sendo esses permanentemente apagados ao serem enviados para ela."
        ],
        answer: 0,
        disclaimer: "No Windows 11, o recurso Layouts de Ajuste (Snap Layouts) permite organizar janelas facilmente ao passar o rato sobre o botão maximizar ou usar o atalho Win + Z. Alternar janelas é Alt + Tab; bloquear o PC é Win + L; o Paint clássico continua presente e atualizado no Windows 11."
    },
    {
        topic: "Edição de Textos (Word / Office 365)",
        supportText: "",
        q: "Durante a elaboração de relatórios processuais no Microsoft Word (Office 365 - Guia Página Inicial), em português, funcionando em condições ideais, os funcionários precisam organizar capítulos e seções de forma automatizada para numerar automaticamente os títulos e subtítulos, atualizando a numeração conforme a inclusão ou remoção de seções no documento. Para realizar essa tarefa corretamente, deve-se utilizar:",
        options: [
            "Tabela de Conteúdo Manual.",
            "Marcadores Numéricos.",
            "Quebra de Página.",
            "Estilos de Títulos com numeração automática.",
            "Numeração de Páginas no Rodapé."
        ],
        answer: 3,
        disclaimer: "A aplicação de Estilos de Títulos (Título 1, Título 2, etc.) associada à Lista de Vários Níveis permite a numeração hierárquica automática de secções e capítulos, além de viabilizar a geração automática do Sumário."
    },
    {
        topic: "Planilhas Eletrônicas (Excel 2019)",
        supportText: "",
        q: "Considere o Microsoft Excel 2019, em português, funcionando em condições ideais. Um funcionário de um órgão de justiça pretende obter um número indicativo do dia da semana, dado um campo com uma data válida de 1 a 7 (sendo 1 para domingo, 2 para segunda-feira e assim por diante até 7 para sábado, que é o padrão), utilizando, corretamente, a função (não é necessário indicar os parâmetros da função, mas tão somente a função):",
        options: [
            "DIA.SEMANA",
            "SEMANA",
            "DIA.DA.SEMANA",
            "DIA.SEMANAL",
            "SEMANA.DIA"
        ],
        answer: 2,
        disclaimer: "No Microsoft Excel em português, a função nativa que retorna um número entre 1 e 7 identificando o dia da semana de uma data é =DIA.DA.SEMANA(núm_série; [retorno_tipo])."
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Um técnico administrativo precisa encontrar rapidamente em seu computador um relatório importante chamado MP-SE.docx que ele salvou na pasta Documentos. Considerando que ele já está com uma janela do Explorador de Arquivos do Windows 11 aberta em sua área de trabalho, o procedimento para localizar esse arquivo consiste em:",
        options: [
            "navegar manualmente através de todas as pastas no painel lateral, clicando em cada uma para expandir seu conteúdo e verificar se o arquivo está dentro.",
            "pressionar as teclas Ctrl + s para habilitar a barra de procura, digitar MP-SE.docx e na sequência clicar em Procurar.",
            "selecionar a pasta Documentos e utilizar a barra de pesquisa localizada no canto superior direito para digitar o nome completo ou parte do nome do arquivo MP-SE.docx.",
            "selecionar a opção Modo de Exibição na barra de ferramentas e alterar para Ícones Grandes para visualizar melhor as miniaturas de cada arquivo.",
            "clicar em Novo item para habilitar uma nova procura e digitar MP-SE.docx, na sequência, clicar em Procurar."
        ],
        answer: 2,
        disclaimer: "No Explorador de Ficheiros do Windows 11, a forma direta de localizar um ficheiro numa pasta é selecionar o diretório correspondente (Documentos) e utilizar a caixa de pesquisa no canto superior direito (ou atalho Ctrl + F / F3)."
    },
    {
        topic: "Computação em Nuvem (Google Workspace)",
        supportText: "",
        q: "Uma técnica administrativa precisa enviar rapidamente um arquivo de vídeo de 250 MB armazenado em seu computador. Considerando os limites e as funcionalidades do Google Workspace para compartilhamento de arquivos, o procedimento mais adequado consiste em:",
        options: [
            "anexar o arquivo de vídeo diretamente a uma nova mensagem no Gmail e enviá-lo com a permissão necessária para realizar o download.",
            "fazer o upload do arquivo para o Google Drive, compartilhá-lo gerando um link com permissão apropriada e, então, enviar esse link por e-mail.",
            "compactar o arquivo em partes menores que 25 MB e anexar cada parte a e-mails separados.",
            "iniciar uma reunião no Google Meet e usar a função de compartilhamento de arquivos durante a chamada.",
            "usar a opção de compartilhamento de arquivos e diretórios do Google Chat para anexar o arquivo e compartilhá-lo por meio de um arquivo compactado."
        ],
        answer: 1,
        disclaimer: "O limite de anexos diretos no Gmail é de 25 MB. Para ficheiros maiores (como 250 MB), o padrão do Google Workspace é fazer o carregamento no Google Drive e partilhar o link de acesso na mensagem."
    },
    {
        topic: "Segurança da Informação (Phishing)",
        supportText: "",
        q: "Uma técnica Administrativa do Ministério Público (MP) recebeu em sua caixa do Gmail um e-mail de um remetente desconhecido de fora do domínio do MP. A mensagem, com assunto 'URGENTE: Notificação Judicial - Processo nº 2024.001.0001', contém um arquivo anexo em PDF e solicita a abertura imediata para conferência dos detalhes. Considerando as boas práticas de segurança cibernética, o procedimento mais seguro que ela deve adotar, imediatamente, em relação a esse e-mail consiste em:",
        options: [
            "abrir o arquivo anexo rapidamente para verificar se trata de um processo real, pois o assunto parece urgente e relacionado às suas funções.",
            "encaminhar o e-mail para todos os colegas do setor para saber se alguém reconhece o remetente ou o conteúdo mencionado.",
            "repassar a mensagem para o setor de TI ou segurança da informação do MP, sem abrir o anexo, para análise prévia sobre uma possível tentativa de phishing ou malware.",
            "clicar com o botão direito no anexo, salvá-lo no computador e executar o antivírus manualmente sobre o arquivo antes de abri-lo.",
            "responder ao e-mail questionando a identidade do remetente e pedindo confirmação sobre a legitimidade do conteúdo."
        ],
        answer: 2,
        disclaimer: "Mensagens com senso de urgência de remetentes desconhecidos contendo anexos são vetores clássicos de Phishing e Malware. A conduta segura é não abrir nem transferir o ficheiro, reportando o e-mail imediatamente à equipa de TI/Segurança da Informação."
    },
    {
        topic: "Correio Eletrônico (Clientes de E-mail)",
        supportText: "",
        q: "Os softwares utilitários são programas que oferecem funcionalidades específicas para melhorar o desempenho, a segurança ou a usabilidade de um sistema computacional. Entre esses utilitários, existem aqueles voltados para a gestão de e-mails. Assinale a alternativa que apresenta um software classificado como cliente de e-mail:",
        options: [
            "IrfanView.",
            "Microsoft Outlook.",
            "Google Meet.",
            "VLC Media Player.",
            "Kaspersky."
        ],
        answer: 1,
        disclaimer: "O Microsoft Outlook é um cliente de correio eletrónico e gestor de informações pessoais. IrfanView é visualizador de imagens; Google Meet é plataforma de videoconferência; VLC é reprodutor de média; Kaspersky é antivírus."
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Ao utilizar o sistema operacional Microsoft Windows 11 (em português), é possível nomear pastas e arquivos, entretanto alguns caracteres e nomes são reservados do sistema operacional e, portanto, não podem ser utilizados. Considerando essa informação, assinale a alternativa que apresenta um nome de pasta permitido, ou seja, que não é reservado do sistema operacional:",
        options: [
            "AUX",
            "COM2",
            "LPT4",
            "AHL",
            "CON"
        ],
        answer: 3,
        disclaimer: "No Windows (herança do MS-DOS), são nomes reservados de dispositivos e proibidos para pastas/ficheiros: CON, PRN, AUX, NUL, COM1 a COM9 e LPT1 a LPT9. Portanto, 'AHL' é permitido."
    },
    {
        topic: "Hardware e Dispositivos de Armazenamento",
        supportText: "Os discos de armazenamento são dispositivos utilizados para guardar dados de forma permanente ou temporária, sendo essenciais para o funcionamento de qualquer computador ou sistema digital. Considerando alguns desses discos de armazenamento, informe se é verdadeiro (V) ou falso (F) o que se afirma a seguir:<br>( ) Um SSD (Solid State Drive) utiliza discos magnéticos e cabeças de leitura para acessar os dados.<br>( ) Um HDD (Hard Disk Drive) armazena dados usando memória flash, sem partes móveis.<br>( ) O pendrive tem armazenamento portátil com memória flash.",
        q: "Assinale a alternativa com a sequência correta:",
        options: [
            "V - V - V.",
            "F - F - F.",
            "V - F - V.",
            "F - F - V.",
            "V - F - F."
        ],
        answer: 3,
        disclaimer: "As duas primeiras afirmações inverteram os conceitos: o HDD utiliza discos magnéticos e cabeças móveis de leitura, enquanto o SSD (assim como o pendrive) utiliza memória flash eletrónica sem partes móveis. Sequência: F - F - V."
    },
    {
        topic: "Navegadores (Google Chrome)",
        supportText: "",
        q: "Durante uma verificação de rotina nos sites institucionais, um servidor do MPRS identificou que algumas páginas oficiais apresentavam lentidão e erros de exibição ao serem acessadas pelo Google Chrome (em português). Ao perceber que o problema persistia mesmo após limpar os dados de navegação e reiniciar o navegador, o servidor decidiu informar o ocorrido diretamente à equipe de suporte do navegador, utilizando o formulário de feedback. Para isso, ele utilizou qual dos seguintes atalhos do teclado?",
        options: [
            "Ctrl + Shift + g",
            "Ctrl + Shift + j",
            "Ctrl + Shift + m",
            "Alt + Shift + a",
            "Alt + Shift + i"
        ],
        answer: 4,
        disclaimer: "No Google Chrome, o atalho nativo para abrir o formulário 'Enviar feedback' / 'Informar um problema' é Alt + Shift + I."
    },
    {
        topic: "Segurança da Informação (LGPD - Lei 13.709/18)",
        supportText: "",
        q: "De acordo com a Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018 - Cap. IV - Dos Agentes de Tratamento de Dados Pessoais, Seção I - Do Encarregado pelo Tratamento de Dados Pessoais, Art. 41, § 2º, as atividades do encarregado consistem em, EXCETO:",
        options: [
            "revisar contratos jurídicos da empresa com foco em cláusulas comerciais.",
            "executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.",
            "orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais.",
            "receber comunicações da autoridade nacional e adotar providências.",
            "aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências."
        ],
        answer: 0,
        disclaimer: "Pelo art. 41, § 2º da LGPD, cabe ao Encarregado (DPO) aceitar reclamações dos titulares (I), receber comunicações da ANPD (II), orientar funcionários (III) e executar demais atribuições de proteção de dados determinadas pelo controlador (IV). Revisar contratos com foco em cláusulas comerciais não é atribuição legal do DPO."
    },
    {
        topic: "Correio Eletrônico (Clientes de E-mail)",
        supportText: "",
        q: "Os softwares utilitários são programas que oferecem funcionalidades específicas para melhorar o desempenho, a segurança ou a usabilidade de um sistema computacional. Entre esses utilitários, existem aqueles voltados para a gestão de e-mails. Assinale a alternativa que apresenta um software classificado como cliente de e-mail.", //[cite: 6]
        options: [
            "IrfanView.",
            "Microsoft Outlook.",
            "Google Meet.",
            "VLC Media Player.",
            "Kaspersky."
        ],
        answer: 1,
        disclaimer: "O Microsoft Outlook é um cliente de e-mail e gerenciador de informações pessoais da Microsoft." //[cite: 6]
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Ao utilizar o sistema operacional Microsoft Windows 11 (em português), é possível nomear pastas e arquivos, entretanto alguns caracteres e nomes são reservados do sistema operacional e, portanto, não podem ser utilizados. Considerando essa informação, assinale a alternativa que apresenta um nome de pasta permitido, ou seja, que não é reservado do sistema operacional.", //[cite: 6]
        options: [
            "AUX",
            "COM2",
            "LPT4",
            "AHL",
            "CON"
        ],
        answer: 3,
        disclaimer: "Herança do antigo MS-DOS, o Windows proíbe o uso de nomes de dispositivos reservados como CON, PRN, AUX, NUL, COM1-COM9 e LPT1-LPT9. Portanto, 'AHL' é o único permitido." //[cite: 6]
    },
    {
        topic: "Hardware (Dispositivos de Armazenamento)",
        supportText: "Os discos de armazenamento são dispositivos utilizados para guardar dados de forma permanente ou temporária, sendo essenciais para o funcionamento de qualquer computador ou sistema digital. Considerando alguns desses discos de armazenamento, informe se é verdadeiro (V) ou falso (F) o que se afirma a seguir:\n( ) Um SSD (Solid State Drive) utiliza discos magnéticos e cabeças de leitura para acessar os dados.\n( ) Um HDD (Hard Disk Drive) armazena dados usando memória flash, sem partes móveis.\n( ) O pendrive tem armazenamento portátil com memória flash.", //[cite: 6]
        q: "Assinale a alternativa com a sequência correta.", //[cite: 6]
        options: [
            "V - V - V.",
            "F - F - F.",
            "V - F - V.",
            "F - F - V.",
            "V - F - F."
        ],
        answer: 3,
        disclaimer: "A banca inverteu os conceitos nas duas primeiras: o HDD é que usa discos magnéticos e cabeças móveis; o SSD usa memória flash (chips) sem partes móveis, assim como o pendrive. Sequência: F - F - V." //[cite: 6]
    },
    {
        topic: "Navegadores (Google Chrome)",
        supportText: "",
        q: "Durante uma verificação de rotina nos sites institucionais, um servidor do MPRS identificou que algumas páginas oficiais apresentavam lentidão e erros de exibição ao serem acessadas pelo Google Chrome (em português). Ao perceber que o problema persistia mesmo após limpar os dados de navegação e reiniciar o navegador, o servidor decidiu informar o ocorrido diretamente à equipe de suporte do navegador, utilizando o formulário de feedback. Para isso, ele utilizou qual dos seguintes atalhos do teclado?", //[cite: 6]
        options: [
            "Ctrl + Shift + g",
            "Ctrl + Shift + j",
            "Ctrl + Shift + m",
            "Alt + Shift + a",
            "Alt + Shift + i"
        ],
        answer: 4,
        disclaimer: "No Google Chrome, o atalho de teclado padrão para abrir a janela de 'Enviar feedback' (informar um problema) é Alt + Shift + i." //[cite: 6]
    },
    {
        topic: "Segurança da Informação (LGPD)",
        supportText: "",
        q: "De acordo com a Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018 - Cap. IV - Dos Agentes de Tratamento de Dados Pessoais, Seção I - Do Encarregado pelo Tratamento de Dados Pessoais, Art. 41, § 2º, as atividades do encarregado consistem em, EXCETO", //[cite: 6]
        options: [
            "revisar contratos jurídicos da empresa com foco em cláusulas comerciais.",
            "executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.",
            "orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais.",
            "receber comunicações da autoridade nacional e adotar providências.",
            "aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências."
        ],
        answer: 0,
        disclaimer: "Revisar contratos com foco puramente comercial foge do escopo legal de atuação do DPO (Encarregado), que deve focar na conformidade de privacidade e proteção de dados." //[cite: 6]
    },
    {
        topic: "Noções de Informática",
        supportText: "",
        q: "João está preocupado em perder seus arquivos importantes no computador. Para garantir a segurança dos seus dados, João deve",
        options: [
            "armazenar os arquivos e confiar que estarão sempre seguros sem a necessidade de cópias de segurança.",
            "salvar arquivos importantes somente na pasta “Documentos”, pois isso garante a recuperação em caso de falha do sistema operacional.",
            "ativar o antivírus, pois essa ação é suficiente para manter todos os arquivos preservados, e evitar a realização de backups.",
            "efetuar cópias de segurança periódicas em dispositivos externos ou em serviços de nuvem.",
            "guardar uma cópia de segurança na mesma partição, em diretórios distintos, pois garante o backup do arquivo."
        ],
        answer: 3,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Noções de Informática",
        supportText: "",
        q: "Ao instalar novas máquinas nos laboratórios de informática do IFPE, o técnico de laboratório precisou instalar os aplicativos utilizados nas aulas. Durante o procedimento, percebeu também que havia programas que os alunos não iriam utilizar e que ocupavam espaço em disco. Para manter o sistema organizado e funcional, é preciso",
        options: [
            "instalar programas de sites desconhecidos, pois, dessa forma, se acessa rapidamente a versões gratuitas de qualquer aplicativo.",
            "remover programas desnecessários para as atividades desenvolvidas pelos alunos, utilizando as ferramentas próprias do sistema, liberando espaço e evitando sobrecarga desnecessária.",
            "manter todos os programas que vieram pré-instalados no computador evita problemas em seu funcionamento.",
            "alterar manualmente os arquivos de instalação de um programa, considerando que isso pode otimizar seu desempenho.",
            "instalar versões diferentes de um mesmo programa, supondo que isso amplia as opções para os usuários, facilitando o desenvolvimento das atividades."
        ],
        answer: 1,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Noções de Informática",
        supportText: "",
        q: "Uma ferramenta bastante utilizada para comunicação é o correio eletrônico, que pode ser alvo de tentativas de fraude ou disseminação de softwares maliciosos. Para aumentar a segurança no uso desse serviço, o usuário deve",
        options: [
            "abrir anexos de qualquer remetente, pois os provedores de e-mail realizam verificações automáticas que garantem a ausência de vírus.",
            "clicar em links dos e-mails que parecerem interessantes, considerando que o navegador bloqueia automaticamente páginas inseguras.",
            "verificar o remetente e o conteúdo das mensagens antes de clicar e abrir os anexos.",
            "responder mensagens suspeitas, solicitando mais informações ao remetente.",
            "compartilhar sua senha de e-mail com colegas de confiança, pois esse procedimento facilita o acesso em situações emergenciais."
        ],
        answer: 2,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Noções de Informática",
        supportText: "",
        q: "A geração de índices (sumários automáticos) depende diretamente da aplicação correta de estilos nos títulos e subtítulos. Após o usuário inserir o sumário, o documento passou por diversas alterações que modificaram tanto os títulos quanto a numeração das páginas. Sendo assim, para atualizá-lo, a forma mais eficiente é",
        options: [
            "atualizar cada entrada do índice, digitando novamente os títulos e ajustando os números de página após as mudanças.",
            "selecionar o sumário já inserido e utilizar a função de atualização, podendo optar por atualizar apenas a numeração de páginas ou todo o conteúdo.",
            "remover o sumário e criar um a cada alteração, pois o processador de texto insere as informações atualizadas automaticamente.",
            "alterar o formato de fonte dos títulos no texto e o programa reconhecerá automaticamente essas mudanças no sumário.",
            "inserir marcadores nos títulos e essa formatação será automaticamente incorporada ao índice."
        ],
        answer: 1,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Noções de Informática",
        supportText: "",
        q: "Um professor deseja calcular a média das notas de seus alunos em uma planilha eletrônica, mas algumas células da coluna de notas estão em branco porque nem todos realizaram todas as atividades. Para obter o resultado correto, sem que as células vazias prejudiquem o cálculo, deve-se",
        options: [
            "aplicar a função = MÉDIA(A1:A25), pois ela desconsidera automaticamente as células vazias no cálculo.",
            "digitar manualmente as notas em branco como zero, garantindo que a média considere todos os alunos igualmente.",
            "utilizar a fórmula = SOMA(A1:A25) / 25, dividindo pelo número total de alunos, mesmo que alguns não tenham nota registrada.",
            "inserir a fórmula = CONT.VALORES(A1:A25) / SOMA(A1:A25), visto que essa relação fornece a média das notas.",
            "inserir traços (“–”) nas células vazias, fazendo com que a planilha reconheça o símbolo como indicação de ausência de valor."
        ],
        answer: 0,
        disclaimer: "Extraído e limpo via painel de contribuição."
    },
    {
        topic: "Lei Geral de Proteção de Dados (LGPD)",
        supportText: "Um órgão federal está organizando um concurso público para provimento de cargos de nível superior e precisa publicar o resultado preliminar das provas objetivas e a lista de candidatos que concorrem às vagas reservadas para Pessoas com Deficiência (PcD), bem como daqueles que solicitaram atendimento especial por razões de saúde. De forma a garantir a transparência do certame, a Comissão do Concurso planejou publicar na internet uma planilha contendo o nome completo, o número completo do CPF, o relatório médico detalhado e o diagnóstico CID (Classificação Internacional de Doenças) de cada candidato aprovado nessa cota.\nO Encarregado pelo Tratamento de Dados Pessoais (DPO) do órgão interveio, ressaltando que o diagnóstico de saúde constitui dado pessoal sensível e que a exposição integral de dados de identificação extrapola o limite necessário para a finalidade de controle social do concurso.",
        q: "Considerando os preceitos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD), assinale a opção que apresenta a solução correta que o órgão deve adotar para conciliar a transparência do concurso com a proteção de dados dos candidatos:",
        options: [
            "A Comissão do Concurso pode manter a publicação integral com laudos e CPFs completos sem qualquer alteração, tendo em vista que a LGPD não se aplica às autarquias federais quando agem no exercício do poder de império e na realização de concursos públicos.",
            "O órgão deve decretar o sigilo absoluto de todo o resultado da cota de Pessoas com Deficiência, divulgando apenas o resultado geral da ampla concorrência no Portal da Transparência, encaminhando o resultado da cota de forma individual e privada ao e-mail de cada candidato.",
            "O órgão deve aplicar os princípios da necessidade e da minimização de dados, publicando a lista oficial apenas com informações indispensáveis (como nome/inscrição, CPF parcialmente mascarado e a condição de 'deferido/aprovado' na cota), franqueando o acesso ao laudo médico detalhado estritamente ao próprio candidato e à banca examinadora.",
            "O órgão deve exigir o consentimento prévio, escrito e inequívoco de todos os candidatos participantes da cota para publicar seus laudos e diagnósticos médicos completos, sob pena de eliminação sumária do concurso caso o candidato se recuse a assinar o termo de autorização.",
            "O órgão deve promover a anonimização irreversível e definitiva de todos os dados dos candidatos na lista pública e no sistema interno do concurso, de modo que nem mesmo a comissão examinadora consiga vincular a nota do exame ao indivíduo titular."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). O princípio da minimização (Art. 6º, III, da LGPD) exige que o tratamento seja limitado ao mínimo necessário para a realização de suas finalidades. A publicação de diagnósticos (dados sensíveis) de forma irrestrita viola a privacidade, bastando a divulgação da condição de deferimento/indeferimento."
    },
    {
        topic: "Lei Geral de Proteção de Dados (LGPD)",
        supportText: "Com base na Lei Geral de Proteção de Dados Pessoais – LGPD, (Lei nº 13.709/2018), no que diz respeito à segurança e às boas práticas, à fiscalização e à Autoridade Nacional de Proteção de Dados (ANPD), analise as afirmativas a seguir.\nI. Os controladores e operadores podem formular regras de boas práticas e de governança relacionadas ao tratamento de dados pessoais.\nII. Compete à ANPD, entre outras atribuições previstas na LGPD, zelar pela proteção dos dados pessoais, fiscalizar e aplicar sanções nos casos de tratamento realizado em descumprimento à legislação e promover o conhecimento sobre proteção de dados pessoais e privacidade.\nIII. Na aplicação das sanções administrativas, a ANPD considera a gravidade da infração e o dano causado, desconsiderando a adoção de mecanismos internos de prevenção e de medidas corretivas pelo infrator.",
        q: "Está correto o que se afirma em",
        options: [
            "I, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). A afirmativa III está incorreta, pois o Art. 52, § 1º, incisos VIII e IX, da LGPD expressamente determina que a ANPD deve considerar a adoção de mecanismos e procedimentos internos de proteção, bem como a pronta adoção de medidas corretivas, como atenuantes na aplicação das sanções."
    },
    {
        topic: "Vozes Verbais",
        supportText: "",
        q: "Assinale a afirmativa em que a voz passiva pronominal (com o pronome se) foi corretamente transformada na voz passiva analítica (com o auxiliar ser).",
        options: [
            "Este ano se verá um cometa. / Este ano seria visto um cometa.",
            "Utiliza-se a maracujina como calmante. / A maracujina era usada como calmante.",
            "Descobriu-se finalmente o criminoso. / O criminoso foi finalmente descoberto.",
            "Viu-se um helicóptero voando a grande altura. / Um helicóptero tinha sido visto voando a grande altura.",
            "Derrubavam-se paredes em dois minutos. / Paredes foram derrubadas em dois minutos."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). A transposição de voz exige a manutenção rigorosa do tempo e modo verbal. 'Descobriu-se' (Pretérito Perfeito) transforma-se perfeitamente em 'foi descoberto' (Pretérito Perfeito). Nas demais, houve quebra temporal (ex: verá/seria visto; derrubavam/foram)."
    },
    {
        topic: "Sintaxe (Orações Subordinadas Adjetivas)",
        supportText: "",
        q: "Assinale a opção em que a oração sublinhada é explicativa e, não, restritiva.",
        options: [
            "Os homens QUE FORAM PROCURAR LENHA PARA O FOGO estão reclamando seu pagamento.",
            "Os alunos, QUE VIVIAM AFASTADOS DA CIDADE, chegaram tarde à escola.",
            "Comemos a fruta QUE ESTAVA MADURA.",
            "A menina, após uma semana, QUE TE APRESENTEI ONTEM, deseja saber mais sobre você.",
            "O livro QUE ME FOI EMPRESTADO é muito interessante."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). As orações subordinadas adjetivas explicativas são sempre isoladas por vírgulas, pois adicionam um detalhe a um termo já universalmente definido, sem restringir o seu sentido."
    },
    {
        topic: "Segurança da Informação",
        supportText: "Um analista da procuradoria sabe que existem muitas ameaças à segurança da informação e que elas não se limitam ao ambiente digital. Ele reconhece que pequenos hábitos e boas práticas no local de trabalho são fundamentais para reduzir riscos de acesso não autorizado, perda ou danos a informações expostas em mesas, telas e outros espaços acessíveis.\nCom relação aos conceitos da segurança da informação e à importância da política de mesa limpa e tela limpa, analise as afirmativas a seguir.\nI. A integridade refere-se à garantia de as informações não serem alteradas, seja por agentes internos ou externos. Isso representa que a modificação das informações, maliciosa ou não intencional, prejudica a confiabilidade. Portanto, é recomendado desligar os computadores quando não estiverem em uso.\nII. A disponibilidade garante que uma informação esteja disponível a todo momento àqueles que são autorizados. Esse conceito depende diretamente da confidencialidade para atuar de forma correta. Portanto, é recomendado usar protetores de tela ativados por tempo e protegidos por senha.\nIII. A confidencialidade está ligada diretamente à privacidade dos dados. Nesse contexto, são englobadas todas as medidas que restringem o acesso a informações, a fim de evitar acessos não autorizados. Portanto, é recomendado posicionar os computadores de forma a evitar que pessoas não autorizadas consigam visualizar o conteúdo das telas.",
        q: "Está correto o que se afirma em:",
        options: [
            "II e III, apenas.",
            "I e III, apenas.",
            "III, apenas.",
            "II, apenas",
            "I, II e III."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). Todas as associações estão corretas. A política de 'Mesa Limpa e Tela Limpa' (Clear Desk and Clear Screen Policy da ISO 27001) protege ativamente os três pilares da segurança (Confidencialidade, Integridade e Disponibilidade) mitigando engenharia social e acessos físicos indevidos."
    }
];

const banco_gov_ti = [
    { 
        topic: "Frameworks ITIL e COBIT", 
        supportText: "",
        q: "Considere: ( ) ITIL 4 introduz o Sistema de Valor de Serviço (SVS). ( ) No COBIT 2019, o domínio APO12 orienta sobre gestão de riscos. ( ) O uso de metodologias híbridas em projetos públicos visa conciliar licitações com agilidade. A sequência correta é:", 
        options: ["V - F - V.", "F - V - F.", "V - V - V.", "F - F - F.", "V - F - F."], 
        answer: 2, 
        disclaimer: "Todas as afirmativas estão corretas segundo as práticas do ITIL 4, COBIT 2019 e governança pública de TIC." 
    },
    { 
        topic: "COBIT (Governança vs Gestão)", 
        supportText: "",
        q: "No framework COBIT, faz-se uma distinção clara entre Governança e Gestão. Os cinco processos do domínio de Governança (EDM - Evaluate, Direct and Monitor) têm como objetivo principal:", 
        options: [ 
            "Planejar, construir, executar e monitorar (PBRM) as atividades operacionais diárias da infraestrutura.", 
            "Garantir que as necessidades das partes interessadas sejam avaliadas para determinar objetivos corporativos equilibrados, definindo a direção por meio de priorização e monitorando o desempenho e a conformidade.", 
            "Substituir o PMBOK no controle de cronogramas de desenvolvimento de software.", 
            "Executar o atendimento de primeiro nível (Service Desk) aos usuários internos.", 
            "Configurar regras de firewall e rotinas de backup de banco de dados." 
        ], 
        answer: 1, 
        disclaimer: "No COBIT, a Governança (domínio EDM) Avalia, Dirige e Monitora, enquanto a Gestão (domínios APO, BAI, DSS e MEA) Planeja, Constrói, Executa e Monitora em alinhamento com a direção definida pela governança." 
    },
    { 
        topic: "PMBOK (Gerenciamento de Projetos)", 
        supportText: "",
        q: "Na gestão de projetos segundo o guia PMBOK, a estrutura hierárquica que decompõe o escopo total do trabalho a ser executado pela equipe do projeto para atingir os objetivos e criar as entregas necessárias denomina-se:", 
        options: [ 
            "Termo de Abertura do Projeto (TAP / Project Charter).", 
            "Estrutura Analítica do Projeto (EAP / WBS - Work Breakdown Structure).", 
            "Matriz de Responsabilidades RACI.", 
            "Diagrama de Rede do Caminho Crítico (CPM).", 
            "Registro das Partes Interessadas (Stakeholder Register)." 
        ], 
        answer: 1, 
        disclaimer: "A EAP (WBS) é a decomposição hierárquica orientada às entregas do trabalho que será executado pela equipe do projeto." 
    },
    { 
        topic: "Arquitetura Corporativa (TOGAF)", 
        supportText: "",
        q: "No framework de Arquitetura Corporativa TOGAF, o método iterativo que constitui o núcleo do framework para o desenvolvimento e transição da arquitetura de uma organização (da arquitetura de linha de base até a arquitetura alvo) é chamado de:", 
        options: [ 
            "SVS (Service Value System).", 
            "ADM (Architecture Development Method).", 
            "PAM (Process Assessment Model).", 
            "CMDB (Configuration Management Database).", 
            "PDCA (Plan-Do-Check-Act)." 
        ], 
        answer: 1, 
        disclaimer: "O ADM (Architecture Development Method) é o coração do TOGAF, estruturado em um ciclo de fases (Preliminar, Visão da Arquitetura, Arquitetura de Negócios, Sistemas de Informação, Tecnologia, etc.)." 
    },
    { 
        topic: "ITIL (Gerenciamento de Serviços)", 
        type: "vf",
        supportText: "",
        q: "No ITIL, o 'Gerenciamento de Incidentes' tem como objetivo principal encontrar a causa-raiz definitiva de um erro na infraestrutura, sem preocupação imediata com o tempo de restauração do serviço.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Gerenciamento de Incidentes visa restaurar a operação normal do serviço o mais rápido possível (mesmo usando solução de contorno). Quem investiga a causa-raiz de incidentes recorrentes é o 'Gerenciamento de Problemas'." 
    },
    { 
        topic: "Planejamento Estratégico de TIC (PDTIC)", 
        type: "vf",
        supportText: "",
        q: "O Plano Diretor de Tecnologia da Informação e Comunicação (PDTIC) é um instrumento de planejamento tático-estratégico setorial que detalha as ações e projetos de TIC necessários para suportar os objetivos do Planejamento Estratégico Institucional (PEI) do órgão.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O PDTIC desdobra e alinha as iniciativas de tecnologia às metas de negócio previstas no PEI da instituição." 
    },
    {
        topic: "ITIL 4 (Práticas de Gerenciamento)",
        supportText: "",
        q: "No âmbito do ITIL 4, a prática que tem como objetivo minimizar o impacto negativo de interrupções de serviços por meio da restauração da operação normal do serviço o mais rápido possível é denominada:",
        options: [
            "Gerenciamento de Problemas.",
            "Gerenciamento de Incidentes.",
            "Central de Serviços (Service Desk).",
            "Gerenciamento de Mudanças.",
            "Gerenciamento de Nível de Serviço."
        ],
        answer: 1,
        disclaimer: "O Gerenciamento de Incidentes do ITIL foca estritamente na restauração rápida do serviço, enquanto o Gerenciamento de Problemas investiga a causa-raiz."
    },
    {
        topic: "Governança de TIC (Português / Leis e Diretrizes)",
        supportText: "",
        q: "Na Governança de TI aplicada aos órgãos públicos do Ministério Público, as diretrizes de interoperabilidade, segurança da informação e transformação digital são frequentemente coordenadas por normativas federais e padrões institucionais. O modelo que define a estrutura de governança de TIC nos órgãos públicos federais e do judiciário/MP é o SISP ou diretrizes do CNMP. Assinale a alternativa correta sobre governança pública de TIC:",
        options: [
            "A governança de TIC restringe-se ao controle exclusivo de senhas de redes locais pelos analistas de suporte.",
            "O alinhamento estratégico entre os objetivos de negócio da instituição ministerial e os investimentos em tecnologia é pilar fundamental da governança de TIC.",
            "A contratação de soluções de TIC dispensa o PDTIC desde que haja saldo orçamentário.",
            "Os comitês de governança digital possuem natureza meramente decorativa e não deliberativa.",
            "A gestão de portfólio de projetos de TIC deve ignorar as prioridades institucionais do Ministério Público."
        ],
        answer: 1,
        disclaimer: "O alinhamento estratégico garante que os investimentos em tecnologia apoiem diretamente a missão institucional e os objetivos de negócio do órgão público."
    },
    {
        topic: "Gestão de Processos (BPMN)",
        supportText: "",
        q: "Em relação aos conceitos de gestão e modelagem de processos de negócio, assinale a afirmativa correta.",
        options: [
            "O modelo TO-BE descreve a situação atual de um processo organizacional, com o objetivo de identificar falhas, gargalos e oportunidades imediatas de correção.",
            "O BPM (Business Process Management) constitui uma notação padronizada para a representação gráfica de fluxos de trabalho, permitindo mapear atividades, eventos e decisões de um processo.",
            "Um processo de negócio é um conjunto de atividades estruturadas que transforma entradas em saídas, caracterizando-se, obrigatoriamente, pelo retorno financeiro direto gerado para a organização.",
            "A modelagem de processos compreende o gerenciamento contínuo dos processos organizacionais, abrangendo sua execução, seu monitoramento e a implementação das ações necessárias à melhoria de seu desempenho.",
            "Na notação BPMN (Business Process Model and Notation), os gateways são utilizados para controlar a divergência e a convergência do fluxo de sequência, enquanto as lanes subdividem um pool, permitindo organizar as atividades de acordo com funções ou papéis desempenhados no processo."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A afirmativa A está incorreta pois TO-BE refere-se ao futuro otimizado (o atual é AS-IS). A B confunde BPM (disciplina de gestão) com BPMN (notação). A E define exatamente as funções de Gateways e Lanes na notação BPMN."
    },
    {
        topic: "Gestão de Processos (BPMN)",
        supportText: "Uma organização utiliza a BPMN para modelar o tratamento de incidentes de segurança da informação. Após a classificação, o fluxo segue caminhos distintos conforme a criticidade do incidente.",
        q: "Considerando os elementos da notação BPMN, assinale a afirmativa correta.",
        options: [
            "Um evento intermediário deve ser utilizado para representar qualquer decisão do processo, pois eventos possuem a função de selecionar caminhos alternativos.",
            "Um gateway pode ser utilizado para controlar a divergência do fluxo, direcionando sua continuidade conforme a condição associada à criticidade do incidente.",
            "Uma lane deve ser utilizada para representar a decisão relativa à criticidade, pois esse elemento determina qual caminho será seguido conforme uma condição.",
            "Um pool distinto deve ser criado para cada caminho resultante da decisão, pois a BPMN não permite representar fluxos alternativos dentro de um mesmo participante.",
            "Um fluxo de mensagem deve ser utilizado para representar caminhos alternativos dentro de um mesmo participante, ainda que não exista troca de mensagens entre participantes distintos."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O Gateway (desenhado como um losango) é o elemento exato do BPMN utilizado para tratar decisões e divisões condicionais (divergência ou convergência) no fluxo de sequência."
    },
    {
        topic: "Gestão de Projetos (PMBOK)",
        supportText: "O PMBOK constitui um conjunto de melhores práticas em gerenciamento de projetos e define projeto como um esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo.\nDe acordo com o PMBOK, analise as afirmativas a seguir.\nI. Em um portfólio, todos os programas e os projetos que o compõem devem ser interdependentes.\nII. A entrega de valor deve ser feita de acordo com as expectativas das partes interessadas. O gerente do projeto deve ter a sensibilidade necessária para identificar as partes interessadas, gerenciar conflitos e se comunicar de forma eficaz.\nIII. Todos os riscos que podem acontecer em um projeto devem ser identificados, no início do projeto, por meio de reuniões, entrevistas, pesquisas e análise de documentos da sociedade empresária.",
        q: "Está correto o que se afirma em",
        options: [
            "II, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). I é falsa: Itens num portfólio agrupam-se por objetivos estratégicos, não requerendo interdependência direta. III é falsa: É virtualmente impossível mapear 'todos os riscos' no início; riscos são continuamente descobertos de forma iterativa."
    },
    {
        topic: "Gerenciamento de Serviços de TI (ITIL 4)",
        supportText: "Fornecer serviços de TI de forma eficiente requer boas práticas e processos bem definidos. A ITIL v4 é um framework de boas práticas amplamente utilizadas que ajudam milhares de organizações a entregar valor a seus clientes.\nDe acordo com a ITIL v4, analise as afirmativas a seguir.\nI. Na ITIL v4, as práticas de gerenciamento de serviços estão divididas em três categorias: práticas de gerenciamento geral, práticas de gerenciamento de serviço e práticas de gerenciamento técnico.\nII. A estrutura ITIL v4 possui quatro dimensões: organizações e pessoas, informação e tecnologia, parceiros e fornecedores, fluxo de valor e processos.\nIII. A ITIL v4 introduz o conceito de Sistema de Valor de Serviço (SVS) para impulsionar a geração de valor via produtos e serviços, retirando o foco excessivo do mapeamento engessado de processos para o entendimento integral dos fatores que geram valor de ponta a ponta.",
        q: "Está correto o que se afirma em",
        options: [
            "I, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Todas estão corretas. A transição da ITIL v3 para a v4 substituiu o ciclo de vida fixo pelo modelo SVS, baseando-se nas quatro dimensões para uma visão holística e organizando os antigos 'processos' em 34 'práticas' (divididas em gerais, de serviço e técnicas)."
    },
    {
        topic: "Governança de TI (COBIT 2019)",
        supportText: "Para melhorar a governança e a gestão de TI de uma organização, é importante adotar normas e boas práticas reconhecidas internacionalmente. Uma boa opção é o framework COBIT 2019.",
        q: "Sobre esse framework, assinale a afirmativa correta.",
        options: [
            "ITIL e PMBOK são práticas com as quais o COBIT não está alinhado.",
            "Criação de valor e otimização de riscos e recursos são benefícios gerados pela correta implementação da Governança de TI.",
            "O framework COBIT mapeia todo o ambiente de TI, considerando recursos humanos, equipamentos de TI e infraestrutura organizacional.",
            "O COBIT pode ser amplamente aplicado e utilizado exceto em pequenas organizações. Nesses casos, não é possível aplicar todas as boas práticas recomendadas.",
            "Todos os processos de negócio podem ser baseados em boas práticas fornecidas no COBIT, incluindo como serão os fornecimentos de serviço de TI e as vendas de softwares."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O objetivo principal da Governança de TI e do COBIT 2019 (seu sistema de governança) é focado estritamente na Criação de Valor, desdobrada em três componentes: entrega de benefícios, otimização de riscos e otimização de recursos."
    },
    {
        topic: "Gestão de Riscos de TI",
        supportText: "Maria, que trabalha no departamento de TI de um órgão público, faz parte de uma equipe que foi designada para adquirir novos equipamentos de rede para serem integrados àqueles já existentes no datacenter do órgão.\nCom base em conceitos básicos de gestão de riscos em TI, analise as afirmativas a seguir.\nI. As estratégias de gestão dos riscos que por ventura possam surgir em uma contratação/aquisição isolada não precisam estar integrados à Política de Gestão de Riscos da organização.\nII. Identificação, análise e planejamento de respostas aos riscos são etapas do gerenciamento de riscos.\nIII. Os riscos identificados em uma contratação/aquisição devem estar registrados no Mapa de Gerenciamento de Riscos, todavia, as estratégias de mitigação não devem estar no Mapa.",
        q: "Está correto o que se afirma em",
        options: [
            "II, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A I é falsa: projetos isolados precisam se alinhar à política global de riscos. A III é falsa: o Mapa (ou Registro) de Riscos precisa OBRIGATORIAMENTE conter as respostas e estratégias de mitigação, não apenas a listagem dos riscos."
    }
];

const banco_seg_ti = [
    { 
        topic: "Criptografia", 
        supportText: "",
        q: "No contexto da criptografia, o algoritmo ____ é um exemplo de cifragem simétrica, amplamente utilizado para confidencialidade, substituindo o antigo DES.", 
        options: ["RSA", "AES", "SHA-2", "HMAC", "MD5"], 
        answer: 1, 
        disclaimer: "O AES (Advanced Encryption Standard) é o padrão de criptografia simétrica em uso atual." 
    },
    { 
        topic: "Normas ISO/IEC 27001 e 27002", 
        supportText: "",
        q: "A respeito das normas da família ABNT NBR ISO/IEC 27000 para Segurança da Informação, assinale a distinção correta entre a ISO/IEC 27001 e a ISO/IEC 27002:", 
        options: [ 
            "A 27001 trata exclusivamente de gestão de riscos financeiros, enquanto a 27002 trata de continuidade de negócios.", 
            "A 27001 especifica os requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão da Segurança da Informação (SGSI), sendo a norma certificável, enquanto a 27002 fornece um guia de boas práticas para implementação dos controles de segurança.", 
            "A 27002 é a norma de auditoria obrigatória para certificação ISO, enquanto a 27001 é apenas um glossário de termos.", 
            "Ambas tratam exclusivamente de segurança física de data centers, não abordando controles lógicos ou organizacionais.", 
            "A 27001 aplica-se apenas a empresas privadas, e a 27002 aplica-se apenas a órgãos públicos." 
        ], 
        answer: 1, 
        disclaimer: "A ISO/IEC 27001 define os requisitos do SGSI (é a norma contra a qual uma organização pode ser certificada). A ISO/IEC 27002 detalha as diretrizes de implementação dos controles." 
    },
    { 
        topic: "Gestão de Riscos (ISO 31000)", 
        supportText: "",
        q: "No processo de avaliação de riscos segundo a ABNT NBR ISO 31000, após identificar, analisar e avaliar um risco, a organização decide contratar um seguro cibernético ou terceirizar a operação crítica para outra entidade. Essa opção de tratamento do risco é classificada como:", 
        options: [ 
            "Evitar o risco (eliminação da fonte).", 
            "Reter o risco por decisão informada.", 
            "Compartilhar o risco (transferência contratual ou seguro).", 
            "Assumir o risco para perseguir uma oportunidade.", 
            "Ignorar a probabilidade de ocorrência." 
        ], 
        answer: 2, 
        disclaimer: "Contratar seguro ou terceirizar parte da operação são exemplos clássicos de compartilhar (ou transferir) o risco com terceiros." 
    },
    { 
        topic: "Redes Seguras (VPN)", 
        supportText: "",
        q: "Para garantir a confidencialidade e integridade dos dados trafegados entre unidades remotas do MPPE através da internet pública, utiliza-se uma Rede Privada Virtual (VPN) com túnel criptografado. Dois protocolos amplamente empregados para implementar VPNs seguras nas camadas de rede e transporte são:", 
        options: [ 
            "FTP e Telnet.", 
            "HTTP e SNMPv1.", 
            "IPsec e TLS (OpenVPN).", 
            "ARP e ICMP.", 
            "DHCP e POP3." 
        ], 
        answer: 2, 
        disclaimer: "IPsec (camada de rede) e TLS/SSL (camada de transporte/aplicação) são os protocolos padrão para construção de túneis VPN seguros." 
    },
    { 
        topic: "Gestão de Continuidade de Negócios", 
        type: "vf",
        supportText: "",
        q: "Na Gestão de Continuidade de Negócios (ISO 22301), o RPO (Recovery Point Objective) define o tempo máximo tolerável que um sistema pode ficar fora do ar após um desastre, enquanto o RTO (Recovery Time Objective) define a quantidade máxima de perda de dados medida no tempo (idade do último backup válido).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Os conceitos foram invertidos: RPO (Point) refere-se à perda máxima tolerável de dados no tempo (frequência de backup); RTO (Time) refere-se ao tempo máximo para recuperar e colocar o serviço de volta no ar." 
    },
    { 
        topic: "Autenticação e Autorização (OAuth 2.0)", 
        type: "vf",
        supportText: "",
        q: "No protocolo OAuth 2.0, o fluxo 'Authorization Code Flow com PKCE' é considerado o padrão mais seguro e recomendado para que aplicações cliente obtenham tokens de acesso em nome do usuário sem expor diretamente suas credenciais.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O Authorization Code com PKCE (Proof Key for Code Exchange) mitiga ataques de interceptação do código de autorização tanto em clientes públicos quanto confidenciais." 
    },
    {
        topic: "Segurança da Informação (LGPD)",
        supportText: "",
        q: "A Lei Geral de Proteção de Dados Pessoais (LGPD) estabelece princípios que orientam o tratamento de dados pessoais, buscando assegurar direitos fundamentais como a privacidade, a autodeterminação informativa e a minimização dos dados. Sobre este último princípio, uma prática que o exemplifica, é",
        options: [
            "coletar e tratar somente os dados de fato necessários para a realização do serviço.",
            "garantir que todos os dados pessoais sejam criptografados.",
            "compartilhar dados com terceiros apenas mediante contrato formal.",
            "manter todos os dados pessoais armazenados pelo prazo máximo legal possível.",
            "obter consentimento por escrito antes de qualquer mínimo tratamento dos dados."
        ],
        answer: 0,
        disclaimer: "O princípio da minimização (art. 6º, III, da LGPD) restringe o tratamento ao mínimo necessário para a realização das finalidades, abrangendo dados pertinentes, proporcionais e não excessivos."
    },
    {
        topic: "Segurança e Criptografia",
        supportText: "",
        q: "Uma fintech está desenvolvendo um aplicativo que utiliza criptografia assimétrica para autenticar transações financeiras. Cada usuário possui um par de chaves gerado localmente (privada e pública). No entanto, um usuário perdeu o dispositivo onde sua chave privada estava armazenada, mas ainda possui a chave pública registrada no servidor. Assinale a opção que apresenta o impacto mais provável dessa situação.",
        options: [
            "O usuário poderá continuar realizando transações normalmente, pois a chave pública é suficiente para assinar digitalmente.",
            "O usuário não conseguirá assinar novas transações, pois a assinatura requer a chave privada, que foi perdida.",
            "O servidor poderá gerar uma nova chave privada, a partir da chave pública, para restaurar o acesso.",
            "Um atacante (hacker) poderá descriptografar mensagens futuras enviadas para o usuário, se conseguir acesso à chave pública.",
            "A chave pública será automaticamente invalidada pelo sistema, sem necessidade de intervenção manual."
        ],
        answer: 1,
        disclaimer: "Na criptografia assimétrica, a assinatura digital é gerada utilizando a chave privada do remetente (garantindo autenticidade e não-repúdio). Sem a chave privada, é impossível gerar novas assinaturas válidas."
    },
    {
        topic: "Autorização e Gestão de Identidades (OAuth)",
        supportText: "",
        q: "Uma equipe de desenvolvimento está criando um aplicativo móvel, que permite aos usuários publicar fotos diretamente no seu perfil de uma rede social, sem precisar fornecer login e senha da conta. O time opta por utilizar OAuth 2.0. Nesse cenário, a principal vantagem dessa abordagem é",
        options: [
            "permitir que o aplicativo armazene as credenciais do usuário para reutilização posterior, evitando novas autenticações.",
            "prover um canal de comunicação criptografado ponto a ponto entre o aplicativo e a rede social.",
            "garantir que o aplicativo tenha acesso apenas aos recursos autorizados pelo usuário, sem conhecer suas credenciais.",
            "substituir o protocolo HTTPS para reduzir o custo de transmissão de dados.",
            "impedir que a rede social armazene qualquer informação do usuário, durante o uso do aplicativo."
        ],
        answer: 2,
        disclaimer: "O OAuth 2.0 é um protocolo de autorização que permite a aplicativos de terceiros acessarem recursos protegidos em nome do usuário sem exigir que o usuário compartilhe suas credenciais originais."
    },
    {
        topic: "Segurança da Informação (Princípios Básicos)",
        supportText: "Um Analista de Segurança da Informação registrou dois incidentes relacionados aos sistemas da sociedade empresária.\nI. Após um volume anormal de requisições simultâneas, um sistema utilizado para prestação de serviços aos cidadãos permaneceu inacessível aos usuários legítimos durante várias horas, sem evidências de alteração dos dados armazenados.\nII. Um relatório com dados cadastrais e financeiros confidenciais foi enviado por falha operacional e acessado por destinatários que não possuíam nível de permissão para visualizá-lo, embora o conteúdo do documento não tenha sofrido qualquer modificação.",
        q: "Considerando os princípios fundamentais da Segurança da Informação, os incidentes I e II violaram, respectivamente, os princípios de",
        options: [
            "integridade e autenticidade.",
            "confidencialidade e disponibilidade.",
            "disponibilidade e confidencialidade.",
            "confidencialidade e integridade.",
            "disponibilidade e autenticidade."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O incidente I (sistema inacessível) fere a Disponibilidade. O incidente II (acesso por pessoas não autorizadas a dados confidenciais) fere a Confidencialidade."
    },
    {
        topic: "Normas ISO (27001 e 27002)",
        supportText: "",
        q: "Uma sociedade empresária está revisando seu Sistema de Gestão de Segurança da Informação (SGSI) com base nas normas ABNT NBR ISO/IEC 27001:2022 e ABNT NBR ISO/IEC 27002:2022. Considerando as disposições das referidas normas, assinale a afirmativa correta.",
        options: [
            "A ABNT NBR ISO/IEC 27001:2022 tem como finalidade principal fornecer diretrizes e orientações detalhadas para a implementação dos controles de segurança da informação descritos no Anexo A.",
            "A ABNT NBR ISO/IEC 27001:2022 exige a implementação compulsória e integral de todos os 93 controles listados em seu Anexo A, para que uma organização obtenha a certificação de seu SGSI.",
            "A edição de 2022 da ABNT NBR ISO/IEC 27002 introduziu atributos para classificação dos controles, utilizando exclusivamente os princípios de confidencialidade, integridade e disponibilidade como critério de categorização.",
            "A ABNT NBR ISO/IEC 27002:2022 estabelece os requisitos auditáveis para a certificação de um SGSI, enquanto a ABNT NBR ISO/IEC 27001:2022 possui caráter estritamente orientativo.",
            "Os controles necessários ao tratamento dos riscos devem ser comparados com os do Anexo A da ABNT NBR ISO/IEC 27001:2022, a fim de verificar possíveis omissões e subsidiar a Declaração de Aplicabilidade."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A ISO 27001 contém os requisitos (é ela que é certificável) e exige que a organização compare seus controles com o Anexo A para gerar a Declaração de Aplicabilidade (SoA). A ISO 27002 é o código de prática (guia orientativo)."
    },
    {
        topic: "Controle de Acesso e Identidade (OAuth e SSO)",
        supportText: "Um analista de redes do DATAPREV está avaliando a implementação de mecanismos de controle de acesso para um portal governamental com uma arquitetura de software distribuída.\nNesse contexto, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.\n( ) Uma vez implementado o mecanismo de Single Sign-On, as aplicações cliente que o utilizam precisam manter seu próprio banco de dados de credenciais de usuários finais e implementar formulários de login.\n( ) O OAuth 2.0 é um framework de autorização que opera sobre HTTP/HTTPS, permitindo que uma aplicação cliente obtenha acesso limitado aos recursos de um proprietário de recurso mediante delegação de autorização.\n( ) Com o Single Sign-On implementado, a responsabilidade de autenticar o usuário final e gerenciar sua sessão é delegada a cada servidor de aplicação.",
        q: "As afirmativas são, respectivamente,",
        options: [
            "F – V – F.",
            "F – F – F.",
            "V – F – V.",
            "V – F – F.",
            "F – V – V."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Falsa: No SSO, as aplicações confiam em um Provedor de Identidade (IdP) central, não mantendo bases próprias. Verdadeira: Conceito exato do OAuth 2.0. Falsa: A responsabilidade de autenticar é centralizada no IdP, e não delegada a cada servidor de aplicação."
    },
    {
        topic: "Segurança de Aplicações Web (OWASP)",
        supportText: "Com a crescente adoção de softwares altamente configuráveis, a categoria Security Misconfiguration subiu da 5ª para a 2ª posição no OWASP Top 10:2025, um documento padrão de conscientização que apresenta os maiores riscos de segurança para aplicações web.\nDiante desse cenário, analise as afirmativas a seguir.\nI. Os dados fornecidos pelo usuário não são validados, filtrados ou higienizados pelo aplicativo.\nII. Funcionalidades desnecessárias estão instaladas ou habilitadas (ex.: portas, serviços, contas, frameworks de teste ou privilégios desnecessários).\nIII. Contas-padrão e suas respectivas senhas permanecem habilitadas e inalteradas.",
        q: "De acordo com a OWASP Top 10:2025, assinale a opção que indica, corretamente, os itens que são apresentados como condições que podem caracterizar Security Misconfiguration.",
        options: [
            "II, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O item I refere-se a vulnerabilidades de Injeção (Injection) ou XSS, e não a falhas de configuração. Os itens II (recursos desnecessários abertos) e III (senhas padrão) são exemplos clássicos de Security Misconfiguration."
    },
    {
        topic: "Testes de Segurança (SAST e DAST)",
        supportText: "No contexto do desenvolvimento seguro de software, ferramentas de análise de segurança, como Static Application Security Testing (SAST) e Dynamic Application Security Testing (DAST), são utilizadas para identificar vulnerabilidades em diferentes momentos do ciclo de desenvolvimento, contribuindo para a redução dos riscos de segurança das aplicações.",
        q: "Com base nesse cenário, assinale a afirmativa correta.",
        options: [
            "DAST tem como foco a análise de código estático.",
            "DAST requer acesso total ao código-fonte da aplicação para realizar a análise.",
            "SAST identifica problemas em tempo de execução, como falhas de autenticação ou configurações incorretas.",
            "Por atuar estaticamente, SAST não se integra bem com ambientes de desenvolvimento integrados (IDEs) e pipelines de CI/CD.",
            "SAST analisa código-fonte, bytecode ou binários para identificar vulnerabilidades de segurança, geralmente no início do ciclo de vida de desenvolvimento de software."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O SAST (Static) analisa o código-fonte/binário sem executá-lo (caixa-branca), ideal para as fases iniciais. O DAST (Dynamic) interage com a aplicação em execução (caixa-preta), sem precisar do código-fonte."
    },
    {
        topic: "Testes de Segurança (Análise Estática)",
        supportText: "No contexto do desenvolvimento seguro de software, a equipe de sistemas da DATAPREV decidiu incorporar ferramentas de análise estática de código ao processo de desenvolvimento, com o objetivo de identificar vulnerabilidades e problemas de qualidade antes da execução das aplicações.",
        q: "Considerando as características da análise estática de código, assinale a afirmativa correta.",
        options: [
            "Caracteriza-se, em geral, por apresentar baixas taxas de falsos positivos.",
            "Possui como ponto fraco a identificação de vulnerabilidades como buffer overflow e SQL injection.",
            "É realizada, geralmente, como parte de testes caixa-preta, não sendo recomendada para testes caixa-branca.",
            "Não pode ser executada na fase de implementação de um ciclo de vida de desenvolvimento seguro (SDL).",
            "Apresenta como técnicas características a análise de fluxo de dados (data flow analysis) e análise de contaminação (taint analysis)."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A análise estática (SAST) é conhecida por utilizar taint analysis (rastrear dados não confiáveis) e análise de fluxo de dados. Seus pontos fracos incluem, na verdade, altas taxas de falsos positivos."
    },
    {
        topic: "Segurança de Aplicações e APIs",
        supportText: "Uma instituição pública passou a expor parte de seus serviços por meio de APIs usadas na comunicação entre sistemas internos e aplicações externas.\nEm uma revisão de segurança, a equipe técnica avaliou diferentes medidas de proteção dos recursos expostos, considerando aspectos ligados a controle de acesso, proteção das comunicações, tratamento das requisições recebidas e limitação do uso dos serviços.",
        q: "Para esse contexto, assinale a opção que apresenta uma medida tecnicamente adequada.",
        options: [
            "Adotar a utilização de certificados digitais no servidor nas requisições entre clientes e serviços, de modo a garantir que apenas clientes autorizados tenham acesso aos endpoints disponíveis.",
            "Adotar tokens de longa duração como medida de segurança, a fim de reduzir a frequência de renovação e, com isso, diminuir a exposição da API a falhas associadas ao processo de reautenticação.",
            "Dispensar mecanismos específicos de autorização quando a API utilizar OAuth 2.0 ou JWT emitido por servidor confiável, pois a validade do token já é suficiente para legitimar o acesso aos recursos expostos.",
            "Implementar validação e saneamento dos dados de entrada recebidos pelas APIs, com verificação dos parâmetros e do payload da requisição, a fim de mitigar ataques de injeção e outros efeitos decorrentes do processamento de entradas maliciosas.",
            "Dispensar o uso de rate limiting nos servidores de recursos de APIs que adotam OAuth 2.0, uma vez que o controle de consumo por contador exige manutenção de estado entre requisições, contrariando o princípio de comunicação sem estado do protocolo OAuth."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova MPES (FGV). A filtragem e higienização (saneamento) estrita dos dados de entrada (input validation) é a medida fundamental para prevenir ataques de injeção (SQLi, XSS). Rate limiting, renovação curta de tokens e verificação de escopos de autorização (além do JWT) também são fundamentais."
    },
    {
        topic: "Desenvolvimento Seguro e Documentação (Swagger)",
        supportText: "Uma equipe mantém uma API REST documentada por meio de uma especificação OpenAPI 3.x, exibida no Swagger UI. Parte dos endpoints exige autenticação por token do tipo bearer no formato JWT, enviado no cabeçalho Authorization. Contudo, na interface gerada, essas operações não exibem o botão Authorize nem ficam corretamente marcadas como protegidas.\nSem alterar a implementação da API e atuando apenas na especificação OpenAPI, a equipe precisa configurar a documentação para que o Swagger UI reconheça formalmente esse mecanismo de segurança e permita seu uso nas operações protegidas.",
        q: "Nesse contexto, assinale a opção que apresenta a medida tecnicamente mais adequada.",
        options: [
            "Definir, em components/securitySchemes, um esquema de segurança do tipo http com scheme: bearer, podendo indicar bearerFormat: JWT, e aplicá-lo por meio de security no nível global ou apenas nas operações protegidas.",
            "Declarar, em components/schemas, um objeto chamado Authorization, com um campo obrigatório token, e referenciá-lo nas operações que exigem autenticação.",
            "Adicionar, em cada operação protegida, um parâmetro em header com o nome Authorization, sem definir esquema de segurança específico na especificação.",
            "Definir, em components/securitySchemes, um esquema do tipo apiToken, com in: header e name: Authorization, e associá-lo às operações protegidas por meio de security.",
            "Definir, em components/securitySchemes, um esquema do tipo http com scheme: basic e associá-lo às operações protegidas, informando que o token JWT será enviado no cabeçalho Authorization."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova MPES (FGV). No OpenAPI 3, a autenticação baseada em tokens Bearer/JWT é configurada no objeto 'securitySchemes' definindo o tipo como 'http' e o esquema (scheme) explicitamente como 'bearer'."
    },
    {
        topic: "Análise de Vulnerabilidades (DAST)",
        supportText: "Um estudante de segurança da informação realizou uma avaliação de segurança de uma aplicação web em ambiente de testes, e acessou a aplicação por meio de um navegador, inserindo o seguinte código em um campo de entrada de dados:\n<script>alert('teste')</script>\nAo submeter a requisição, a aplicação retornou uma resposta que resultou na exibição de um alerta no navegador, evidenciando a execução do script inserido.",
        q: "A técnica empregada caracteriza um tipo de análise de software conhecido como",
        options: [
            "análise estática de código, pois o comportamento da aplicação foi avaliado sem a necessidade de execução.",
            "revisão de código manual, com foco na identificação de vulnerabilidades diretamente no código-fonte.",
            "análise dinâmica de software, baseada na interação com a aplicação em execução e a avaliação de seu comportamento em tempo de execução.",
            "uso de linters, para identificação de falhas sintáticas e más práticas de programação.",
            "teste unitário, voltado à validação de componentes isolados do sistema."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova MPES (FGV). Embora a exploração represente um ataque Cross-Site Scripting (XSS), a técnica de análise descrita (inserir payloads através do navegador em uma aplicação viva e observar o resultado em execução) define a Análise Dinâmica de Segurança de Aplicações (DAST - Dynamic Application Security Testing)."
    },
    {
        topic: "Vulnerabilidades Web (OWASP)",
        supportText: "O OWASP Top 10:2025 apresenta as principais categorias de riscos de segurança em aplicações web, incluindo falhas relacionadas à manipulação inadequada de entradas fornecidas pelo usuário.\nUma aplicação web, hospedada no endereço http://www.eth0123.com, permite acesso a informações jornalísticas por meio do seguinte endereço:\nhttp://www.eth0123.com/acesso.php?arq=jornal\nDurante uma análise de segurança, verificou-se que o parâmetro “arq” é utilizado pela aplicação para carregar conteúdos armazenados no servidor. Em razão de falha na validação de entradas fornecidas pelo usuário, foi possível manipular o endereço de acesso conforme apresentado a seguir, permitindo visualizar o conteúdo de um arquivo sensível do sistema:\nhttp://www.eth0123.com/acesso.php?arq=../../etc/passwd",
        q: "Assinale a opção que apresenta a técnica de exploração utilizada nesse cenário.",
        options: [
            "SQL Injection",
            "LFI – Local File Inclusion",
            "XSS – Cross-Site Scripting",
            "RFI – Remote File Inclusion",
            "FPD – Full Path Disclosure"
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova MPES (FGV). A exploração manipula caminhos de diretório (Directory Traversal - '../') para incluir e ler arquivos locais sensíveis do próprio servidor host (ex: /etc/passwd), caracterizando um Local File Inclusion (LFI)."
    }
];

const banco_eng_soft_ia = [
    { 
        topic: "IA e Modelos Generativos", 
        supportText: "",
        q: "A combinação entre grandes modelos de linguagem (LLMs) e recuperação de informação viabilizou sistemas mais atualizados, como o RAG. Assinale a correta:", 
        options: [ 
            "A Engenharia de Prompt modifica os pesos da rede neural do modelo.", 
            "O RAG integra busca de documentos com modelos generativos, ampliando a relevância.", 
            "O uso de RAG impede a atualização em tempo real dos modelos.", 
            "Modelos RAG não são compatíveis com busca vetorial.", 
            "LLMs dependem exclusivamente de fine-tuning para novas informações." 
        ], 
        answer: 1, 
        disclaimer: "O RAG (Retrieval-Augmented Generation) recupera documentos relevantes (frequentemente via busca vetorial) e os fornece como contexto ao LLM." 
    },
    { 
        topic: "Engenharia de Requisitos", 
        supportText: "",
        q: "Durante o levantamento de requisitos de um sistema processual, foram listados: (I) O sistema deve permitir que o promotor assine peças com certificado ICP-Brasil; (II) O tempo de resposta da consulta pública deve ser inferior a 2 segundos; (III) O sistema deve ter disponibilidade de 99,9%. Os itens I, II e III são classificados, respectivamente, como:", 
        options: [ 
            "Requisito Funcional, Requisito Não Funcional e Requisito Não Funcional.", 
            "Requisito Não Funcional, Requisito Funcional e Regra de Negócio.", 
            "Requisito Funcional, Requisito Funcional e Requisito Não Funcional.", 
            "Todos são Requisitos Funcionais.", 
            "Todos são Requisitos Não Funcionais." 
        ], 
        answer: 0, 
        disclaimer: "O item I descreve uma funcionalidade entregue ao usuário (Funcional). Os itens II (desempenho) e III (disponibilidade) são atributos de qualidade do sistema (Não Funcionais)." 
    },
    { 
        topic: "Metodologias Ágeis (Scrum e Kanban)", 
        supportText: "",
        q: "A respeito dos métodos ágeis Scrum e Kanban, assinale a alternativa correta:", 
        options: [ 
            "No Scrum, uma vez iniciada a Sprint, o Product Owner deve alterar diariamente a meta da Sprint conforme novas demandas surgirem.", 
            "O princípio fundamental do Kanban para evitar gargalos e sobrecarga da equipe é limitar o trabalho em progresso (WIP - Work In Progress) em cada coluna do fluxo.", 
            "Os três papéis oficiais do Scrum Guide são Gerente de Projetos, Analista deRequisitos e Testador.", 
            "A Daily Scrum é uma reunião semanal de quatro horas voltada à prestação de contas para a alta diretoria.", 
            "O Kanban exige sprints fixas de duas semanas e proíbe entregas contínuas." 
        ], 
        answer: 1, 
        disclaimer: "Limitar o WIP (Work In Progress) é a prática central do método Kanban para otimizar o fluxo (Lead Time) e evidenciar gargalos." 
    },
    { 
        topic: "Containers e Orquestração (Docker e Kubernetes)", 
        supportText: "",
        q: "No ecossistema de orquestração de containers com Kubernetes (K8s), a menor unidade implantável que pode ser criada e gerenciada, encapsulando um ou mais containers que compartilham armazenamento e rede, é denominada:", 
        options: ["Node.", "Cluster.", "Pod.", "Dockerfile.", "Hypervisor."], 
        answer: 2, 
        disclaimer: "No Kubernetes, o Pod é a menor unidade de execução implantável, podendo conter um container principal (padrão mais comum) e containers auxiliares (sidecars)." 
    },
    { 
        topic: "Desenvolvimento Orientado a Testes (TDD e BDD)", 
        type: "vf",
        supportText: "",
        q: "O ciclo clássico do TDD (Test-Driven Development) segue três etapas curtas e repetitivas conhecidas como 'Red - Green - Refactor': primeiro escreve-se um teste automatizado que falha (Red), depois escreve-se o código mínimo para o teste passar (Green) e, por fim, refatora-se o código mantendo os testes passando (Refactor).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O ciclo Red-Green-Refactor de Kent Beck é a essência do Desenvolvimento Orientado a Testes (TDD)." 
    },
    { 
        topic: "Ciência de Dados (Overfitting)", 
        type: "vf",
        supportText: "",
        q: "Em aprendizado de máquina, quando um modelo apresenta erro próximo de zero nos dados de treinamento, mas possui uma taxa de erro muito alta nos dados de teste (baixa capacidade de generalização), diz-se que ocorreu 'Underfitting' (subajuste).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Decorar os dados de treino (erro baixo no treino) e falhar nos dados novos de teste (erro alto no teste) caracteriza o 'Overfitting' (sobreajuste)." 
    },
    {
        topic: "Metodologias de Desenvolvimento",
        supportText: "",
        q: "Apesar da ampla adoção de metodologias ágeis, o modelo Cascata (Waterfall) ainda é a abordagem mais indicada para cenários específicos. Assinale a opção em que o cenário descrito apresenta o projeto mais adequado para a utilização do modelo Cascata.",
        options: [
            "Criação de uma nova rede social para competir em um mercado dinâmico, onde as funcionalidades precisam ser constantemente ajustadas com base no feedback dos primeiros usuários para garantir a adesão do público.",
            "Desenvolvimento do Produto Mínimo Viável (MVP) de um aplicativo para uma startup, onde a velocidade de lançamento no mercado é o fator crítico para validar a ideia de negócio e garantir uma rodada de investimentos.",
            "Manutenção de um grande portal de notícias, que exige a publicação diária de conteúdo e a implementação semanal de novas integrações com APIs de parceiros, para se manter competitivo.",
            "Desenvolvimento de um sistema de controle de tráfego aéreo, onde os requisitos são imutáveis por questões de segurança e a documentação detalhada de cada fase é uma exigência para a certificação governamental.",
            "Construção de um protótipo interativo de alta fidelidade, para uma única apresentação a um grupo de investidores, onde o impacto visual e a demonstração de um fluxo de usuário completo, são os únicos objetivos."
        ],
        answer: 3,
        disclaimer: "Sistemas críticos com requisitos rígidos, imutáveis e que exigem alta rastreabilidade e certificação governamental beneficiam-se do rigor preditivo e documental do modelo Cascata."
    },
    {
        topic: "Metodologias Ágeis (Scrum)",
        supportText: "",
        q: "Em um projeto de desenvolvimento de software utilizando Scrum, durante a execução de uma sprint , o cliente solicita mudanças de requisitos. A abordagem mais alinhada às boas práticas ágeis, para lidar com essas solicitações, é",
        options: [
            "adicionar as novas solicitações diretamente na sprint atual, solicitando apoio do Scrum Master para avaliar o impacto.",
            "rejeitar todas as mudanças após o início da sprint, para proteger o time de interrupções.",
            "discutir e priorizar as novas solicitações, junto ao product owner, para registrá-las no Product Backlog e avaliá-las para sprints futuras.",
            "criar um documento formal de controle de mudanças, que deve ser aprovado por um comitê antes de qualquer alteração no Backlog.",
            "pedir ao cliente para esperar até o final da sprint, para sugerir novas funcionalidades."
        ],
        answer: 2,
        disclaimer: "No Scrum, o escopo da Sprint não deve sofrer alterações que coloquem em risco a Meta da Sprint. Novos requisitos devem ser avaliados e priorizados pelo Product Owner no Product Backlog."
    },
    {
        topic: "Testes de Software",
        supportText: "",
        q: "Durante o desenvolvimento de um sistema de gestão hospitalar, a equipe de desenvolvimento precisa garantir a corretude da função de cálculo de doses de medicamentos. Ao testar, foi identificado que a função retorna valores incorretos quando o peso do paciente é inserido em libras ao invés de quilogramas. Para garantir a lógica interna e o correto tratamento dos dados de entrada, o teste mais apropriado e eficiente para identificar esse tipo de falha é o",
        options: [
            "Teste de Integração, pois verifica a comunicação e a passagem de dados entre a função de cálculo e o módulo de cadastro de pacientes.",
            "Teste de Sistema, pois valida se o requisito funcional de cálculo de doses está em conformidade com a especificação completa do sistema.",
            "Teste de Aceitação, pois foca na validação dos requisitos e da usabilidade sob a perspectiva do usuário final.",
            "Teste de Unidade, pois avalia a lógica interna da função de cálculo de forma isolada, com diversas entradas de dados.",
            "Teste de Performance, pois mede a velocidade com que o cálculo é realizado sob diferentes cargas de trabalho."
        ],
        answer: 3,
        disclaimer: "O Teste de Unidade atua no menor nível de código testável (uma função ou método isolado), garantindo que a lógica matemática interna de conversão e cálculo funcione corretamente para diferentes inputs."
    },
    {
        topic: "Algoritmos e Grafos",
        supportText: "",
        q: "Em um grafo ponderado, não-direcionado, conexo com n vértices, a árvore geradora mínima (MST) possui sempre",
        options: [
            "as n arestas de menor peso do grafo que não formam ciclo.",
            "n+1 arestas e o menor caminho entre qualquer par de vértices na árvore.",
            "a garantia de excluir a aresta de maior peso do grafo original, independentemente da quantidade de arestas.",
            "o mesmo número de arestas que o grafo original, com a garantia de menor caminho entre qualquer par de vértices na árvore.",
            "n-1 arestas, cuja soma dos pesos das arestas é a menor possível."
        ],
        answer: 4,
        disclaimer: "Por definição, qualquer árvore geradora em um grafo conexo de 'n' vértices terá exatamente 'n-1' arestas sem formar ciclos."
    },
    {
        topic: "Controle de Versão (Git)",
        supportText: "",
        q: "Durante o desenvolvimento colaborativo em um projeto Git, pode surgir a demanda de integrar alterações de diferentes branches. Neste contexto, dois comandos são muito comuns para lidar com essa necessidade: git merge e git rebase. Assinale a situação em que o comando git rebase é mais indicado do que git merge.",
        options: [
            "Quando precisa manter o contexto histórico de quando as branches foram unidas.",
            "Quando deseja preservar a estrutura ramificada do desenvolvimento.",
            "Quando deseja ignorar commits antigos.",
            "Quando deseja manter um histórico linear, reescrevendo a base dos commits.",
            "Quando precisa excluir branches antigos após união."
        ],
        answer: 3,
        disclaimer: "O 'git rebase' move a base do branch atual para a ponta do branch de destino, reescrevendo o histórico para criar uma linha do tempo reta e linear, evitando commits de merge extras."
    },
    {
        topic: "Complexidade de Algoritmos",
        supportText: "",
        q: "A distinção entre a dificuldade de encontrar uma solução e a facilidade de verificá-la, é um pilar da teoria da complexidade. Um problema que exibe a característica de ter uma verificação de solução computacionalmente rápida (tempo polinomial), em contraste com um processo de busca da solução que pode ser extremamente lento (tempo exponencial), se enquadra na definição da classe de complexidade",
        options: [
            "P.",
            "NP.",
            "EXPTIME.",
            "NP-Difícil.",
            "NP-Completo."
        ],
        answer: 1,
        disclaimer: "A classe NP (Nondeterministic Polynomial time) agrupa os problemas de decisão para os quais as instâncias com resposta afirmativa possuem demonstrações que podem ser verificadas em tempo polinomial."
    },
    {
        topic: "Padrões de Projeto (Design Patterns)",
        supportText: "",
        q: "Uma empresa está criando um sistema de composição de interfaces gráficas, onde elementos como janelas, botões e painéis podem conter outros elementos, formando uma estrutura hierárquica. É necessário que todos os elementos, independentemente de serem simples ou compostos, sejam tratados de maneira uniforme pelo cliente. Neste contexto, o padrão de projeto mais indicado é o",
        options: [
            "Decorator, para adicionar funcionalidades extras a cada elemento de interface.",
            "Bridge, para desacoplar a abstração da implementação gráfica.",
            "Flyweight, para reduzir o consumo de memória compartilhando dados comuns.",
            "Prototype, para clonar rapidamente elementos da interface com suas propriedades.",
            "Composite, para tratar objetos individuais e composições de forma uniforme, permitindo operações recursivas sobre a estrutura."
        ],
        answer: 4,
        disclaimer: "O padrão estrutural Composite permite compor objetos em estruturas de árvore para representar hierarquias partes-todo, permitindo que os clientes tratem objetos individuais e composições de forma uniforme."
    },
    {
        topic: "Desenvolvimento Web (HTML e Formulários)",
        supportText: "Um desenvolvedor está criando um formulário de inscrição em HTML que envia dados para o servidor via método POST. Durante os testes, percebeu que, mesmo preenchendo todos os campos, o backend não estava recebendo o valor do campo de e-mail. O campo no HTML é:\n<input type=\"email\" placeholder=\"Digite seu e-mail\">",
        q: "A solução que corrigiria de forma mais adequada o problema, sem prejudicar a funcionalidade atual é",
        options: [
            "Adicionar name=\"email\" ao elemento <input>.",
            "Alterar o atributo placeholder para label.",
            "Trocar type=\"email\" para type=\"text\".",
            "Adicionar id=\"email\" e vincular via JavaScript.",
            "Usar <textarea> no lugar de <input>."
        ],
        answer: 0,
        disclaimer: "Em formulários HTML padrão enviados ao servidor, apenas os elementos de input que possuem o atributo 'name' terão os seus valores passados no payload do request POST."
    },
    {
        topic: "Desenvolvimento Mobile (Flutter)",
        supportText: "",
        q: "Uma startup decidiu criar um aplicativo híbrido usando Flutter para Android e iOS. Durante os testes, usuários relataram que a interface está lenta e apresenta travamentos ao rolar listas longas com imagens. Dentre as práticas de otimização a seguir, indique a mais adequada para este cenário.",
        options: [
            "Usar ListView.builder com carregamento preguiçoso (lazy loading) e cache de imagens para reduzir o uso de memória.",
            "Renderizar todos os elementos da lista de uma só vez, para evitar carregamento dinâmico.",
            "Aumentar a resolução das imagens, para que fiquem mais nítidas em telas de alta densidade.",
            "Substituir ListView por Column com SingleChildScrollView, para maior controle da rolagem.",
            "Este é um caso clássico em que a melhor solução é converter o aplicativo para nativo puro, para melhorar o desempenho."
        ],
        answer: 0,
        disclaimer: "O 'ListView.builder' no Flutter constrói os itens sob demanda (apenas quando estão prestes a aparecer na tela), poupando memória e processamento em listas longas."
    },
    {
        topic: "Programação e Lógica (Python)",
        supportText: "Considere o código a seguir escrito na linguagem Python:\nnums = [1, 2, 3]\nres = [lambda: n * 2 for n in nums]\nprint(res[0](), res[1](), res[2]())",
        q: "Indique a opção que apresenta o que será exibido após a execução do código.",
        options: [
            "2 4 6",
            "6 6 6",
            "1 2 3",
            "Erro: lista de lambdas não pode ser executada",
            "None None None"
        ],
        answer: 1,
        disclaimer: "Em Python, closures (como os lambdas dentro da list comprehension) realizam 'late binding'. Eles capturam a referência da variável 'n', não o seu valor na iteração. Ao final do loop, 'n' será 3, resultando em 6 6 6."
    },
    {
        topic: "Web Services e API REST",
        supportText: "",
        q: "Uma API REST foi projetada para operações críticas de alta concorrência. Durante testes, percebe-se que múltiplas requisições PUT concorrentes estão sobrescrevendo dados indevidamente. Com o intuito de mitigar este problema, considerando que o método HTTP usado será o mesmo, a técnica mais adequada será",
        options: [
            "usar o método PATCH em vez de PUT, assumindo que atualizações parciais evitam condições de corrida.",
            "ativar HTTP/2 para a API, confiando que o protocolo resolverá automaticamente conflitos de escrita concorrente.",
            "adicionar um cabeçalho Idempotency-Key nas requisições, garantindo que requisições repetidas não resultem em múltiplas atualizações.",
            "usar exclusivamente autenticação básica (Basic Auth), presumindo que a identificação do usuário impedirá sobrescritas indevidas.",
            "implementar controle de versão de recursos com ETags e cabeçalhos If-Match, rejeitando atualizações quando a versão enviada pelo cliente não corresponder à versão atual do recurso."
        ],
        answer: 4,
        disclaimer: "O controle de concorrência otimista via ETags (Entity Tags) associado ao cabeçalho If-Match assegura que a atualização (PUT) só terá sucesso se o recurso no servidor não tiver sido modificado por terceiros desde a leitura."
    },
    {
        topic: "Programação Concorrente (Java)",
        supportText: "Em um sistema de monitoramento em tempo real, várias threads trabalham em paralelo: algumas coletam dados de sensores, enquanto outra thread central precisa verificar constantemente uma variável booleana denominada ativo, para decidir se deve continuar o processamento ou encerrar a execução. Para evitar que uma thread leia um valor desatualizado em cache da CPU, o desenvolvedor declarou essa variável como volatile.",
        q: "No contexto do Java Memory Model, é possível afirmar que a palavra-chave volatile",
        options: [
            "assegura que, uma vez atribuído um valor, a variável não poderá ser modificada, estabelecendo um comportamento de imutabilidade.",
            "assegura que a escrita em uma variável seja imediatamente visível para outras threads, sem garantir a atomicidade de operações compostas.",
            "garante que operações compostas, como incremento (i++), sejam executadas como um passo único e indivisível por qualquer thread.",
            "provê garantias simultâneas de visibilidade entre threads, e de atomicidade completa para todas as operações sobre a variável.",
            "impede o acesso concorrente à variável, funcionando como um lock que permite a apenas uma thread obter acesso exclusivo por vez."
        ],
        answer: 1,
        disclaimer: "Em Java, a keyword 'volatile' garante que a leitura e a escrita ocorram diretamente na memória principal (garantindo visibilidade entre threads), mas não garante a atomicidade em operações compostas."
    },
    {
        topic: "Programação e Lógica (JavaScript)",
        supportText: "Uma API retorna dados de usuários de forma assíncrona. O desenvolvedor implementou o código JavaScript a seguir.\nasync function getUsuario(id) {\n  return await fetch(`/api/usuario/${id}`).then(res => res.json());\n}\nlet usuario = getUsuario(5);\nconsole.log(usuario.nome);\nAo executar, ocorre o erro:\nTypeError: Cannot read properties of undefined (reading 'nome')",
        q: "Neste contexto, assinale a opção que melhor explica o problema.",
        options: [
            "usuario é uma Promise, não o objeto; a solução é usar await getUsuario(5) ou .then(...) antes de acessar nome.",
            "O problema é que fetch não retorna JSON válido; adicionar JSON.parse() resolve.",
            "A função precisa de try...catch para capturar o erro antes de acessar nome.",
            "O método await não pode ser usado dentro de funções assíncronas.",
            "É necessário inicializar usuario como objeto vazio para evitar undefined."
        ],
        answer: 0,
        disclaimer: "Uma função declarada como 'async' no JavaScript sempre retorna uma Promise. Como a chamada em 'let usuario' não utiliza 'await' (pois está fora de um escopo assíncrono), ela recebe a Promise pendente, que não possui a propriedade 'nome'."
    },
    {
        topic: "Metodologias Ágeis (Kanban)",
        supportText: "Uma equipe de TI, diante do acúmulo de demandas em andamento, adota o método Kanban para visualizar o fluxo de trabalho e estabelecer limites de trabalho em andamento (WIP).",
        q: "Sobre o método Kanban, assinale a afirmativa correta.",
        options: [
            "A existência de um limite de WIP impede a entrada de qualquer nova demanda enquanto houver ao menos uma atividade ainda não concluída no fluxo.",
            "A adoção do Kanban exige que as demandas sejam agrupadas em ciclos de duração fixa, ao final dos quais todos os itens selecionados devem estar concluídos.",
            "A utilização de um quadro Kanban torna desnecessário o acompanhamento do tempo de fluxo, pois a representação visual das atividades é suficiente para assegurar a melhoria contínua.",
            "Os limites de WIP têm como finalidade assegurar que todos os integrantes da equipe permaneçam continuamente ocupados, ainda que isso implique aumentar a quantidade de demandas iniciadas.",
            "O estabelecimento de limites de WIP restringe a quantidade de itens que podem permanecer simultaneamente em determinadas etapas do fluxo, contribuindo para evidenciar gargalos e favorecer a conclusão do trabalho iniciado."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Limitar o Work In Progress (WIP) previne a sobrecarga de tarefas simultâneas, facilitando a identificação de gargalos (bottlenecks) no processo."
    },
    {
        topic: "Engenharia de Requisitos",
        supportText: "A Engenharia de Requisitos compreende atividades relacionadas à descoberta, análise, documentação, avaliação e evolução dos requisitos de um sistema, sendo comum que algumas dessas atividades se sobreponham ao longo do processo.\nDurante o desenvolvimento de um sistema de gestão acadêmica, a equipe já havia realizado a elicitação e produzido uma especificação dos requisitos. Em seguida, antes que esses requisitos servissem de base às etapas posteriores do desenvolvimento, foram realizadas revisões com os stakeholders, construído um protótipo das principais interfaces para avaliação pelos usuários e elaborados casos de teste a partir dos requisitos.\nO objetivo era identificar problemas relacionados à validade, consistência, completude, ambiguidade, realismo e verificabilidade do conjunto de requisitos documentados.",
        q: "Nesse contexto, assinale a opção que indica a atividade do processo de Engenharia de Requisitos caracterizada pelas atividades descritas.",
        options: [
            "Elicitação de requisitos, cujo objetivo principal é descobrir as necessidades, expectativas e restrições dos stakeholders.",
            "Especificação de requisitos, responsável por registrar e organizar os requisitos identificados em representações adequas.",
            "Estudo de viabilidade, destinado a avaliar, em nível preliminar, se o desenvolvimento pretendido é justificável e realizável diante das principais restrições existentes.",
            "Gerenciamento de requisitos, destinado principalmente a acompanhar a evolução dos requisitos, manter sua rastreabilidade e controlar mudanças ao longo do projeto.",
            "Validação de requisitos, destinada a avaliar se os requisitos documentados representam adequadamente o sistema necessário e apresentam qualidade suficiente para fundamentar o desenvolvimento."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O uso de protótipos, revisão e elaboração de casos de teste para checar completude e ambiguidade visam garantir que a especificação reflete a necessidade real. Isso define a etapa de Validação."
    },
    {
        topic: "Engenharia de Requisitos",
        supportText: "A seleção de uma técnica de elicitação deve considerar características como o número e a distribuição dos stakeholders, o tipo de informação pretendida, os recursos disponíveis e a forma de análise dos dados obtidos.\nUma organização pública com atuação em todo o território nacional pretende levantar requisitos para um novo sistema de atendimento ao cidadão. Os principais usuários são aproximadamente dois mil atendentes, distribuídos em centenas de unidades nos diversos estados. A equipe de requisitos dispõe de prazo curto e orçamento limitado para deslocamentos e necessita, nessa etapa inicial, obter, de forma padronizada, a opinião dos atendentes sobre um conjunto preliminar de funcionalidades candidatas, de modo que os resultados possam ser tabulados e comparados estatisticamente.",
        q: "Considerando especificamente essas condições, assinale a opção que indica a técnica de elicitação de requisitos mais adequada, bem como à justificativa do uso.",
        options: [
            "Prototipação, por permitir que os usuários interajam com uma representação preliminar da solução e forneçam feedback sobre suas características.",
            "Etnografia, por permitir a observação direta das práticas reais de atendimento no ambiente de trabalho e facilitar a identificação de requisitos implícitos.",
            "Workshop de requisitos, por reunir stakeholders em sessões colaborativas conduzidas por um facilitador, favorecendo discussão, negociação e resolução de conflitos.",
            "Questionário, por permitir coletar informações padronizadas de um grande número de pessoas geograficamente dispersas, com possibilidade de tabulação e tratamento quantitativo das respostas.",
            "Entrevista aberta, por permitir que cada atendente apresente livremente suas necessidades e que o entrevistador aprofunde individualmente os temas identificados durante o diálogo."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Questionários são a única técnica viável de elicitação quando há milhares de stakeholders dispersos geograficamente e se necessita de tratamento estatístico padronizado, sob restrição de prazo e orçamento."
    },
    {
        topic: "Práticas Ágeis de Engenharia (TDD)",
        supportText: "No contexto das práticas de desenvolvimento de software, considere o fluxo de trabalho a seguir.\n• Escreva uma lista dos cenários de teste que você deseja cobrir;\n• Transforme exatamente um item da lista em um teste real, concreto e executável;\n• Altere o código para fazer o teste (e todos os testes anteriores) passar;\n• Opcionalmente, refatore para melhorar o design da implementação; e\n• Até que a lista esteja vazia, volte ao passo 2.",
        q: "O fluxo de trabalho descrito corresponde à abordagem denominada",
        options: [
            "BDD.",
            "DDD.",
            "TDD.",
            "FDD.",
            "RESTful."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Esse é o clássico ciclo Red-Green-Refactor do TDD (Test-Driven Development): escreve-se um teste que falha, cria-se o código para passar, e refatora-se a seguir."
    },
    {
        topic: "Arquitetura e Integração de Sistemas (SOA)",
        supportText: "As aplicações baseadas em SOA (Arquitetura Orientada a Serviços) organizam o software em blocos independentes, ou serviços.",
        q: "As opções a seguir apresentam características de serviços SOA, à exceção de uma. Assinale-a.",
        options: [
            "Cada serviço pode ser usado por uma única aplicação.",
            "Os serviços podem comunicar-se entre si mesmo usando plataformas diferentes.",
            "Um cliente usa o serviço sem precisar conhecer detalhes internos de sua programação.",
            "Os serviços possuem pouca dependência entre si, permitindo alterar um bloco sem influenciar em outros.",
            "Os serviços empregam um barramento centralizado para gerenciar a comunicação e a troca de mensagens."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O pilar fundamental do SOA é justamente o *reuso*. Os serviços são desenhados para serem agnósticos e reutilizados por múltiplas aplicações diferentes da corporação."
    },
    {
        topic: "Testes de Software e Java (JUnit)",
        supportText: "Considere a seguinte classe Java:\npublic class CartaoService {\n  public double realizarCompra(double limite, double valor) {\n    if (valor > limite) {\n      throw new IllegalArgumentException(\"Limite insuficiente\");\n    }\n    return limite - valor;\n  }\n}\nUm desenvolvedor deseja criar um teste utilizando JUnit para verificar que uma compra de valor superior ao limite disponível produz uma IllegalArgumentException, e que a mensagem da exceção é \"Limite insuficiente\". O teste foi iniciado da seguinte forma:\nimport static org.junit.jupiter.api.Assertions.*;\nimport org.junit.jupiter.api.*;\nclass CartaoServiceTest {\n  private final CartaoService service = new CartaoService();\n  @__________\n  void deveRejeitarCompraAcimaDoLimite() {\n    var excecao = __________(\n      IllegalArgumentException.class,\n      () -> service.realizarCompra(1000, 1500));\n    __________(\"Limite insuficiente\", excecao.getMessage());\n  }\n}",
        q: "Assinale a opção que apresenta, respectivamente, os termos que preenchem as lacunas para que o teste esteja correto.",
        options: [
            "Test — assertThrows — assertEquals",
            "TestInstance— assertException — assertSame",
            "TestInstance— assertEquals — assertEquals",
            "Tag — assertThrows — assertTrue",
            "Test — assertEquals — assertThrows"
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). O método precisa da anotação '@Test' para ser reconhecido. A asserção para capturar exceções é 'assertThrows()', e a verificação do texto da mensagem utiliza 'assertEquals()'."
    },
    {
        topic: "Frameworks e ORM (JPA e Hibernate)",
        supportText: "Um desenvolvedor de software da DATAPREV está definindo a pilha tecnológica para um novo sistema corporativo desenvolvido em Java.\nAo propor o uso de ferramentas de Mapeamento Objeto-Relacional (ORM) para a persistência de dados, surgiu um debate na equipe de arquitetura sobre as diferenças conceituais e de implementação entre a JPA e o Hibernate.",
        q: "Considerando as características e a relação entre essas duas tecnologias, assinale a afirmativa correta.",
        options: [
            "A adoção exclusiva do Hibernate em um projeto impede o uso de anotações, forçando o desenvolvedor a utilizar arquivos XML para realizar todo o mapeamento relacional das entidades de domínio.",
            "JPA é um framework autônomo que realiza a persistência direta no banco de dados, enquanto o Hibernate atua apenas como uma interface de abstração (API) sem implementação própria, dependendo de contêineres externos.",
            "JPA exige obrigatoriamente que o servidor de aplicação contenha um banco de dados em memória nativo para a criação das tabelas em tempo de execução, funcionalidade que o Hibernate, atuando de forma isolada (standalone), não suporta.",
            "As interfaces principais para controle de transações e manipulação de entidades na especificação JPA são Session e SessionFactory, enquanto as interfaces EntityManager e EntityManagerFactory pertencem exclusivamente à API nativa do Hibernate.",
            "JPA define uma especificação padronizada para persistência de dados e mapeamento objeto-relacional em aplicações Java, ao passo que o Hibernate é um framework que, além de implementar essa especificação, oferece recursos e anotações específicas que vão além do padrão."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). JPA (Java Persistence API) é apenas a especificação (interface/padrão abstrato). O Hibernate é o provedor (implementação) que torna a persistência real, além de oferecer funcionalidades nativas extras."
    },
    {
        topic: "Programação e Lógica (Java)",
        supportText: "Analise o código Java a seguir:\npublic class ExemploDataprev {\n  public static void main(String[] args) {\n    int limite = 10;\n    Runnable r = () -> System.out.println(limite);\n    limite = 20;\n    r.run();\n  }\n}",
        q: "Considerando as regras da linguagem Java para expressões lambda, assinale a afirmativa correta.",
        options: [
            "O código não compila, pois a variável local limite, utilizada pela expressão lambda, não é final nem effectively final.",
            "O código compila e imprime 10, pois a expressão lambda captura o valor da variável local no momento em que lambda é criada.",
            "O código compila e imprime 20, pois a expressão lambda acessa o valor atualizado da variável local no momento de sua execução.",
            "O código não compila porque Runnable não é uma interface funcional e, portanto, não pode ser utilizada como alvo de uma expressão lambda.",
            "O código compila, mas a chamada r.run() provoca uma exceção em tempo de execução, porque o valor de limite foi alterado após a criação da expressão lambda."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Para que uma variável local seja utilizada dentro de uma função Lambda, ela deve ser 'final' ou efetivamente final (não sofrer reatribuição após a declaração). Ao definir 'limite = 20', o compilador aponta erro de compilação."
    },
    {
        topic: "Desenvolvimento Web (HTML e CSS)",
        supportText: "Considere o seguinte trecho de código:\n<style>\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item:nth-child(2n) {\n  background-color: lightblue;\n}\n</style>\n<div class=\"container\">\n  <div class=\"item\">A</div>\n  <div class=\"item\">B</div>\n  <div class=\"item\">C</div>\n  <div class=\"item\">D</div>\n</div>",
        q: "Sobre o código apresentado, considerando o comportamento padrão dos navegadores modernos compatíveis com as especificações do W3C, assinale a afirmativa correta.",
        options: [
            "A propriedade justify-content: space-between distribui os itens com espaçamento igual entre eles e também nas extremidades do contêiner, deixando margens laterais iguais aos espaços internos.",
            "O seletor .item:nth-child(2n) aplicará a cor de fundo lightblue apenas aos itens \"A\" e \"C\", pois eles ocupam as posições ímpares dentro do contêiner.",
            "A propriedade align-items: center alinha os itens horizontalmente ao centro do eixo principal do contêiner flexível.",
            "O seletor .item:nth-child(2n) aplicará a cor de fundo lightblue aos itens \"B\" e \"D\", pois corresponde aos elementos filhos cujas posições são múltiplos de 2.",
            "Para que o Flexbox funcione corretamente, seria obrigatório declarar também a propriedade flex-direction: row, caso contrário os itens seriam empilhados verticalmente por padrão."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova MPES (FGV). A pseudoclasse :nth-child(2n) seleciona os elementos pares (2, 4, 6...), que no caso são os itens 'B' e 'D'. A opção A descreve space-evenly, não space-between. A opção C descreve justify-content, pois align-items age no eixo cruzado (cross axis)."
    },
    {
        topic: "Frameworks (Spring Boot)",
        supportText: "Considere o seguinte trecho de código utilizando Spring Boot:\n@RestController\n@RequestMapping(\"/produtos\")\npublic class ProdutoController {\n  @Autowired\n  private ProdutoService produtoService;\n  \n  @GetMapping(\"/{id}\")\n  public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {\n    Produto produto = produtoService.buscarPorId(id);\n    return ResponseEntity.ok(produto);\n  }\n}",
        q: "Sobre o código apresentado, considerando os conceitos do Spring Framework e o comportamento padrão do Spring Boot, assinale a afirmativa correta.",
        options: [
            "A anotação @PathVariable no método buscarPorId captura parâmetros enviados no corpo da requisição HTTP, funcionando de forma idêntica à anotação @RequestBody.",
            "A anotação @PostMapping configura o método salvar para responder a requisições do tipo HTTP GET, sendo apenas um alias sintático para @GetMapping com semântica de criação.",
            "A anotação @Autowired realiza a instanciação manual do objeto ProdutoService, exigindo que o desenvolvedor implemente explicitamente o padrão de projeto Factory para que a injeção funcione.",
            "A anotação @RestController é equivalente à combinação das anotações @Controller e @ResponseBody, fazendo com que os métodos da classe retornem os dados diretamente no corpo da resposta HTTP, por padrão em formato JSON.",
            "A anotação @RequestMapping(\"/produtos\") aplicada à classe exige que cada método declare novamente o caminho completo / produtos em suas respectivas anotações de mapeamento, caso contrário os endpoints não serão registrados."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova MPES (FGV). A anotação @RestController é uma anotação de conveniência no Spring que combina @Controller (que marca a classe como um componente web) e @ResponseBody (que indica que o retorno dos métodos deve ser serializado diretamente no corpo da resposta HTTP, geralmente em JSON)."
    },
    {
        topic: "Arquitetura de Software (MVC)",
        supportText: "Uma equipe mantém uma aplicação web estruturada segundo o modelo MVC (Modelo-Visão-Controlador). Após sucessivas evoluções, os controladores passaram a concentrar validações de negócio, cálculos, verificação de permissões e decisões sobre transições de estado.\nComo consequência, regras semelhantes começaram a ser repetidas em diferentes controladores, e mudanças em uma mesma política funcional passaram a exigir alterações em vários pontos do sistema. Em uma revisão arquitetural, decidiu-se promover uma refatoração para reduzir esse problema mantendo a separação de responsabilidades e favorecendo a reusabilidade.",
        q: "Nesse contexto, de acordo com o modelo MVC, assinale a opção que apresenta a medida mais adequada.",
        options: [
            "Transferir as regras repetidas para as visões, de modo que cada interface trate localmente as decisões necessárias ao seu fluxo específico.",
            "Manter as regras nos controladores, mas reorganizar os métodos por caso de uso, a fim de tornar a manutenção mais previsível.",
            "Transferir a lógica de negócio e gestão de estado para a camada de modelo, usando abstrações para evitar a duplicação e delegando a coordenação do fluxo aos controladores.",
            "Concentrar validações e decisões de estado em um único controlador central, para eliminar divergências entre os demais controladores.",
            "Restringir os modelos à representação de dados e deslocar para os controladores as regras remanescentes, uniformizando o padrão já adotado."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova MPES (FGV). O padrão arquitetural MVC prevê 'Fat Models, Skinny Controllers'. A camada de Modelo (Model) é a verdadeira responsável pela lógica de negócios, estado e persistência, cabendo ao Controlador apenas orquestrar as requisições entre a View e o Model."
    },
    {
        topic: "Arquitetura Orientada a Serviços (Microsserviços)",
        supportText: "Uma organização iniciou a modernização de seu sistema corporativo. A aplicação, antes monolítica, foi gradualmente dividida em serviços independentes para atender módulos como autenticação, faturamento e catálogo.\nDurante a transição, parte da integração entre sistemas legados permaneceu baseada em contratos formais descritos em XML, enquanto os novos serviços passaram a expor APIs HTTP com troca de mensagens em JSON.",
        q: "Com base nesse cenário, avalie as afirmativas a seguir.\nI. A coexistência, no mesmo ambiente, de serviços que utilizam contratos formais em XML e de APIs HTTP com JSON é compatível com um processo de transição arquitetural, não sendo suficiente, por si só, para descaracterizar uma adoção de microsserviços.\nII. Em uma arquitetura de microsserviços, a divisão do sistema em vários serviços garante baixo acoplamento e independência de evolução, mesmo que todos compartilhem o mesmo banco de dados e dependam de mudanças coordenadas no esquema relacional.\nIII. Os microsserviços podem ser compreendidos como uma abordagem específica de arquitetura orientada a serviços, de modo que nem toda solução orientada a serviços caracteriza, necessariamente, uma arquitetura de microsserviços.",
        options: [
            "I, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova MPES (FGV). A afirmativa II está errada, pois compartilhar o mesmo banco de dados (Shared Database) cria forte acoplamento (database integration), o que viola o princípio de independência de evolução dos microsserviços (onde cada um deve ter seu próprio banco - Database per Service)."
    },
    {
        topic: "Web Services e API REST",
        supportText: "Considerando boas práticas de arquitetura de APIs REST, avalie as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.\n( ) Em APIs REST, a semântica do método HTTP integra o contrato da operação, de modo que a leitura de um recurso não deve ser modelada com método cujo significado indique alteração de estado.\n( ) A criação de novos recursos em uma coleção pode ser realizada por meio de requisição PUT dirigida ao endpoint correspondente à coleção, com retorno de um novo identificador gerado pelo servidor.\n( ) Em APIs REST, a utilização de um código HTTP uniforme para respostas de êxito e de falha não compromete a semântica da interação, desde que o corpo da mensagem descreva adequadamente o resultado da requisição.",
        q: "As afirmativas são, respectivamente,",
        options: [
            "V – V – V.",
            "V – V – F.",
            "V – F – F.",
            "F – V – F.",
            "F – F – V."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova MPES (FGV). 1) V: Leitura é GET, que é idempotente e seguro, não devendo usar POST/PUT. 2) F: A criação onde o servidor gera o ID é feita com POST. O PUT é usado quando o cliente já conhece ou gera a URI completa do recurso. 3) F: Utilizar apenas código HTTP 200 (uniforme) viola a semântica do REST, que exige o uso adequado dos Status Codes (404, 500, 201, etc)."
    },
    {
        topic: "Qualidade de Software (Teste de Sistema)",
        supportText: "Um Engenheiro de Testes acaba de receber uma demanda para conduzir um teste de sistema com sua equipe.",
        q: "Sobre esse tipo de teste, analise as afirmativas a seguir.\nI. Deve ser conduzido antes dos testes de integração e conduzido preferencialmente por uma equipe de testes.\nII. Tem como objetivo confrontar o software em funcionamento com seus requisitos funcionais e não funcionais, sendo executado em um ambiente muito semelhante ao de produção.\nIII. Pode ser dividido em fases alfa (em ambiente de desenvolvimento) e beta (em ambiente que emula a produção) e realizado integralmente pela equipe de testes.",
        options: [
            "I, apenas.",
            "II, apenas.",
            "III, apenas.",
            "I e II, apenas.",
            "II e III, apenas."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova MPES (FGV). I é falso: O Teste de Sistema ocorre DEPOIS dos testes de unidade e de integração. III é falso: Testes Alfa e Beta são Testes de Aceitação, realizados pelos usuários finais ou clientes, e não 'integralmente pela equipe de testes'."
    },
    {
        topic: "Metodologias Ágeis (BDD)",
        supportText: "As metodologias de desenvolvimento de software evoluíram de abordagens rígidas e sequenciais, como o modelo em cascata, para modelos iterativos e incrementais, que favorecem as mudanças e a redução de riscos. Com as práticas ágeis, passaram a priorizar ciclos curtos, feedback contínuo e maior integração entre desenvolvimento e validação.\nNesse contexto, surgem metodologias que colocam os testes no centro do desenvolvimento, não apenas para verificação, mas como guia para construção do software, melhorando qualidade e alinhamento com o negócio. Em uma delas, utilizam-se especificações em linguagem natural, o que permite o entendimento entre clientes, analistas e desenvolvedores; surge também a chamada living documentation, que se mantém atualizada por ser executável como testes automatizados.",
        q: "Assinale a opção que indica a metodologia em questão.",
        options: [
            "TDD (Test Driven Development).",
            "BDD (Behavior Driven Development).",
            "DDT (Data Driven Development).",
            "RUP (Rational Unifed Process).",
            "UCD (User-Centered Design)."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova MPES (FGV). A utilização de linguagem natural (ex: Gherkin - Given/When/Then), foco no comportamento do negócio e geração de documentação viva (living documentation) são características definidoras do BDD (Behavior Driven Development)."
    },
    {
        topic: "Engenharia de Requisitos",
        supportText: "Ao projetar um sistema, o cliente apresentou uma lista de requisitos a serem implementados.\nRelacione os requisitos listados a seguir à sua classificação como Funcionais (RF) ou Não Funcionais (RNF).\n1. Requisito Funcional (RF)\n2. Requisito Não Funcional (RNF)\n( ) Emitir relatórios diários de indicadores de performance.\n( ) Armazenar dados temporais estritamente sob o padrão da ISO 8601.\n( ) Adaptar a interface dinamicamente para dispositivos móveis e desktops.",
        q: "Assinale a opção que indica a relação correta, segundo a ordem apresentada.",
        options: [
            "1, 1 e 2.",
            "1, 2 e 2.",
            "1, 1 e 1.",
            "2, 1 e 1.",
            "2, 2 e 2."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova MPES (FGV). Emitir relatório é uma funcionalidade (RF). Seguir um padrão específico de formatação de dados e garantir adaptabilidade/responsividade de interface são restrições ou qualidades do sistema (RNF)."
    },
    {
        topic: "Métricas de Software (Análise de Pontos de Função)",
        supportText: "O sistema e-Gampes (Sistema de Gestão de Autos) do MPES é a principal ferramenta de gestão de autos finalísticos.\nEle digitalizou o fluxo de trabalho extrajudicial (inquéritos civis, notícias de fato), eliminando o uso de papel e proporcionando agilidade, segurança e transparência na tramitação. Nele é possível cadastrar, alterar e excluir autos, executar relatórios analíticos e listar os autos cadastrados em uma consulta simples.",
        q: "Com base na Análise de Pontos de Função (APF), as funcionalidades citadas acima serão contadas, respectivamente, como",
        options: [
            "Entrada Externa, Saída Externa e Consulta Externa.",
            "Saída Externa, Consulta Externa e Arquivo de Interface Externo.",
            "Saída Externa, Saída Externa e Consulta Externa.",
            "Arquivo Lógico Interno, Consulta Externa e Entrada Externa.",
            "Entrada Externa, Saída Externa e Saída Externa."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova MPES (FGV). 1) Cadastrar/Alterar/Excluir alteram o estado do sistema (Entrada Externa - EE). 2) Relatórios analíticos contêm dados derivados ou matemática (Saída Externa - SE). 3) Listar em consulta simples, sem cálculos, apenas recupera dados (Consulta Externa - CE)."
    }
];

const banco_infra_bd = [
    { 
        topic: "Modelagem e Banco de Dados", 
        supportText: "",
        q: "Com relação à Normalização, I. Unificação de tabelas; II. A 1FN exige que todas as colunas tenham apenas valores atômicos; III. A 3FN elimina a maioria das anomalias e é o padrão comum.", 
        options: ["I e II apenas.", "II e III apenas.", "II apenas.", "I, II e III.", "I e III apenas."], 
        answer: 1, 
        disclaimer: "A 1FN exige valores atômicos (indivisíveis) e a 3FN elimina dependências transitivas." 
    },
    { 
        topic: "Computação em Nuvem (Modelos de Serviço)", 
        supportText: "",
        q: "No modelo de responsabilidade compartilhada em Computação em Nuvem, quando um órgão público contrata um serviço do tipo IaaS (Infraestrutura como Serviço), como máquinas virtuais na nuvem, é de responsabilidade do CLIENTE (órgão):", 
        options: [ 
            "A manutenção física dos servidores, cabeamento de rede do data center e refrigeração.", 
            "O gerenciamento do sistema operacional convidado (guest OS), aplicação de patches de segurança do SO, configuração de chaves de acesso (SSH/IAM) e proteção dos dados.", 
            "Apenas o uso do software via navegador, ficando o sistema operacional e o banco de dados sob gestão exclusiva do provedor.", 
            "A atualização do hypervisor físico que controla a camada de virtualização do provedor.", 
            "A segurança perimetral física dos galpões do provedor de nuvem." 
        ], 
        answer: 1, 
        disclaimer: "No modelo IaaS, o provedor cuida do hardware físico, rede física e virtualização (hypervisor), enquanto o cliente é responsável do Sistema Operacional para cima (SO, middleware, aplicações e dados)." 
    },
    { 
        topic: "Transações em Banco de Dados (ACID)", 
        supportText: "",
        q: "Em Sistemas Gerenciadores de Bancos de Dados Relacionais (SGBDR), a propriedade ACID que garante que todas as operações de uma transação sejam concluídas com sucesso ou, em caso de falha em qualquer etapa, nenhuma delas tenha efeito no banco (tudo ou nada), é a:", 
        options: [ 
            "Isolamento (Isolation).", 
            "Durabilidade (Durability).", 
            "Atomicidade (Atomicity).", 
            "Consistência (Consistency).", 
            "Concorrência (Concurrency)." 
        ], 
        answer: 2, 
        disclaimer: "Atomicidade é a regra do 'tudo ou nada': ou a transação inteira é efetivada (COMMIT), ou todas as suas alterações são desfeitas (ROLLBACK)." 
    },
    { 
        topic: "Bancos de Dados NoSQL", 
        supportText: "",
        q: "Os bancos de dados não relacionais (NoSQL) MongoDB e Apache Cassandra são classificados, quanto ao seu modelo de dados primário, respectivamente, como:", 
        options: [ 
            "Orientado a Grafos e Chave-Valor.", 
            "Orientado a Documentos (BSON/JSON) e Orientado a Colunas Largas (Wide-Column).", 
            "Relacional Objeto e Orientado a Documentos.", 
            "Hierárquico em Rede e Chave-Valor em Memória.", 
            "Orientado a Colunas e Relacional Distribuído." 
        ], 
        answer: 1, 
        disclaimer: "O MongoDB é o principal banco NoSQL orientado a documentos (armazena estruturas JSON/BSON). O Cassandra é um banco distribuído orientado a famílias de colunas (Wide-Column Store)." 
    },
    { 
        topic: "Modelagem Dimensional (Data Warehouse / BI)", 
        type: "vf",
        supportText: "",
        q: "Em um esquema em estrela (Star Schema) voltado para Business Intelligence, a Tabela Fato armazena as métricas numéricas de eventos (como valor e quantidade) e as chaves estrangeiras, enquanto as Tabelas Dimensão armazenam os atributos descritivos (como tempo, local e produto).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O esquema em estrela posiciona a tabela Fato no centro (eventos quantitativos) rodeada pelas tabelas Dimensão desnormalizadas (contexto descritivo: quem, o quê, onde, quando)." 
    },
    { 
        topic: "SQL e PL/pgSQL (Triggers)", 
        type: "vf",
        supportText: "",
        q: "No PostgreSQL, uma Trigger declarada com a cláusula 'FOR EACH STATEMENT' será disparada uma vez para cada linha individual afetada pelo comando UPDATE na tabela.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. 'FOR EACH STATEMENT' dispara a trigger apenas UMA única vez por comando SQL executado, independentemente de quantas linhas foram alteradas. Para disparar a cada linha alterada, utiliza-se 'FOR EACH ROW'." 
    },
    {
        topic: "Banco de Dados (SQL)",
        supportText: "Considere a tabela MySQL denominada vendas, que contém as colunas:\nid_vendedor (identificador do vendedor, tipo inteiro, sem valores nulos)\nvalor (valor da venda, tipo float, sem valores nulos)\nAnalise a consulta MySQL a seguir.\nSELECT id_vendedor, AVG(valor) AS media_vendas_vendedor\nFROM vendas\nGROUP BY id_vendedor\nHAVING AVG(valor) > ( SELECT AVG(valor) FROM vendas );",
        q: "Com base nessas informações, assinale a opção que descreve com maior precisão o resultado retornado por esta consulta.",
        options: [
            "Identifica as linhas de venda cujo valor ultrapassa a média geral da tabela e, em seguida, exibe os vendedores únicos associados a essas linhas.",
            "Compara a média de vendas de cada vendedor com a média geral (calculada sobre todas as vendas) e retorna apenas os vendedores cuja média individual é superior.",
            "Seleciona os vendedores cuja venda de maior valor é superior à média de vendas de toda a empresa.",
            "Agrupa as vendas por vendedor e, dentro de cada grupo, retorna apenas aqueles em que a venda de maior valor foi superior à média de vendas do próprio grupo.",
            "Para cada vendedor, compara sua média de vendas com a média das médias individuais de vendas de todos os outros vendedores, retornando aqueles que estão acima."
        ],
        answer: 1,
        disclaimer: "A cláusula GROUP BY agrupa os dados por vendedor, calculando a média individual. A cláusula HAVING compara essa média individual com o resultado da subquery (a média geral de todas as vendas)."
    },
    {
        topic: "Arquitetura em Nuvem (AWS)",
        supportText: "",
        q: "Uma equipe de desenvolvimento precisa processar imagens que são enviadas para um bucket no Amazon S3. A cada nova imagem, uma função deve ser executada para gerar uma versão em miniatura (thumbnail). O volume de imagens é imprevisível, podendo variar de zero a milhares por dia. A equipe quer uma solução que não exija gerenciamento de servidores e cujo custo seja calculado apenas com base nas execuções realizadas. O serviço da AWS mais indicado para atender a esses requisitos é o",
        options: [
            "Amazon EC2, configurando instâncias para monitorar o bucket e processar as imagens.",
            "Amazon S3, utilizando seus recursos internos para gerar versões em miniatura das imagens.",
            "AWS Batch, configurado para processar as imagens em lotes programados.",
            "AWS Lambda, com gatilho para eventos de criação de objetos no bucket S3.",
            "Amazon ECS, executando contêineres que realizam o processamento sob demanda."
        ],
        answer: 3,
        disclaimer: "O AWS Lambda é o serviço serverless (sem gerenciamento de servidores) orientado a eventos da AWS. Ele escala automaticamente sob demanda e cobra apenas pelo tempo de computação consumido."
    },
    {
        topic: "Contêineres e Orquestração (Docker)",
        supportText: "",
        q: "Em um projeto de desenvolvimento que utiliza Docker Compose, é comum organizar múltiplos serviços dentro de um arquivo docker-compose.yml ou compose.yaml. Para que esses serviços possam interagir entre si de forma transparente, o Docker adota uma configuração de rede padrão que define como a comunicação ocorrerá entre os contêineres do projeto. Nesse contexto, marque a opção que apresenta a forma como essa comunicação acontece por padrão.",
        options: [
            "Eles utilizam a rede host, compartilhando a interface de rede do host e se comunicando por meio de portas diferentes no mesmo IP.",
            "Eles se comunicam através do localhost, pois compartilham o mesmo namespace de rede do host.",
            "Eles são colocados automaticamente em uma única rede bridge, criada especificamente para o projeto, permitindo a comunicação usando os nomes dos serviços como hostnames.",
            "É necessário criar manualmente uma rede do tipo overlay e anexar cada serviço a ela para permitir a comunicação.",
            "A comunicação não é possível por padrão; é necessário expor as portas de cada serviço para o host e comunicar-se através do IP do host."
        ],
        answer: 2,
        disclaimer: "Por padrão, o Docker Compose configura uma única rede do tipo 'bridge' para o aplicativo inteiro. Cada contêiner junta-se a essa rede e pode alcançar outros contêineres utilizando os nomes dos serviços como alias de rede."
    },
    {
        topic: "Modelagem de Dados (Normalização)",
        supportText: "Considere a tabela Projeto_Engenheiro com a seguinte estrutura de colunas: CodigoEngenheiro, CodigoProjeto, HorasAlocadas, NomeEngenheiro e EspecialidadeEngenheiro.\nSabe-se que a chave primária da tabela é composta conjuntamente por (CodigoEngenheiro, CodigoProjeto). Ao analisar as dependências funcionais, verifica-se que NomeEngenheiro e EspecialidadeEngenheiro são funcionalmente determinados apenas por CodigoEngenheiro, que corresponde à parte da chave primária composta.",
        q: "Assinale a opção que avalia corretamente a adequação dessa estrutura à 2ª Forma Normal (2FN).",
        options: [
            "A estrutura viola a 2FN devido à dependência parcial dos atributos do engenheiro.",
            "A tabela já se encontra na 2FN, uma vez que a dependência transitiva existente deve ser sanada apenas na 3FN.",
            "A estrutura viola a 2FN, enquanto a chave composta não for substituída por um identificador sequencial simples.",
            "A estrutura viola a 2FN, devendo-se corrigir o problema movendo o atributo de horas alocadas para uma tabela à parte.",
            "A tabela já se encontra na 2FN, dado que a única exigência estrutural desse nível de normalização é a existência de uma chave primária composta bem definida."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A Segunda Forma Normal (2FN) proíbe dependências parciais. Se a chave primária é composta e um atributo não-chave depende de apenas uma parte dessa chave, a 2FN é violada."
    },
    {
        topic: "Banco de Dados (Integridade Referencial)",
        supportText: "Considere as tabelas Cliente e Pedido, em que Cliente.CodigoCliente é a chave primária e Pedido.CodigoCliente é uma chave estrangeira que referencia essa coluna.\nAnalise as duas definições a seguir:\nI - FOREIGN KEY (CodigoCliente) REFERENCES Cliente(CodigoCliente) ON DELETE CASCADE\nII - FOREIGN KEY (CodigoCliente) REFERENCES Cliente(CodigoCliente) ON DELETE NO ACTION",
        q: "Assinale a opção que apresenta corretamente a diferença entre os comportamentos das duas definições.",
        options: [
            "Na definição I, a exclusão de um pedido pode provocar a exclusão do cliente; na definição II, essa operação é impedida.",
            "Na definição I e na definição II, a exclusão do cliente produz o mesmo resultado, pois CASCADE e NO ACTION apenas documentam a intenção da regra.",
            "Na definição I, os pedidos permanecem e passam a referenciar automaticamente outro cliente; na definição II, os pedidos são excluídos juntamente com o cliente.",
            "Na definição I, a exclusão do cliente é permitida apenas quando não houver pedidos associados; na definição II, os pedidos associados são removidos automaticamente.",
            "Na definição I, a exclusão de um cliente provoca a exclusão dos pedidos que o referenciam; na definição II, a exclusão do cliente é impedida enquanto existirem pedidos que o referenciem."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). 'ON DELETE CASCADE' propaga a exclusão (deletar o pai deleta os filhos). 'ON DELETE NO ACTION' (ou RESTRICT) impede a exclusão do pai se houver filhos atrelados a ele."
    },
    {
        topic: "Data Warehouse e BI",
        supportText: "Uma organização possui um data warehouse, que é usado para produzir indicadores financeiros a partir de dados provenientes de diferentes sistemas operacionais. Durante uma auditoria, a equipe responsável analisou algumas informações relacionadas ao ambiente.\nI. A tabela FATO_VENDAS possui o atributo valor_liquido, definido como um número decimal com duas casas decimais, e esse atributo não pode receber valores nulos.\nII. O indicador “venda líquida” representa o valor bruto das vendas após a dedução dos descontos e das devoluções, conforme a regra estabelecida pela organização.\nIII. O processo de carga da tabela FATO_VENDAS é executado diariamente às 2h. Na última execução, foram extraídos 1.253.428 registros, dos quais 1.251.936 foram carregados com sucesso.",
        q: "Considerando as características dos metadados em ambientes de data warehouse, assinale a opção que apresenta a classificação correta das informações I, II e III, respectivamente.",
        options: [
            "de negócio; de processo; técnico.",
            "de negócio; técnico; de processo.",
            "de processo; de negócio; técnico.",
            "técnico; de negócio; de processo.",
            "técnico; de processo; de negócio."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Metadados técnicos descrevem a estrutura (tipos de dados, nullability). Metadados de negócio descrevem as regras e conceitos (cálculo de venda). Metadados de processo registram o histórico e estatísticas de execução (ETL carga, horários)."
    },
    {
        topic: "Data Warehouse e BI",
        supportText: "Considere um modelo dimensional destinado à análise de vendas, composto pelas tabelas FatoVenda, DimProduto, DimCliente e DimData.\nA tabela FatoVenda possui as colunas: CodigoProduto, CodigoCliente, CodigoData, Quantidade e ValorVenda. As três primeiras colunas referenciam, respectivamente, as chaves das tabelas DimProduto, DimCliente e DimData.",
        q: "Sobre a forma como os relacionamentos entre a tabela fato e as dimensões são materializados nesse modelo, assinale a afirmativa correta.",
        options: [
            "Os relacionamentos são materializados pelas chaves estrangeiras existentes na tabela fato, que referenciam as chaves das respectivas dimensões.",
            "Cada dimensão deve possuir uma chave primária composta pela combinação de sua própria chave e das chaves das demais dimensões utilizadas pela tabela fato.",
            "Os relacionamentos entre fato e dimensões são definidos apenas conceitualmente e não precisam ser representados por chaves nas tabelas do modelo dimensional.",
            "As dimensões devem armazenar as chaves estrangeiras que identificam as ocorrências correspondentes na tabela fato, estabelecendo a associação entre as tabelas.",
            "Deve ser criada uma tabela associativa para cada relacionamento entre FatoVenda e uma dimensão, contendo as chaves primárias das duas tabelas relacionadas."
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Em um esquema estrela (Star Schema), a tabela Fato fica no centro e conecta-se às Dimensões armazenando as chaves primárias destas como chaves estrangeiras (FK)."
    },
    {
        topic: "Bancos de Dados NoSQL",
        supportText: "Uma instituição pretende implantar uma aplicação projetada para armazenar informações sobre os itens pertencentes ao seu patrimônio. Os itens pertencem a diferentes categorias e podem apresentar conjuntos distintos de atributos.\nAlém disso, novos tipos de itens e novos atributos podem ser incorporados frequentemente, sem que seja desejável modificar continuamente a estrutura global do banco de dados.\nA aplicação realizará principalmente operações de inserção, consulta e atualização de itens completos, sendo conveniente recuperar as informações de cada item como uma unidade de dados.",
        q: "Considerando essas características, assinale a opção que apresenta a abordagem de banco de dados mais adequada ao cenário descrito.",
        options: [
            "Relacional, utilizando tabelas normalizadas e relacionamentos entre elas.",
            "Orientado a grafos, usando nós e arestas para representar os itens e seus relacionamentos.",
            "Objeto-relacional, utilizando tipos definidos pelo usuário para representar os diferentes itens.",
            "Orientado a documentos, permitindo armazenar documentos com estruturas de atributos distintas e flexíveis.",
            "Relacional, utilizando uma tabela única para os produtos, com colunas opcionais para acomodar os atributos específicos de cada categoria."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Bancos de dados orientados a documentos (como MongoDB) permitem schema flexível (schemaless), sendo ideais para itens heterogêneos recuperados como uma unidade inteira (documento JSON/BSON)."
    },
    {
        topic: "Linguagem SQL",
        supportText: "Considere o modelo relacional de uma transportadora composto pelas tabelas Veiculo e Viagem.\nA tabela Veiculo possui as colunas CodigoVeiculo (PK) e KmAtual, contendo 50 veículos cadastrados. O atributo kmAtual aceita valores nulos. Já a tabela Viagem possui as colunas CodigoViagem (PK), CodigoVeiculo (FK) e KmFinal, contendo os registros de viagens finalizadas.\nSabe-se que apenas 30 desses veículos possuem registros na tabela Viagem (os outros 20 são veículos recém-adquiridos que nunca viajaram).\nUm desenvolvedor executou a seguinte instrução SQL no banco de dados:\nUPDATE Veiculo V\nSET KmAtual = (SELECT MAX(Vi.KmFinal) FROM Viagem Vi WHERE Vi.CodigoVeiculo = V.CodigoVeiculo);",
        q: "Assinale a alternativa que descreve corretamente o resultado da execução dessa instrução.",
        options: [
            "Ocorrerá um erro de sintaxe, pois uma subconsulta não pode ser utilizada diretamente para definir o valor de uma coluna em uma instrução UPDATE.",
            "Ocorrerá um erro de sintaxe, pois o padrão ANSI SQL não permite o uso de funções de agregação, como MAX, dentro de uma subconsulta na cláusula SET.",
            "Os 30 veículos que possuem registros na tabela Viagem receberão a sua maior quilometragem, enquanto os 20 restantes manterão o valor original de KmAtual inalterado.",
            "Os 30 veículos que possuem registros na tabela Viagem receberão a sua maior quilometragem, enquanto os 20 restantes terão o valor de KmAtual sobrescrito como nulo (NULL).",
            "Os 30 veículos que possuem registros na tabela Viagem receberão a sua maior quilometragem, enquanto os 20 veículos restantes receberão automaticamente o valor 0 (zero) na coluna KmAtual, pois MAX() converte o resultado de um conjunto vazio para zero durante uma operação UPDATE."
        ],
        answer: 3,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Como o UPDATE não possui a cláusula WHERE restringindo as linhas afetadas, todos os 50 veículos serão atualizados. Para os 20 veículos sem viagens, a subconsulta MAX() retornará um conjunto vazio, cujo resultado é injetado como NULL na coluna KmAtual."
    },
    {
        topic: "Modelagem de Dados",
        supportText: "A modelagem conceitual de bancos de dados é uma representação abstrata do negócio que visa identificar as entidades envolvidas e os relacionamentos entre elas.",
        q: "No mapeamento de um relacionamento N:M identificado no modelo conceitual para o modelo relacional, deve-se",
        options: [
            "adicionar uma coluna do tipo array em uma das tabelas envolvidas.",
            "converter uma das entidades em um atributo multivalorado na outra entidade.",
            "criar uma tabela associativa contendo as chaves primárias das entidades originais como chaves estrangeiras.",
            "inserir a chave primária de qualquer uma das duas entidades diretamente como chave estrangeira na outra.",
            "mesclar os atributos das duas entidades em uma única tabela para eliminar a necessidade de relacionamento."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Relacionamentos Muitos-para-Muitos (N:M) no modelo conceitual originam o surgimento de uma nova tabela (tabela associativa ou de junção) no modelo lógico relacional, unindo as chaves primárias de ambas."
    }
];

// ---------------------------------------------------------
// 5. MAPEAMENTO OFICIAL DO SIMULADOR (CHAVES EXATAS)
// ---------------------------------------------------------
// =========================================================
// BANCOS DE QUESTÕES
// =========================================================
// Estas declarações evitam ReferenceError nos bancos que
// ainda não possuem questões cadastradas neste arquivo.
//
// ATENÇÃO: os arrays vazios não contêm questões.
// Será necessário preenchê-los posteriormente.

const banco_rlm = [
    {
        topic: "Equivalência e Negação Lógica",
        supportText: "",
        q: "A negação lógica da proposição condicional 'Se o processo é eletrônico, então a intimação é automática' é logicamente equivalente a:",
        options: [
            "Se o processo não é eletrônico, então a intimação não é automática.",
            "O processo não é eletrônico ou a intimação não é automática.",
            "O processo é eletrônico e a intimação não é automática.",
            "Se a intimação não é automática, então o processo não é eletrônico.",
            "O processo não é eletrônico e a intimação é automática."
        ],
        answer: 2,
        disclaimer: "A negação da condicional (P -> Q) segue a regra da 'MANÉ' (Mantém a primeira E Nega a segunda): P ^ ~Q ('O processo é eletrônico e a intimação não é automática')."
    },
    {
        topic: "Equivalência Lógica (Contrapositiva)",
        supportText: "",
        q: "Considere verdadeira a afirmação: 'Todo analista de sistemas sabe programar em Python'. A partir dessa premissa, conclui-se corretamente que:",
        options: [
            "Quem sabe programar em Python é analista de sistemas.",
            "Se Carlos não sabe programar em Python, então ele não é analista de sistemas.",
            "Se Carlos não é analista de sistemas, então ele não sabe programar em Python.",
            "Nenhum programador de Python ocupa outro cargo.",
            "Algum analista de sistemas não sabe programar em Python."
        ],
        answer: 1,
        disclaimer: "Todo A é B equivale à condicional (A -> B). Pela equivalência contrapositiva (~B -> ~A), se alguém não pertence ao conjunto de quem programa em Python, necessariamente não é analista de sistemas."
    },
    {
        topic: "Porcentagem e Variação Percentual",
        supportText: "",
        q: "O acervo de processos pendentes de um cartório judicial sofreu um aumento de 20% no primeiro semestre e, sobre o novo total, uma redução de 20% no segundo semestre. Em relação ao acervo inicial do ano, o número final de processos:",
        options: [
            "permaneceu exatamente igual.",
            "aumentou 4%.",
            "diminuiu 4%.",
            "diminuiu 2%.",
            "aumentou 2%."
        ],
        answer: 2,
        disclaimer: "Multiplicando os fatores de variação: 1,20 x 0,80 = 0,96, o que corresponde a 96% do valor inicial (uma redução acumulada de 4%)."
    },
    {
        topic: "Matemática Financeira (Juros Compostos)",
        supportText: "",
        q: "Um capital de R$ 10.000,00 é aplicado no regime de juros compostos à taxa de 10% ao mês durante 2 meses. O montante final acumulado ao término desse período será de:",
        options: [
            "R$ 12.000,00.",
            "R$ 12.100,00.",
            "R$ 11.000,00.",
            "R$ 12.200,00.",
            "R$ 12.500,00."
        ],
        answer: 1,
        disclaimer: "No regime de juros compostos, M = C * (1 + i)^t -> M = 10.000 * (1,10)^2 = 10.000 * 1,21 = R$ 12.100,00."
    },
    {
        topic: "Análise Combinatória e Probabilidade",
        type: "vf",
        supportText: "",
        q: "Em uma comissão formada por 5 servidores distintos, o número de maneiras diferentes de escolher 1 Presidente e 1 Secretário é igual a 20.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Como a ordem importa (cargos distintos), trata-se de um Arranjo de 5 elementos tomados 2 a 2: 5 x 4 = 20 maneiras distintas."
    },
        {
        topic: "Sequências Lógicas",
        supportText: "",
        q: "Ao realizar os registros das quantidades de correspondências expedidas pelo MP em cada um dos seis dias úteis de trabalho, um técnico registrou a seguinte sequência numérica: (2, 5, 10, 17, 26, x), sendo x um número inteiro e que representa a quantidade de correspondências expedidas no sexto dia útil, mas que não foi possível ser identificado no momento da leitura desses registros. Sabendo que os elementos dessa sequência obedecem a uma lei de formação, então a quantidade de correspondências expedidas no sexto dia, ou seja, o valor de x, é igual a", //[cite: 7]
        options: [
            "15.",
            "26.",
            "37.",
            "48.",
            "59."
        ],
        answer: 2,
        disclaimer: "A sequência cresce somando os números ímpares sucessivos: +3, +5, +7, +9. O próximo incremento deve ser +11. Logo, 26 + 11 = 37." //[cite: 7]
    },
    {
        topic: "Regra de Três Composta",
        supportText: "",
        q: "Considere que 3 técnicos do MP, dedicando 2 horas diárias de trabalho, realizam o fichamento de 75 processos no período de 5 dias. O número de dias necessários para 5 técnicos, com a mesma eficiência dos técnicos mencionados anteriormente, realizarem o fichamento de 300 processos, dedicando 3 horas diárias de trabalho, será de", //[cite: 7]
        options: [
            "10 dias.",
            "4 dias.",
            "16 dias.",
            "2 dias.",
            "8 dias."
        ],
        answer: 4,
        disclaimer: "Montando as proporções da regra de três composta, chega-se ao resultado de 8 dias." //[cite: 7]
    },
    {
        topic: "Associação Lógica",
        supportText: "Os técnicos André, Bete e Clóvis atuam em um setor do MP, sendo que cada um deles exerce uma atividade diferente: digitação de relatórios, fichamento de arquivos e coleta de dados para pesquisas, não necessariamente nessa ordem. Considere que somente uma das seguintes afirmações seja verdadeira:\n- André exerce a atividade de digitação de relatórios;\n- Bete não exerce a atividade de digitação de relatórios;\n- Clóvis não exerce a atividade de coleta de dados para pesquisas.", //[cite: 7]
        q: "Com base nessas informações, é correto afirmar que as respectivas atividades exercidas, nesse setor, por Bete e Clóvis são:", //[cite: 7]
        options: [
            "digitação de relatórios e fichamento de arquivos.",
            "digitação de relatórios e coleta de dados para pesquisas.",
            "fichamento de arquivos e coleta de dados para pesquisas.",
            "coleta de dados para pesquisas e digitação de relatórios.",
            "coleta de dados para pesquisas e fichamento de arquivos."
        ],
        answer: 0,
        disclaimer: "Testando as hipóteses para encontrar a única verdadeira, conclui-se que a afirmação sobre Clóvis é a única verdadeira. Logo, Bete cuida da digitação e Clóvis do fichamento." //[cite: 7]
    },
    {
        topic: "Teoria dos Conjuntos",
        supportText: "Em determinado dia de trabalho no MP, foram realizadas 400 pesquisas em bancos de dados eletrônicos. Essas pesquisas abrangeram assuntos administrativos especificamente relacionados às áreas de pessoal, patrimonial ou financeira ou trataram de outros temas. As seguintes informações são conhecidas:\n- 200 pesquisas trataram de questões de pessoal;\n- 180 pesquisas abordaram questões patrimoniais;\n- 150 pesquisas envolveram questões financeiras;\n- 70 pesquisas trataram de exatamente duas das três áreas administrativas;\n- 50 pesquisas foram referentes a outros assuntos (não administrativos);\n- A quantidade de pesquisas que se referem exclusivamente à área de pessoal é o dobro da quantidade de pesquisas que se refere exclusivamente à área financeira.", //[cite: 8]
        q: "Com base nessas informações, a quantidade de pesquisas que abordaram simultaneamente as três áreas administrativas (pessoal, patrimonial e financeira) é igual a", //[cite: 8]
        options: [
            "25.",
            "30.",
            "45.",
            "55.",
            "60."
        ],
        answer: 3,
        disclaimer: "Aplicando as fórmulas de diagramas de Venn, a intersecção tripla resulta em 55." //[cite: 8]
    },
    {
        topic: "Problemas Aritméticos e Equações",
        supportText: "Analisando os tempos de carreira atuais de dois técnicos atuantes no MP, sabe-se que:\n- Wilson tem o dobro do tempo de carreira de Fernando acrescido de 4 anos;\n- Daqui a 10 anos, a soma do tempo de carreira de ambos será 42 anos.", //[cite: 8]
        q: "Diante dessas informações, qual é o tempo de carreira atual do Técnico Wilson?", //[cite: 8]
        options: [
            "18 anos.",
            "16 anos.",
            "14 anos.",
            "12 anos.",
            "10 anos."
        ],
        answer: 1,
        disclaimer: "Montando o sistema de equações lineares: W = 2F + 4 e (W + 10) + (F + 10) = 42. Resolvendo, acha-se F = 6 e W = 16." //[cite: 8]
    },
    {
        topic: "Funções de 1º Grau",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "O número de processos autuados no primeiro mês correspondeu a menos de 10% do número total de processos autuados no ano sob análise.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Em f(1) foram 318 autuações. A soma total do ano é superior a 3.350. Como 10% do total é ~335, os 318 representam menos de 10%." //[cite: 25]
    },
    {
        topic: "Progressão Aritmética (PA)",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "A sequência formada pelo número de processos autuados mês a mês é uma progressão aritmética.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Trata-se de uma PA decrescente, com razão r = -7." //[cite: 25]
    },
    {
        topic: "Geometria Analítica e Gráficos",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Ao se plotar, em um sistema de coordenadas cartesianas, os pares ordenados formados por um número associado ao mês e pelo número associado ao número de processos autuados naquele mês, tem-se que tais pontos estarão sobre uma reta.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A função dada é do tipo afim ou de 1º grau, cuja representação gráfica sempre descreve uma reta." //[cite: 25]
    },
    {
        topic: "Equações",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Existe um mês em que foram autuados exatamente 120 processos.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Igualando a função a 120: 325 - 7x = 120 => 7x = 205 => x = 29,28. Como o mês deve ser um número inteiro, a afirmação está errada." //[cite: 25]
    },
    {
        topic: "Funções",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "No nono mês daquele ano, foram autuados menos de 250 processos.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Substituindo x por 9: f(9) = 325 - 7(9) = 325 - 63 = 262. Como 262 não é menor que 250, a afirmativa está errada." //[cite: 25]
    },
    {
        topic: "Probabilidade",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Ao se selecionar ao acaso um processo autuado no ano em questão, a probabilidade de ele ter sido autuado no primeiro semestre é igual à probabilidade de ter sido autuado no segundo semestre desse ano.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Como a função decresce ao longo do tempo (razão negativa), o total de processos do primeiro semestre é maior que o do segundo. Logo, as probabilidades são desiguais." //[cite: 25]
    },
    {
        topic: "Equivalência Lógica",
        supportText: "",
        q: "Em determinado período de monitoramento, a equipe responsável por um centro de processamento adotou a regra a seguir.\n“Se a taxa de ocupação dos servidores for superior a 80%, então as rotinas não prioritárias serão transferidas para o período noturno.”\nConsiderando a lógica proposicional, essa regra é logicamente equivalente a",
        options: [
            "A taxa de ocupação dos servidores é inferior a 80% ou as rotinas não prioritárias serão transferidas para o período noturno.",
            "A taxa de ocupação dos servidores é menor ou igual a 80% ou as rotinas não prioritárias serão transferidas para o período noturno.",
            "A taxa de ocupação dos servidores é menor ou igual a 80% e as rotinas não prioritárias serão transferidas para o período noturno.",
            "A taxa de ocupação dos servidores é superior a 80% ou as rotinas não prioritárias não serão transferidas para o período noturno.",
            "Se as rotinas não prioritárias forem transferidas para o período noturno, então a taxa de ocupação dos servidores será superior a 80%."
        ],
        answer: 1,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A equivalência do condicional (P -> Q) pode ser dada pela regra do silogismo disjuntivo (~P v Q). A negação de 'superior a 80%' é 'menor ou igual a 80%', unindo-se pelo conectivo 'ou' ao consequente mantido."
    },
    {
        topic: "Lógica de Argumentação",
        supportText: "Em relação às alterações processadas por determinada organização, considere verdadeiras as seguintes afirmações:\n• toda alteração classificada como emergencial foi implantada no mesmo dia em que foi autorizada;\n• toda alteração implantada no mesmo dia em que foi autorizada foi submetida a uma revisão posterior.\nUma dessas alterações, denominada Alfa, não foi submetida a uma revisão posterior.",
        q: "Com base exclusivamente nessas informações, conclui-se necessariamente que a alteração Alfa",
        options: [
            "não foi autorizada.",
            "foi autorizada, mas não foi implantada.",
            "não foi classificada como emergencial.",
            "foi implantada em dia posterior ao de sua autorização.",
            "foi classificada como emergencial, mas não foi implantada no mesmo dia em que foi autorizada."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Aplicando a regra do Modus Tollens de trás para frente: se não teve revisão, não foi implantada no mesmo dia. E se não foi implantada no mesmo dia, obrigatoriamente não foi classificada como emergencial."
    },
    {
        topic: "Problemas Aritméticos",
        supportText: "Um sistema utiliza um contador que apresenta inicialmente o número 1. A cada comando executado, o número exibido é substituído por um dos seguintes valores:\n• o número exibido acrescido de uma unidade;\n• o dobro do número exibido.",
        q: "O menor número de comandos necessários para que o contador passe a exibir o número 100 é",
        options: [
            "6.",
            "7.",
            "8.",
            "9.",
            "10."
        ],
        answer: 2,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A forma mais rápida de descobrir é fazendo o caminho inverso a partir do 100, dividindo por 2 quando for par e subtraindo 1 quando for ímpar: 100 -> 50 -> 25 -> 24 -> 12 -> 6 -> 3 -> 2 -> 1. Total de 8 etapas/comandos."
    },
    {
        topic: "Lógica Sentencial",
        supportText: "Um sistema de monitoramento utiliza dois sensores e pode operar em modo de manutenção.\nConsidere as proposições:\n• p: o sensor A detecta uma anomalia;\n• q: o sensor B detecta uma anomalia; e\n• r: o modo de manutenção está ativado.\nO sistema aciona um alerta quando pelo menos um dos sensores detecta uma anomalia e o modo de manutenção não está ativado, ou quando ambos os sensores detectam uma anomalia.",
        q: "A proposição que representa o acionamento do alerta é",
        options: [
            "[(p∨q)∧¬r]∨(p∧q)",
            "[(p∧q)∧¬r]∨(p∧q)",
            "[(p∨q)∧r]∨(p∧¬q)",
            "[(p∨q)∨¬r]∨(p∧q)",
            "[(p∨q)∧¬r]∧(p∨q)"
        ],
        answer: 0,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). Traduzindo o enunciado para os símbolos lógicos: 'pelo menos um' = (p v q); 'E' = ^; 'não está ativado' = ~r; 'OU' = v; 'ambos' = (p ^ q). Unindo tudo, chegamos à estrutura [(p v q) ^ ~r] v (p ^ q)."
    },
    {
        topic: "Lógica de Primeira Ordem",
        supportText: "Considere o conjunto não vazio dos equipamentos examinados durante uma conferência patrimonial. Ao término do procedimento, foi apresentada a afirmação a seguir.\n“Todos os equipamentos examinados receberam etiqueta patrimonial e tiveram sua localização registrada no inventário.”",
        q: "Assinale a opção que apresenta a negação lógica dessa afirmação.",
        options: [
            "Pelo menos um equipamento examinado recebeu etiqueta patrimonial e teve sua localização registrada no inventário.",
            "Nenhum equipamento examinado recebeu etiqueta patrimonial nem teve sua localização registrada no inventário.",
            "Nenhum equipamento examinado recebeu simultaneamente etiqueta patrimonial e teve sua localização registrada no inventário.",
            "Pelo menos um equipamento examinado não recebeu etiqueta patrimonial e não teve sua localização registrada no inventário.",
            "Pelo menos um equipamento examinado não recebeu etiqueta patrimonial ou não teve sua localização registrada no inventário."
        ],
        answer: 4,
        disclaimer: "Questão extraída do concurso DATAPREV (FGV). A negação do quantificador universal ('Todos') exige o quantificador existencial ('Pelo menos um' ou 'Existe'). Ao mesmo tempo, pela Lei de De Morgan, nega-se a conjunção ('E') trocando-a por uma disjunção ('OU') e negando ambas as partes envolvidas."
    },
    {
        topic: "Associação Lógica",
        supportText: "Um sistema de criptografia atribuiu valores numéricos às letras do alfabeto. Cada letra recebeu um único valor. Letras distintas têm valores distintos.\nNesse sistema:\n• a soma das letras da palavra NARA é 19;\n• a soma das letras da palavra MARIA é 25;\n• a soma das letras da palavra MAIARA é 27;\n• a soma das letras da palavra MARIANA é 31.",
        q: "Com base nessas informações, é correto afirmar que a valor atribuído a R foi",
        options: [
            "10.",
            "11.",
            "12.",
            "13.",
            "14."
        ],
        answer: 1,
        disclaimer: "MAIARA (27) é MARIA (25) + A. Logo, A = 2. A palavra MARIANA (31) é MARIA (25) + N + A. Se A = 2, então 25 + N + 2 = 31 => N = 4. Sabendo que NARA = 19, temos: N + 2A + R = 19 => 4 + 4 + R = 19 => R = 11."
    },
    {
        topic: "Geometria Plana",
        supportText: "A figura a seguir ilustra dois retângulos, A e B, dispostos lado a lado de duas formas diferentes.\nNa Figura 1, o menor lado de B está encostado no maior lado de A, de modo que o maior lado de B, na sua parte inferior, está perfeitamente alinhado com o menor lado de A, na sua parte inferior, formando uma figura em L cujo perímetro é 32 cm.\nNa Figura 2, o maior lado de B está encostado no maior lado de A, de modo que o menor lado de B, na sua parte inferior, está perfeitamente alinhado com o menor lado de A, na sua parte inferior, formando uma nova figura cujo perímetro é 26 cm.",
        q: "No retângulo B, a diferença entre as medidas do maior lado e do menor lado vale",
        options: [
            "7,5 cm.",
            "6,0 cm.",
            "4,5 cm.",
            "3,0 cm.",
            "1,5 cm."
        ],
        answer: 3,
        disclaimer: "Resolvendo o sistema linear montado pelos perímetros das duas figuras combinadas, a diferença matemática direta entre o maior e o menor lado do retângulo B equivale a 3,0 cm."
    },
    {
        topic: "Análise Combinatória",
        supportText: "Em um jogo, sorteiam-se ao acaso, sucessivamente e sem reposição, números do conjunto {1,2,3,4,5,6,7,8}. Cada jogador recebe uma cartela com 6 números distintos desse conjunto. Duas cartelas quaisquer nunca têm exatamente os mesmos 6 números.",
        q: "A quantidade máxima de cartelas distintas que se pode ter nesse jogo é",
        options: [
            "28.",
            "36.",
            "42.",
            "48.",
            "56."
        ],
        answer: 0,
        disclaimer: "Trata-se de uma combinação simples de 8 elementos tomados 6 a 6, pois a ordem dos números na cartela não importa. C(8,6) é equivalente a C(8,2). O cálculo é: (8 * 7) / (2 * 1) = 56 / 2 = 28."
    },
    {
        topic: "Proporcionalidade e Misturas",
        supportText: "O \"grau\" do álcool doméstico indica a concentração de etanol presente na mistura com água. No Brasil, essa medida é expressa em INPM. Por exemplo, o álcool 46° INPM possui, a cada 100 gramas de produto, 46 gramas de etanol e 54 gramas de água e outros componentes.",
        q: "Misturando-se 200g de álcool 46° INPM com 300 gramas de álcool 70° INPM, produz-se 500g de álcool com concentração INPM igual a",
        options: [
            "59,4°.",
            "59,6°.",
            "59,8°.",
            "60,2°.",
            "60,4°."
        ],
        answer: 4,
        disclaimer: "Calculando a massa de etanol puro: (200 * 0,46) + (300 * 0,70) = 92g + 210g = 302g. Dividindo a massa de etanol pela massa total da nova mistura: 302 / 500 = 0,604 ou 60,4°."
    },
    {
        topic: "Lógica Sentencial (Negação)",
        supportText: "Considere a proposição P dada por:\n“Pelo menos um livro da minha biblioteca é sobre Matemática e nenhum dos discos da minha discoteca é importado.”",
        q: "Assinale a opção que contém a negação de P.",
        options: [
            "Pelo menos um livro da minha biblioteca não é sobre Matemática e algum disco da minha discoteca é importado.",
            "Pelo menos um livro da minha biblioteca não é sobre Matemática ou algum disco da minha discoteca é importado.",
            "Pelo menos um livro da minha biblioteca não é sobre Matemática e todos os discos da minha discoteca são importados.",
            "Nenhum livro da minha biblioteca é sobre Matemática ou algum disco da minha discoteca é importado.",
            "Nenhum livro da minha biblioteca é sobre Matemática e algum disco da minha discoteca é importado."
        ],
        answer: 3,
        disclaimer: "Aplicando a Lei de De Morgan (A ^ B) = ~A v ~B. A negação de 'Pelo menos um é' torna-se 'Nenhum é'. O conectivo 'E' vira 'OU'. A negação de 'Nenhum é' torna-se 'Pelo menos um (algum) é'. Resultado: Nenhum livro é sobre Matemática OU algum disco é importado."
    },
    {
        topic: "Problemas Aritméticos (Vazão e Tempo)",
        supportText: "",
        q: "Uma cisterna tem capacidade de 7200 litros e está vazia. Uma bomba consegue jogar 100 litros de água na cisterna em, exatamente, 1 minuto e 20 segundos. Trabalhando continuamente, o tempo que a bomba levará para encher completamente a cisterna é de:",
        options: [
            "56 minutos.",
            "1 hora e 4 minutos.",
            "1 hora e 24 minutos.",
            "1 hora e 36 minutos.",
            "1 hora e 40 minutos."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). 1 min e 20 seg = 80 segundos. Vazão = 100 litros / 80 s = 1,25 L/s. Tempo total = 7200 L / 1,25 L/s = 5760 segundos. Dividindo por 60, temos 96 minutos, o que equivale a 1 hora e 36 minutos."
    },
    {
        topic: "Lógica Sentencial (Negação Lógica)",
        supportText: "Visitando certa cidade, João afirmou que:\n“Todos os táxis desta cidade são brancos”.",
        q: "A negação lógica da afirmação de João é:",
        options: [
            "Nenhum táxi desta cidade é branco.",
            "Todos os táxis desta cidade são amarelos.",
            "Os táxis desta cidade possuem diversas cores.",
            "Pelo menos um táxi desta cidade é amarelo.",
            "Pelo menos um táxi desta cidade não é branco."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). A negação do quantificador universal ('Todos') faz-se com o quantificador existencial ('Pelo menos um', 'Algum' ou 'Existe') acompanhado da negação do predicado. Logo, 'Pelo menos um táxi não é branco'."
    }
];

const banco_legis_mppe = [
    {
        topic: "Princípios Institucionais do Ministério Público",
        supportText: "",
        q: "De acordo com a Lei Orgânica do Ministério Público (Lei nº 8.625/1993 e LC Estadual nº 12/1994), são princípios institucionais do Ministério Público:",
        options: [
            "a hierarquia administrativa, a subordinação ao Poder Judiciário e a vitaliciedade.",
            "a unidade, a indivisibilidade e a independência funcional.",
            "a oralidade, a concentração dos atos e a inércia jurisdicional.",
            "a autotutela, a vinculação ao Poder Executivo e a impessoalidade.",
            "a divisibilidade, a delegabilidade irrestrita e o sigilo absoluto."
        ],
        answer: 1,
        disclaimer: "Conforme o art. 127, § 1º da CF/88 e o art. 1º, parágrafo único da LONMP/LOMPPE, são princípios institucionais do MP a unidade, a indivisibilidade e a independência funcional."
    },
    {
        topic: "Órgãos da Administração Superior do MPPE",
        supportText: "",
        q: "Segundo a Lei Complementar Estadual nº 12/1994 (Lei Orgânica do MPPE), NÃO constitui órgão da Administração Superior do Ministério Público, sendo classificado como órgão de execução:",
        options: [
            "a Procuradoria-Geral de Justiça.",
            "o Colégio de Procuradores de Justiça.",
            "o Conselho Superior do Ministério Público.",
            "a Corregedoria-Geral do Ministério Público.",
            "os Promotores de Justiça."
        ],
        answer: 4,
        disclaimer: "Os Promotores de Justiça (assim como os Procuradores de Justiça, o PGJ e o Conselho Superior em certas matérias) são órgãos de execução. A Administração Superior compõe-se da PGJ, Colégio de Procuradores, Conselho Superior e Corregedoria-Geral."
    },
    {
        topic: "Garantias e Vedações dos Membros do MP",
        supportText: "",
        q: "Aos membros do Ministério Público é constitucionalmente e legalmente vedado:",
        options: [
            "exercer o magistério público ou privado, ainda que haja compatibilidade de horários.",
            "exercer a advocacia e receber, a qualquer título e sob qualquer pretexto, honorários, percentagens ou custas processuais.",
            "instaurar inquérito civil e promover a ação civil pública.",
            "requisitar diligências investigatórias e a instauração de inquérito policial.",
            "gozar de inamovibilidade, salvo por motivo de interesse público."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 128, § 5º, II da CF/88 e da Lei Orgânica do MP, é vedado aos membros do MP receber honorários, percentagens ou custas processuais, bem como exercer a advocacia."
    },
    {
        topic: "Conselho Superior do Ministério Público",
        type: "vf",
        supportText: "",
        q: "Compete ao Conselho Superior do Ministério Público rever o arquivamento de inquérito civil ou de peças de informação, na forma da lei.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A homologação ou rejeição da promoção de arquivamento de inquérito civil é atribuição típica do Conselho Superior do Ministério Público (art. 30 da Lei nº 8.625/1993)."
    },
    {
        topic: "Corregedoria-Geral do MP",
        type: "vf",
        supportText: "",
        q: "A Corregedoria-Geral do Ministério Público é o órgão orientador e fiscalizador das atividades funcionais e da conduta dos membros do Ministério Público, sendo o Corregedor-Geral eleito pelo Colégio de Procuradores de Justiça dentre os Procuradores de Justiça.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O Corregedor-Geral é eleito pelo Colégio de Procuradores de Justiça dentre os integrantes da segunda instância (Procuradores de Justiça) para mandato de dois anos."
    },
    {
        topic: "Lei Orgânica Nacional do MP (Garantias)",
        supportText: "",
        q: "Clara é Promotora de Justiça. Diante dessa informação, com base na Lei Orgânica Nacional do Ministério Público (Lei Federal nº 8.625/1993), é correto afirmar que", //[cite: 14]
        options: [
            "Clara poderá ter revista sua remuneração através e na forma que a lei federal dispuser.",
            "Clara terá o vencimento fixado com diferença não excedente a quinze por cento de uma para outra entrância ou categoria.",
            "Clara está sujeita a regime jurídico especial e tem, entre outras, a garantia da inamovibilidade, salvo por motivo de interesse público.",
            "Clara poderá usufruir de dez dias de licença após contrair casamento.",
            "Clara possui como prerrogativa, no exercício de sua função, promover inspeções e diligências investigatórias junto às autoridades, órgãos e entidades, após autorização do Procurador-Geral de Justiça."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 38, II, da LONMP (Lei nº 8.625/93), os membros do MP gozam da garantia de inamovibilidade, salvo por motivo de interesse público, mediante decisão do órgão colegiado competente." //[cite: 14]
    },
    {
        topic: "Código de Ética do Ministério Público (CNMP)",
        supportText: "",
        q: "A Resolução nº 261/2023, do Conselho Nacional do Ministério Público (CNMP), instituiu o Código de Ética do Ministério Público brasileiro. Com base na citada resolução, assinale a alternativa correta.", //[cite: 14]
        options: [
            "Não configura ato atentatório ao decoro do cargo e à dignidade das funções institucionais conduta do membro do Ministério Público que caracterize tratamento injusto ou arbitrário em face de determinada pessoa.",
            "Considera-se atividade político-partidária exercida pelo membro do Ministério Público a prática de atos de apoio público e direto a determinado candidato ou partido político.",
            "A integridade de conduta do membro do Ministério Público, realizada fora do âmbito da atividade funcional, não é pertinente para a contribuição da fundada confiança dos cidadãos na Instituição.",
            "Não é dever do membro do Ministério Público zelar pela razoável duração dos processos judiciais sob sua responsabilidade, considerando que eles tramitam sob a gerência do Poder Judiciário.",
            "O membro do Ministério Público não exercerá atividade empresarial, ainda que na condição de acionista ou cotista, mesmo que não seja o controlador ou gerente."
        ],
        answer: 1,
        disclaimer: "O Código de Ética do MP (Res. 261/2023) veda expressamente a manifestação de apoio público a candidatos ou partidos, caracterizando atividade político-partidária. O membro do MP pode ser acionista ou cotista de empresa, desde que não atue na administração/gerência." //[cite: 14]
    },
    {
        topic: "Lei Orgânica Nacional do MP (Organização)",
        supportText: "",
        q: "A respeito da Lei Orgânica Nacional do Ministério Público, é correto afirmar que é órgão da Administração Superior do Ministério Público", //[cite: 15]
        options: [
            "Centro de Apoio Operacional.",
            "Órgão de Apoio Administrativo.",
            "Corregedoria-Geral do Ministério Público.",
            "Centro de Estudos e Aperfeiçoamento Funcional.",
            "Comissão de Concurso Público."
        ],
        answer: 2,
        disclaimer: "São órgãos da Administração Superior do MP (art. 12 a 17 da LONMP): a Procuradoria-Geral de Justiça, o Colégio de Procuradores, o Conselho Superior do MP e a Corregedoria-Geral." //[cite: 15]
    },
    {
        topic: "Conselho Nacional do Ministério Público (CNMP)",
        supportText: "",
        q: "No que concerne ao Conselho Nacional do Ministério Público (CNMP), assinale a alternativa correta.", //[cite: 15]
        options: [
            "O CNMP é composto por quinze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Congresso Nacional.",
            "O CNMP é composto por quinze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal.",
            "O CNMP é composto por quatorze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Congresso Nacional.",
            "O CNMP é composto por quinze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria relativa do Senado Federal.",
            "O CNMP é composto por quatorze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal."
        ],
        answer: 1,
        disclaimer: "Conforme o art. 130-A da Constituição Federal, o CNMP compõe-se de 15 membros nomeados pelo Presidente da República, após aprovação da escolha pela maioria absoluta do Senado Federal, para mandato de dois anos." //[cite: 15]
    },
    {
        topic: "Disposições Constitucionais sobre o MP",
        supportText: "Acerca das disposições constitucionais sobre o Ministério Público, informe se é verdadeiro (V) ou falso (F) o que se afirma a seguir:\n( ) O Ministério Público elaborará sua proposta orçamentária dentro dos limites estabelecidos na lei orçamentária anual.\n( ) Os Procuradores-Gerais nos Estados e no Distrito Federal e Territórios poderão ser destituídos por deliberação da maioria absoluta do Poder Legislativo, na forma da lei complementar respectiva.\n( ) Ressalvada a forma de investidura, aos membros do Ministério Público junto aos Tribunais de Contas aplicam-se as mesmas disposições constitucionais aplicadas aos demais membros do Ministério Público, inclusive quanto aos direitos e às vedações.\n( ) A destituição do Procurador-Geral da República, por iniciativa do Presidente da República, deverá ser precedida de autorização da maioria absoluta do Senado Federal.", //[cite: 17]
        q: "Assinale a alternativa com a sequência correta.", //[cite: 17]
        options: [
            "F - F - V - F.",
            "V - F - V - F.",
            "V - V - F - F.",
            "F - F - V - V.",
            "F - V - F - V."
        ],
        answer: 4,
        disclaimer: "Item I é falso (os limites são fixados na Lei de Diretrizes Orçamentárias - LDO, e não na LOA). Item III é falso porque a CF não ressalva a forma de investidura (Art. 130: 'aplicam-se as disposições [...] pertinentes a direitos, vedações e forma de investidura'). Sequência: F, V, F, V." //[cite: 17]
    },
    {
        topic: "Política Nacional do Ministério Público Digital",
        supportText: "",
        q: "Assinale a alternativa correta no que diz respeito à Resolução nº 276/2023, do Conselho Nacional do Ministério Público, que dispõe sobre a Política Nacional do Ministério Público Digital.", //[cite: 18]
        options: [
            "Os ramos e unidades do Ministério Público que fizerem uso dos dados disponibilizados na Plataforma não serão responsáveis pelo registro de sua origem e preservação de sua segurança e qualidade.",
            "O Manual do MP Digital será objeto de revisão, sempre que houver necessidade, mediante alteração da Resolução nº 276/2023, após parecer do Comitê Gestor do MP Digital sobre o mérito.",
            "Caberá ao Comitê Gestor do MP Digital a elaboração do Manual do MP Digital, a ser finalizado no prazo máximo de um ano, respeitadas as informações mínimas solicitadas na Resolução nº 276/2023.",
            "O Catálogo de Soluções Digitais reunirá informações sobre as soluções tecnológicas implementadas e utilizadas, excluídas as soluções tecnológicas ainda em desenvolvimento em cada ramo ou unidade do Ministério Público.",
            "Será dispensada a celebração de convênio, acordo de cooperação técnica ou instrumento congênere para compartilhamento de dados e serviços de integração entre os ramos e unidades do Ministério Público que tiverem aderido à Plataforma MP Digital."
        ],
        answer: 4,
        disclaimer: "No âmbito da desburocratização digital promovida pelo CNMP, a adesão à Plataforma MP Digital já supre a necessidade de convênios bilaterais para o compartilhamento e integração de dados entre os MPs." //[cite: 18]
    },
    {
        topic: "Órgãos do Ministério Público",
        type: "vf",
        supportText: "",
        q: "Ao Colégio de Procuradores de Justiça, composto por todos os procuradores de justiça, compete julgar recurso contra decisão de vitaliciamento de membro do Ministério Público e decisão condenatória em procedimento administrativo disciplinar.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Nos termos da Lei nº 8.625/1993 (LONMP), o Conselho Superior é quem decide o vitaliciamento e aplica as penas disciplinares originariamente, cabendo ao Colégio de Procuradores o julgamento dos eventuais recursos contra essas decisões (art. 12, X e XI)." //[cite: 25]
    },
    {
        topic: "Garantias Institucionais (Prisão de Membro do MP)",
        type: "vf",
        supportText: "",
        q: "Membro do Ministério Público somente poderá ser preso por ordem judicial escrita, salvo no caso de flagrante pela prática de crime inafiançável, hipótese em que a autoridade deverá, no prazo máximo de 24 horas, realizar a comunicação da prisão e apresentar o membro do Ministério Público ao procurador-geral de justiça.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "É a literalidade da prerrogativa estampada no art. 40, inciso III, da Lei Orgânica Nacional do Ministério Público (Lei nº 8.625/1993)." //[cite: 25]
    }
];

const banco_const = [
    {
        topic: "Direitos e Garantias Fundamentais (Art. 5º da CF/88)",
        supportText: "",
        q: "Acerca dos direitos e deveres individuais e coletivos previstos no artigo 5º da Constituição Federal de 1988, assinale a alternativa correta:",
        options: [
            "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante a noite, por determinação judicial.",
            "É plena a liberdade de associação para fins lícitos, inclusive a de caráter paramilitar.",
            "As associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso (dissolução compulsória), o trânsito em julgado.",
            "A prática do racismo constitui crime afiançável e imprescritível, sujeito à pena de detenção.",
            "Conceder-se-á habeas data sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 5º, XIX da CF/88, a suspensão de atividades de associação exige decisão judicial, mas a dissolução compulsória exige decisão judicial transitada em julgado. (Mandado judicial domiciliar só durante o dia; racismo é inafiançável e sujeito a reclusão)."
    },
    {
        topic: "Administração Pública Constitucional (Art. 37 da CF/88)",
        supportText: "",
        q: "Segundo as disposições constitucionais sobre a Administração Pública (art. 37 da CF/88), é correto afirmar que:",
        options: [
            "o prazo de validade do concurso público será de até quatro anos, prorrogável uma vez, por igual período.",
            "os cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento, devendo ser preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei.",
            "é permitida a acumulação remunerada de três cargos públicos de professor, desde que haja compatibilidade de horários.",
            "a proibição de acumular cargos estende-se apenas à administração direta, não alcançando as sociedades de economia mista e empresas públicas.",
            "as funções de confiança podem ser exercidas por pessoas estranhas ao quadro efetivo da Administração."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 37, V da CF/88, as funções de confiança são exclusivas de servidores ocupantes de cargo efetivo, e os cargos em comissão (livre nomeação e exoneração) devem observar percentuais mínimos para servidores de carreira, destinando-se apenas à direção, chefia e assessoramento."
    },
    {
        topic: "Poder Judiciário e Conselho Nacional de Justiça (CNJ)",
        supportText: "",
        q: "A respeito do Conselho Nacional de Justiça (CNJ), nos termos do art. 103-B da Constituição Federal, assinale a alternativa correta:",
        options: [
            "O CNJ exerce jurisdição em todo o território nacional e pode reformar sentenças judiciais de mérito proferidas por juízes estaduais.",
            "Compete ao CNJ o controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes.",
            "O CNJ é presidido pelo Ministro mais antigo do Superior Tribunal de Justiça (STJ).",
            "Junto ao CNJ oficiará apenas o Advogado-Geral da União, sem participação do Procurador-Geral da República.",
            "O CNJ pode determinar a perda do cargo de magistrado vitalício independentemente de sentença judicial transitada em julgado."
        ],
        answer: 1,
        disclaimer: "O CNJ é órgão do Poder Judiciário com atuação estritamente administrativa, financeira e disciplinar (art. 103-B, § 4º da CF/88), não possuindo competência jurisdicional. É presidido pelo Presidente do STF."
    },
    {
        topic: "Tratados Internacionais de Direitos Humanos",
        type: "vf",
        supportText: "",
        q: "Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. É a literalidade do art. 5º, § 3º da CF/88 (incluído pela EC nº 45/2004). Caso não passem por esse rito qualificado, possuem status supralegal (STF)."
    },
    {
        topic: "Defensoria Pública na Constituição",
        type: "vf",
        supportText: "",
        q: "Às Defensorias Públicas Estaduais e da União são asseguradas autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária dentro dos limites estabelecidos na lei de diretrizes orçamentárias.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O art. 134, §§ 2º e 3º da CF/88 assegura expressamente a autonomia funcional, administrativa e a iniciativa orçamentária às Defensorias Públicas."
    },
    {
        topic: "Poder Judiciário e Funções Essenciais à Justiça",
        type: "vf",
        supportText: "",
        q: "São princípios institucionais do Ministério Público a pluralidade, a diversidade e a independência funcional.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Os princípios institucionais do Ministério Público (art. 127, § 1º, da CF) são a unidade, a indivisibilidade e a independência funcional."
    },
    {
        topic: "Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "O Supremo Tribunal Federal (STF) e os demais tribunais superiores têm jurisdição apenas na capital federal.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O STF e os tribunais superiores têm sede na capital federal, mas a sua jurisdição abrange todo o território nacional (art. 92, § 1º, da CF)."
    },
    {
        topic: "Servidores Públicos",
        type: "vf",
        supportText: "",
        q: "O servidor que possa ser submetido à readaptação não tem direito subjetivo à aposentadoria por incapacidade.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Conforme o art. 37, § 13, da CF, o servidor será mantido neste cargo até que seja julgado apto para a readaptação, sendo a aposentadoria por incapacidade permanente a última rácio."
    },
    {
        topic: "Competências do Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "Compete ao Supremo Tribunal Federal (STF) julgar os mandados de segurança impetrados contra ato de ministro de Estado.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O julgamento de mandado de segurança contra ato de Ministro de Estado é competência originária do Superior Tribunal de Justiça (STJ), conforme o art. 105, I, 'b', da CF."
    },
    {
        topic: "Competências do Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "Compete aos tribunais regionais federais julgar, em grau de recurso, as causas decididas pelos juízes estaduais no exercício da competência federal da área de sua jurisdição.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É a literalidade do art. 108, II, da CF/88."
    },
    {
        topic: "Direitos Políticos",
        type: "vf",
        supportText: "",
        q: "É possível, de acordo com o texto constitucional, que um cidadão preencha as condições de elegibilidade para ser vereador, mas não as condições de elegibilidade para ser deputado federal.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A idade mínima para vereador é de 18 anos, enquanto para deputado federal é de 21 anos (art. 14, § 3º, VI, da CF)."
    },
    {
        topic: "Direitos e Garantias Fundamentais",
        type: "vf",
        supportText: "",
        q: "A CF admite a pena de morte em caso de guerra declarada.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos do art. 5º, XLVII, 'a', da Constituição Federal, não haverá penas de morte, salvo em caso de guerra declarada."
    },
    {
        topic: "Nacionalidade e Direitos Políticos",
        type: "vf",
        supportText: "",
        q: "A CF trata de forma igual os brasileiros natos e naturalizados.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O art. 5º, § 2º, veda distinções entre brasileiros natos e naturalizados, mas estabelece exceções expressas na própria Constituição (ex: cargos privativos, extradição)."
    },
    {
        topic: "Direito Constitucional (Aplicabilidade das Normas)",
        supportText: "Foi submetido a um advogado da DATAPREV a situação a seguir.\nA Emenda Constitucional nº X (ECX) veiculou um direito fundamental de segunda dimensão em norma de natureza programática, norma esta que versa sobre a temática submetida à apreciação do referido advogado no Processo Administrativo Y, o que exigia um posicionamento em relação aos efeitos que seriam produzidos.",
        q: "Ao analisar o caso, o advogado da DATAPREV concluiu corretamente que a ECX",
        options: [
            "carece de regulamentação pela legislação infraconstitucional para que produza algum efeito.",
            "tem eficácia plena e aplicabilidade imediata, na medida em que consagra direito fundamental.",
            "pode ser considerada no caso concreto, mas apenas em conjunto com outra norma constitucional.",
            "influi na interpretação das demais normas constitucionais e na recepção da legislação preexistente, independentemente de regulamentação.",
            "produz a plenitude dos seus efeitos, independentemente de regulamentação, pois tem por objeto direito fundamental de segunda dimensão."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Normas programáticas possuem eficácia limitada, mas possuem eficácia jurídica imediata negativa (paralisante) e interpretativa. Elas servem de vetor de interpretação e impedem a recepção de normas infraconstitucionais contrárias, mesmo sem regulamentação."
    },
    {
        topic: "Poder Judiciário e Funções Essenciais",
        supportText: "Em determinado Mandado de Segurança, processado e julgado originariamente pela 2ª Turma do Tribunal Regional Federal da Região X, a ordem foi denegada sob o argumento de que a Lei federal nº Y/1981 foi recepcionada pela Constituição de 1988 e que uma interpretação conforme não amparava a tese do impetrante. O impetrante ficou irresignado com o teor do acórdão.",
        q: "Na situação descrita, é correto afirmar que é cabível",
        options: [
            "Reclamação, a ser julgada pelo Supremo Tribunal Federal.",
            "Recurso Especial, a ser julgado pelo Superior Tribunal de Justiça.",
            "Recurso Ordinário, a ser julgado pelo Superior Tribunal de Justiça.",
            "Mandado de Segurança, a ser julgado pelo Supremo Tribunal Federal.",
            "Recurso de Fundamentação Vinculada, a ser julgado pelo Supremo Tribunal Federal."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Nos termos do art. 105, II, 'b', da Constituição Federal, compete ao Superior Tribunal de Justiça (STJ) julgar em recurso ordinário (RO) os mandados de segurança decididos em única instância pelos Tribunais Regionais Federais quando a decisão for denegatória."
    },
    {
        topic: "Organização do Estado (Repartição de Competências e Receitas)",
        supportText: "Foi apresentada proposta, no âmbito do governo federal, na qual se sugeriu o encaminhamento de projeto de lei, pelo Chefe do Poder Executivo, visando à consolidação das ações governamentais na área de assistência social.\nA proposta, a ser reproduzida no projeto, tinha três diretrizes estruturais:\nI. utilização de recursos da seguridade social;\nII. centralização político-administrativa; e\nIII. vedação de vinculação, pelos estados e pelo Distrito Federal, de percentual da receita tributária líquida a programas de promoção social.\nUm grupo de trabalho constituído especialmente para esse fim analisou a proposta e concluiu, corretamente, em relação à conformidade constitucional das três diretrizes, que",
        q: "Das diretrizes analisadas,",
        options: [
            "apenas a diretriz I é constitucional.",
            "apenas as diretrizes I e II são constitucionais.",
            "apenas as diretrizes I e III são constitucionais.",
            "apenas as diretrizes II e III são constitucionais.",
            "todas são constitucionais."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). A diretriz II é inconstitucional pois a CF estabelece a DESCENTRALIZAÇÃO político-administrativa da assistência social (Art. 204, I). A III é inconstitucional pois a CF PERMITE (e não veda) aos Estados vincular até 0,5% de sua receita tributária líquida a programas de inclusão social (Art. 204, parágrafo único)."
    }
];

const banco_adm = [
    {
        topic: "Atos Administrativos (Atributos e Extinção)",
        type: "multipla",
        supportText: "",
        q: "Quando a Administração Pública retira do mundo jurídico um ato administrativo válido e legítimo por motivos de conveniência e oportunidade, respeitando os direitos adquiridos e produzindo efeitos prospectivos (ex nunc), ocorre a:",
        options: [
            "Anulação.",
            "Revogação.",
            "Cassação.",
            "Caducidade.",
            "Convalidação."
        ],
        answer: 1,
        disclaimer: "A revogação recai sobre atos válidos e discricionários que se tornaram inconvenientes ou inoportunos (efeitos ex nunc). A anulação recai sobre atos ilegais (efeitos ex tunc)."
    },
    {
        topic: "Nova Lei de Licitações (Lei nº 14.133/2021)",
        type: "multipla",
        supportText: "",
        q: "De acordo com a Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos), são modalidades de licitação previstas na referida norma, EXCETO:",
        options: [
            "Pregão.",
            "Concorrência.",
            "Diálogo Competitivo.",
            "Tomada de Preços.",
            "Leilão."
        ],
        answer: 3,
        disclaimer: "A Lei nº 14.133/2021 extinguiu as modalidades Tomada de Preços e Convite (bem como o RDC), mantendo 5 modalidades: Pregão, Concorrência, Concurso, Leilão e a novidade Diálogo Competitivo (art. 28)."
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992 atualizada)",
        type: "multipla",
        supportText: "",
        q: "Com base na Lei de Improbidade Administrativa (Lei nº 8.429/1992, com a redação dada pela Lei nº 14.230/2021), assinale a alternativa correta:",
        options: [
            "Os atos de improbidade administrativa que causam prejuízo ao erário admitem a modalidade culposa em casos de imprudência grave.",
            "Configura-se o ato de improbidade administrativa exclusivamente mediante a comprovação de conduta dolosa com fim de obter proveito ou benefício indevido, não mais existindo a modalidade culposa.",
            "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, basta para configurar responsabilidade objetiva por improbidade.",
            "As sanções de improbidade prescrevem em 20 anos a contar da posse do agente público.",
            "A ação de improbidade administrativa comporta transação, exceto por meio de acordo de não persecução cível."
        ],
        answer: 1,
        disclaimer: "A reforma promovida pela Lei nº 14.230/2021 extinguiu a modalidade culposa em todas as espécies de atos de improbidade administrativa (arts. 9º, 10 e 11), exigindo sempre o dolo específico."
    },
    {
        topic: "Responsabilidade Civil do Estado",
        type: "vf",
        supportText: "",
        q: "Nos termos do art. 37, § 6º da Constituição Federal, as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O Estado e as prestadoras de serviços públicos respondem objetivamente (Teoria do Risco Administrativo) perante terceiros, cabendo ação regressiva subjetiva (mediante dolo ou culpa) contra o agente causador."
    },
    {
        topic: "Poderes da Administração Pública",
        type: "vf",
        supportText: "",
        q: "O Poder de Polícia administrativo possui como atributos a discricionariedade, a autoexecutoriedade e a coercibilidade, sendo que a autoexecutoriedade está presente em absolutamente todos os atos de polícia, inclusive na cobrança forçada de multas não pagas sem necessidade de execução fiscal.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Embora a autoexecutoriedade seja atributo do poder de polícia, ela não está presente em todos os atos: a cobrança coativa de multas administrativas não pagas exige intervenção do Poder Judiciário (execução fiscal)."
    },
    {
        topic: "Poderes da Administração Pública",
        type: "multipla",
        supportText: "",
        q: "O Município Beta editou ato normativo da espécie 'resolução' visando ordenar, reorganizar e coordenar o bom funcionamento dos serviços prestados pelos servidores de determinado órgão público. À luz do direito administrativo, é correto afirmar que o ato deriva do poder",
        options: [
            "hierárquico.",
            "regulamentar.",
            "normativo.",
            "disciplinar.",
            "discricionário."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). A organização e coordenação interna do funcionamento dos serviços públicos decorrem do poder hierárquico."
    },
    {
        topic: "Atos Administrativos",
        type: "vf",
        supportText: "",
        q: "O motivo do ato administrativo discricionário está sujeito a controle jurisdicional.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O Poder Judiciário pode analisar a legalidade e a veracidade dos motivos declarados pela administração (Teoria dos Motivos Determinantes)."
    },
    {
        topic: "Improbidade Administrativa",
        type: "multipla",
        supportText: "",
        q: "Acerca da Lei de Improbidade Administrativa (Lei nº 8.429/1992), assinale a alternativa correta.",
        options: [
            "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, não é capaz de afastar a responsabilidade por ato de improbidade administrativa.",
            "Por possuir um regramento próprio, a lei de improbidade administrativa não garante a aplicação dos princípios constitucionais do direito administrativo sancionador.",
            "Consideram-se atos de improbidade administrativa as condutas dolosas ou culposas tipificadas nos arts. 9º, 10 e 11 da lei de improbidade administrativa, ressalvados os tipos previstos em leis especiais.",
            "A responsabilidade sucessória prevista na lei de improbidade administrativa não é cabível quando decorrer de sucessão provocada por meio de fusão ou cisão societária.",
            "As disposições da lei de improbidade administrativa são aplicáveis, no que couber, àquele que, mesmo não sendo agente público, induzir ou concorrer dolosamente para a prática do ato de improbidade."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). As disposições da LIA são aplicáveis a quem, mesmo não sendo agente público, induza ou concorra dolosamente para a prática do ato (art. 3º)."
    },
    {
        topic: "Processo Administrativo",
        type: "vf",
        supportText: "",
        q: "O princípio da gratuidade do processo administrativo proíbe a cobrança de despesas processuais, ressalvadas as previstas em lei.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos da Lei nº 9.784/1999 (art. 2º, parágrafo único, XI), é proibida a cobrança de despesas processuais, ressalvadas as previstas em lei."
    },
    {
        topic: "Organização da Administração Pública",
        type: "vf",
        supportText: "",
        q: "Sob o aspecto subjetivo da administração pública estatal, o MPCE, como instituição permanente essencial à função jurisdicional do Estado, integra a administração indireta.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O Ministério Público é um órgão independente (desprovido de personalidade jurídica própria), não integrando nem a administração direta submetida ao Executivo nem a indireta."
    },
    {
        topic: "Atos Administrativos",
        type: "vf",
        supportText: "",
        q: "O ato administrativo por meio do qual os órgãos consultivos da administração emitem opinião sobre assuntos técnicos de sua competência denomina-se parecer.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O parecer é, de facto, o ato enunciativo pelo qual os órgãos consultivos se pronunciam tecnicamente."
    },
    {
        topic: "Licitações (Lei nº 14.133/2021)",
        type: "vf",
        supportText: "",
        q: "Leilão é a modalidade de licitação para a alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance, podendo ser executado por leiloeiro oficial ou por servidor designado pela autoridade competente da administração.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Trata-se da definição legal da modalidade Leilão prevista no art. 6º, XL, e art. 31, § 1º, da Nova Lei de Licitações (Lei 14.133/2021)."
    },
    {
        topic: "Licitações e Contratos",
        type: "vf",
        supportText: "",
        q: "A autoridade competente para homologar o pregão não poderá revogá-lo por razões de interesse público, por motivo de fato superveniente devidamente comprovado.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A administração tem o poder-dever de revogar a licitação (em qualquer modalidade) por razões de interesse público decorrentes de facto superveniente (art. 71, II, da Lei 14.133/2021)."
    },
    {
        topic: "Poderes Administrativos",
        type: "vf",
        supportText: "",
        q: "O poder hierárquico permite, em caráter excepcional e por motivos relevantes devidamente justificados, a avocação por tempo indeterminado de competência atribuída a órgão hierarquicamente inferior.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A avocação, embora permitida excecionalmente, deve ser sempre TEMPORÁRIA, e nunca por tempo indeterminado (art. 15 da Lei 9.784/1999)."
    },
    {
        topic: "Improbidade Administrativa",
        type: "vf",
        supportText: "",
        q: "Quem induz a prática de ato de improbidade somente poderá ser responsabilizado pela ocorrência do ilícito se for agente público.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O particular (terceiro) que induz ou concorre dolosamente para a prática do ato também responde pela improbidade, conforme o art. 3º da Lei 8.429/1992."
    },
    {
        topic: "Responsabilidade Civil do Estado",
        type: "vf",
        supportText: "",
        q: "A responsabilidade civil das pessoas jurídicas de direito privado prestadoras de serviço público é objetiva em relação a terceiros usuários e não usuários do serviço prestado.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Este é o entendimento pacificado do STF (RE 591874), aplicando-se a responsabilidade objetiva também em relação a terceiros não utilizadores do serviço (ex: peão atropelado por autocarro de transporte público)."
    },
    {
        topic: "Lei de Acesso à Informação (Lei nº 12.527/2011)",
        supportText: "Um cidadão, com mais com 75 anos de idade, solicitou, perante determinado órgão público, informações sobre assunto de interesse público municipal.", //[cite: 22]
        q: "Considerando essa situação e com base na Lei de Acesso à Informação (Lei nº 12.527/2011), é correto afirmar que", //[cite: 22]
        options: [
            "para a obtenção da informação postulada pelo cidadão, vedam-se quaisquer exigências relativas aos motivos determinantes da solicitação, considerando se tratar de informações de interesse público.",
            "sem prejuízo da segurança e da proteção das informações e do cumprimento da legislação aplicável, é obrigatório ao órgão ou entidade oferecer meios para que o próprio requerente possa pesquisar a informação de que necessitar.",
            "em razão da idade do requerente, a Lei de Acesso à Informação lhe garante prioridade no atendimento de sua solicitação, devendo a informação ser prestada em no máximo cinco dias.",
            "no caso de indeferimento de acesso a informações ou às razões da negativa do acesso, poderá o cidadão interpor recurso contra a decisão no prazo de quinze dias a contar da sua ciência.",
            "não sendo possível conceder o acesso imediato à informação disponível, o órgão ou entidade que receber o pedido deverá, em prazo não superior a trinta dias, comunicar data, local e modo para se realizar a consulta, efetuar a reprodução ou obter a certidão."
        ],
        answer: 0,
        disclaimer: "Conforme o art. 10, § 3º, da LAI: 'São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público'." //[cite: 22]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf", // Mantemos o type: "vf" apenas nestas porque o seu código original precisa dele para as opções de "Certo" e "Errado".
        supportText: "",
        q: "O agente público que recebe vantagem econômica para tolerar a prática de contrabando comete ato de improbidade administrativa que causa prejuízo ao erário.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Receber vantagem econômica indevida caracteriza ato de improbidade que importa Enriquecimento Ilícito (art. 9º, I, da LIA), e não dano ao erário (art. 10)." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "Para a configuração de ato de improbidade administrativa que atenta contra os princípios da administração pública, é indispensável que o agente tenha a finalidade de obtenção de proveito indevido para si ou para outrem.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Após a reforma da Lei 14.230/2021, o caput do art. 11 passou a exigir expressamente o dolo com 'o fim de obter proveito ou benefício indevido para si ou para outra pessoa ou entidade'." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "A responsabilidade do sucessor daquele que se enriqueceu ilicitamente está limitada à reparação do valor do patrimônio transferido.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "É a literalidade do art. 8º da LIA: o sucessor ou herdeiro sujeita-se à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "A ação negligente do agente público que resultar em lesão patrimonial ao erário é suficiente para a caracterização da improbidade administrativa.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Com as alterações da Lei nº 14.230/2021, foi extinta a modalidade culposa de improbidade. Exige-se sempre o dolo (vontade livre e consciente de alcançar o resultado ilícito)." //[cite: 25]
    },
    {
        topic: "Controle da Administração Pública (TCU)",
        supportText: "Maria, empregada pública com décadas de atuação na DATAPREV, cumpriu os requisitos de idade e tempo de contribuição exigidos para a aposentadoria voluntária, sendo o benefício previdenciário devidamente requerido e deferido pela estrutura de poder competente.",
        q: "Na situação descrita, em relação à atuação do Tribunal de Contas da União, assinale a afirmativa correta.",
        options: [
            "Deve apreciar, para fins de registro, a legalidade do ato de aposentação.",
            "Não deve apreciar, para fins de registro, o ato de aposentação.",
            "Somente deve apreciar, para fins de registro, o ato de aposentação, caso haja requerimento de qualquer cidadão.",
            "Deve concorrer para o aperfeiçoamento do ato de aposentação, sendo sua decisão condição de eficácia do ato.",
            "Deve apreciar, para fins de registro, o ato de aposentação, caso Maria tenha ocupado cargo em comissão ou função de confiança no âmbito da DATAPREV."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). O STF (Tema 1238) fixou a tese de que o Tribunal de Contas NÃO possui competência para julgar a legalidade, para fins de registro, das concessões de aposentadoria a empregados de empresas públicas e sociedades de economia mista submetidos ao regime geral de previdência (celetistas)."
    },
    {
        topic: "Princípios da Administração Pública",
        supportText: "",
        q: "Acerca do princípio da supremacia do interesse público, assinale a afirmativa correta.",
        options: [
            "O princípio é inerente ao regime jurídico-administrativo, aplicando-se exclusivamente às relações jurídicas submetidas integralmente ao Direito Público.",
            "A identificação do interesse público decorre, em regra, da vontade predominante da coletividade, entendida, portanto, como a expressão dos interesses da maioria.",
            "O princípio autoriza a prevalência dos interesses estatais sobre os interesses particulares, sempre que a medida adotada seja vantajosa para a Administração Pública.",
            "O princípio autoriza a restrição de direitos individuais quando houver fundamento legal e conflito com interesse público, sendo dispensável, nessas hipóteses, a demonstração concreta das razões que justificam a medida adotada.",
            "O princípio consagra a prevalência dos interesses públicos juridicamente reconhecidos sobre os interesses particulares, sem conferir à Administração Pública ou a seus agentes liberdade para definir, criar ou modificar o conteúdo do interesse público segundo critérios de conveniência subjetiva."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). O interesse público é aquele consagrado na lei (interesse primário da coletividade), não se confundindo com a mera vontade subjetiva do administrador público ou vantagens exclusivas da máquina estatal (interesse secundário)."
    },
    {
        topic: "Responsabilidade Civil do Estado",
        supportText: "Um servidor público estadual, durante o intervalo destinado ao almoço, ausentou-se das dependências do órgão em que exercia suas funções para resolver questões relacionadas à matrícula de seu filho em uma instituição de ensino.\nEnquanto conduzia seu veículo particular em via pública, desrespeitou a sinalização de trânsito e atropelou um pedestre, causando-lhe lesões corporais. A vítima ajuizou ação indenizatória em face do Estado, sustentando que o causador do dano era agente público em horário de almoço.",
        q: "Sobre a ação indenizatória apresentada, assinale a afirmativa correta.",
        options: [
            "O Estado responde objetivamente pelos danos causados, pois o servidor encontrava-se dentro do horário regular de expediente quando ocorreu o acidente.",
            "O Estado responde de forma subsidiária, cabendo-lhe indenizar a vítima caso o servidor não possua patrimônio suficiente para reparar integralmente os danos causados.",
            "O Estado não responde pelos danos causados, pois, embora o causador fosse agente público, a conduta lesiva não foi praticada no exercício da função pública nem em razão dela.",
            "O Estado responde objetivamente, uma vez que a condição de agente público do causador do dano é suficiente para atrair a responsabilidade estatal, independentemente das circunstâncias da conduta.",
            "O Estado responde objetivamente, pois o dano foi causado por agente público durante período em que este permanecia funcionalmente vinculado à Administração, sendo irrelevante a finalidade particular do deslocamento."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Para incidir a responsabilidade objetiva do Estado (Art. 37, § 6º, da CF), é imprescindível que o agente tenha atuado na 'qualidade de agente público'. No caso, ele dirigia veículo particular resolvendo problemas estritamente pessoais."
    },
    {
        topic: "Licitações e Contratos",
        supportText: "Uma empresa pública pretende contratar diretamente determinada sociedade empresária para o fornecimento de equipamento destinado à modernização de sua infraestrutura. A área técnica justificou a contratação direta sob o fundamento de que a sociedade empresária indicada é a única representante, no território nacional, da fabricante estrangeira do equipamento pretendido. Para instruir o processo, foi apresentada declaração emitida pela própria fabricante informando que a sociedade empresária é sua representante autorizada no Brasil.\nDurante a instrução, contudo, verificou-se que o equipamento pretendido é produzido segundo especificações técnicas disponíveis no mercado e que a fabricante mantém outros distribuidores independentes no país, embora apenas a sociedade empresária indicada possua autorização para comercializar a marca diretamente. A área técnica sustentou que a preferência pela marca e a autorização formal da fabricante seriam suficientes para caracterizar a inviabilidade de competição.",
        q: "A respeito da contratação direta, assinale a afirmativa correta.",
        options: [
            "É legítima, pois a representação exclusiva da fabricante no Brasil é suficiente para caracterizar a inviabilidade de competição.",
            "É legítima, pois a justificativa técnica para a escolha da marca torna dispensável a demonstração de inviabilidade de competição.",
            "É legítima, desde que a Administração demonstre que a aquisição por meio de representante autorizado oferece condições comerciais mais vantajosas.",
            "Não se justifica, pois as empresas públicas estão obrigadas a realizar licitação para suas contratações, não lhes sendo aplicáveis as hipóteses de inexigibilidade.",
            "Não se justifica pela mera existência de representante autorizado da fabricante, pois a inviabilidade de competição exige demonstração de exclusividade efetiva quanto ao fornecimento do objeto pretendido."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). A inexigibilidade baseia-se na inviabilidade fática e jurídica de competição. Se existem outros distribuidores do mesmo equipamento (sem exclusividade efetiva do objeto), a licitação é viável e exigível."
    },
    {
        topic: "Organização da Administração Pública",
        supportText: "O Estado pretende instituir uma sociedade de economia mista para atuar em determinada atividade de interesse coletivo. Durante a elaboração dos atos necessários à sua instituição, surgiram dúvidas quanto à necessidade de autorização legislativa, à vinculação da entidade às finalidades que justificaram sua criação e à possibilidade de sua extinção.",
        q: "Considerando o regime jurídico aplicável às sociedades de economia mista, assinale a afirmativa correta.",
        options: [
            "É autorizada por lei específica, sendo sua constituição efetivada posteriormente mediante os atos próprios da sociedade, devendo a entidade observar as finalidades que justificaram sua instituição e dependendo sua extinção de autorização legislativa.",
            "É criada diretamente por lei específica, que lhe confere personalidade jurídica e define sua finalidade, sendo dispensável a posterior adoção de atos constitutivos próprios.",
            "Pode ser instituída por ato do Poder Executivo, desde que posteriormente submetida à apreciação do Poder Legislativo, pois a autorização legislativa não precisa ser prévia.",
            "Não está vinculada às finalidades estabelecidas na lei que autorizou sua instituição, por possuir personalidade jurídica de direito privado, podendo alterar livremente seu objeto social por decisão de seus órgãos societários.",
            "Pode ser extinta por deliberação de seus acionistas, independentemente de autorização legislativa, uma vez que sua personalidade jurídica é regida pelo direito privado."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Diferentemente das autarquias (que são criadas DIRETAMENTE por lei), as sociedades de economia mista são apenas AUTORIZADAS por lei. O seu surgimento legal se dá apenas com o registro de seus atos constitutivos no órgão competente."
    },
    {
        topic: "Processo Administrativo",
        supportText: "Acerca do silêncio administrativo e de sua disciplina no Direito Administrativo brasileiro, analise as afirmativas a seguir.\nI. Como regra, o silêncio administrativo não configura ato administrativo, pois não há exteriorização de manifestação de vontade da Administração apta a produzir comandos jurídicos.\nII. Na ausência de disposição legal que atribua efeito específico ao silêncio administrativo, a inércia da Administração após o decurso de prazo legal para decidir pode caracterizar ilegalidade ou abuso de poder, admitindo controle jurisdicional por instrumentos adequados.\nIII. Inexistindo prazo legal para decisão administrativa, o particular permanece desprovido de tutela jurisdicional, uma vez que o silêncio administrativo somente pode ser questionado judicialmente após descumprimento de prazo expressamente previsto em lei.",
        q: "Está correto o que se afirma em",
        options: [
            "I, apenas.",
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). A afirmativa III está errada pois, em virtude do princípio da duração razoável do processo e do dever-poder de decidir, o silêncio desarrazoado pode ser combatido via mandado de segurança mesmo que a lei não fixe prazo numérico exato."
    }
];

const banco_civil = [
    {
        topic: "Lei de Introdução às Normas do Direito Brasileiro (LINDB)",
        type: "multipla",
        supportText: "",
        q: "De acordo com o Decreto-Lei nº 4.657/1942 (LINDB), salvo disposição contrária, a lei começa a vigorar em todo o país:",
        options: [
            "na data exata de sua publicação no Diário Oficial.",
            "trinta dias depois de oficialmente publicada.",
            "quarenta e cinco dias depois de oficialmente publicada.",
            "sessenta dias depois de sancionada pelo Chefe do Executivo.",
            "noventa dias após a promulgação legislativa."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 1º da LINDB, salvo disposição contrária expressa na própria lei, a vacatio legis padrão no território nacional é de 45 (quarenta e cinco) dias após a publicação oficial (e de 3 meses nos Estados estrangeiros quando admitida)."
    },
    {
        topic: "Parte Geral do Código Civil (Defeitos do Negócio Jurídico)",
        type: "multipla",
        supportText: "",
        q: "Segundo o Código Civil (Lei nº 10.406/2002), quando uma pessoa, sob premente necessidade, ou por inexperiência, se obriga a prestação manifestamente desproporcional ao valor da prestação oposta, configura-se o defeito do negócio jurídico denominado:",
        options: [
            "Simulação.",
            "Lesão.",
            "Estado de Perigo.",
            "Fraude contra Credores.",
            "Coação Moral."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 157 do Código Civil, ocorre a Lesão quando uma pessoa, sob premente necessidade ou por inexperiência, assume obrigação manifestamente desproporcional. É causa de anulabilidade do negócio jurídico."
    },
    {
        topic: "Prescrição e Decadência",
        type: "multipla",
        supportText: "",
        q: "A respeito dos institutos da prescrição e da decadência no Código Civil Brasileiro, assinale a alternativa correta:",
        options: [
            "Os prazos prescricionais podem ser livremente alterados por acordo entre as partes contratantes.",
            "A prescrição, quando consumada, extingue a pretensão, e o seu prazo geral ordinário é de 10 (dez) anos quando a lei não lhe haja fixado prazo menor.",
            "A decadência convencional pode ser conhecida de ofício pelo juiz em qualquer grau de jurisdição.",
            "Correm normalmente os prazos de prescrição entre ascendentes e descendentes durante o poder familiar.",
            "A pretensão de reparação civil prescreve em 5 (cinco) anos, conforme o Código Civil."
        ],
        answer: 1,
        disclaimer: "Pelo art. 189 do CC, violado o direito, nasce para o titular a pretensão, a qual se extingue pela prescrição. O prazo geral (art. 205) é de 10 anos, e o de reparação civil no CC (art. 206, § 3º, V) é de 3 anos."
    },
    {
        topic: "Responsabilidade Civil",
        type: "vf",
        supportText: "",
        q: "Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Trata-se da cláusula geral de responsabilidade civil objetiva pelo risco da atividade, expressamente consagrada no art. 927, parágrafo único, do Código Civil."
    },
    {
        topic: "Impenhorabilidade do Bem de Família (Lei nº 8.009/1990)",
        type: "vf",
        supportText: "",
        q: "Segundo entendimento sumulado do Superior Tribunal de Justiça (STJ), o imóvel residencial do devedor que esteja locado a terceiros perde a proteção da impenhorabilidade do bem de família, ainda que a renda obtida com a locação seja revertida para a subsistência ou moradia de sua família.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Pela Súmula 486 do STJ, 'É impenhorável o único imóvel residencial do devedor que esteja locado a terceiros, desde que a renda obtida com a locação seja revertida para a subsistência ou a moradia da sua família'."
    },
    {
        topic: "Bens Públicos e Privados",
        type: "multipla",
        supportText: "",
        q: "Quanto aos bens, na forma disciplinada pelo Código Civil, é correto afirmar que",
        options: [
            "perdem o caráter de imóveis os materiais provisoriamente separados de um prédio, ainda que para nele se reempregar.",
            "o uso comum do bem público não pode ser objeto de retribuição, devendo ser assegurado o uso gratuito.",
            "consideram-se bens imóveis o solo e tudo quanto se lhe incorporar, desde que a incorporação seja por ato voluntário.",
            "é permitida a alienação de bens públicos dominicais, observadas as exigências da lei.",
            "as benfeitorias úteis são as que têm por finalidade conservar o bem ou evitar que se deteriore."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Segundo o art. 101 do CC, os bens públicos dominicais podem ser alienados, observadas as exigências da lei. As benfeitorias que evitam deterioração são necessárias, não úteis."
    },
    {
        topic: "Defeitos do Negócio Jurídico e Invalidade",
        type: "multipla",
        supportText: "",
        q: "Assinale a alternativa correta a respeito dos defeitos dos negócios jurídicos, na forma das disposições do Código Civil.",
        options: [
            "Quando a lei dispuser que determinado ato é anulável, sem estabelecer prazo para pleitear a anulação, este será de dois anos, contados da data do conhecimento do motivo que ensejou o pedido de anulação.",
            "A invalidade do instrumento induz a invalidade do negócio jurídico, ainda que este pudesse provar-se por outro modo.",
            "O falso motivo só vicia a declaração de vontade quando expresso como razão determinante.",
            "O negócio jurídico nulo não é suscetível de confirmação, mas poderá se convalescer pelo decurso do tempo.",
            "É nulo o negócio jurídico celebrado mediante fraude contra credores."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). O art. 140 do CC estabelece que o falso motivo só vicia a declaração de vontade quando expresso como razão determinante."
    },
    {
        topic: "Pessoas Naturais (Ausência)",
        type: "multipla",
        supportText: "",
        q: "Em relação às pessoas naturais, no que concerne à ausência, na forma disciplinada pelo Código Civil, assinale a alternativa correta.",
        options: [
            "Decorridos dez anos da arrecadação dos bens do ausente, poderão os interessados requerer a abertura da sucessão definitiva.",
            "Na falta de cônjuge, a curadoria dos bens do ausente incumbe aos pais ou aos descendentes, sendo que, quanto aos descendentes, os mais velhos precedem os mais novos.",
            "A sentença que determinar a abertura da sucessão provisória produzirá efeitos noventa dias após publicação na imprensa.",
            "Os imóveis do ausente só se poderão alienar, não sendo por desapropriação, ou hipotecar, quando o ordene o juiz, para lhes evitar a ruína.",
            "A abertura da sucessão definitiva também pode ser requerida se comprovado que o ausente contava com setenta e cinco anos de idade e que já se passaram cinco anos desde as últimas notícias dele."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Conforme o art. 25 do CC, o cônjuge do ausente, sempre que não esteja separado de fato, será o seu legítimo curador; em sua falta, a curadoria incumbe aos pais ou descendentes."
    },
    {
        topic: "Prescrição",
        type: "multipla",
        supportText: "",
        q: "De acordo com o Código Civil, assinale a alternativa que apresenta uma pretensão, cuja prescrição ocorre no prazo de 3 (três) anos.",
        options: [
            "A pretensão para receber prestações vencidas de rendas temporárias ou vitalícias.",
            "A pretensão do segurado contra o segurador, ou a deste contra aquele.",
            "A pretensão relativa à tutela, a contar da data da aprovação das contas.",
            "A pretensão do vencedor para haver do vencido o que despendeu em juízo.",
            "A pretensão dos tabeliães dos árbitros e peritos pela percepção dos honorários."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Nos termos do art. 206, § 3º, II, do CC, prescreve em 3 anos a pretensão para receber prestações vencidas de rendas temporárias ou vitalícias."
    },
    {
        topic: "Capacidade e Curatela (Estatuto da Pessoa com Deficiência)",
        type: "vf",
        supportText: "",
        q: "Ao ser submetida à curatela, a pessoa com deficiência adulta apenas poderá ser considerada relativamente capaz, não mais se admitindo o reconhecimento da sua incapacidade absoluta.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Com o Estatuto da Pessoa com Deficiência, os absolutamente incapazes são apenas os menores de 16 anos. A curatela afeta apenas atos de natureza patrimonial e negocial, tornando a pessoa, no máximo, relativamente incapaz."
    },
    {
        topic: "Direito de Família (Alimentos)",
        type: "vf",
        supportText: "",
        q: "A legitimidade ativa do Ministério Público para ajuizar ação de alimentos em proveito de criança ou adolescente exige a demonstração de que o menor esteja em situação de risco, como na hipótese de omissão dos pais ou responsável.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O STJ pacificou (Súmula 594) que o MP tem legitimidade ativa para ajuizar ação de alimentos em proveito de criança/adolescente independentemente da demonstração de situação de risco."
    },
    {
        topic: "Direito do Consumidor e Desconsideração da Personalidade Jurídica",
        type: "vf",
        supportText: "",
        q: "A teoria menor da desconsideração da personalidade jurídica pode ser aplicada quando a personalidade jurídica representar um obstáculo ao ressarcimento de prejuízos causados aos consumidores.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É o texto exato do art. 28, § 5º, do CDC, que consagra a Teoria Menor, bastando o mero obstáculo ao ressarcimento, sem exigir desvio de finalidade ou confusão patrimonial."
    },
    {
        topic: "Direito do Consumidor (Proteção ao Crédito)",
        type: "vf",
        supportText: "",
        q: "A notificação prévia do consumidor acerca do registro do seu nome no cadastro de proteção ao crédito deve ser realizada pessoalmente, fazendo-se necessária a comprovação do envio e da entrega da notificação.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A Súmula 404 do STJ define que é dispensável o Aviso de Recebimento (AR) na carta de comunicação ao consumidor sobre a negativação de seu nome, não sendo exigida notificação pessoal."
    },
    {
        topic: "Direito do Consumidor (Responsabilidade e Prazos)",
        supportText: "Helena adquiriu da concessionária Horizonte um automóvel novo para uso particular.\nNo contrato de adesão, convencionou-se, em separado e mediante sua manifestação expressa, prazo de sessenta dias para o saneamento de eventuais vícios. Cinco meses após a entrega, manifestou-se vício oculto de fabricação. Laudo técnico, reconhecido pela concessionária, concluiu que, em razão da extensão do vício, a substituição das partes comprometidas, embora restabelecesse o funcionamento do veículo, reduziria seu valor de mercado. O problema não decorreu de desgaste normal, acidente ou uso inadequado.\nVinte dias após a manifestação do vício, Helena reclamou comprovadamente à concessionária e exigiu a restituição imediata do preço, mediante devolução do automóvel. A fornecedora recusou o pedido, alegando que havia transcorrido mais de noventa dias da entrega e que, de todo modo, teria direito ao prazo contratual para reparo.",
        q: "Sobre o caso apresentado, à luz do Código de Defesa do Consumidor, assinale a afirmativa correta.",
        options: [
            "O pedido é tempestivo, e Helena pode exigir a restituição imediata, pois a substituição das partes viciadas reduziria o valor do veículo.",
            "O pedido é intempestivo, pois o prazo para reclamar de vício em produto durável começa na entrega, ainda que o problema se manifeste posteriormente.",
            "O pedido é tempestivo, mas a restituição depende do transcurso de sessenta dias, pois a ampliação do prazo foi expressamente convencionada em separado.",
            "O pedido é intempestivo, pois o prazo de sessenta dias convencionado para saneamento também limita o período para reclamar de vícios, contado da entrega.",
            "O pedido é tempestivo, mas a possibilidade de restabelecer o funcionamento limita Helena ao abatimento do preço correspondente à desvalorização decorrente do reparo."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Em se tratando de vício oculto, o prazo decadencial de 90 dias (bens duráveis) inicia-se no momento em que ficar evidenciado o defeito (Art. 26, § 3º). Além disso, o consumidor pode exigir a restituição IMEDIATA quando a substituição das partes viciadas comprometer as características ou o valor do produto (Art. 18, § 3º do CDC)."
    },
    {
        topic: "Contratos (Resolução por Onerosidade Excessiva)",
        supportText: "A sociedade empresária Alfa Componentes Ltda. vendeu para Horizonte Equipamentos S.A. um lote de componentes industriais, com entrega prevista para oito meses depois. A compradora pagou integralmente o preço na celebração do contrato.\nAntes da entrega, acontecimento extraordinário e imprevisível, estranho aos riscos ordinários do negócio, elevou drasticamente o custo de produção. A prova técnica demonstrou que o cumprimento permanecia possível, mas se tornara excessivamente oneroso para Alfa, com extrema vantagem para Horizonte.\nAlfa ajuizou ação de resolução contratual. Citada, Horizonte ofereceu complementação do preço em montante que, conforme a prova produzida, restabeleceria equitativamente as condições do contrato.\nAlfa rejeitou a proposta, sustentando que o ajuizamento da ação lhe assegurava o direito de extinguir o vínculo. Alegou, ainda, que o pagamento antecipado tornara o contrato unilateral, por restar apenas sua obrigação de entregar os componentes.",
        q: "Nesse contexto, considerando o disposto no Código Civil, assinale a afirmativa correta.",
        options: [
            "A resolução deve ser decretada diante da recusa da autora, pois a modificação equitativa depende de sua concordância após o ajuizamento.",
            "A resolução é incabível enquanto o cumprimento permanecer possível, pois a elevação do custo somente autoriza a alteração do modo de execução.",
            "A resolution pode ser evitada pela oferta de modificação equitativa, pois o pagamento antecipado não transforma o contrato bilateral em unilateral.",
            "A resolução, se decretada, retroage ao acontecimento extraordinário, pois esse é o momento em que surge o desequilíbrio entre as prestações.",
            "A resolução deve ceder à redução da prestação pelo regime dos contratos unilaterais, pois o pagamento extinguiu a reciprocidade originária das obrigações."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Nos termos do art. 479 do Código Civil, a resolução por onerosidade excessiva pode ser evitada se o réu se oferecer para modificar equitativamente as condições do contrato. Ademais, o pagamento prévio não muda a essência sinalagmática e bilateral do contrato de compra e venda."
    },
    {
        topic: "Personalidade e Capacidade",
        supportText: "Catarina tem 15 anos e cursa o Ensino Médio. Elias tem 17 anos e acabou de colar grau na faculdade de Física. Sandro, 17 anos, casou-se civilmente com Lorena, de 18 anos, devidamente autorizado por seus pais.",
        q: "Com base nos dados hipotéticos apresentados, no que concerne à capacidade de exercício, Catarina, Elias e Sandro podem ser considerados, respectivamente,",
        options: [
            "absolutamente incapaz, relativamente incapaz e relativamente incapaz.",
            "absolutamente incapaz, absolutamente capaz e absolutamente capaz.",
            "relativamente incapaz, absolutamente capaz e absolutamente incapaz.",
            "relativamente incapaz, absolutamente incapaz e absolutamente capaz.",
            "absolutamente capaz, relativamente incapaz e absolutamente incapaz."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). Catarina (15) é menor de 16 anos (absolutamente incapaz - Art. 3º). Elias (17, colou grau superior) e Sandro (17, casado) atingiram a emancipação legal automática (Art. 5º, parágrafo único, incisos II e IV), tornando-se absolutamente capazes."
    },
    {
        topic: "Ausência e Morte Presumida",
        supportText: "Em março de 2025, um grave acidente de barco ocorreu durante uma tempestade no litoral do Rio de Janeiro. Nele estavam presentes João (25 anos), sua esposa, Ana (22 anos, grávida de 7 meses), o irmão de João, Pedro (17 anos, emancipado), e o tio de Ana, Carlos (50 anos). Todos desapareceram no mar, e os corpos não foram localizados após extensas buscas realizadas por autoridades marítimas e familiares durante mais de seis meses.\nA família de João e Pedro ingressou em juízo para requerer a abertura da sucessão definitiva. Já a família de Ana pleiteou judicialmente o reconhecimento da morte presumida dela.",
        q: "Considerando os fatos narrados e a legislação aplicável, assinale a afirmativa correta.",
        options: [
            "Como todos desapareceram no mesmo acidente e não foi possível verificar quem faleceu primeiro, presume-se que morreram simultaneamente, autorizando a direta e imediata abertura da sucessão definitiva.",
            "A morte presumida de João, Ana, Pedro e Carlos somente poderá ser declarada após dois anos do desaparecimento no mar, nos termos aplicáveis aos desaparecidos em campanha.",
            "A morte presumida de João, Ana, Pedro e Carlos poderá ser declarada desde já, diante da extrema probabilidade de morte pelo naufrágio, desde que esgotadas as buscas, com fixação da data provável do falecimento.",
            "Pedro, apesar de emancipado por instrumento público antes do acidente, não poderia ser considerado plenamente capaz, pois não havia alcançado dezoito anos completos.",
            "O filho que Ana gerava no momento do acidente adquire personalidade civil, a qual será extinta com a declaração de morte presumida."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). De acordo com o Art. 7º, I, do Código Civil, a morte presumida pode ser declarada SEM decretação prévia de ausência se for extremamente provável a morte de quem estava em perigo de vida (naufrágio), desde que esgotadas as buscas."
    }
];

const banco_proc_civil = [
    {
        topic: "Tutelas Provisórias (CPC/2015)",
        type: "multipla",
        supportText: "",
        q: "Nos termos do Código de Processo Civil (Lei nº 13.105/2015), a tutela provisória que independe da demonstração de perigo de dano ou de risco ao resultado útil do processo, sendo concedida, por exemplo, quando ficar caracterizado o abuso do direito de defesa ou o manifesto propósito protelatório da parte, denomina-se:",
        options: [
            "Tutela cautelar antecedente.",
            "Tutela antecipada antecedente.",
            "Tutela da evidência.",
            "Tutela inibitória de urgência.",
            "Arresto executivo."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 311 do CPC, a tutela da evidência será concedida independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo."
    },
    {
        topic: "Prazos Processuais e Fazenda Pública / MP / Defensoria",
        type: "multipla",
        supportText: "",
        q: "Segundo o Código de Processo Civil de 2015, gozam de prazo em dobro para todas as suas manifestações processuais (salvo quando a lei estabelecer, de forma expressa, prazo próprio):",
        options: [
            "apenas a Fazenda Pública Federal.",
            "o Ministério Público, a Advocacia Pública e a Defensoria Pública.",
            "qualquer parte que litigue sob o pálio da gratuidade da justiça, mesmo representada por advogado particular.",
            "as empresas públicas e sociedades de economia mista que exploram atividade econômica.",
            "os litisconsortes com procuradores distintos em processos integralmente eletrônicos."
        ],
        answer: 1,
        disclaimer: "O CPC/2015 assegura a prerrogativa de prazo em dobro ao Ministério Público (art. 180), à Advocacia Pública (art. 183) e à Defensoria Pública (art. 186). O prazo em dobro para litisconsortes não se aplica aos processos em autos eletrônicos (art. 229, § 2º)."
    },
    {
        topic: "Recursos no Processo Civil",
        type: "multipla",
        supportText: "",
        q: "No sistema recursal do CPC/2015, excetuados os embargos de declaração (cujo prazo é de 5 dias úteis), o prazo unificado para interpor e para responder aos recursos cíveis (como Apelação, Agravo de Instrumento, Recurso Especial e Recurso Extraordinário) é de:",
        options: [
            "8 (oito) dias corridos.",
            "10 (dez) dias úteis.",
            "15 (quinze) dias úteis.",
            "15 (quinze) dias corridos.",
            "30 (trinta) dias úteis."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 1.003, § 5º c/c art. 219 do CPC/2015, excetuados os embargos de declaração (5 dias), o prazo para interpor os recursos e para responder-lhes é de 15 (quinze) dias úteis."
    },
    {
        topic: "Estabilização da Tutela Antecipada Antecedente",
        type: "vf",
        supportText: "",
        q: "A tutela antecipada concedida em caráter antecedente torna-se estável se da decisão que a conceder não for interposto o respectivo recurso (agravo de instrumento), extinguindo-se o processo sem que essa estabilidade produza coisa julgada material.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Conforme o art. 304, caput e § 6º do CPC, a ausência de recurso contra a tutela antecipada antecedente gera sua estabilização, mas a decisão que concede a tutela não fará coisa julgada, podendo qualquer das partes demandar a revisão no prazo decadencial de 2 anos."
    },
    {
        topic: "Remessa Necessária",
        type: "vf",
        supportText: "",
        q: "Está sujeita ao duplo grau de jurisdição obrigatório (remessa necessária) toda e qualquer sentença proferida contra o Estado da Paraíba, ainda que a condenação seja de valor certo e líquido equivalente a 10 (dez) salários-mínimos.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Pelo art. 496, § 3º, II do CPC, não se aplica a remessa necessária quando a condenação ou o proveito econômico obtido na causa for de valor certo e líquido inferior a 500 salários-mínimos para os Estados."
    },
    {
        topic: "Ação Civil Pública e Inquérito Civil",
        type: "vf",
        supportText: "",
        q: "O inquérito civil é pressuposto para a propositura da ação civil pública, mas a sua falta pode ser suprida por documentos expedidos por organismo público, tais como certidões, informações, exames ou perícias ou outro documento que confirme a lesão aos direitos protegidos por esse tipo de ação.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O inquérito civil é um procedimento administrativo FACULTATIVO. Se o MP já possuir elementos suficientes (justa causa), pode dispensá-lo e ajuizar a ação civil pública diretamente."
    },
    {
        topic: "Atuação do Ministério Público e Recursos",
        type: "vf",
        supportText: "",
        q: "Considere que, em determinada ação, o juiz tenha julgado procedente o pedido de divórcio e partilha de bens, mas improcedente o pedido de guarda formulado pela requerente, não tendo esta recorrido da decisão. Nesse caso, o Ministério Público tem legitimidade para interpor recurso de apelação contra a sentença proferida.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Como o feito envolve interesse de incapazes (guarda), o MP atua como fiscal da ordem jurídica (custos legis) e possui legitimidade para recorrer, independentemente das partes (art. 179, II, e art. 996 do CPC)."
    },
    {
        topic: "Impedimento e Suspeição",
        type: "vf",
        supportText: "",
        q: "Os motivos que provocam o impedimento e a suspeição dos juízes são os mesmos que provocam o impedimento e a suspeição dos promotores de justiça e advogados das partes.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O CPC aplica os motivos de impedimento e suspeição do juiz aos membros do MP e aos auxiliares da justiça, mas NÃO se aplicam aos advogados das partes (que representam interesses parciais)."
    },
    {
        topic: "Poderes e Deveres do Juiz (Prazos Processuais)",
        type: "vf",
        supportText: "Em uma ação ordinária proposta por pais contra o município buscando assegurar matrícula e frequência escolar adequada de crianças com deficiência na rede pública municipal, o juiz identificou a necessidade de reorganizar a ordem de produção das provas para melhor compreensão dos fatos controvertidos.",
        q: "O juiz poderá dilatar prazos processuais mesmo após o encerramento do prazo regular, se entender que tal medida é necessária para conferir maior efetividade à tutela jurisdicional.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O art. 139, parágrafo único, do CPC, determina que a dilação de prazos somente pode ser determinada ANTES de encerrado o prazo regular."
    },
    {
        topic: "Intervenção de Terceiros e Recursos",
        type: "vf",
        supportText: "Em uma ação judicial proposta por Júlia contra uma clínica médica, pleiteando indenização por danos materiais e morais, o juiz proferiu sentença condenando a clínica apenas ao pagamento de indenização por danos morais. [...] João, funcionário da clínica que não participou diretamente do processo, mas que teve sua conduta profissional mencionada desfavoravelmente na sentença, pretende desta recorrer na condição de terceiro prejudicado.",
        q: "João poderá interpor recurso contra a sentença, desde que demonstre objetivamente que a decisão judicial afeta diretamente direito seu ou interesse jurídico legítimo.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É a regra do terceiro prejudicado prevista no art. 996, parágrafo único, do CPC, que exige a demonstração do nexo de interdependência entre o seu interesse e a relação jurídica submetida à apreciação judicial."
    },
    {
        topic: "Recursos (Desistência)",
        type: "vf",
        supportText: "Em uma ação judicial proposta por Júlia contra uma clínica médica, pleiteando indenização por danos materiais e morais, o juiz proferiu sentença condenando a clínica apenas ao pagamento de indenização por danos morais.",
        q: "A clínica médica, caso decida interpor recurso, poderá desistir dele posteriormente, sem necessidade de anuência da parte contrária ou de eventuais litisconsortes.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Conforme expressa o art. 998 do CPC: 'O recorrente poderá, a qualquer tempo, sem a anuência do recorrido ou dos litisconsortes, desistir do recurso'."
    },
    {
        topic: "Tutelas Provisórias",
        supportText: "Mariana ajuizou ação de procedimento comum em face do Instituto Nacional do Seguro Social (INSS) e da DATAPREV perante Vara Federal, pleiteando a retificação de vínculos constantes de seu Cadastro Nacional de Informações Sociais (CNIS) e a concessão de benefício previdenciário.\nAo deferir a tutela provisória de urgência requerida pela autora, o Juízo determinou ao INSS a análise e a atualização cadastral pertinente e, à DATAPREV, que disponibilizasse, no prazo de 5 (cinco) dias úteis, os dados técnicos e registros eletrônicos sob sua guarda necessários ao processamento da ordem, sob pena de multa diária (astreintes) de R$ 1.000,00 (mil reais).",
        q: "À luz da disciplina das tutelas provisórias e dos meios de coerção no Código de Processo Civil, bem como da jurisprudência do Superior Tribunal de Justiça, assinale a afirmativa correta.",
        options: [
            "A fixação de astreintes contra empresa pública é nula de pleno direito, cabendo apenas a responsabilização pessoal do agente público responsável pelo cumprimento da ordem judicial.",
            "A decisão que defere tutela provisória de urgência é irrecorrível de imediato, desafiando impugnação apenas em preliminar de futuro e eventual recurso de apelação.",
            "A multa diária, uma vez fixada, torna-se imutável por força da preclusão, quanto às parcelas vencidas e vincendas, sendo vedada posterior alteração de seu valor ou periodicidade.",
            "A imposição de multa diária contra empresa pública para compelir ao cumprimento de tutela provisória é lícita, podendo o Juiz, de ofício ou a requerimento, modificar o valor ou a periodicidade da multa vincenda caso ela se revele insuficiente ou excessiva.",
            "As restrições legais à concessão de tutela provisória contra o Poder Público estabelecem proibição absoluta de tutela antecipada em matéria previdenciária, impedindo, em qualquer hipótese, a imposição de obrigação de fazer em caráter liminar."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). É consolidada a possibilidade de fixação de astreintes contra a Fazenda Pública (incluindo estatais). O juiz pode, a qualquer tempo, alterar o valor da multa vincenda se esta for desproporcional (art. 537, § 1º, do CPC)."
    },
    {
        topic: "Cumprimento de Sentença (Impugnação)",
        supportText: "Em fase de cumprimento definitivo de sentença condenatória por perdas e danos transitada em julgado em face de empresa pública, a exequente apresentou memória de cálculo cobrando o montante de R$ 600.000,00 (seiscentos mil reais). Intimada nos termos do Art. 523 do CPC para efetuar o pagamento voluntário, a empresa pública executada deixou transcorrer o prazo de 15 (quinze) dias sem adimplir a obrigação.\nTempestivamente, no prazo previsto no Art. 525 do CPC, a empresa pública apresentou impugnação ao cumprimento de sentença fundamentada unicamente em excesso de execução, sustentando que a exequente utilizou índice de correção monetária diverso do previsto no título e computou juros de mora em duplicidade.\nContudo, a executada não declarou na petição o valor que reputava correto nem apresentou demonstrativo discriminado e atualizado de seu cálculo.",
        q: "Diante do vício verificado na petição de impugnação, o Magistrado deve",
        options: [
            "converter a impugnação em embargos à execução, aplicando-se as regras do processo autônomo de execução por quantia certa.",
            "declarar a iliquidez superveniente do título executivo e intimar a exequente para instaurar fase de liquidação da sentença.",
            "determinar a intimação da executada para juntar a memória discriminada de cálculo no prazo de 15 (quinze) dias, sob pena de extinção da impugnação.",
            "rejeitar liminarmente a impugnação ao cumprimento de sentença, sem abertura de prazo para que a executada emende a petição de impugnação.",
            "conceder efeito suspensivo automático à impugnação e determinar a remessa obrigatória dos autos à contadoria judicial para apuração do valor devido."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). Trata-se de comando imperativo da lei (Art. 525, § 4º e § 5º, do CPC): quando a impugnação fundar-se em excesso de execução, o executado deve declarar de imediato o valor que entende correto e anexar o demonstrativo de cálculo, sob pena de indeferimento liminar."
    },
    {
        topic: "Teoria Geral dos Recursos e Precedentes",
        supportText: "Em demanda ajuizada por titular de dados pessoais contra a DATAPREV, o autor requereu indenização por danos morais, alegando que determinado portal governamental permaneceu indisponível durante um final de semana, em razão de manutenção preventiva previamente comunicada nos canais oficiais, o que teria postergado em 48 (quarenta e oito) horas o envio de requerimento administrativo.\nO respectivo Tribunal Regional Federal competente manteve a condenação da empresa pública por danos morais, amparando o acórdão essencialmente em precedente qualificado do Superior Tribunal de Justiça, firmado em recurso especial repetitivo a respeito da responsabilidade objetiva de instituições financeiras por fraudes praticadas por terceiros em ambiente eletrônico.\nA DATAPREV opôs embargos de declaração, demonstrando de forma pormenorizada a existência de distinção entre a indisponibilidade temporária decorrente de manutenção técnica programada e as fraudes de terceiros examinadas no precedente.\nTodavia, a Turma julgadora rejeitou os embargos, valendo-se de fundamentação genérica, afirmando apenas que o precedente repetitivo “aplica-se a todo e qualquer evento danoso originado no ambiente digital\".",
        q: "Considerando a sistemática de precedentes obrigatórios, o dever de fundamentação analítica e o sistema recursal do Código de Processo Civil, assinale a afirmativa correta.",
        options: [
            "A decisão colegiada é formalmente hígida, pois a simples indicação do precedente repetitivo basta para atender ao dever constitucional de fundamentação.",
            "O reconhecimento de distinguishing pelo Tribunal de origem implica a automática superação da tese vinculante, que deixa de produzir efeitos no âmbito regional.",
            "Após o esgotamento das instâncias ordinárias, a parte pode ajuizar reclamação ao STJ para garantir a observância do entendimento firmado no recurso especial repetitivo.",
            "A alegação de distinguishing somente pode ser apreciada se precedida da instauração de incidente de resolução de demandas repetitivas, que constitui requisito de admissibilidade da insurgência.",
            "O acórdão padece de vício de fundamentação, pois o órgão julgador deve demonstrar a aderência entre os fundamentos determinantes do precedente e o caso concreto, bem como enfrentar a distinção relevantemente suscitada pela parte."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). De acordo com o art. 489, § 1º, VI, do CPC, não se considera fundamentada a decisão que deixar de seguir enunciado de súmula, jurisprudência ou precedente invocado pela parte, sem demonstrar a existência de distinção (distinguishing) ou superação (overruling)."
    },
    {
        topic: "Julgamento Antecipado Parcial de Mérito",
        supportText: "Em ação ajuizada contra a DATAPREV, a parte autora formulou dois pedidos cumulados: o primeiro, destinado à obtenção de determinada informação constante de banco de dados administrado pela empresa pública; o segundo, de condenação ao pagamento de indenização por danos morais decorrentes da alegada indisponibilidade indevida dessa informação.\nApós a apresentação da contestação, o Juízo verificou que o primeiro pedido se encontrava incontroverso e em condições de imediato julgamento, enquanto o pedido indenizatório ainda dependia da produção de prova pericial. Diante disso, proferiu decisão julgando procedente apenas o primeiro pedido e determinou o prosseguimento do processo quanto à pretensão indenizatória.",
        q: "A respeito da decisão proferida, assinale a afirmativa correta.",
        options: [
            "O pronunciamento possui natureza de sentença parcial, sendo impugnável por apelação.",
            "O julgamento parcial do mérito somente é admissível quando houver concordância expressa de ambas as partes.",
            "A decisão que julga parcialmente o mérito sem encerrar a fase de conhecimento é impugnável por agravo de instrumento.",
            "A decisão que resolve parcialmente o mérito é irrecorrível de imediato, devendo eventual insurgência ser suscitada em preliminar de apelação após a sentença final.",
            "O julgamento parcial do mérito é vedado quando os pedidos cumulados possuírem naturezas distintas, devendo o Magistrado aguardar o encerramento integral da instrução."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova DATAPREV (FGV). De acordo com a sistemática do CPC/2015, a decisão que resolve parcialmente o mérito de forma antecipada (Art. 356) é uma decisão interlocutória, e o recurso cabível contra ela é o Agravo de Instrumento (Art. 356, § 5º)."
    },
    {
        topic: "Jurisdição",
        supportText: "João e Maria, após sete anos de união estável, decidiram formalizar a partilha consensual dos bens adquiridos durante a convivência. Diante da ausência de filhos e da inexistência de litígio, protocolizaram petição conjunta perante o Juízo Cível da Comarca de sua residência, pugnando pela homologação judicial da divisão acordada.\nNo despacho inicial, o juiz destacou que, mesmo na ausência de controvérsia, caberia ao Judiciário exercer controle quanto à legalidade e à proteção do interesse público envolvido na partilha.",
        q: "Com base na situação narrada, assinale a opção que indica o tipo de jurisdição exercida pelo Poder Judiciário em tal hipótese.",
        options: [
            "Jurisdição contenciosa, pois há pretensão resistida.",
            "Jurisdição penal, pois o pedido foi feito judicialmente.",
            "Jurisdição administrativa, pois se trata de homologação.",
            "Jurisdição voluntária, pois não há litígio entre as partes.",
            "Jurisdição arbitral, pois decorre de consenso."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). Processos baseados em consenso, petição conjunta e onde não há pretensão resistida (litígio), como homologações de acordos e partilhas amigáveis, configuram o exercício típico da Jurisdição Voluntária (ou graciosa)."
    },
    {
        topic: "Provas (Confissão)",
        supportText: "Durante a realização de audiência de instrução e julgamento no âmbito de ação de cobrança de aluguéis, o réu, ao ser interrogado sobre a dívida, afirmou: “Sim, estou devendo os valores mencionados. Reconheço que deixei de pagar por dificuldades financeiras”. Ainda em audiência, o advogado da parte autora imediatamente pugnou pelo julgamento antecipado da lide, com esteio na confissão realizada em audiência.",
        q: "Diante da situação narrada, assinale a afirmativa que descreve corretamente os efeitos processuais da manifestação do réu.",
        options: [
            "A declaração do réu é irrelevante do ponto de vista processual, pois somente produziria efeitos se fosse ratificada por prova documental.",
            "A manifestação do réu constitui confissão judicial de valor relativo, que exige homologação judicial para produzir efeitos processuais.",
            "A manifestação do réu somente gera efeitos processuais de confissão se for acompanhada de prova testemunhal que a corrobore.",
            "A declaração do réu configura confissão judicial e produz prova plena, devendo ser avaliada pelo juiz em contraste com as demais provas produzidas nos autos.",
            "A confissão do réu não gera efeitos processuais se não estiver prevista em cláusula contratual."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). A confissão judicial faz prova plena contra o confitente (art. 389 do CPC), sendo suficiente para tornar o fato incontroverso, cabendo ao juiz avaliá-la e, via de regra, dispensar a produção de outras provas sobre o fato confessado."
    }
];

const banco_penal = [
    {
        topic: "Aplicação da Lei Penal no Tempo",
        supportText: "",
        q: "A respeito da eficácia da lei penal no tempo, nos termos do art. 2º e 3º do Código Penal, assinale a alternativa correta:",
        options: [
            "A lei penal mais grave aplica-se aos fatos anteriores à sua vigência se ainda não houver sentença transitada em julgado.",
            "A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.",
            "A lei excepcional ou temporária perde completamente sua eficácia sobre os fatos praticados durante sua vigência assim que se encerra o período de sua duração.",
            "No crime permanente, aplica-se sempre a lei vigente no momento do início da execução, mesmo que sobrevenha lei mais grave antes da cessação da permanência.",
            "A abolitio criminis faz cessar a execução da pena, mas mantém intactos todos os efeitos penais secundários da condenação."
        ],
        answer: 1,
        disclaimer: "Pelo art. 2º, parágrafo único do Código Penal, a novatio legis in mellius retroage para beneficiar o réu, alcançando inclusive fatos já cobertos pelo trânsito em julgado. Já na Súmula 711 do STF, a lei mais grave aplica-se ao crime continuado ou permanente se sua vigência é anterior à cessação."
    },
    {
        topic: "Crimes contra a Administração Pública",
        supportText: "",
        q: "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, pratica o crime de:",
        options: [
            "Corrupção passiva (art. 317 do CP).",
            "Peculato-desvio (art. 312 do CP).",
            "Concussão (art. 316 do CP).",
            "Prevaricação (art. 319 do CP).",
            "Excesso de exação (art. 316, § 1º do CP)."
        ],
        answer: 2,
        disclaimer: "O núcleo verbal 'exigir' vantagem indevida em razão da função caracteriza o delito de Concussão (art. 316 do CP). Na corrupção passiva (art. 317), os verbos são 'solicitar ou receber', ou 'aceitar promessa'."
    },
    {
        topic: "Teoria do Crime (Excludentes de Ilicitude)",
        supportText: "",
        q: "Segundo o artigo 23 do Código Penal, são causas excludentes de ilicitude (antijuridicidade), EXCETO:",
        options: [
            "Estado de necessidade.",
            "Legítima defesa.",
            "Estrito cumprimento de dever legal.",
            "Exercício regular de direito.",
            "Coação moral irresistível."
        ],
        answer: 4,
        disclaimer: "A coação moral irresistível (junto com a obediência hierárquica, art. 22 do CP) é causa excludente da CULPABILIDADE (por inexigibilidade de conduta diversa), e não da ilicitude."
    },
    {
        topic: "Desistência Voluntária e Arrependimento Eficaz",
        type: "vf",
        supportText: "",
        q: "Nos termos do art. 15 do Código Penal (ponte de ouro), o agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados, afastando-se a punição pela tentativa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Na desistência voluntária e no arrependimento eficaz (art. 15 do CP), exclui-se a tipicidade da tentativa do crime inicialmente visado, respondendo o agente apenas pelos atos efetivamente praticados."
    },
    {
        topic: "Princípio da Insignificância em Crimes contra a Administração",
        type: "vf",
        supportText: "",
        q: "Segundo a Súmula 599 do Superior Tribunal de Justiça, o princípio da insignificância é inaplicável aos crimes contra a Administração Pública, pois a norma visa resguardar também a moralidade administrativa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A Súmula 599 do STJ dispõe expressamente: 'O princípio da insignificância é inaplicável aos crimes contra a administração pública'."
    },
    {
        topic: "Aplicação da Lei Penal",
        type: "vf",
        supportText: "",
        q: "A lei penal posterior mais benéfica retroagirá, respeitando-se, porém, a coisa julgada, definida pelo trânsito em julgado de sentença penal condenatória.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A lei penal mais benigna (novatio legis in mellius) retroage inclusivamente aos casos já transitados em julgado, desconstituindo a coisa julgada neste aspeto (art. 2º, parágrafo único, do CP e Súmula 611 do STF).[cite: 29]"
    },
    {
        topic: "Princípios do Direito Penal",
        type: "vf",
        supportText: "",
        q: "A vedação da analogia no direito penal decorre do próprio princípio da legalidade, pois não se admite outra fonte que não a lei para o que é prescrito como crime e pena.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Em estrito cumprimento ao princípio da legalidade, é vedada a criação de crimes ou agravamento de penas por analogia (analogia in malam partem).[cite: 29]"
    },
    {
        topic: "Princípios do Direito Penal",
        type: "vf",
        supportText: "",
        q: "A teoria dos poderes implícitos excepciona o princípio da legalidade estrita, pois, como a lei permite ao juiz aplicar pena mais severa, entende-se, por extensão, que é aplicável pena mais branda, ainda que esta não venha positivada na legislação penal de modo expresso.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O princípio da legalidade estrita no Direito Penal não comporta a criação de penas (mesmo que mais brandas) por via da teoria dos poderes implícitos, carecendo de previsão legal expressa.[cite: 29]"
    },
    {
        topic: "Crimes contra a Administração Pública",
        type: "vf",
        supportText: "",
        q: "O uso indevido de bem público por servidor que lhe detenha posse legítima é suficiente para a consumação do crime de peculato na modalidade apropriação, o que difere da apropriação indébita, crime patrimonial comum para cuja configuração é exigido o dolo de integração do bem como parte de seu patrimônio.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O mero uso indevido de bem público (peculato de uso) não configura crime penal (exceto para Prefeitos), carecendo do dolo específico de apropriação definitiva do bem (animus rem sibi habendi).[cite: 29]"
    },
    {
        topic: "Crimes contra o Património",
        type: "vf",
        supportText: "",
        q: "Configura furto mediante fraude a ação do agente que se passe por mecânico para ludibriar a vítima e, após receber o carro, dele se aproprie.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A entrega voluntária da coisa pela vítima ludibriada caracteriza estelionato (art. 171, CP), e não furto mediante fraude, no qual a fraude serve apenas para diminuir a vigilância sobre a coisa subtraída.[cite: 29]"
    },
    {
        topic: "Crimes contra o Património e Consunção",
        type: "vf",
        supportText: "",
        q: "O dano a determinado patrimônio, quando praticado exclusivamente para o furto de outro bem, pode ser integrado ao crime de furto na forma de qualificadora, sendo imprópria a imputação de crime de dano em concurso com o de furto.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O crime-meio (dano) é absorvido pelo crime-fim (furto), qualificando o furto pelo rompimento de obstáculo à subtração da coisa (princípio da consunção).[cite: 29]"
    },
    {
        topic: "Crimes contra a Dignidade Sexual",
        type: "vf",
        supportText: "",
        q: "O agente que simule participação de celebridade em fotografias ou vídeos de ato sexual, ainda que se valendo tão somente do rosto da vítima na montagem das imagens, pratica crime de registro não autorizado da intimidade sexual.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A criação de montagens (deepfakes) que incluam o rosto da vítima em cena de nudez ou ato sexual está tipificada no art. 216-B, parágrafo único, do CP.[cite: 29]"
    },
    {
        topic: "Crimes contra a Dignidade Sexual",
        type: "vf",
        supportText: "",
        q: "Para configuração do crime de estupro, bastam olhares voluptuosos que notadamente reflitam desejo sexual do agente, independentemente da existência de contato físico ou de relação de autoridade entre agente e vítima.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O estupro exige que a conjunção carnal ou ato libidinoso diverso ocorra mediante violência ou grave ameaça (art. 213, CP). Olhares voluptuosos não preenchem a elementar da violência ou ameaça.[cite: 29]"
    },
    {
        topic: "Crimes contra a Vida",
        type: "vf",
        supportText: "Abelardo, membro de organização criminosa voltada à prática de furto e roubo de veículos, foi encarregado de matar Carla, sua comparsa de crime, porque ela teria prestado, em interrogatório policial de inquérito no qual era investigada, informações relevantes à investigação policial sobre a organização.[cite: 28]",
        q: "Caso Abelardo mate Carla, a ele deverá ser imputado o tipo penal feminicídio.[cite: 28]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O homicídio, neste caso hipotético, foi praticado como 'queima de arquivo' motivado pelas informações prestadas no inquérito, e não por razões da condição de sexo feminino (menosprezo ou discriminação), descaracterizando a qualificadora de feminicídio.[cite: 28]"
    }
];

const banco_proc_penal = [
    {
        topic: "Inquérito Policial",
        supportText: "",
        q: "Sobre as características e regras do Inquérito Policial no Código de Processo Penal, assinale a alternativa correta:",
        options: [
            "O inquérito policial é peça indispensável para o oferecimento da denúncia pelo Ministério Público em qualquer infração penal.",
            "A autoridade policial poderá mandar arquivar autos de inquérito caso verifique de plano a atipicidade do fato.",
            "É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa (Súmula Vinculante 14).",
            "O inquérito policial possui natureza contraditória plena, sendo nulo o indiciamento realizado sem prévia oitiva de testemunhas de defesa.",
            "Nos crimes de ação penal pública incondicionada, o inquérito policial somente pode ser iniciado mediante requerimento formal da vítima."
        ],
        answer: 2,
        disclaimer: "A Súmula Vinculante 14 do STF garante ao advogado acesso às diligências já documentadas no inquérito. O IP é dispensável (se o MP já tiver justa causa), inquisitivo e indisponível (o delegado jamais pode arquivar autos de IP - art. 17 do CPP)."
    },
    {
        topic: "Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP)",
        supportText: "",
        q: "De acordo com o art. 28-A do Código de Processo Penal (incluído pelo Pacote Anticrime - Lei nº 13.964/2019), não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça, o Ministério Público poderá propor Acordo de Não Persecução Penal desde que a pena mínima cominada seja:",
        options: [
            "inferior a 1 (um) ano.",
            "inferior a 2 (dois) anos.",
            "inferior a 4 (quatro) anos.",
            "igual ou inferior a 4 (quatro) anos.",
            "inferior a 8 (oito) anos."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 28-A, caput, do CPP, o ANPP é cabível para infrações penais cometidas sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos."
    },
    {
        topic: "Provas no Processo Penal (Cadeia de Custódia)",
        supportText: "",
        q: "Segundo o artigo 158-A do Código de Processo Penal, o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio a partir de seu reconhecimento até o descarte, denomina-se:",
        options: [
            "Exame de corpo de delito indireto.",
            "Cadeia de custódia.",
            "Acareação pericial.",
            "Incidente de falsidade documental.",
            "Auto de apreensão circunstanciado."
        ],
        answer: 1,
        disclaimer: "Trata-se da definição legal exata de Cadeia de Custódia, introduzida no art. 158-A do CPP pela Lei nº 13.964/2019."
    },
    {
        topic: "Prisões e Medidas Cautelares",
        type: "vf",
        supportText: "",
        q: "Com as alterações promovidas pela Lei nº 13.964/2019 no Código de Processo Penal, é vedado ao juiz decretar a prisão preventiva de ofício, tanto na fase de investigação quanto no curso da ação penal, dependendo sempre de requerimento do Ministério Público, do querelante ou do assistente, ou de representação da autoridade policial.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Nos termos do art. 311 do CPP atualizado e da jurisprudência consolidada do STF e STJ, não cabe mais prisão preventiva decretada de ofício pelo magistrado em nenhuma fase da persecução penal."
    },
    {
        topic: "Provas Ilícitas e Teoria da Fonte Independente",
        type: "vf",
        supportText: "",
        q: "São inadmissíveis, devendo ser desentranhadas do processo, as provas ilícitas, assim entendidas as obtidas em violação a normas constitucionais ou legais, bem como as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente das primeiras.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. É a literalidade do art. 157, caput e § 1º do Código de Processo Penal."
    },
    {
        topic: "Inquérito Policial e Provas",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular, sem ter obtido consentimento para acesso ao conteúdo do dispositivo.[cite: 29]",
        q: "No curso da investigação criminal, cabe ao delegado de polícia requisitar perícia no aparelho celular apreendido, porém, quando o investigado não a autoriza com base no direito fundamental à vida privada e à intimidade, a perícia fica condicionada a autorização judicial.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O acesso aos dados e comunicações armazenadas em telemóveis apreendidos depende de prévia ordem judicial (jurisprudência consolidada do STJ/STF).[cite: 29]"
    },
    {
        topic: "Provas (Exame de Corpo de Delito)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "A confissão de Heitor em depoimento formal em sede policial não desobriga a realização de exame de corpo de delito para comprovação da lesão corporal, caso esta tenha deixado vestígios.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É regra expressa no art. 158 do CPP: quando a infração deixar vestígios, o exame de corpo de delito direto ou indireto é indispensável, não o suprindo a confissão do arguido.[cite: 29]"
    },
    {
        topic: "Prisão em Flagrante",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "A prisão de Heitor em flagrante delito foi ilegal, devido exclusivamente à ausência de prova da materialidade da lesão corporal nos autos.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A prisão em flagrante por lesão corporal que ocorreu três meses antes é ilegal não pela ausência momentânea da materialidade, mas pelo facto de já não haver qualquer estado de flagrância (art. 302, CPP).[cite: 29]"
    },
    {
        topic: "Prisão Cautelar (Prisão Preventiva)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Em eventual audiência de custódia, o juiz poderá determinar, de ofício, a prisão preventiva de Heitor, a despeito de ausência de representação por parte da autoridade policial ou de pedido de membro do Ministério Público nesse sentido.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Após a Lei nº 13.964/2019 (Pacote Anticrime), o juiz não pode converter a prisão em flagrante em preventiva de ofício durante a audiência de custódia.[cite: 29]"
    },
    {
        topic: "Medidas Cautelares Diversas da Prisão",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Se houver requerimento das partes e justificação fundamentada de que a prisão preventiva de Heitor pode ser substituída por outras medidas cautelares, o juiz poderá determinar sua liberdade provisória e aplicar, de forma cumulativa, medidas como a proibição de manter contato com Carlos e de frequentar bloquinhos de carnaval.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). As medidas cautelares previstas no art. 319 do CPP podem ser aplicadas de forma isolada ou cumulativa (art. 282, § 1º, CPP).[cite: 29]"
    },
    {
        topic: "Provas (Cadeia de Custódia)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Caso Heitor, quando de sua prisão, tivesse entregado o canivete diretamente à autoridade policial, o princípio da fé pública dispensaria a aplicação das regras relativas à cadeia de custódia da prova em relação ao objeto apreendido.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A apreensão direta pela autoridade policial não afasta as regras da cadeia de custódia (art. 158-A e seguintes, CPP), sob pena de se quebrar a rastreabilidade probatória.[cite: 29]"
    },
    {
        topic: "Ação Penal (Juizados Especiais Criminais)",
        type: "vf",
        supportText: "",
        q: "Nos termos da Lei n.º 9.099/1995, o crime de lesão corporal leve é processado mediante ação penal privada, perante o juizado especial criminal, após oferecimento de queixa-crime por advogado contratado ou por defensor público.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O crime de lesão corporal leve, com o advento da Lei nº 9.099/1995, passou a exigir representação da vítima, sendo, portanto, de ação penal pública condicionada (art. 88 da referida lei).[cite: 29]"
    },
    {
        topic: "Prisão Temporária",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Caso Heitor, intimado para comparecimento à delegacia a fim de prestar esclarecimentos, decidisse não atender à intimação, o delegado não poderia determinar sua prisão temporária, pois este é um poder que apenas a autoridade judicial pode exercer.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos da Lei nº 7.960/1989, a prisão temporária só pode ser decretada pelo Juiz, mediante representação da autoridade policial ou a requerimento do Ministério Público.[cite: 29]"
    },
    {
        topic: "Princípios Constitucionais no Inquérito Policial",
        type: "vf",
        supportText: "",
        q: "No curso das investigações policiais, dada a natureza administrativa e não judicial, mitigam-se os princípios constitucionais da presunção de inocência e da não autoincriminação, de forma que o delegado pode, por exemplo, exigir do agente a colaboração em reconhecimento de pessoas e na cessão de senha para desbloqueio de aparelho celular.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O princípio nemo tenetur se detegere (não autoincriminação) aplica-se plenamente ao inquérito policial. O arguido não pode ser forçado a ceder senhas ou a colaborar de modo ativo para a sua própria incriminação.[cite: 29]"
    },
    {
        topic: "Juiz das Garantias",
        type: "vf",
        supportText: "",
        q: "As normas relativas ao juiz de garantias não se aplicam aos procedimentos de competência dos juizados especiais criminais.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A inaplicabilidade do juiz das garantias aos juizados especiais criminais está textualmente prevista no art. 3º-C, § 1º, inciso I, do CPP.[cite: 29]"
    }
];

const banco_noc_adm = [
    {
        topic: "Processo Organizacional (Funções Administrativas)",
        supportText: "",
        q: "Dentro do processo administrativo clássico (PODC - Planejamento, Organização, Direção e Controle), a função administrativa responsável por definir objetivos futuros, estabelecer metas e traçar os meios e recursos necessários para alcançá-los é:",
        options: [
            "o Controle.",
            "a Direção.",
            "a Organização.",
            "o Planejamento.",
            "a Departamentalização."
        ],
        answer: 3,
        disclaimer: "O Planejamento é a primeira função administrativa, voltada à definição de objetivos e à escolha antecipada do curso de ação para alcançá-los."
    },
    {
        topic: "Gestão da Qualidade (Ciclo PDCA e Ferramentas)",
        supportText: "",
        q: "Na Gestão da Qualidade, a ferramenta gráfica baseada no princípio de que a grande maioria dos problemas (cerca de 80%) decorre de um pequeno número de causas fundamentais (cerca de 20%), permitindo priorizar as ações corretivas mais relevantes, é o:",
        options: [
            "Diagrama de Pareto.",
            "Fluxograma de Processo.",
            "Histograma.",
            "Folha de Verificação.",
            "Matriz GUT."
        ],
        answer: 0,
        disclaimer: "O Diagrama de Pareto aplica a relação 80/20 (Vilfredo Pareto / Joseph Juran) em um gráfico de barras ordenadas para destacar as causas vitais que geram a maior parte dos defeitos ou problemas."
    },
    {
        topic: "Administração de Recursos Materiais (Curva ABC)",
        supportText: "",
        q: "Na gestão de estoques pelo método da Curva ABC (ou classificação ABC), os itens classificados na 'Classe A' caracterizam-se por apresentarem:",
        options: [
            "grande quantidade física em estoque e baixíssimo valor financeiro agregado.",
            "pequena quantidade de itens no estoque, porém altíssima representatividade no valor financeiro total investido, exigindo controle rigoroso.",
            "itens obsoletos ou inservíveis destinados ao desfazimento.",
            "importância financeira e quantidade física exatamente intermediárias.",
            "materiais de escritório de baixíssimo custo unitário que dispensam inventário."
        ],
        answer: 1,
        disclaimer: "Na Curva ABC, os itens Classe A representam a menor parcela quantitativa (cerca de 20% dos itens), mas concentram a maior parte do valor financeiro do estoque (cerca de 80% do valor total)."
    },
    {
        topic: "Gestão de Pessoas (Motivação e Liderança)",
        type: "vf",
        supportText: "",
        q: "Na Teoria dos Dois Fatores de Frederick Herzberg, os fatores higiênicos (extrínsecos, como salário, condições físicas de trabalho e benefícios), quando ótimos, evitam a insatisfação dos colaboradores, mas não garantem por si sós a motivação intrínseca duradoura, a qual decorre dos fatores motivacionais (ligados ao conteúdo do cargo, realização e reconhecimento).",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Para Herzberg, fatores higiênicos apenas previnem a insatisfação (vão da insatisfação à não-insatisfação), enquanto os fatores motivacionais (intrínsecos ao trabalho) promovem a satisfação e motivação."
    },
    {
        topic: "Gestão por Processos (BPM e BPMN)",
        type: "vf",
        supportText: "",
        q: "Na notação BPMN (Business Process Model and Notation), os elementos gráficos em formato de losango (diamante) utilizados para controlar a divergência e a convergência do fluxo de sequência (decisões, desvios condicionais ou caminhos paralelos) são denominados Gateways.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. No BPMN, círculos representam Eventos, retângulos de cantos arredondados representam Atividades/Tarefas e losangos representam Gateways (decisões/controle de fluxo)."
    },
    {
        topic: "Ética e Função Pública",
        type: "vf",
        supportText: "",
        q: "O exercício da função pública deve se orientar pelos preceitos legais e, também, pela busca de assegurar as condições do livre exercício da cidadania.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A atuação do agente público não se restringe à mera legalidade fria, devendo buscar o bem comum e a garantia dos direitos fundamentais e do livre exercício da cidadania." //[cite: 25]
    },
    {
        topic: "Ética e Moral",
        type: "vf",
        supportText: "",
        q: "A ética é restrita à ciência teórica e concebida como estudo valorativo das regras ou dos costumes de uma comunidade específica.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A ética não é restrita à ciência teórica; ela orienta a conduta prática e a tomada de decisões morais. O estudo valorativo das regras e costumes locais é, por definição, o campo da moral." //[cite: 25]
    },
    {
        topic: "Cidadania",
        type: "vf",
        supportText: "",
        q: "O exercício da cidadania é fundamental para que a natureza da ação coletiva não se restrinja à disputa de poder, a fim de atender ao bem comum na solução dos problemas sociais.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O pleno exercício da cidadania eleva o debate público para além de interesses políticos ou disputas de poder, focando na resolução conjunta das demandas e no bem-estar da coletividade." //[cite: 25]
    },
    {
        topic: "Ética nas Instituições Públicas",
        type: "vf",
        supportText: "",
        q: "As modificações sobre valores vivenciadas na sociedade contemporânea são restritas à vida particular, deixando de trazer reflexos evolutivos nas instituições públicas.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Os valores da sociedade impactam diretamente as instituições públicas, que devem evoluir para refletir as novas demandas sociais de transparência, diversidade, sustentabilidade e ética." //[cite: 25]
    },
    {
        topic: "Funções Administrativas (Direção)",
        type: "vf",
        supportText: "",
        q: "A finalidade da direção é fazer com que todas as atividades de uma empresa sejam operadas de forma autônoma, para que os resultados comuns sejam alcançados.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A direção coordena, guia e orienta a execução, atuando como liderança para alinhar os esforços. Operações totalmente 'autônomas' podem levar ao desalinhamento estratégico." //[cite: 25]
    },
    {
        topic: "Funções Administrativas (Controle)",
        type: "vf",
        supportText: "",
        q: "As informações e decisões de controle permitem manter uma organização ou um sistema orientado para o cumprimento dos objetivos.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O controle existe para monitorar resultados, aplicar correções de rota preventivas ou corretivas e assegurar o atingimento das metas e objetivos propostos no planejamento." //[cite: 25]
    },
    {
        topic: "Planejamento Tático",
        type: "vf",
        supportText: "",
        q: "O plano de marketing, o plano de recursos humanos e o plano financeiro são exemplos de planos táticos.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O planejamento tático ocorre no nível intermediário (médio prazo) e abrange cada departamento ou área funcional da empresa de forma específica." //[cite: 26]
    },
    {
        topic: "Planejamento Estratégico (Missão)",
        type: "vf",
        supportText: "",
        q: "A declaração da missão documenta o propósito da existência de uma organização e define explicitamente as responsabilidades para com seus principais grupos de interesse.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A missão responde à pergunta 'Para que existimos?'. É a razão de ser da organização e seu papel na sociedade perante os stakeholders." //[cite: 26]
    },
    {
        topic: "Análise SWOT",
        type: "vf",
        supportText: "",
        q: "Na análise SWOT, as ameaças são situações externas ou internas, atuais ou futuras, que, se não eliminadas, minimizadas ou evitadas pela organização, podem afetá-la negativamente.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Na matriz SWOT, Ameaças e Oportunidades referem-se única e exclusivamente ao ambiente EXTERNO (cenário incontrolável). O ambiente interno é composto por Forças e Fraquezas." //[cite: 26]
    },
    {
        topic: "Departamentalização Funcional",
        type: "vf",
        supportText: "",
        q: "As desvantagens da departamentalização funcional são o princípio da especialização ocupacional e a simplificação do treinamento e da supervisão dos subordinados.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A especialização ocupacional e a simplificação do treinamento são, na verdade, as principais VANTAGENS da departamentalização por funções." //[cite: 26]
    },
    {
        topic: "Departamentalização por Clientes",
        type: "vf",
        supportText: "",
        q: "O critério de departamentalização por cliente é apropriado quando a organização atende a diferentes tipos de clientes com necessidades muito distintas ou quando os clientes são iguais, mas têm necessidades diferentes.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Esta modelagem agrupa as atividades conforme o público-alvo, permitindo foco total na satisfação das necessidades específicas de cada nicho de clientes." //[cite: 26]
    },
    {
        topic: "Gestão de Processos",
        type: "vf",
        supportText: "",
        q: "Os processos que não são ajustados não agregam valor ao projeto ou aos resultados e, ao mesmo tempo, aumentam o custo e o prazo de execução do cronograma.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A ausência de otimização (melhoria contínua) e adequação dos processos gera burocracia desnecessária, desperdício de recursos e atrasos operacionais." //[cite: 26]
    },
    {
        topic: "Estrutura Analítica do Projeto (EAP)",
        type: "vf",
        supportText: "",
        q: "As equipes do projeto definem processos que permitem a conclusão de tarefas e as atribuições de trabalho, de forma que podem concordar com um processo de decomposição ao utilizarem uma estrutura analítica do projeto (EAP), uma lista de pendências ou um quadro de tarefas.", //[cite: 26]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A EAP fraciona o trabalho total do projeto em componentes menores (pacotes de trabalho) mais fáceis de gerenciar, estimar e atribuir." //[cite: 26]
    },
    {
        topic: "Gestão de Desempenho (OKR)",
        type: "vf",
        supportText: "",
        q: "Os indicadores-chave de desempenho são usados no âmbito da metodologia OKR e caracterizam-se por serem objetivos, mensuráveis, práticos e consensuais dentro da organização.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Os OKRs (Objectives and Key Results) apoiam-se em Key Results (resultados-chave), que funcionam como métricas e indicadores concretos para avaliar o alinhamento com o objetivo." //[cite: 27]
    },
    {
        topic: "Planejamento Tático",
        type: "vf",
        supportText: "",
        q: "O planejamento tático é projetado para médio prazo e abrange cada departamento da organização, de modo que se preocupa em atingir os objetivos departamentais.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O planejamento divide-se em Estratégico (institucional/longo prazo), Tático (departamental/médio prazo) e Operacional (tarefas rotineiras/curto prazo)." //[cite: 27]
    },
    {
        topic: "Análise PESTEL",
        type: "vf",
        supportText: "",
        q: "Na análise do ambiente externo, o uso da ferramenta PESTEL é adequado, pois ela abrange variáveis externas, tais como políticas, econômicas e sociais, não sendo contemplada a dimensão tecnológica, por esta ser uma variável de âmbito interno.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A sigla PESTEL representa Fatores Políticos, Econômicos, Sociais, Tecnológicos, Ecológicos e Legais. A dimensão tecnológica é, portanto, contemplada no escopo macroambiental (externo)." //[cite: 27]
    },
    {
        topic: "Qualidade de Vida no Trabalho (QVT)",
        type: "vf",
        supportText: "",
        q: "A autonomia dos colaboradores influencia negativamente a qualidade de vida no trabalho, pois a ausência de direcionamento e controle por parte da gestão provoca um frequente adoecimento psicológico dos funcionários.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O enriquecimento do cargo e a concessão de autonomia são pilares motivacionais (conforme a teoria de Hackman & Oldham) que melhoram significativamente a Qualidade de Vida no Trabalho (QVT)." //[cite: 27]
    },
    {
        topic: "Modelos Administrativos (Abordagem Clássica)",
        type: "vf",
        supportText: "",
        q: "As abordagens clássica e burocrática são mais adequadas para ambientes complexos e de instabilidade, já que estruturas mais organizadas e bem documentadas favorecem mudanças organizacionais cada vez mais rápidas.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Abordagens mecanistas (Clássica/Burocrática) são altamente rígidas, indicadas apenas para ambientes estáveis. Elas são ineficientes em cenários complexos, instáveis e de rápidas mudanças." //[cite: 27]
    },
    {
        topic: "Gestão do Conhecimento",
        type: "vf",
        supportText: "",
        q: "A aprendizagem contínua e a requalificação tornam-se cada vez mais importantes ao se considerar o contexto digital, o qual exige constante aprendizado e rápida atualização.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Em ambientes disruptivos e digitais, conceitos como upskilling, reskilling e lifelong learning (aprendizado contínuo) são vitais para a sobrevivência e competitividade das organizações." //[cite: 27]
    },
    {
        topic: "Evolução da Administração Pública no Brasil",
        type: "vf",
        supportText: "",
        q: "A criação do Ministério da Administração e Reforma do Estado durante o governo de Getúlio Vargas, em 1938, foi responsável por estruturar o serviço público e implementar o modelo burocrático no Brasil.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Vargas implementou o modelo burocrático em 1938 através do DASP (Departamento Administrativo do Serviço Público). O MARE foi criado muito tempo depois, na década de 1990 (Governo FHC), para implantar o modelo gerencial." //[cite: 27]
    },
    {
        topic: "Gestão de Projetos (EAP)",
        type: "vf",
        supportText: "",
        q: "No planejamento de um projeto, a estrutura analítica do projeto é essencial para decompor o escopo do projeto em partes menores e gerenciáveis, bem como para garantir que todas as entregas sejam contempladas.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A Estrutura Analítica do Projeto (EAP/WBS) cumpre exatamente o papel de subdivisão hierárquica e visual dos pacotes de trabalho e validação do escopo total." //[cite: 27]
    },
    {
        topic: "Gestão da Qualidade (Ciclo PDCA)",
        type: "vf",
        supportText: "",
        q: "Na fase de agir do ciclo PDCA, é preciso capacitar os colaboradores para que ocorra a implementação do que foi planejado na gestão de processos.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A capacitação dos colaboradores e a implementação das ações ocorrem na fase de Execução (DO - Fazer). A fase de Agir (ACT) lida com as correções de desvios após a checagem ou com a padronização do que deu certo." //[cite: 27]
    },
    {
        topic: "Inovação (Design Thinking)",
        type: "vf",
        supportText: "",
        q: "O design thinking é uma ferramenta utilizada pelas organizações para a resolução de problemas, sobretudo os complexos, que envolvem cenários imprevisíveis e exigem respostas mais rápidas e assertivas ao desafio enfrentado.", //[cite: 27]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Abordagem colaborativa e orientada à empatia, o Design Thinking busca a inovação para dores complexas focando na centralidade do ser humano e em respostas rápidas via prototipação." //[cite: 27]
    },
    {
        topic: "Modelos de Administração Pública",
        supportText: "No Brasil e em outros países, a evolução dos modelos de gestão pública revela diferentes enfoques quanto ao papel do Estado e à forma de prestação dos serviços públicos, inserindo-se em um movimento mais amplo de reforma estatal.",
        q: "Com base nos modelos de gestão da administração pública historicamente adotados no Brasil, assinale a afirmativa que apresenta corretamente a caracterização de um desses modelos.",
        options: [
            "O modelo burocrático caracteriza-se pela flexibilidade administrativa e pela descentralização de decisões, duas estratégias eficazes para enfrentar problemas relacionados à corrupção.",
            "O modelo patrimonialista, que remonta aos anos 1930, estando vigente até os anos 1990, tem como marco inicial a criação do Departamento Administrativo do Serviço Público (DASP).",
            "O modelo gerencial propõe a incorporação de práticas do setor privado para aumentar a eficiência dos serviços públicos e, consequentemente, é baseado em competição com foco em resultados.",
            "A Reforma do Estado nos anos 1990 reforçou o modelo patrimonialista como referência para a administração pública moderna, introduzindo novos princípios estruturais de controle.",
            "A Nova Gestão Pública, fundamentada na ideia de ordenamento e dominação legitimada pela existência de normas, defende que a eficácia do serviço público deve ser medida por indicadores racionais e internos."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova PGM-RJ (FGV). O modelo Gerencial (Nova Gestão Pública) foca na eficiência, descentralização, controle por resultados (a posteriori) e importação de boas práticas do mercado. O DASP (anos 1930) introduziu o modelo Burocrático, e não o Patrimonialista."
    }
];

// =========================================================
// CATÁLOGO DE QUESTÕES
// =========================================================

const mockDB = {
    // Matérias comuns
    "Língua Portuguesa": banco_pt,
    "Matemática e RLM": banco_rlm,
    "Matemática e Raciocínio Lógico": banco_rlm,
    "Legislação MPPE": banco_legis_mppe,
    "Legislação Aplicada ao MPPE": banco_legis_mppe,
    "Informática": banco_info,

    // Matérias jurídicas
    "Direito Constitucional": banco_const,
    "Direito Administrativo": banco_adm,
    "Direito Civil": banco_civil,
    "Direito Processual Civil": banco_proc_civil,
    "Direito Penal": banco_penal,
    "Direito Processual Penal": banco_proc_penal,

    // Matéria específica do cargo de Técnico
    "Noções de Administração": banco_noc_adm,

    // Matérias específicas de TI
    "Governança em TI": banco_gov_ti,
    "Segurança, Risco e Continuidade": banco_seg_ti,
    "Engenharia de Software, DevOps e Ciência de Dados":
        banco_eng_soft_ia,
    "Infraestrutura e Banco de Dados": banco_infra_bd
};

// Disponibiliza o catálogo para scripts que utilizem window.mockDB.
if (typeof window !== "undefined") {
    window.mockDB = mockDB;
}
