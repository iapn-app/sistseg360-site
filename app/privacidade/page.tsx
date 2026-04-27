import Link from "next/link"

export default function PoliticaDePrivacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-primary hover:underline">← Voltar ao início</Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: abril de 2026</p>

      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Quem somos</h2>
          <p>O SistSeg360 é operado pelo Grupo Esquematiza, responsável pelo tratamento dos seus dados pessoais conforme descrito nesta Política.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Dados que coletamos</h2>
          <p>Coletamos os seguintes dados para prestação do serviço:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Dados de cadastro: nome, e-mail, telefone, empresa</li>
            <li>Dados de uso: módulos acessados, registros operacionais inseridos</li>
            <li>Dados técnicos: endereço IP, tipo de navegador, sistema operacional</li>
            <li>Dados financeiros: para processamento de pagamentos (não armazenamos dados de cartão)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Como usamos seus dados</h2>
          <p>Utilizamos seus dados para:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Fornecer e melhorar o serviço</li>
            <li>Processar pagamentos e emitir faturas</li>
            <li>Enviar comunicações sobre o serviço</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Compartilhamento de dados</h2>
          <p>Não vendemos seus dados. Podemos compartilhá-los com prestadores de serviço essenciais (infraestrutura de nuvem, processamento de pagamento) sob acordos de confidencialidade, e quando exigido por lei.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia em trânsito e em repouso, controle de acesso por perfil e backups regulares.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Retenção de dados</h2>
          <p>Mantemos seus dados pelo tempo necessário para a prestação do serviço e cumprimento de obrigações legais. Após o encerramento da conta, os dados são excluídos em até 90 dias, salvo obrigação legal em contrário.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Seus direitos</h2>
          <p>Conforme a LGPD, você tem direito a: acessar, corrigir, excluir seus dados; revogar consentimento; solicitar portabilidade; e opor-se ao tratamento. Solicitações podem ser feitas por e-mail.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Contato</h2>
          <p>Para exercer seus direitos ou esclarecer dúvidas: <a href="mailto:contato@sistseg360.com.br" className="text-primary hover:underline">contato@sistseg360.com.br</a></p>
        </section>
      </div>
    </main>
  )
}
