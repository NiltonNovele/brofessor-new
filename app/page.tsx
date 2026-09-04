import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
    getAllCompanions,
    getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

// The homepage uses server-side dynamic data/authentication.
// This prevents Next.js from trying to statically prerender "/".
export const dynamic = "force-dynamic";

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

    return (
        <main>
            <h1>Companheiros Populares</h1>

            <section className="home-section">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>

            <section className="home-section">
                <CompanionsList
                    title="Sessões concluídas recentemente"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />

                <CTA />
            </section>
        </main>
    );
};

export default Page;