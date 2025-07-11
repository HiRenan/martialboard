# Instruções de Instalação - MartialBoard Login

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Passos para Executar

### 1. Navegar para o diretório do projeto

```bash
cd martialboard-login
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar o servidor de desenvolvimento

```bash
npm run dev
```

### 4. Acessar a aplicação

Abra seu navegador e acesse: `http://localhost:3000`

A aplicação irá redirecionar automaticamente para `/login` onde você verá a tela de login.

## Estrutura Criada

✅ **Projeto Next.js configurado**
✅ **SASS instalado e configurado**
✅ **Lucide React instalado**
✅ **Estrutura de pastas criada**
✅ **Componentes implementados**
✅ **Estilos SASS criados**
✅ **Página de login responsiva**
✅ **Animações implementadas**

## Funcionalidades Implementadas

- 🎨 **Design moderno** com paleta de cores marcial
- 📱 **Layout responsivo** para desktop e mobile
- 🔐 **Formulário de login** com validação
- 👁️ **Botão mostrar/ocultar senha**
- ⏳ **Estado de loading** no botão de submit
- 🎭 **Animações suaves** de entrada
- 🖼️ **Imagem de fundo** temática de artes marciais

## Tecnologias Utilizadas

- **Next.js 15** com App Router
- **SASS/SCSS** com CSS Modules
- **Lucide React** para ícones
- **Inter Font** do Google Fonts

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar produção
npm run start

# Linting
npm run lint
```

## Solução de Problemas

Se encontrar algum erro:

1. **Verifique se o Node.js está atualizado**
2. **Delete a pasta node_modules e package-lock.json**
3. **Execute `npm install` novamente**
4. **Verifique se a porta 3000 está disponível**

## Estrutura de Arquivos

```
martialboard-login/
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   ├── page.jsx
│   │   │   └── page.module.scss
│   │   ├── layout.js
│   │   └── page.jsx
│   ├── components/
│   │   ├── Logo/
│   │   │   ├── Logo.jsx
│   │   │   └── Logo.module.scss
│   │   └── LoginForm/
│   │       ├── LoginForm.jsx
│   │       └── LoginForm.module.scss
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _base.scss
│       └── main.scss
├── package.json
├── next.config.mjs
└── README.md
```

## Próximos Passos

Após executar com sucesso, você pode:

1. **Personalizar as cores** editando `src/styles/_variables.scss`
2. **Modificar o layout** em `src/app/login/page.module.scss`
3. **Adicionar validações** no componente `LoginForm`
4. **Integrar com uma API** de autenticação
5. **Adicionar mais páginas** ao projeto

## Suporte

Se precisar de ajuda, verifique:

- Console do navegador para erros JavaScript
- Terminal para erros de build
- Documentação do Next.js: https://nextjs.org/docs
