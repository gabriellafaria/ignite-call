<h1>Ignite call</h1>

- Link para o figma:
  https://www.figma.com/file/9ma4nN4ZDUQy8t7Lsdc8Vz/Ignite-Call-(Community)?type=design&node-id=0-1&mode=design&t=8jcmnVER6UP9E5di-0

Esse projeto será desenvolvido com o React.JS | Next.JS. <br />
Para iniciar um projeto com o Next: `npx create-next-app@latest --use-npm`

É usado, também, o design system desenvolvido anteriormente.

<h3>Criando o css global da aplicação</h3>
Crie uma pasta de styles, dento de pages. <br />
Adicione o arquivo global, nele, importe o globalCss.

Para adicionar uma nova fonte, busque o import desejado e no `_document`, adicione os imports da fonte selecionada dento da tag `Head`.

Para ativar o server side rendering é necessário adicionar a tag `<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText }} />  ` em `_document`, `Head`.

<h3>Configurando o ESLint</h3>

Importa a configuração da rocketseat, `npm i @rocketseat/eslint-config -D` <br />
Adicione um array de dependencias, com a configuração do next e da rocket.

<h3>PageExtensions</h3>
Com o pageExtensions, você consegue determinar quais são as extensões de arquivos que o next deve criar como rotas. <br />
Adicionamos o pageExtensions em `next.config.js`.

<h3>Intellisense - stiches | css </h3>

O Design System usado não foi desenvolvido com as novas features, então, é nessesário alterar o `"moduleResolution":` para `"node"` no tsconfig.json.

<h3>React Hook Form - Zod</h3>

A função register é usada para conseguirmos acessar e manipular o(s) campo(s) do form. A função handleSubmit, aceita, como parâmetro, uma função criada anteriormente.

Conseguimos criar a tipagem das informações do formulário através do zod, criando a sua Schema. É possível adicionar as verificações de formulário nela, assim como a transformação do valor.

Tranformações de dados podem ser declaradas adicionando o .transform dentro do Schema, por exemplo: `.transform((value) => value.toLocaleLowerCase())`.

Para exibirmos as validações em tela, usamos o formState, recebendo os erros, `formState: { erros }`

<h4>Regex</h4>

Para criarmos um regex, precisamos adicionar as regras dentro de duas barras: `//`.

O `^` é para indicar que nosso texto deve começar, o conteudo fica dentro de parênteses e colchetes `/([])/`. Para indicar que pode conter letras, adicionamos `/([a-z])/`, adicionamos duas barras invertidas para apontar que o próximo valor é uma nova parte que queremos permitir, e para aceitar o hifen, declaramos `/([a-z\\-])/`.
Quando queremos apontar que os termos podem ser repetidos, asicionamos o + no final, e o dollar é para dizer que o nosso texto precisa começar e terminar com essas regras, e não somente conter, `/([a-z\\-]+)$/`. Conseguimos informar que é case insensitive adicionando um i no final, `/([a-z\\-]+)$/i`.

<h3>Prisma</h3>

É um ORM para Node, que é integrado ao typescript.<br />
Conseguimos iniciar o prisma com o comando `npx prisma init`, para indicarmos qual é o banco de dados, passamos a flag --datasource-provider nomeDoBanco, nesse caso, iniciaremos com o SQLite. Deste modo, o comando de inicialização fica `npx prisma init --datasource-provider SQLite`<br />
Após o inicio, é criada a pasta do prisma e o arquivo .env. Lembre-se de adicionar o .env no gitignore.

Crie o arquivo prisma.ts, dentro da pasta lib, para configurarmos o setup.

Comando para rodar o banco em ambiente de desenvolvimento: `npx prisma migrate dev`. <br />
Para visualizarmos o banco de dados, temos o comando `npx prisma studio`.

<h4>Relação dos comandos prima com o banco de dados</h4>

model - são as tabelas ou collections. <br />
@id - sinaliza que será a primary key <br />
@default(uuid()) - diz que será preenchido automaticamente com o uuid (id unico universal)

<h4>Dicas</h4>

Instale a extenção do prisma. <br />
Conseguimos adicionar, no User Setting do VSCode, a configuração para formatação automática. `"[prisma]": {"editor.formatOnSave": true}`.

<h3>Dependências do projeto</h3>

Design System - `npm i @ignite-ui/react` <br />
Eslint - `npm i @rocketseat/eslint-config -D` <br />
Phosphor React - `npm phosphor-react` <br />
React Hook Form, Resolvers e Zod - `npm i react-hook-form @hookform/resolvers zod` <br />
Prisma CLI - `npm i prisma -D` <br />
Prisma para acesso ao banco - `npm i @prisma/client` <br />
Axios - `npm i axios` <br />
Nookies - `npm i nookies` <br />
Typagem para intelissence do nookies - `npm i @types/cookie -D` <br />
