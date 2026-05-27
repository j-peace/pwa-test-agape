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

**Produção:** https://otimizador-filas-agape.vercel.app/

O repositório [j-peace/pwa-test-agape](https://github.com/j-peace/pwa-test-agape) está ligado à Vercel: cada `git push` na `main` gera build e publicação automática.

Deploy manual (opcional, exige `npx vercel login` uma vez):

```bash
npm run build
npx vercel deploy --prod --yes
```

O `email-demo.html` já usa a URL de produção. Envie o HTML manualmente para a convidada.

## Fluxo da demo

1. Abrir link → página de instalação do PWA
2. Instalar no celular (ou usar "Modo demonstração")
3. Eventos → **Casamento Aline**
4. Ler QR (qualquer QR) → verde "Aline liberada"
5. Ler de novo → "Já entrou"
6. CPF `987.654.321-00` também funciona

## Resetar demo

No console do navegador: `localStorage.removeItem('agape_demo_state')`
