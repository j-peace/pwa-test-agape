# Sem Fila na Porta — Demo (Ágape)

PWA de demonstração focada na dor da cerimonialista: **fila na entrada** e **não saber quem já chegou**.

## Rodar local

```bash
npm install
npm run dev
```

Acesse no celular pela rede local (HTTPS recomendado para câmera). Para testar câmera em produção, use deploy com HTTPS.

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Conecte o repositório na [Vercel](https://vercel.com)
2. Framework: Vite
3. Após deploy, substitua `SEU-DEPLOY.vercel.app` em `email-demo.html` pela URL real
4. Envie o HTML do email manualmente para a convidada

## Fluxo da demo

1. Abrir link → página de instalação do PWA
2. Instalar no celular (ou usar "Modo demonstração")
3. Eventos → **Casamento Aline**
4. Ler QR (qualquer QR) → verde "Aline liberada"
5. Ler de novo → "Já entrou"
6. CPF `987.654.321-00` também funciona

## Resetar demo

No console do navegador: `localStorage.removeItem('agape_demo_state')`
