/**
 * Copy orientado ao PROBLEMA (não à solução).
 * Ref.: "Apaixone-se pelo Problema, Não pela Solução" — fale da dor, não da tecnologia.
 */

export const brand = {
  cerimonial: "Ágape Realizações",
  byline: "by Ágape",
} as const;

/** Nome do app = dor que a cerimonialista quer eliminar */
export const appName = {
  full: "Sem Fila na Porta",
  short: "Sem Fila",
  /** PWA / manifest — problema em uma frase */
  description:
    "Chega de fila na entrada. Saiba na hora quem já chegou ao seu evento.",
} as const;

export const download = {
  installedTitle: "Pronto para a porta",
  installedBody: "Agora você consegue liberar convidados sem aquele gargalo na entrada.",
  openApp: "Ir para a porta do evento",
  tagline: "Chega de fila na entrada",
  subtitle: "Saiba quem já chegou — sem lista de papel, sem travar na porta",
  installTitle: "Use na porta do evento",
  installBody:
    "Para usar na porta, instale no celular de quem recepciona. Abre direto da tela inicial — na correria da entrada, isso faz diferença.",
  installButton: "Colocar na tela do celular",
  installHint: "Ou siga o passo a passo abaixo",
  demoLink: "Só quero ver como funciona (demo)",
} as const;

export const events = {
  screenTitle: "Qual evento agora?",
  hint: "Toque no casamento que está acontecendo neste momento",
  openHint: "Abrir porta deste evento",
  soon: "Em breve",
} as const;

export const eventHub = {
  screenTitle: "Casamento Aline",
  activeLabel: "Na porta agora",
  activeHint: "É aqui que a fila costuma formar",
  scanTitle: "Liberar na hora",
  scanHint: "Convidado com QR na mão — sem demora",
  searchTitle: "Sem QR ou sem celular?",
  searchHint: "Busque pelo CPF e libere na mesma hora",
  offlineTitle: "Só este celular",
  offlineHint: (on: boolean) =>
    on
      ? "Ativo — lendo QR codes offline"
      : "Sem sinal? Ler QR codes offline",
  offlineModalTitle: "Modo offline",
  offlineModalBody:
    "Sem internet, este celular continua lendo QR codes e liberando entradas. Só este aparelho funciona na fila até o sinal voltar — os demais ficam pausados.",
} as const;

export const dashboard = {
  screenTitle: "Quem já chegou",
  eventName: "Casamento Aline",
  countLabel: "já passaram pela porta",
  confirmed: "Na festa",
  waiting: "Ainda não chegaram",
  refresh: "Atualizar agora",
} as const;

export const scanner = {
  screenTitle: "Liberar entrada",
  hint: "Aponte para o convite do convidado",
  cameraError:
    "Não deu para usar a câmera. Libere o acesso nas configurações — sem isso a fila não anda.",
  back: "Voltar",
} as const;

export const cpf = {
  screenTitle: "Buscar convidado",
  label: "CPF ou RG",
  placeholder: "000.000.000-00",
  submit: "Liberar entrada",
  demoHint: "Demo: 987.654.321-00 ou outros CPFs de teste",
} as const;

export const result = {
  successAline: "OK: Aline pode entrar",
  successGuest: (name: string) => `OK: ${name} pode entrar`,
  successGeneric: "OK: liberado para entrar",
  alreadyTitle: "Já passou pela porta",
  alreadySubtitle: "Esse convidado já foi registrado neste evento.",
  notFoundTitle: "Não está na lista",
  notFoundSubtitle: "CPF não encontrado entre os convidados deste evento.",
  continue: "Continuar",
} as const;

export const bottomNav = {
  scanQr: "Ler QR code",
  /** Rota do evento ativo na demo */
  scanRoute: "/app/eventos/casamento-aline/ler",
  live: "Quem chegou",
  manage: "Meus eventos",
  manageAlert:
    "Organizar eventos e listas de convidados ainda será pelo computador.\n\nEm breve você faz tudo daqui — por enquanto, o foco é acabar com a fila na porta.",
  profile: "Perfil",
} as const;

export const settings = {
  screenTitle: "Perfil",
  account: "Sua conta",
  demo: "Demonstração",
  notify: "Aviso quando alguém entra",
  sound: "Som ao liberar entrada",
  vibrate: "Vibrar ao ler convite",
  readers: "Quem ajuda na porta",
  readersHint: "Até 5 pessoas na equipe · Em breve",
  emailBrand: "Convite por e-mail com sua marca",
  reset: "Zerar demo",
  resetConfirm: "Zerar contadores da demonstração?",
  resetDone: "Demonstração reiniciada.",
  footer: "Sem Fila na Porta · demo Ágape",
} as const;

export const wallet = {
  screenTitle: "Convite na carteira",
  title: "Em breve",
  body: "Muitos convidados perdem o e-mail do convite. Em breve eles poderão guardar o ingresso no Google ou na Apple Wallet — e chegar na porta sem procurar mensagem.",
  back: "Voltar",
} as const;

export const admin = {
  mobileTitle: "Use o computador",
  mobileBody:
    "Montar evento e subir a lista de convidados ainda é no computador. Na porta do casamento, use o celular com este app.",
  back: "Voltar",
  demoTitle: "Painel (demonstração)",
  demoHint: "Aqui você montaria o evento antes do grande dia",
  newEvent: "Novo evento",
  createDemo: "Criar (demo)",
  importTitle: "Lista de convidados",
  importHint: "Planilha com nome, e-mail e CPF — antes do evento",
  importDemo: "Importar CSV (demo)",
} as const;
