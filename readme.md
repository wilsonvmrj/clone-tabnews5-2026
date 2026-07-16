# Passo a passo do curso

### Instalando a versao correta do nodejs :

```
nvm install 19.6.0
```

**obs**:
Aqui pode ser qualquer versão utilizada .

-- Inicia o projeto com o npm init.

Aqui tudo no padrao só alterou a licença.

-- Instalando o next

```
npm install next@13.1.6
```

-- Instalando o react

```
npm install react@18.2.0
```

--intall bibliotecas do react

```
npm install react-dom@18.2.0
```

## Configurando o standardjs no projeto .

Criara o arquivo `.editorconfig`

```
  root=true

[*]
indent_style = space
indent_size = 2

```

## Instalando e configurando o Prettier

```
npm install prettier -D
```

## Adicionar tambem no arquivo `package.json`

```
scripts{
  "lint:check": "prettier --check ."
}
```

-- Milestone - 1 - Fundação

## Estrutura de pastas:

📦root/
├──📂pages/
│ └──📄index.js
├──📂models/
│ ├──📄users.js
│ ├──📄content.js
│ └──📄password.js
├──📂infra/
│ ├──📄database.js
│ ├──📂migrations/
│ └──📂provisioning/
│ ├──📂staging/
│ └──📂production/
└──📂tests/

## Testes automatizados

### Instalando o Testrunner

```
npm install --save-dev jest@29.6.2

```

add on `package.json`

```
scripts: {
  "test":"jest"
}
```

### Indicação de curso de javascript:

https://youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1

## Banco de dados

### criado docker compose do projeto

```
version: "3.8"
services:
  database:
    image: postgres:16.0-alpine3.18
    environment:
      POSTGRES_PASSWORD: "local_password"
    ports:
      - "5432:5432"
```

## Instalando lib conexão ao banco de dados

```
npm install pg@8.11.3
```

## Definindo o root path:

Criar o arquivo :
jsconfig.json

```
{
  "compilerOptions":{
    "baseUrl": "."
  }
}

```

## Macete para buscar arquivos

Busca difusa :
CTRL + P e o nome do arquivo.
Para procurar algo dentro do arquivo :
CTRL+P nomedoarquivo@textodoondequerdigitar... CTRL+P+KG@scripts

## Inciando o docker direto pelo scripts

"scripts":{
"services:up": "docker compose -f infra/compose.yaml up -d"
}

## Aula.https://curso.dev/web/criar-modulo-database
