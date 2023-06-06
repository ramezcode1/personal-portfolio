import Header from "@/sections/Header";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <main>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    );
}