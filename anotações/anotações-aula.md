# ANOTAÇÕES DE AULA
* Package.json: Arquivo inicial de um projeto node.js. Contendo informações de nome do autor, nome do projeto, versão, descrição, etc.

* Nodemon: dependencia usada para rodar o arquivo a cada modificação realizada.

```typescript
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node -r tsconfig-paths/register src/main.ts"
}

```
1. Watch: Indica qual pasta o nodemon tem que observar.
2. exs: extensões de arquivos que devem ser observadas.
3. ignorar: quais arquivos devem ser ignorados.
4. exec: comando de execução.


# Comandos de execução
## instalação do nest
* npm install -g @nest/cli

## inicializar aplicação 
* nest new nome-pasta-aplicação --package-manager npm

## Matar o terminar e reinicar a execução manualmente
* CTRL + C
* npm run start

## Instalar nodemon
* npm install --save-dev nodemon
* touch nodemon.json --> criação de arquivo nodemon.js

## Alteração de script package.json
* "start:dev": "nodemon"

## Depois da instalação e inserção do nodemon no script, executar no terminal
* npm run start:dev

## Instalação do UUID
* npm install uuid
* npm instal --save-dev @types/uuid

## Criação de pastas
* nest generate services nomeserviço
