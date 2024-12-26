import { cn } from "./../ui/utils.ts";
import { Simple } from "./../icons";


const socials = [
  {
    href: "https://github.com/shashank-amireddy",
    name: "GitHub",
    icon: Simple.IconGitHub,
  },
  {
    href: "https://x.com/Shanksreddy",
    name: "X",
    icon: Simple.IconX,
  },
  {
    href: "https://www.linkedin.com/in/shashank-amireddy/", //linkedin
    name: "LinkedIn",
    icon: Simple.IconLinkedin,
  },
  {
    href: "https://t.me/shashankamireddy", //telegram
    name: "Telegram",
    icon: Simple.IconTel,
  },
  {
    href: "https://quantumloom.medium.com/", //medium
    name: "Medium",
    icon: Simple.IconMedium,
  },
  {
    href: "https://discordapp.com/users/758375198662590515", //Discord
    name: "Discord",
    icon: Simple.IconDiscord,
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Socials</h2>
      <ul className="flex flex-wrap items-center justify-center gap-3 p-1">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                className={cn(
                  "group",
                  "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <social.icon className="transition size-1/3 text-neutral-10 group-hover:text-primary-11 group-hover:scale-110 group-focus-visible:text-neutral-11 group-focus-visible:scale-110" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
