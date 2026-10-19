import {Metadata} from "next";
import {Reveal} from "@/components/animations/Reveal";

export const metadata:Metadata = {
    title: "Layanan Kami",
    description: "Ini page layanan kami",
    alternates: {canonical: "/layanan"}
}
export default function LayananPage() {
    return (
        <>
            <section className={'section-1 layanan'}>
                <div>This is header</div>
            </section>
            <Reveal>
                <section className={"section-2 main-container"}>
                    <div>This is section 2</div>
                </section>
            </Reveal>
        </>
    )
}