# 🎂 LaDulce

Plataforma de comércio digital para venda de itens de festa — bolos, salgados, refrigerantes e outros produtos para eventos e celebrações.

> Projeto acadêmico — ADS Fatec Taubaté

## 📋 Sobre o projeto

O LaDulce permite que clientes naveguem pelo catálogo de produtos, montem o carrinho, cadastrem endereços de entrega e finalizem pedidos com cálculo de frete via CEP e simulação de pagamento (PIX, cartão ou dinheiro). Também conta com um fluxo de status de pedido, do recebimento até a entrega.

## ✨ Funcionalidades

- Cadastro e login de usuários com autenticação via JWT
- Catálogo de produtos com categorias, filtros e upload de imagem
- Carrinho de compras persistido no banco de dados
- Cadastro e gerenciamento de endereços de entrega
- Cálculo de frete por CEP (integração com ViaCEP)
- Checkout com múltiplas formas de pagamento (PIX, cartão, dinheiro)
- Acompanhamento de status do pedido (aguardando → em preparo → pronto → entregue)
- Webhook para atualização de status de pagamento por gateway externo

## 🛠️ Tecnologias utilizadas

- **[Fastify](https://fastify.dev/)** — framework web para Node.js (backend/API)
- **[Prisma ORM](https://www.prisma.io/)** — modelagem e acesso ao banco de dados
- **[Supabase](https://supabase.com/)** — banco de dados PostgreSQL na nuvem + Storage para imagens de produtos
- **HTML / CSS / JavaScript vanilla** — frontend (Single Page, sem framework)
- **JWT + bcrypt** — autenticação e hash de senhas
- **[ViaCEP](https://viacep.com.br/)** — consulta de endereço por CEP

## 📁 Estrutura do projeto

```
.
├── backend/
│   ├── server.js           # ponto de entrada do servidor Fastify
│   ├── auth.js              # registro e login (JWT, bcrypt)
│   ├── usuarios.js          # perfil e troca de senha
│   ├── categorias.js        # CRUD de categorias
│   ├── produtos.js          # CRUD de produtos + upload de imagem (Supabase Storage)
│   ├── enderecos.js         # CRUD de endereços do usuário
│   ├── carrinho.js          # carrinho de compras persistido
│   ├── pedidos.js           # criação e consulta de pedidos (com transaction)
│   ├── checkout.js          # cálculo de frete (ViaCEP) e webhook de pagamento
│   ├── prisma/
│   │   └── schema.prisma    # modelos do banco de dados
│   └── .env                 # variáveis de ambiente (não versionado)
├── frontend/
│   ├── index.html           # página principal (catálogo, carrinho, checkout)
│   ├── login.html           # login e cadastro
│   └── perfil.html          # perfil do usuário
├── generated/
│   └── prisma/               # client Prisma gerado (não versionado)
└── README.md
```

## 🗄️ Modelo de dados

Principais entidades e relações:

```
Usuario ──┬── Endereco (1 usuário tem vários endereços)
          ├── Pedido   (1 usuário tem vários pedidos)
          └── Carrinho (1 usuário tem 1 carrinho)

Carrinho ──── ItemCarrinho ──── Produto

Pedido ──┬── ItemPedido ──── Produto
         ├── Pagamento
         └── Entrega

Produto ──── Categoria
```

Enums principais: `Role` (CLIENTE, ADMIN), `StatusPedido`, `TipoPedido` (ENTREGA, PRESENCIAL), `FormaPagamento` (PIX, CARTAO, DINHEIRO), `StatusPagamento`, `StatusEntrega`.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (versão LTS recomendada)
- Uma conta/projeto no [Supabase](https://supabase.com/) (banco PostgreSQL + Storage)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ladulce.git
cd ladulce

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp backend/.env.example backend/.env
# edite backend/.env com suas credenciais do Supabase

# Gere o client do Prisma e rode as migrations
npx prisma generate
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

O frontend (`frontend/index.html`) pode ser aberto diretamente no navegador ou servido por um servidor estático simples, apontando as chamadas de API para o backend rodando localmente.

## ⚙️ Variáveis de ambiente

Crie um arquivo `backend/.env` com, por exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@host:5432/ladulce"
SUPABASE_URL="https://seu-projeto.supabase.co"
SUPABASE_KEY="sua-service-role-ou-anon-key"
JWT_SECRET="sua-chave-secreta"
PORT=3000
```

## 📡 Principais rotas da API

| Método | Rota | Auth | Descrição |
|---|---|---|---|
| POST | `/auth/registrar` | ❌ | Criar conta |
| POST | `/auth/login` | ❌ | Login, retorna JWT |
| GET | `/usuarios/perfil` | ✅ | Dados do usuário logado |
| PUT | `/usuarios/atualizar` | ✅ | Atualiza nome/email/telefone |
| PUT | `/usuarios/senha` | ✅ | Troca senha |
| GET | `/categorias/listar` | ❌ | Lista categorias |
| POST | `/categorias/cadastrar` | ❌ ⚠️ | Cria categoria |
| GET | `/produtos/listar` | ❌ | Lista produtos com filtros |
| GET | `/produtos/listar/:id` | ❌ | Detalhe de um produto |
| POST | `/produtos/cadastrar` | ❌ ⚠️ | Cria produto + upload de imagem |
| PUT | `/produtos/atualizar/:id` | ❌ ⚠️ | Atualiza produto |
| DELETE | `/produtos/excluir/:id` | ❌ ⚠️ | Remove produto + imagem |
| GET | `/enderecos/listar` | ✅ | Lista endereços do usuário |
| POST | `/enderecos/criar` | ✅ | Cria endereço |
| PUT | `/enderecos/:id` | ✅ | Atualiza endereço |
| DELETE | `/enderecos/:id` | ✅ | Remove endereço |
| GET | `/carrinho` | ✅ | Retorna carrinho do usuário |
| POST | `/carrinho/itens` | ✅ | Adiciona item ao carrinho |
| PUT | `/carrinho/itens/:productId` | ✅ | Altera quantidade |
| DELETE | `/carrinho/itens/:productId` | ✅ | Remove item |
| POST | `/pedidos/criar` | ✅ | Cria pedido (fecha carrinho) |
| GET | `/pedidos/listar` | ✅ | Histórico de pedidos |
| GET | `/pedidos/:id` | ✅ | Detalhe de um pedido |
| PUT | `/pedidos/:id/status` | ✅ 👑 | Avança status (só ADMIN) |
| POST | `/checkout/frete` | ❌ | Calcula frete por CEP (ViaCEP) |
| POST | `/checkout/webhook` | ❌ | Recebe atualização do gateway de pagamento |

**Legenda:** ✅ exige token JWT · ❌ pública · ⚠️ deveria ter proteção de ADMIN (pendência conhecida) · 👑 exclusivo para ADMIN

> Documentação completa das rotas, exemplos de payload e explicações linha a linha estão disponíveis no arquivo de documentação técnica do projeto.

## 🔒 Segurança

- Senhas nunca são armazenadas em texto puro — são convertidas com **bcrypt** antes de salvar no banco.
- Autenticação feita via **JWT**, verificado em todas as rotas protegidas.
- O preço dos itens do pedido é sempre recalculado a partir do banco de dados no backend, nunca confiando no valor enviado pelo frontend.
- Rotas de endereço e pedido validam se o recurso pertence ao usuário autenticado antes de permitir edição ou visualização.

### Pendências conhecidas

- As rotas de categorias e produtos (cadastro, atualização e exclusão) ainda não exigem autenticação de ADMIN.
- O webhook de pagamento é público; em produção deve validar a assinatura HMAC enviada pelo gateway.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Envie para o repositório remoto (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 📄 Licença

Projeto acadêmico desenvolvido para o curso de ADS da Fatec Taubaté.
