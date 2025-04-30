import { Linkedin, Mail, Twitter } from "lucide-react";
import NavItem from "../ui/navItem";
import Reveal from "../ui/reveal";
import SocialBtn from "../ui/socialButton";

export default function Contact() {
  return (
    <Reveal>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-[-0.02em]">
            Get In Touch
          </h1>
          <p className="text-lg /70 max-w-2xl mx-auto tracking-[-0.02em]">
            Have a question or want to work together? Feel free to reach out
            directly via any of my socials.
          </p>
          <div className="flex gap-5 pt-8 mx-auto w-fit">
            <SocialBtn           link={"https://x.com/phan__n?t=8K7OTQO_nloEU5yMcOXzgQ&s=09"}
            >
              <Twitter size={18} />
            </SocialBtn>

            <SocialBtn link={"mailto: phantommy38@gmail.com"}>
              <Mail size={18} />
            </SocialBtn>

            <SocialBtn link={"https://www.linkedin.com/in/abdulrahman-a-12ab482b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
              <Linkedin size={18} />
            </SocialBtn>
          </div>
        </div>

        <div className="bg-accent/5 rounded-lg shadow-lg p-8 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold  mb-4 tracking-[-0.02em]">
              Ready to connect?
            </h2>
            <p className="/70 mb-8 tracking-[-0.02em]">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a
              href="mailto:phantommy38@gmail.com"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg tracking-[-0.02em]"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
