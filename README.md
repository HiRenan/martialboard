# MartialBoard Login

Uma tela de login moderna e responsiva para a plataforma MartialBoard, um SaaS para academias de artes marciais.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **SASS/SCSS** - Pré-processador CSS com CSS Modules
- **Lucide React** - Biblioteca de ícones
- **Inter Font** - Fonte do Google Fonts

## 🎨 Design

O design equilibra a seriedade e disciplina das artes marciais com uma interface limpa e profissional:

- **Cores**: Vermelho marcial (#E53E3E) como cor principal
- **Layout**: Divisão em duas seções (formulário e imagem)
- **Responsividade**: Adaptação completa para mobile
- **Animações**: Transições suaves e efeitos de entrada

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── login/
│   │   ├── page.jsx          # Página de login
│   │   └── page.module.scss  # Estilos da página
│   ├── layout.js             # Layout principal
│   └── page.jsx              # Redirecionamento para login
├── components/
│   ├── Logo/
│   │   ├── Logo.jsx          # Componente do logo
│   │   └── Logo.module.scss  # Estilos do logo
│   └── LoginForm/
│       ├── LoginForm.jsx     # Formulário de login
│       └── LoginForm.module.scss # Estilos do formulário
└── styles/
    ├── _variables.scss       # Variáveis SASS
    ├── _mixins.scss          # Mixins SASS
    ├── _base.scss            # Estilos base
    └── main.scss             # Arquivo principal SASS
```

## 🛠️ Funcionalidades

- **Formulário de Login**: Campos para email e senha
- **Validação**: Campos obrigatórios e validação de email
- **Mostrar/Ocultar Senha**: Botão para alternar visibilidade da senha
- **Estado de Loading**: Simulação de autenticação
- **Responsividade**: Layout adaptativo para diferentes tamanhos de tela
- **Animações**: Efeitos de entrada suaves

## 🚀 Como Executar

1. **Instalar dependências**:

   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:

   ```bash
   npm run dev
   ```

3. **Acessar a aplicação**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📱 Responsividade

- **Desktop**: Layout dividido em duas colunas (formulário + imagem)
- **Mobile**: Layout em coluna única com imagem no topo

## 🎯 Componentes

### Logo

- Círculo vermelho com a letra "M!"
- Sombra sutil para profundidade

### LoginForm

- Campos de input com ícones
- Botão de mostrar/ocultar senha
- Link "Esqueceu a senha?"
- Botão de submit com estado de loading

## 🎨 Paleta de Cores

- **Vermelho Marcial**: #E53E3E
- **Escuro**: #1A202C
- **Claro**: #F7FAFC
- **Cinzas**: #EDF2F7, #E2E8F0, #CBD5E0, #A0AEC0, #718096, #4A5568

## 📝 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a aplicação em produção
- `npm run lint` - Executa o linter

## 🔧 Configuração

O projeto está configurado com:

- **ESLint** para linting
- **SASS** para estilização
- **App Router** do Next.js
- **CSS Modules** para escopo de estilos

## 📄 Licença

Este projeto foi criado para fins educacionais e de demonstração.
