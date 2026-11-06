"use client"

import gsap from "gsap";
import Lenis from "lenis";
import {useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function SmoothScroll({children}: {children: React.ReactNode}) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis();
        const tick = (t:number) => lenis.raf(t * 1000);

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
        }
    }, []);

    return <>{children}</>;
}