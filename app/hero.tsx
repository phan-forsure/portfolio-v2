import { Github, Linkedin, Twitter } from "lucide-react";
import Reveal from "./ui/reveal";
import SocialBtn from "./ui/socialButton";

export function Hero() {
  return (
    <Reveal>
      <section className="hero flex flex-col justify-center gap-6 pb-48 pt-64 max-md:pt-80! p-[var(--padding)] max-sm:items-center border-b-1 border-border h-96">
        <h1 className="text-5xl font-bold tracking-[-0.02em]">Abdulrahman</h1>
        <p className="text-2xl max-sm:text-xl font-medium tracking-[-0.01em] text-muted-foreground max-sm:text-center max-sm:p-4">
          I'm a{" "}
          <span className="text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)]">
            software developer
          </span>{" "}
          who has been programming for 2 years and still ambitious to learn new
          things everyday
        </p>

        <div className="socials flex gap-3">
          <SocialBtn link={"https://github.com/phan-forsure/"}>
            <Github size={18} />
          </SocialBtn>
          <SocialBtn link={"https://www.linkedin.com/in/abdulrahman-a-12ab482b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            <Linkedin size={18} />
          </SocialBtn>
          <SocialBtn link={"https://x.com/phan__n?t=8K7OTQO_nloEU5yMcOXzgQ&s=09"}>
            <Twitter size={18} />
          </SocialBtn>
        </div>

        {/* <div className="w-full">
          <img
            src="/svgAnimate.svg"
            alt="Animated SVG"
            className="w-full h-auto"
          />
        </div> */}
      </section>
    </Reveal>
  );
}
