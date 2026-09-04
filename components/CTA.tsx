import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Comece a aprender à sua maneira.</div>
            <h2 className="text-3xl font-bold">
                Crie e personalize o seu companheiro de aprendizagem
            </h2>
            <p>Escolha um nome, disciplina, voz e personalidade — e comece a aprender através de conversas por voz naturais e divertidas.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="adicionar" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Criar um Novo Companheiro</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta