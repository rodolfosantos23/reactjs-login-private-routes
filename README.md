# Login com ReactJS, NodeJS com rotas privadas em Typescript
Exemplo de uma tela de login com rotas privadas criada com ReactJS e NodeJS.

O login é feito com Basic Auth, é gerado um Token pelo Json Web Token, esse token deve ser enviado nas requisições via **bearer authentication**.

Não foquei na estilização CSS dos components e sim na sua lógica.

O usuário e senha estão **hard-code**, fixos diretamente no código para facilitar, mas devem ser implementados
em um banco de dados.


# Linguagens e tecnologias utilizadas
- Node.js 
- Javascript
- Typescript
- CSS
- Express
- Json Web Token

# Instalação
Para instalar as dependências:

<pre>
npm install
</pre>

Com o Yarn:

<pre>
yarn install
</pre>

# Utilização
Para rodar o servidor, ir para a pasta **`backend`**

<pre>
npm run start
</pre>

Com Yarn:

<pre>
yarn start
</pre>

Para rodar a aplicação, na pasta **`frontend`**

<pre>
npm run start
</pre>

Com Yarn:

<pre>
yarn start
</pre>

# Exemplo

Para testar utilize o usuário **`usuario`** e senha **`senhasecreta`**


Exemplo de login **inválido**:

<img src="https://github.com/rodolfosantos23/imagens/blob/master/reactjs-login-private-routes/login-senha-incorreta.gif" width="500" />


Exemplo de login **válido**:

<img src="https://github.com/rodolfosantos23/imagens/blob/master/reactjs-login-private-routes/login-senha-correta.gif" width="500" />

Exemplo de **logout**:

<img src="https://github.com/rodolfosantos23/imagens/blob/master/reactjs-login-private-routes/login-logout.gif" width="500" />
