Roteiro:

1 - Apresentação "Boas práticas de teste unitário"

Fala pessoal Boa tarde, hoje eu trouxe uma apresentaçãozinha básica sobre testes, mais um bate-papo sobre boas práticas sobre testes unitários.

Essa apresentação é bem aberta, então quem quiser trazer um contraponto, uma visão diferente, pode ficar a vontade pra expor isso vai ajudar todo mundo aqui.

Então vamos lá!

---------------------
#1 Faça testes pequenos

Teste unitários, como o nome mesmo já diz, serve para testar pequenas porções do seu código. Testar a unidade, ir a fundo no seu projeto e testar cada método, cada função, cada classe.

Então se o seu teste está grande, tá longo, está extenso.
É um sinal de que talvez seu código precisa ser refatorado ou está fazendo coisas de mais.

Lembra, o primeiro conceito do SOLID é o Single Responsability. Se a sua função tem muita responsabilidade seu teste também vai ficar mais complexo, mais difícil de testar e mais propenso a falha, a não testar o que deveria!


---------------------
#2 Faça testes rápidos

O teste precisa ser rápidos, já que eles devem ser executados o tempo todo. 

Voce não pode ficar tendo dependências externas no seu teste, como banco de dados por exemplo, ou consultar uma outra API. Esse tipo de teste fica pros teste de integração ou end to end.

E para isso voce pode usar mocks, que vão trazer um resultado fake do que voce espera.


---------------------
#3 Faça testes determinísticos

Testes unitários devem estar funcionando 100% do tempo, 100% das vezes!

Se os testes da sua unidade as vezes falha, para tudo e certifique-se de encontrar qual é o problema e corrija o teu código.

Testes unitários são onde a gente testa a menor parte do código, onde a gente consegue separar as classes, métodos, funções, etc. pra garantir que cada coisa esteja funcionando como o esperado.

Então essa perda de tempo em encontrar e resolver o problema pode te salvar mais pra frente quando tiver realmente utilizando a sua aplicação.


---------------------
#4 Coloque nomes descritivos 

Como o Uncle Bob menciona no livro dele de Clean Code.
De nomes significativos!

O nome da sua função, variável, método, classe, tem que dizer explicitamente do que se trata o código que voce espera que seja executado.

Da mesma forma nos testes a gente tem de tentar deixar claro o que espera naquele teste.

Aquele DESCRIBE é sobre qual método?
Aquele teste deve fazer o que?

Então nos testes a gente tem que tentar manter legibilidade, a gente tem que ler o teste e saber do que se trata, o que é esperado pra aquela função.

O teste além de testar o seu código ele pode trazer de alguma forma uma documentação pra sua aplicação, porque lendo aquele conjunto de testes voce consegue entender como funciona aquele metodo, o que voce espera daquela determinada função e assim por diante.

Então aqui eu trouxe um exemplo simples de como melhorar esses nomes.



Aqui na equipe nós temos um hábito de criar mais describes, encadeando um dentro de outro mesmo.

No primeiro describe fala mais sobre o modulo geral, ai no de dentro é mais especifico, já fala da função em si que está sendo testada...

E por convenção nossa, voces vão ver em alguns dos nossos projetos o nome mesmo da função no describe.
Pra identificar que os testes dentro daquele describe são pra aquela função especifica.

Mas aqui pra exemplificar eu trouxe mais genérico com esse nome Create product...

Dentro dele o teste em si, ai sim aqui essa descrição, esse nome é o mais importante, é aqui que voces devem focar em colocar um nome, uma descrição que faça sentido com o que voce espera daquele teste.

Aqui eu to falando que eu espero que seja criado um novo produto.

Ai posso ter outro teste que eu espero que falhe caso já exita o produto cadastrado com aquele mesmo nome ou sku.

E nesse describe fica tudo referente a essa criação de produtos.

E sobre está escrito em ingles ou português, isso vai tudo do que está definido com a sua equipe.
Não existe certo ou errado... A gente aqui prefere manter por padrão tudo em ingles mesmo. Mas isso é gosto pessoal.


---------------------
#5 Organize seus testes

Da mesma forma que um código bagunçado fica difícil de dar manutenção, um teste sem organização vai demandar mais tempo e esforço pra voce entender e identificar o que voce quer com aquele teste. o que voce espera daquele teste.

Então pra testes existe um pattern uma convenção pra ajudar a melhorar a leitura dos testes. Ele é triple A!

Arrange, Act e Assert

Que significa basicamente voce separa o teu teste em tres sessões.

Arrange, que é o organizar ou preparar.
É ali que voce vai criar as variáveis que voce precisa, os mocks, vai definir tudo o que voce precisa pra aquele teste.

A segunda parte, o ACT, que é a ação, é onde voce vai chamar a tua função, o método que voce quer testar, passando as variáveis que voce criou no bloco anterior se preciso.

E ai vem a terceira parte, que é o Assert, a verificação em si.
É nela que voce vai validar se o teste funciona como o esperado.



Ai nesse exemplo aqui que eu to mostrando, por mais que o teste funcione, só o fato de estar tudo junto, dificulta muito a leitura e batendo o olho a gente não consegue identificar exatamente o que tá sendo testado, o que está sendo passado, mau consegue ver o que está sendo esperado, nesse caso ele espera receber uma propriedade ID.

Mas agora separando o meu teste naquelas sessões, Arrange, act e assert eu consigo fluir a leitura, consigo ver de uma forma mais clara o que cada coisa faz.

As vezes eu não preciso ter todos esses passos, mas só o fato de eu separar esses blocos já vai ajudar ler e entender melhor o teste.



---------------------
#6 Só uma asserção por teste

Essa aqui é um ponto complicado, porque não adiante eu ter um monte de asserção de verificação no teste se eu não puder garantir que tudo aquilo esteja funcionando, ou será que eu realmente preciso de um monte validação ali pra garantir que a minha função está dentro do esperado.

Então, quanto mais expect eu tiver, mais pesado vai ser meu teste unitário, por mais que seja coisa minima, mas vai suja meu escopo, vai dificultar a leitura e por fim eu realmente preciso de tudo aquilo?

E se eu realmente preciso daquilo tudo, será que não é o meu método ou minha função que não precisa ser refatorada?

Porque seguindo o principio do SOLID, o S, o Single Responsability, a minha função deve fazer somente uma coisa, então será mesmo que eu preciso fazer um monte de expect dentro do meu teste ou preciso refatorar essa função?

E não porque eu coloquei "Só uma asserção por teste" que precisa seguir isso ao pé da letra.

Vão ter testes que voce pode validar mais coisas, isso é bem comum, o problema é o exagero!

Blz?


Então aqui a gente chegou na parte boa, na parte de botar a mão na massa!


# 2 - Live Coding

Então, eu trouxe aqui uma aplicação bem simples, mas antes da gente botar a mão na massa , antes da gente criar um teste, vamos dar uma olhada como ela está funcionando, porque eu já deixei ela meio estruturada pra gente focar na parte dos testes...

A estrutura que eu estou utilizando aqui é bem simples.

Pra esse projeto eu to utilizando o express pra fazer essa parte do servidor dessa API.

E para a parte do banco de dados, eu iria utilizar o prisma com postgres, mas tive alguns problemas de usuário, portas e burocracias na maquina da empresa, ai pra contornar esse problema eu criei um repositóriozinho fake com JSON aqui somente pra exemplificar um banco de dados e a gente conseguir acompanhar os testes.

Ai a estrutura do projeto ficou dividida em REPOSITÓRIOS.

Nesse repositories, o que eu fiz? pensando numa estrutura limpa e onde eu consiga utilizar de forma desacoplada. Eu tentei trazer alguns conceitos do SOLID

## IProductsRepository.ts
Eu criei aqui uma interface com dois métodos, que são os métodos de criação e o método pra verificar se o produto existe.

O método de criação ele vai receber os dados do produto e criar.

E o método do exist vai receber o SKU que é do tipo string pra verificar no banco se o produto já tá cadastrado ou não.

Essa interface ela server basicamente como um contrato, ela define quais são os métodos que eu vou ter disponível nos meus possíveis repositórios!

Ai aqui eu tenho disponível como eu comentei com voces o repository do Prisma, que não vou conseguir utilizar e demonstrar nessa apresentação.

Tenho também o repository local.

## ProductsRepositoryLocal.ts

aqui no local ele vai simular um banco de dados, mas vai salvar tudo em um json.

Eu deixei criado também esse IN-MEMORY que é uma outra forma da gente estar testando essas interações com banco, sem a necessidade de criar MOCKs... salvando tudo em memória durante a execução da aplicação.

Ai esses dois arquivos, esses dois repositories eles vão implementar aquela interface que eu mostrei que define quais métodos devem conter.



Ai nesse diretório de cima a gente vai para a camada dos módulos, isso vai de preferencia de cada um, tem gente que prefere separa essa camada em controllers, services, useCases, etc...

Aqui eu trouxe todos juntos pra ficar mais fácil exemplificar.

## CreateProductService.ts
Ai aqui dentro eu tenho esse método execute que contem toda a regra de negócios, e aqui ele vai primeiro verificar se o produto já existe né, caso exista ela vai dar um erro, vai lançar uma exceção! trazendo essa mensagem.

Caso não exista ele vai criar!

## CreateProductController.ts
Ai eu tenho aqui um controller bem simples também que tem um único método, que recebe as informações pelo request body e repassa pro service. bem básico.

Um detalhe importante aqui é que todas essas chamadas eu to passando aqui no meu construtor, tanto aqui como no service. Mas pra que isso?

Porque seu eu quiser mudar o meu tipo de repositório, banco de dados eu simplesmente vou ali e mudo qual é a instancia que eu vou utilizar.

E onde eu to instanciando esses cara. É aqui nesse meu CreateProductFactory!

## CreateProductFactory.ts

Aqui eu também criei uma função bem simples, que aqui eu coloco qual é o repositório que eu quero utilizar na aplicação, ai eu passo o repositório pra dentro do meu service e passo o service pra dentro da controller e dou um retorno nessa controller.

Mas pra que?

Pra eu pode utilizar aqui nas rotas!

## routes.ts
Então aqui nesse exemplo eu só tenho uma rota, que eu to só chamando a minha função daquele retorno da minha factory, chamando o handle de dentro da minha controller passando o request e response.

Então, depois seu eu precisar mudar ou implementar realmente um banco de dados eu só crio o repository e mudo aqui dentro da minha factory.


Ai aqui no APP eu só to instanciando o express, criando aqui o meu servidor

E tenho aqui o meu arquivo server que só realmente inicia a aplicação.



##########################################

Então basicamente a gente já está pronto pra iniciar a aplicação e começar a testar, um detalhe aqui no arquivo do jest.config, o testMatch, que é onde o jest vai procurar os arquivos teste.

Tem equipe que gosta de separar os teste dentro de uma pasta teste, tem gente que cria os arquivos de teste junto com os arquivos de código.

Aqui pro nosso exemplo eu vou criar os aquivos seguindo esse padrão.

Pra ele procurar qualquer arquivo que termine com esse *.spec* , mas tem equipe de usa .test ou usa o diretório separado. Isso é padrão de cada equipe.


Ai então vamos aqui dentro do modulo criar o nosso arquivo *CreateProductService.spec.ts*

Aqui dentro dele a gente vai criar o nosso teste unitário, ai voce pode perguntar, mais porque o product service?
É porque nele que a gente tem definida as regras de negócio da nossa aplicação.

Então vamos começar criando o nosso describe...
