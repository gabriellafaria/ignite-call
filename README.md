<h1>Ignite call</h1>

- Link para o figma:
  https://www.figma.com/file/9ma4nN4ZDUQy8t7Lsdc8Vz/Ignite-Call-(Community)?type=design&node-id=0-1&mode=design&t=8jcmnVER6UP9E5di-0

Esse projeto será desenvolvido com o React.JS | Next.JS. <br />
Para iniciar um projeto com o Next: `npx create-next-app@latest --use-npm`

É usado, também, o design system desenvolvido anteriormente.

---

<h3>Criando o css global da aplicação</h3>
Crie uma pasta de styles, dento de pages. <br />
Adicione o arquivo global, nele, importe o globalCss.

Para adicionar uma nova fonte, busque o import desejado e no `_document`, adicione os imports da fonte selecionada dento da tag `Head`.

Para ativar o server side rendering é necessário adicionar a tag `<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText }} />  ` em `_document`, `Head`.

---

<h3>Configurando o ESLint</h3>

Importa a configuração da rocketseat, `npm i @rocketseat/eslint-config -D` <br />
Adicione um array de dependencias, com a configuração do next e da rocket.

---

<h3>PageExtensions</h3>
Com o pageExtensions, você consegue determinar quais são as extensões de arquivos que o next deve criar como rotas. <br />
Adicionamos o pageExtensions em `next.config.js`.

---

<h3>Intellisense - stiches | css </h3>

O Design System usado não foi desenvolvido com as novas features, então, é nessesário alterar o `"moduleResolution":` para `"node"` no tsconfig.json.

<h3>React Hook Form - Zod</h3>

A função register é usada para conseguirmos acessar e manipular o(s) campo(s) do form. A função handleSubmit, aceita, como parâmetro, uma função criada anteriormente.

Conseguimos criar a tipagem das informações do formulário através do zod, criando a sua Schema. É possível adicionar as verificações de formulário nela, assim como a transformação do valor.

Tranformações de dados podem ser declaradas adicionando o .transform dentro do Schema, por exemplo: `.transform((value) => value.toLocaleLowerCase())`.

Para exibirmos as validações em tela, usamos o formState, recebendo os erros, `formState: { erros }`

---

<h4>Regex</h4>

Para criarmos um regex, precisamos adicionar as regras dentro de duas barras: `//`.

O `^` é para indicar que nosso texto deve começar, o conteudo fica dentro de parênteses e colchetes `/([])/`. Para indicar que pode conter letras, adicionamos `/([a-z])/`, adicionamos duas barras invertidas para apontar que o próximo valor é uma nova parte que queremos permitir, e para aceitar o hifen, declaramos `/([a-z\\-])/`.
Quando queremos apontar que os termos podem ser repetidos, asicionamos o + no final, e o dollar é para dizer que o nosso texto precisa começar e terminar com essas regras, e não somente conter, `/([a-z\\-]+)$/`. Conseguimos informar que é case insensitive adicionando um i no final, `/([a-z\\-]+)$/i`.

---

<h3>Prisma</h3>

É um ORM para Node, que é integrado ao typescript.<br />
Conseguimos iniciar o prisma com o comando `npx prisma init`, para indicarmos qual é o banco de dados, passamos a flag --datasource-provider nomeDoBanco, nesse caso, iniciaremos com o SQLite. Deste modo, o comando de inicialização fica `npx prisma init --datasource-provider SQLite`<br />
Após o inicio, é criada a pasta do prisma e o arquivo .env. Lembre-se de adicionar o .env no gitignore.

Crie o arquivo prisma.ts, dentro da pasta lib, para configurarmos o setup.

Comando para rodar o banco em ambiente de desenvolvimento: `npx prisma migrate dev`. <br />
Para visualizarmos o banco de dados, temos o comando `npx prisma studio`.

---

<h4>Relação dos comandos prima com o banco de dados</h4>

model - são as tabelas ou collections. <br />
@id - sinaliza que será a primary key <br />
@default(uuid()) - diz que será preenchido automaticamente com o uuid (id unico universal)

---

<h3>Auth</h3>

Neste caso, a conexão será com o Google, para acesso ao calendário.
Para conseguirmos realizar a autenticação social com o google, precisamos criar uma aplicação, para que seja reconhecido. <br />
Será usado o oAuth, acessando o console da google cloud.

<h4>Criando um projeto no Google Console</h4>

Após a criação de um projeto, entramos na tela de permissão OAuth. O User Type deve ser o externo. <br />
O obrigatório é adicionar o nome e dados do desenvolvedor.

Em domínios autorizados, informamos o dominio que será usado na aplicação em produção - podemos alterar depois.

Em escopos, conseguimos selecionar quais informarções gostariamos de acessar do usuário. Não é necessário colocar agora, podemos colocar manualmente na nossa aplicação.
Não é necessário cadastrar um usuário de teste também.

Para conseguirmos comecar a usar, é necessário pubicarmos o aplicativo.

<h4>Crenciais - Id</h4>

Precisamos configurar as credenciais para usarmos na nossa aplicação. Inicie criando credenciais - ID do cliente OAuth.

O tipo de aplicativo é o Aplicativo da Web. No nome, podemos colocar como Next.js client.

Em JavaScript autorizadas, adicionamos o
http://localhost:3000.

URIs de redirecionamento autorizados é onde indicamos qual será a rota do usuário após a autenticação. Como será usado o nextAuth, precisamos adicionar o endereço da aplicação, adicionando `/api/auth/callback/google`, ficando http://localhost:3000/api/auth/callback/google.

O console retorna com os tokens de acesso, você pode baixar o JSON ou já adicionar no seu .env.

Por último, precisamos ativar o googleCalandarApi. <br />
Acesse APIs e serviços, ativar apis e serviço.

---

<h3>Next Auth</h3>

Inicie criando a pasta e arquivo para a configuração do auth em api/auth/[...nextauth].api.ts. - É necessário adicionar o .api. pois definimos que as rotas de api tem o .api e as de páginas tem o .pages.<br />
Em \_app, precisamos adicionar o provider.

Em connect-calandar, no botão conectar, adicionamos um onClick que chamará o signIn para o Google. <br />
É necessário criar o secret para usarmos o NextAuth, adicione com o nome de NEXTAUTH_SECRET em .env. Se estiver no linux ou mac, conseguimos criar uma secret com o comando `openssl rand -base64 32`.

Para conseguirmos salvar as informações, conseguimos o adapter no site do NextAuth, mas também podemos criar um adpter próprio, o que nos permite alterar algumas informações, pois não conseguimos alterar o adpter do NextAuth. <br />

Neste caso, será criado o adapter. Com base no schema do NextAuth, do prisma, adaptamos o schema, com os nomes e campos desejados para a criação das nossas models.<br />
Como foram criados os atributos, é necessário criar a pasta `@types` e então o arquivo `next-auth.d.ts`. <br/>
Dentro de lib, adicionamos a pastinha `auth` e então o arquivo `prisma-adpter`. Podemos usar o modelo dado pelo NextAuth, alterando o necessário. <br />
Em `[...nextauth].api.ts` passamos a propriedade adpter, e chamamos a função do PrismaAdapter, importado da pasta criada.

No método `updateUser`, precisamos criar uma const `prismaUser` pois o Auth localiza o user do parâmetro como partiaal, o que não é o caso. Para evitar os erros, é criada a const, pois o user nunca será criado sem o id, por exemplo.

---

<h4>Dicas</h4>

Instale a extenção do prisma. <br />
Conseguimos adicionar, no User Setting do VSCode, a configuração para formatação automática. `"[prisma]": {"editor.formatOnSave": true}`.

---

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
Next Auth - `npm i next-auth` <br />
