import TeamCard from "./TeamCard";
import { DribbbleIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

const socials = [
  { label: "Twitter", href: "#", icon: <TwitterIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Dribbble", href: "#", icon: <DribbbleIcon /> },
];

const team = [
  { photo: "/team/vanessa.jpg", name: "Vanessa Laird", role: "UI Designer" },
  { photo: "/team/mason.jpg", name: "Mason Campbell", role: "UI Designer" },
  { photo: "/team/irene.jpg", name: "Irea Evans", role: "Client Manager" },
];

export default function Team() {
  return (
    <section className="container-x  py-16">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
        Our Team
      </p>
      <h2 className="mt-2 text-center text-3xl font-bold">Meet The Team</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} socials={socials} />
        ))}
      </div>
    </section>
  );
}