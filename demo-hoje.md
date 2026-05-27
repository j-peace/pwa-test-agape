## Demo de hoje (entregar rápido, sem prometer demais)

Objetivo: entregar **uma demonstração funcional** que prova a experiência de leitura de QR code e o fluxo básico, sem depender de burocracias (Wallet, aprovações, etc.) e sem infraestrutura complexa.

**Escopo real:** você envia o email + link pra ela baixar o PWA. Ela testa sozinha. É pra cumprir prazo e despertar interesse — possível apresentação posterior com mais detalhe.

---

## O que dá pra fazer HOJE (promessa segura)

- **PWA instalável (atalho na tela inicial)**
  - Abre em modo “app”, com ícone e nome.
  - Funciona em Android e iPhone (Safari/Chrome).
  - **Incremento:** No navegador, página de download com botão “Instalar app” + explicação de como instalar (Android vs iPhone). Sem instalar, a pessoa fica só nessa página — o leitor só funciona no PWA instalado.

- **Leitor de QR Code pela câmera**
  - Foco em velocidade + feedback visual (verde/vermelho).
  - **Incremento:** Pode ler **qualquer** QR code — tudo considera OK (mock). Não precisa validar token real hoje.

- **Lista de eventos**
  - 5 eventos na tela: 4 “Em breve” (não clicáveis) — mix de casamentos e festas de 15 anos.
  - 1 clicável: **“Casamento Aline”** → leva para “Iniciar leitura”.

- **1 convidada (ela)**
  - QR code no email (você envia manualmente).
  - **Incremento:** Mockado — qualquer QR lido = sucesso na 1ª vez.

- **Tela de resultado do check-in**
  - 1ª leitura: **“OK: Aline liberada”** (tela verde).
  - 2ª leitura do mesmo QR: **“Já entrou”** (tela vermelha/laranja).

- **Fallback manual**
  - Campo CPF/RG.
  - CPF fixo válido: `98765432100`.
  - + 10 CPFs inventados que também liberam (lista mock no código).

- **Dashboard simples**
  - Total de convidados (mock: ex. 150) vs quantos já entraram (contador local).
  - Atualiza ao fazer check-in (refresh ou estado em memória/localStorage).

- **Menu admin (só desktop)**
  - No celular, ao tentar acessar: alerta **“Acesse via computador para criar eventos e importar convidados.”**
  - No desktop: tela mock de admin (criar evento / importar — visual só, sem backend real).

- **Toggle “Modo offline”**
  - Ao ativar: alerta **“Atenção: essa ação impede que outros dispositivos ajudem na fila.”**
  - Na demo: só visual + mensagem (sem sync real entre aparelhos).

- **Botões Google Wallet / Apple Wallet**
  - Aparecem no email (ou numa tela de convite).
  - Ao clicar: página **“Em breve disponível”** (não prometer Wallet funcionando hoje).

---

## O que NÃO entra na demo de hoje

- Backend real (Supabase, servidor, auth de verdade).
- Envio automático de email (você manda manual).
- Google/Apple Wallet funcionando de verdade.
- Offline com sincronização entre dispositivos.
- WhatsApp / SMS.

---

## Script de venda da demo

- “Hoje quero te provar duas coisas: **a leitura é rápida** e o processo evita fila.”
- Algumas coisas ela valida depois (admin completo, Wallet real, etc.).
- Você envia email + link; ela instala e testa no celular dela.

---

# Passo a passo — o que vou fazer (antes de executar)

Ordem de implementação. Tudo **frontend estático/mock** — dados em `localStorage`, sem API.

### Fase 0 — Setup do projeto (~15 min)

1. Criar app **React + Vite + TypeScript** na pasta do repositório.
2. Configurar **Tailwind CSS** (UI mobile-first, rápida).
3. Adicionar **vite-plugin-pwa** (manifest + service worker mínimo).
4. Definir nome do app, ícone placeholder, `theme-color`.
5. Script `npm run build` + instrução de deploy (Vercel/Netlify ou `npm run preview` local).

### Fase 1 — Roteamento e detecção de contexto (~20 min)

6. Rotas principais:
   - `/` — landing / download do PWA
   - `/app` — área do app (só se “instalado” ou em modo demo)
   - `/app/eventos` — lista de eventos
   - `/app/eventos/casamento-aline` — hub do evento
   - `/app/eventos/casamento-aline/ler` — câmera QR
   - `/app/eventos/casamento-aline/buscar` — CPF/RG
   - `/app/eventos/casamento-aline/dashboard` — contadores
   - `/admin` — painel mock (bloqueado no mobile)
   - `/wallet/em-breve` — Google/Apple “em breve”
7. Detectar **PWA instalado** (`display-mode: standalone` ou `beforeinstallprompt`).
8. Se abrir no browser sem instalar: ficar em `/` com instruções + botão instalar.
9. Detectar **mobile vs desktop** para bloquear `/admin` no celular.

### Fase 2 — Página de download `/` (~25 min)

10. Layout bonito: logo/nome do cerimonial (placeholder).
11. Texto explicando: “Instale no celular para usar na entrada do evento.”
12. Passo a passo **Android** (Chrome → Adicionar à tela inicial).
13. Passo a passo **iPhone** (Safari → Compartilhar → Tela de Início).
14. Botão **“Instalar aplicativo”** (quando o browser permitir `beforeinstallprompt`).
15. Link “Já instalei → Abrir app” → `/app`.

### Fase 3 — Lista de eventos (~20 min)

16. Tela com 5 cards:
    - 4 com badge **“Em breve”**, `pointer-events: none`, opacidade reduzida.
    - Títulos sugeridos: “Casamento Marina”, “15 anos Julia”, “Casamento Pedro & Ana”, “15 anos Sofia”.
    - 1 ativo: **“Casamento Aline”** → navega para hub do evento.
17. Header com nome do app + ícone.

### Fase 4 — Hub do evento “Casamento Aline” (~15 min)

18. Botões grandes:
    - **Iniciar leitura (QR)**
    - **Buscar por CPF/RG**
    - **Ver entradas** (dashboard)
19. Toggle **“Modo offline”** com modal de aviso ao ligar.
20. Link discreto para admin (ou menu) — redireciona conforme device.

### Fase 5 — Leitor de QR (~45 min)

21. Integrar **html5-qrcode** (ou similar) — câmera traseira preferencial.
22. Ao detectar qualquer QR:
    - Se 1ª leitura desta sessão/QR → tela verde **“OK: Aline liberada”** + vibrar/som opcional.
    - Se 2ª leitura → tela **“Já entrou”**.
23. Salvar estado em `localStorage`: `checkedIn: true`, `checkedInAt`, hash do último QR.
24. Botão “Ler novamente” / voltar ao hub.
25. Tratar permissão de câmera negada (mensagem clara).

### Fase 6 — Busca por CPF (~25 min)

26. Input mascarado CPF.
27. Lista mock no código:
    - `98765432100` (Aline)
    - + 10 CPFs fictícios com nomes genéricos.
28. CPF válido → mesmo fluxo verde “liberado”.
29. CPF inválido → vermelho “Não encontrado”.
30. Se Aline já entrou → “Já entrou”.

### Fase 7 — Dashboard (~20 min)

31. Cards: **Esperados: 10** (fixo mock) | **Entraram: N** (dinâmico).
32. `N` incrementa a cada check-in bem-sucedido (localStorage).
33. Barra de progresso visual (%).
34. Botão atualizar (opcional — já reage ao estado).

### Fase 8 — Admin mock (desktop only) (~20 min)

35. Tela com formulário fake: “Novo evento”, “Importar CSV” (botão desabilitado ou “demo”).
36. No mobile: interceptar rota → modal/alerta **“Acesse via computador…”**.

### Fase 9 — Wallet “em breve” (~10 min)

37. Página `/wallet/em-breve` estilizada.
38. Texto: funcionalidade em desenvolvimento.
39. Botão voltar.

### Fase 10 — Email (você envia — eu preparo o conteúdo) (~15 min)

40. Criar arquivo **`email-demo.html`** (ou `.md` com HTML copiável):
    - Visual profissional, nome **Aline**, evento **Casamento Aline**, data fictícia.
    - QR code (imagem estática ou gerada — qualquer payload serve na demo).
    - Botões “Adicionar ao Google Wallet” / “Apple Wallet” → link para `/wallet/em-breve`.
    - Link **“Abrir / Instalar o app”** → URL do deploy `/`.
41. Você cola no Gmail/Outlook e envia pro email dela.

### Fase 11 — Polish e teste (~30 min)

42. Cores: verde sucesso, vermelho erro, tipografia legível no sol.
43. Testar no Chrome Android + Safari iPhone (ou emulador).
44. Testar fluxo: instalar → evento → ler QR 2x → CPF → dashboard.
45. Deploy (Vercel/Netlify) e anotar URL final no topo deste MD.

---

## Checklist final antes de mandar pra ela

- [ ] URL pública funcionando (HTTPS — obrigatório pra câmera).
- [ ] Página `/` abre no celular dela com instrução de instalar.
- [ ] Após instalar, lista de eventos aparece.
- [ ] “Casamento Aline” → leitor funciona.
- [ ] 1ª leitura verde, 2ª “Já entrou”.
- [ ] CPF `98765432100` funciona.
- [ ] Dashboard sobe o contador.
- [ ] Botões Wallet → “Em breve”.
- [ ] Email HTML pronto pra você enviar manualmente.

---

## Estimativa de tempo total

| Fase | Tempo |
|------|-------|
| 0–2 Setup + rotas + download | ~1h |
| 3–7 Core (eventos, QR, CPF, dashboard) | ~2h30 |
| 8–9 Admin + Wallet | ~30 min |
| 10–11 Email + deploy + testes | ~45 min |
| **Total** | **~4h30 a 5h** |

---

## Riscos e mitigação

| Risco | Mitigação |
|-------|-----------|
| Câmera não funciona sem HTTPS | Deploy com HTTPS desde o início |
| iPhone não mostra “Instalar” | Instrução manual Safari na página `/` |
| Ela não instala o PWA | Email deixa claro que precisa instalar |
| Qualquer QR na demo | Combinado — mock aceita tudo |
| Prazo apertado | Cortar admin mock se faltar tempo; manter QR + dashboard |

---

## Status — implementado

- Projeto em `c:\md\cerimonial-leitor-qr`
- Rodar: `npm install` → `npm run dev`
- Build: `npm run build` → `npm run preview`
- Email: editar `email-demo.html` com URL do deploy
- Reset demo: `localStorage.removeItem('agape_demo_state')`
