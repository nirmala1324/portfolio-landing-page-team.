"use client"

import gsap from "gsap";
import {useRef} from "react";

import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Reveal({children}: {children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 65%',
                markers: true,
                toggleActions: "play reverse play reverse"
            }
        })
            .from(ref.current, {y: 100, opacity: 0, duration: 1, ease: 'power3.out'})
    }, {scope: ref})

    return <div ref={ref}>{children}</div>
}