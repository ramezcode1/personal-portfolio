"use client"
import {useEffect, useRef, useState} from "react";

export default function LottieAnimation({filename}) {
    const anime = useRef(null);
    const [lottie, setLottie] = useState(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && anime.current) {
            const animation = lottie.loadAnimation({
                container: anime.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: `/lotties/${filename}`
            });
            return () => lottie.destroy();
        }
    }, [lottie]);

    const style = {
        widths: 350,
        height: 350,
    };

    return <div style={style} ref={anime}></div>;
};