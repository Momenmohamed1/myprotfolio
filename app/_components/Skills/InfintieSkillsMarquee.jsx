import { HTML5Icon, CSSIcon, JavaScriptIcon, ReactIcon, NextjsIcon, TailwindCSSIcon, TypeScriptIcon } from "../Icons/Icons";



export default function SkillsMarquee() {
    const skills = [
        { name: "HTML", icon: <HTML5Icon width={60} height={60} /> },
        { name: "CSS", icon: <CSSIcon width={60} height={60} /> },
        { name: "JS", icon: <JavaScriptIcon width={60} height={60} /> },
        { name: "React", icon: <ReactIcon width={60} height={60} /> },
        { name: "Next", icon: <NextjsIcon width={60} height={60} /> },
        { name: "Tailwind", icon: <TailwindCSSIcon width={60} height={60} /> },
        { name: "Type", icon: <TypeScriptIcon width={60} height={60} /> },
    ];
    return (
        <section className="overflow-hidden  py-8">
            <div className="group flex overflow-hidden">
                {[0, 1].map((item) => (
                    <div
                        key={item}
                        className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:pause"
                        aria-hidden={item === 1}
                    >
                        {skills.map((skill) => (
                            <span
                                key={skill.name
                                }
                                className=" 
                p-1 text-lg font-semibold border border-teal-600 rounded-2xl dark:border-[#123B60] hover:dark:shadow-[#123B60] shadow-xl
                dark:text-white hover:shadow-2xl  hover:shadow-teal-900 transition flex items-center justify-center min-w-19 min-h-19 mb-4"
                            >
                                {skill.icon}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
