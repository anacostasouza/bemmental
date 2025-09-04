Com base no documento do projeto **Bem Mental**, criei um README.md completo e profissional para o repositório:

---

# 🧠 Bem Mental - Plataforma de Suporte Emocional e Atendimento Psicológico

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-%233178C6)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-%23FFCA28)](https://firebase.google.com/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/anacostasouza/bemmental/issues)

</div>

## 📖 Sobre o Projeto

O **Bem Mental** é uma plataforma web desenvolvida como projeto acadêmico que conecta pacientes e profissionais da psicologia, promovendo acesso facilitado e acessível a serviços de saúde mental. A plataforma oferece ferramentas para agendamento de consultas, acompanhamento emocional e suporte psicológico online.

## ✨ Funcionalidades Principais

### 👥 Para Pacientes
- **Cadastro e Autenticação**: Login com e-mail/senha ou Google OAuth
- **Busca de Psicólogos**: Filtros por especialidade, preço, localização e modalidade (presencial/online)
- **Agendamento de Consultas**: Sistema integrado de agendamento e pagamento
- **Acompanhamento Emocional**: Registro diário de emoções e painel semanal
- **Avaliações**: Sistema de feedback para profissionais

### 🧑‍⚕️ Para Psicólogos
- **Perfil Profissional**: Criação e gerenciamento de perfil profissional
- **Gestão de Agenda**: Controle de disponibilidade e agendamentos
- **Atendimento Online**: Suporte para sessões virtuais
- **Acompanhamento Financeiro**: Gestão de pagamentos e consultas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js** com **TypeScript**
- **Vite** como build tool
- **CSS Modules** para estilização
- **React Router** para navegação

### Backend & Infraestrutura
- **Firebase Firestore** (Banco de dados NoSQL)
- **Firebase Authentication** (Sistema de autenticação)
- **Node.js** (Ambiente de execução)

### Ferramentas de Desenvolvimento
- **ESLint** e **Prettier** para qualidade de código
- **Jest** e **Testing Library** para testes

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta Firebase para configuração

### Instalação e Configuração

1. **Clone o repositório**
```bash
git clone https://github.com/anacostasouza/bemmental.git
cd bemmental
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure o Firebase**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Habilite Authentication e Firestore
   - Copie as credenciais para `.env.local`

4. **Execute em modo desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run test         # Executa testes
npm run lint         # Executa ESLint
npm run format       # Formata código com Prettier
```

## 📋 Requisitos do Sistema

### Funcionais
- ✅ Cadastro e autenticação de usuários
- ✅ Sistema de busca e filtros para psicólogos
- ✅ Agendamento de consultas online
- ✅ Registro e acompanhamento emocional
- ✅ Sistema de avaliações e feedback
- ✅ Pagamentos integrados

### Não-Funcionais
- ⚡ Performance (resposta em <2 segundos)
- 🔒 Segurança e conformidade com LGPD
- 📱 Design responsivo e acessível
- 🔄 Escalabilidade para múltiplos usuários

## 🗃️ Estrutura do Banco de Dados

O projeto utiliza **Firebase Firestore** com as seguintes coleções principais:

- `users` - Dados de usuários (pacientes e psicólogos)
- `appointments` - Agendamentos de consultas
- `emotions` - Registros emocionais dos usuários
- `reviews` - Avaliações de profissionais
- `professionals` - Perfis de psicólogos

## 🧪 Testes

Execute a suite de testes:
```bash
npm test
# Para modo watch
npm run test:watch
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Ana Maria de Souza Costa** - [GitHub](https://github.com/anacostasouza)
- **Andressa Matos Dias**
- **Lorayne Luciene Neme Paixão**
- **Marcus Vinícius de Moura Marcelo**
- **Davi Abner Lopes**

<div align="center">
  
💙 **Cuidar da mente é cuidar da vida**

*Projeto acadêmico desenvolvido no Centro Universitário Una - Sete Lagoas, 2025*

</div>

---

## ⚠️ Aviso Legal

Esta plataforma não substitui tratamento psicológico ou médico profissional. Trata-se de um intermediador para facilitar o acesso a serviços de saúde mental. Em caso de emergência, procure ajuda profissional imediatamente.

---

*Última atualização: Março 2025*
