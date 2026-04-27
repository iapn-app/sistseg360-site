import Link from "next/link"

export default function LGPD() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-primary hover:underline">← Voltar ao início</Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">LGPD — Lei Geral de Proteção de Dados</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: abril de 2026</p>

      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">O que é a LGPD?</h2>
          <p>A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) regula o tratamento de dados pessoais no Brasil, garantindo direitos aos titulares e estabelecendo obrigações para as empresas que coletam e processam esses dados.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Nosso compromisso</h2>
          <p>O SistSeg360 está em conformidade com a LGPD. Tratamos dados pessoais apenas com base em fundamentos legais adequados: execução de contrato, cumprimento de obrigação legal, legítimo interesse ou consentimento do titular.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Bases legais para tratamento</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li><strong>Execução de contrato:</strong> dados necessários para prestação do serviço contratado</li>
            <li><strong>Obrigação legal:</strong> dados exigidos por legislação tributária, trabalhista ou regulatória</li>
            <li><strong>Legítimo interesse:</strong> melhoria do serviço, segurança e prevenção a fraudes</li>
            <li><strong>Consentimento:</strong> comunicações de marketing (revogável a qualquer momento)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Direitos dos titulares</h2>
          <p>Conforme o Art. 18 da LGPD, você tem direito a:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar seus dados</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Obter portabilidade dos dados</li>
            <li>Revogar consentimento</li>
            <li>Opor-se ao tratamento realizado em descumprimento da lei</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Encarregado de Dados (DPO)</h2>
          <p>Nosso encarregado pelo tratamento de dados pessoais pode ser contatado pelo e-mail: <a href="mailto:contato@sistseg360.com.br" className="text-primary hover:underline">contato@sistseg360.com.br</a></p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Como exercer seus direitos</h2>
          <p>Envie sua solicitação para <a href="mailto:contato@sistseg360.com.br" className="text-primary hover:underline">contato@sistseg360.com.br</a> com o assunto "LGPD – [tipo de solicitação]". Responderemos em até 15 dias úteis.</p>
        </section>
      </div>
    </main>
  )
}
