"use client"
import {useLottie} from "lottie-react";
import aboutAnimation from "../about-me.json";

const style = {
    widths: 350,
    height: 350,
};

export default function AboutAnimation() {
    const options = {
        animationData: aboutAnimation,
        loop: true,
        autoplay: true,
    };

    const {View} = useLottie(options, style);

    return View;
};