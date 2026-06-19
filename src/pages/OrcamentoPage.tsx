import "./orcamento.css";

export function OrcamentoPage() {
  return (
    <div className="orcamento-page">
      <div className="wrap">
        <header>
          <img src="/agape-logo.jpg" alt="Ágape Realizações" />
          <p className="brand">Ágape</p>
          <p className="brand-sub">REALIZAÇÕES</p>
          <h1>Proposta — App de check-in para eventos</h1>
          <p className="lead">Valores separados para você montar o que faz sentido.</p>
        </header>

        <figure className="cover">
          <img src="/hero-inicial.png" alt="Identidade visual Ágape no app" />
        </figure>

        <div className="card">
          <div className="card-head">
            <h2>Desenvolvimento e servidor</h2>
            <p>
              O pacote essencial já inclui tudo para operar na porta e o convidado gerar o QR pelo site.
            </p>
          </div>
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Módulo</th>
                <th className="num">Valor desenvolvimento</th>
                <th className="num">Custo da plataforma</th>
              </tr>
            </thead>
            <tbody>
              <tr className="macro">
                <td>
                  <span className="badge badge-core">Pacote essencial</span>
                  <p className="module-name">App na porta + painel + confirmação pelo convidado</p>
                  <p className="note" style={{ fontStyle: "normal", margin: "0 0 10px" }}>
                    Os três blocos abaixo vêm juntos. Mensalmente você paga só o servidor — sem taxa por
                    convidado neste pacote.
                  </p>

                  <div className="includes-section">
                    <strong>App na porta</strong>
                    <ul className="includes">
                      <li>Leitura de QR code pela câmera (rápida, &lt; 1 segundo)</li>
                      <li>Busca manual por CPF ou RG</li>
                      <li>
                        Confirmação visual — verde (liberado) · vermelho (já entrou ou não encontrado)
                      </li>
                      <li>Lista de eventos e dashboard ao vivo (quem já chegou)</li>
                      <li>Até 5 leitores simultâneos · PWA instalável · Modo offline em 1 celular</li>
                      <li>Identidade visual do cerimonial · Treinamento da equipe (até 5 pessoas)</li>
                    </ul>
                  </div>

                  <div className="includes-section">
                    <strong>Painel administrativo</strong>
                    <ul className="includes">
                      <li>Criar e gerenciar eventos (nome, data, local)</li>
                      <li>Cadastrar convidados manualmente ou importar CSV</li>
                      <li>Visualizar entradas em tempo real · Gerenciar leitores da equipe</li>
                      <li>Acesso pelo computador</li>
                    </ul>
                  </div>

                  <div className="includes-section">
                    <strong>Confirmação pelo convidado (sem envio automático)</strong>
                    <ul className="includes">
                      <li>Convidado acessa o link do evento no celular</li>
                      <li>Confirma presença com o CPF e o sistema gera o QR na hora</li>
                      <li>
                        Você divulga o link no convite físico, WhatsApp pessoal ou redes — sem custo de
                        disparo
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="num" data-label="Valor desenvolvimento">
                  R$ 6.200
                </td>
                <td className="num" data-label="Custo da plataforma">
                  <div className="platform-box">
                    <strong>R$ 40</strong>
                    <span className="cost-unit">
                      por mês · servidor
                      <br />
                      (hospedagem, banco, backups)
                    </span>
                  </div>
                </td>
              </tr>

              <tr className="optional">
                <td>
                  <span className="badge badge-optional">Opcional</span>
                  <p className="module-name">Envio automático por e-mail</p>
                  <ul className="includes">
                    <li>E-mail com QR personalizado e identidade visual</li>
                    <li>Disparo em lote a partir da lista no painel</li>
                  </ul>
                </td>
                <td className="num" data-label="Valor desenvolvimento">
                  R$ 700
                </td>
                <td className="num wrap" data-label="Custo da plataforma">
                  ≈ R$ 0,51
                  <span className="cost-unit">por 1.000 e-mails enviados</span>
                </td>
              </tr>

              <tr className="optional">
                <td>
                  <span className="badge badge-optional">Opcional</span>
                  <p className="module-name">Envio automático por WhatsApp</p>
                  <ul className="includes">
                    <li>Mensagem com link ou QR para o convidado</li>
                    <li>Integração com API oficial (Meta Business)</li>
                  </ul>
                </td>
                <td className="num" data-label="Valor desenvolvimento">
                  R$ 1.500
                </td>
                <td className="num wrap" data-label="Custo da plataforma">
                  <span className="cost-unit" style={{ marginTop: 0 }}>
                    Cobrado diretamente pela Meta ≈ R$ 0,15 por mensagem
                  </span>
                </td>
              </tr>

              <tr className="optional">
                <td>
                  <span className="badge badge-optional">Opcional</span>
                  <p className="module-name">Adicionar à Google Wallet</p>
                  <ul className="includes">
                    <li>Botão no e-mail ou na página do convidado</li>
                    <li>Convite salvo na carteira do Android</li>
                  </ul>
                </td>
                <td className="num" data-label="Valor desenvolvimento">
                  R$ 500
                </td>
                <td className="num" data-label="Custo da plataforma">
                  R$ 0<span className="cost-unit">por mês</span>
                </td>
              </tr>

              <tr className="optional">
                <td>
                  <span className="badge badge-optional">Opcional</span>
                  <p className="module-name">Adicionar à Apple Wallet</p>
                  <ul className="includes">
                    <li>Botão no e-mail ou na página do convidado</li>
                    <li>Convite salvo na carteira do iPhone</li>
                  </ul>
                  <p className="note">
                    Certificado e conta Apple Developer — burocracia à parte, pago diretamente à Apple.
                  </p>
                </td>
                <td className="num" data-label="Valor desenvolvimento">
                  R$ 800
                </td>
                <td className="num" data-label="Custo da plataforma">
                  US$ 99
                  <span className="cost-unit">
                    por ano
                    <br />
                    (≈ R$ 501)*
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer>
          <p>Proposta válida por 30 dias · Código-fonte é seu · Conformidade com LGPD</p>
          <p>Sem Fila na Porta · desenvolvido sob medida para Ágape Realizações</p>
        </footer>
      </div>
    </div>
  );
}
