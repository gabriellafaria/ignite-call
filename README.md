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
