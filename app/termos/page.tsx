import Link from "next/link"

export default function TermosDeUso() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-primary hover:underline">← Voltar ao início</Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">Termos de Uso</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: abril de 2026</p>

      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Aceitação dos Termos</h2>
          <p>Ao acessar ou utilizar a plataforma SistSeg360, você concorda com estes Termos de Uso. Caso não concorde com qualquer disposição, não utilize o serviço.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Descrição do Serviço</h2>
          <p>O SistSeg360 é uma plataforma SaaS de gestão operacional e financeira voltada para empresas de segurança privada e administradoras de condomínios. O serviço inclui módulos de escalas, rondas, ocorrências, financeiro, contratos e relatórios.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Cadastro e Conta</h2>
          <p>Para utilizar o sistema, é necessário criar uma conta com informações verdadeiras e atualizadas. Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Uso Permitido</h2>
          <p>Você se compromete a utilizar o SistSeg360 exclusivamente para fins legítimos e em conformidade com a legislação vigente. É proibido usar o sistema para atividades ilegais, fraudulentas ou que violem direitos de terceiros.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. Pagamento e Cancelamento</h2>
          <p>Os planos são cobrados mensalmente, sem fidelidade ou carência. O cancelamento pode ser solicitado a qualquer momento e o acesso permanece ativo até o fim do período pago. Não há reembolso proporcional por período não utilizado após o cancelamento.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Propriedade Intelectual</h2>
          <p>Todo o conteúdo, código-fonte, interface e funcionalidades do SistSeg360 são de propriedade exclusiva da Grupo Esquematiza. É vedada a reprodução, distribuição ou engenharia reversa sem autorização prévia e por escrito.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Limitação de Responsabilidade</h2>
          <p>O SistSeg360 é fornecido "como está". Não nos responsabilizamos por danos indiretos, perda de dados ou interrupções de serviço decorrentes de fatores fora do nosso controle. Fazemos o possível para garantir disponibilidade 24/7.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Alterações dos Termos</h2>
          <p>Reservamo-nos o direito de alterar estes Termos a qualquer momento, mediante aviso prévio de 15 dias por e-mail ou notificação na plataforma. O uso continuado após as alterações implica aceitação dos novos termos.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">9. Contato</h2>
          <p>Dúvidas sobre estes Termos podem ser enviadas para: <a href="mailto:contato@sistseg360.com.br" className="text-primary hover:underline">contato@sistseg360.com.br</a></p>
        </section>
      </div>
    </main>
  )
}
