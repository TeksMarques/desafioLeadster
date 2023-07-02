# Desafio Leadster

Este é um repositório com o desafio técnico para a vaga de FrontEnd da empresa Leadster

# Descrição

O desafio consiste na criação de uma Landing Page utilizando o framework NextJs e Styled Components. E o foco é ter uma página, atraente responsiva e seguindo os padrões de layout fornecidos.

# Organização do Código

Como no Next só é necessário a criação de um arquivo index dentro do diretório pages, então criei componentes para ser renderizados no arquivo pages/index.tsx, assim tendo um projeto de fácil manutenção e organização, eles foram:

- Header:
  - Que possuo o cabeçalho da página contendo a logo da empresa e um titulo.
- NavBar:
  - Onde está os botões de filtros para pesquisa de conteúdo.
- MainPage:
  - Onde está o conteúdo principal da página, a renderização dos cards e a função de chamar um modal ao ter o card clicado.
- SectionInfos:
  - Que trás informações do uso dos produtos oferecidos pela empresa Leadster.
- Footer:
  - Trás as informações de contato da empresa
 
Também foi desenvolvido testes para página, que foram desenvolvidos para cada componente e para o arquivo principal de renderização da página

# Tecnologias utilizadas

  - NextJs;
  - TypeScript;
  - Styled Components;
  - Jest;
  - Node;

# Utilizando o projeto localmente:

Obs.: É necessário o uso do Node para rodar o teste localmente, então certifique de ter instalado na sua máquina, mas se você nao tiver pode utilizar este link para ter acesso e instalar: https://nodejs.org/en

Clone o projeto
```bash
  git clone git@github.com:TeksMarques/desafioLeadster.git
```
Entre no diretório do projeto
```bash
  cd desafioLeadster
```
Instale as dependências
```bash
  npm install
```
Inicie o servidor
```bash
  npm run dev
```
Abre o navegador 
```bash
   http://localhost:3000/
```
Para rodar os todos testes 
```bash
  npm test
```
Para rodar os testes da page
```bash
  npm test ./pages/index.test.tsx
```
Para rodar os testes dos components
```
  npm test ./components/nome-do-component/index.test.tsx
```
# Link da Página 

https://teresa-marques-desafio-leadster.vercel.app/

# Desenvolvimento do projeto

Durante a execução desde desafio aprendi mais sobre a utilização do Next, uma ferramenta pouco utlizada por mim, mas que permite a criação de aplicações de forma ágil. Vi que o uso do Styled Components facilita muito na questão da aplicação do css e também na maneira das utilizações das tags, gostei bastante de ter utilizado e será algo implementado nos meus próximos projetos. <br/><br/>
Para a implementação dos testes fiz o uso da biblioteca Jest, a qual tenho costume de utilizar, além disso é uma ferramente muito utilizada dentro da comunidade e que permite a criação tanto de testes unitários e de integração. <br><br/>
Por fim, foi gratificante concluir construção desse desafio, fico feliz pelo o que pude desenvolver e já fico pensando em melhorias e adições de funções que podem vir a ser implementadas dentro do código.

# Desenvolvido por

<a href="https://github.com/TeksMarques" target="blank">Teresa Marques</a>





