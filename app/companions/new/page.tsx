import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            {canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col">
                    <h1>Construtor de Companheiro</h1>

                    <CompanionForm />
                </article>
                ) : (
                    <article className="companion-limit">
                        <Image src="/images/limit.svg" alt="Limite de companheiros atingido" width={360} height={230} />
                        <div className="cta-badge">
                            Atualize o seu plano
                        </div>
                        <h1>Atingiu o Seu Limite</h1>
                        <p>Atingiu o seu limite de companheiros. Atualize o seu plano para criar mais companheiros e ter acesso a funcionalidades premium.</p>
                        <Link href="/subscription" className="btn-primary w-full justify-center" >
                            Atualizar o Meu Plano
                        </Link>
                    </article>
                )}
        </main>
    )
}

export default NewCompanion
