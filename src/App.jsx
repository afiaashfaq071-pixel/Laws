import { useEffect, useMemo, useState } from "react";

const laws = [
  {
    id: 1,
    title: "Never Outshine the Master",
    description:
      "Let those above you feel respected and secure rather than threatened by your abilities.",
  },
  {
    id: 2,
    title: "Be Careful Trusting Friends",
    description:
      "Friendship does not always guarantee loyalty; choose people according to their character and reliability.",
  },
  {
    id: 3,
    title: "Keep Your Intentions Private",
    description:
      "Avoid revealing every plan too early. Keeping some intentions private gives you room to act.",
  },
  {
    id: 4,
    title: "Say Less Than Necessary",
    description:
      "Controlled communication can make your words more powerful and prevent unnecessary mistakes.",
  },
  {
    id: 5,
    title: "Protect Your Reputation",
    description:
      "Your reputation influences how people interpret everything else you do, so guard it carefully.",
  },
  {
    id: 6,
    title: "Make Yourself Noticeable",
    description:
      "Being talented is not enough if nobody notices your contribution. Develop a memorable presence.",
  },
  {
    id: 7,
    title: "Use Others' Efforts Wisely",
    description:
      "Recognize the value of collaboration and organize available skills to accomplish larger goals.",
  },
  {
    id: 8,
    title: "Let Others Come to You",
    description:
      "Create reasons for people to approach you instead of constantly chasing every opportunity.",
  },
  {
    id: 9,
    title: "Show Through Actions",
    description:
      "Demonstrating results is often more convincing than trying to win every argument with words.",
  },
  {
    id: 10,
    title: "Avoid Destructive Negativity",
    description:
      "Constantly negative environments can affect your own thinking, motivation, and decisions.",
  },
  {
    id: 11,
    title: "Become Valuable",
    description:
      "Develop useful abilities so that your contribution becomes difficult to replace.",
  },
  {
    id: 12,
    title: "Use Honesty Strategically",
    description:
      "A well-timed act of sincerity can build trust and make future interactions easier.",
  },
  {
    id: 13,
    title: "Appeal to Self-Interest",
    description:
      "When asking for help, explain how cooperation can also benefit the person you approach.",
  },
  {
    id: 14,
    title: "Learn While You Connect",
    description:
      "Build relationships while paying attention to information, motives, skills, and opportunities.",
  },
  {
    id: 15,
    title: "Resolve Major Conflicts",
    description:
      "Leaving serious conflicts unfinished can allow the same problem to return later.",
  },
  {
    id: 16,
    title: "Use Absence Wisely",
    description:
      "Being constantly available can reduce appreciation; appropriate distance can increase attention.",
  },
  {
    id: 17,
    title: "Remain Unpredictable",
    description:
      "Avoid becoming so predictable that others can easily anticipate every move you make.",
  },
  {
    id: 18,
    title: "Do Not Isolate Yourself",
    description:
      "Isolation can reduce information and opportunities. Maintain useful connections with others.",
  },
  {
    id: 19,
    title: "Understand Who You Face",
    description:
      "Different personalities react differently, so understand the person before choosing your approach.",
  },
  {
    id: 20,
    title: "Protect Your Independence",
    description:
      "Avoid becoming unnecessarily tied to one person, group, or option when flexibility matters.",
  },
  {
    id: 21,
    title: "Do Not Always Show Everything",
    description:
      "Sometimes appearing less informed than you are can encourage others to reveal more than intended.",
  },
  {
    id: 22,
    title: "Turn Weakness Into Leverage",
    description:
      "When resistance is unnecessary, stepping back strategically can create a better opportunity later.",
  },
  {
    id: 23,
    title: "Focus Your Resources",
    description:
      "Concentrating your time, attention, and energy can produce stronger results than spreading them thin.",
  },
  {
    id: 24,
    title: "Master Social Skill",
    description:
      "Learn to communicate with tact, awareness, confidence, and respect in different social situations.",
  },
  {
    id: 25,
    title: "Shape Your Own Identity",
    description:
      "Do not let circumstances completely define you. Intentionally develop the person you want to become.",
  },
  {
    id: 26,
    title: "Keep Your Image Clean",
    description:
      "Handle difficult situations carefully and avoid unnecessary associations with damaging behavior.",
  },
  {
    id: 27,
    title: "Understand the Power of Belonging",
    description:
      "People naturally seek meaning and community. Build trust without manipulating vulnerable people.",
  },
  {
    id: 28,
    title: "Act With Confidence",
    description:
      "Once you have chosen a reasonable direction, hesitation can weaken your ability to execute it.",
  },
  {
    id: 29,
    title: "Plan to the Finish",
    description:
      "Consider possible consequences and prepare your path before committing to important actions.",
  },
  {
    id: 30,
    title: "Make Skill Look Natural",
    description:
      "Practice deeply enough that your final performance appears smooth rather than forced.",
  },
  {
    id: 31,
    title: "Shape the Available Choices",
    description:
      "Present clear options while understanding how the available choices influence decisions.",
  },
  {
    id: 32,
    title: "Understand People's Aspirations",
    description:
      "People respond strongly to possibilities and hopes, so understand what they value and seek.",
  },
  {
    id: 33,
    title: "Understand What Drives People",
    description:
      "Pay attention to motivations, fears, priorities, and incentives when working with others.",
  },
  {
    id: 34,
    title: "Carry Yourself With Dignity",
    description:
      "Your behavior communicates how you expect to be treated. Develop confidence without arrogance.",
  },
  {
    id: 35,
    title: "Master Timing",
    description:
      "A good idea at the wrong moment may fail. Learn when to act, wait, or change direction.",
  },
  {
    id: 36,
    title: "Do Not Obsess Over the Unavailable",
    description:
      "Constantly chasing what cannot be obtained can waste attention that could be used elsewhere.",
  },
  {
    id: 37,
    title: "Use Memorable Presentation",
    description:
      "Strong visual presentation can make an idea easier to notice, remember, and understand.",
  },
  {
    id: 38,
    title: "Think Freely, Adapt Socially",
    description:
      "Keep your individual thinking while understanding the expectations of the environment around you.",
  },
  {
    id: 39,
    title: "Stay Calm in Turbulence",
    description:
      "Emotional reactions can cloud judgment. Remaining composed helps you make clearer decisions.",
  },
  {
    id: 40,
    title: "Value What You Receive",
    description:
      "Free offers can sometimes create hidden obligations. Understand the real cost before accepting.",
  },
  {
    id: 41,
    title: "Build Your Own Path",
    description:
      "Respect previous achievements while developing an identity and direction that belong to you.",
  },
  {
    id: 42,
    title: "Address the Central Problem",
    description:
      "When one person or issue repeatedly causes disruption, deal with the underlying source directly.",
  },
  {
    id: 43,
    title: "Win Understanding and Respect",
    description:
      "Lasting cooperation comes from understanding people's emotions, interests, and perspectives.",
  },
  {
    id: 44,
    title: "Use Reflection",
    description:
      "Reflecting someone's behavior or communication can reveal patterns and help you understand reactions.",
  },
  {
    id: 45,
    title: "Change Gradually",
    description:
      "People often resist sudden transformation. Introduce meaningful changes at a manageable pace.",
  },
  {
    id: 46,
    title: "Do Not Appear Perfect",
    description:
      "Trying to appear flawless can create distance. Showing ordinary human imperfections can make you relatable.",
  },
  {
    id: 47,
    title: "Know When Enough Is Enough",
    description:
      "Success can create overconfidence. Recognize the right stopping point before gains become losses.",
  },
  {
    id: 48,
    title: "Stay Flexible",
    description:
      "Avoid becoming trapped by one rigid identity or strategy. Adapt when circumstances change.",
  },
];

const STORAGE_KEY = "power-laws-completed";

function App() {
  const [selectedLaw, setSelectedLaw] = useState(null);
  const [completedLaws, setCompletedLaws] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLaws));
  }, [completedLaws]);

  const completedCount = completedLaws.length;

  const percentage = useMemo(() => {
    return Math.round((completedCount / laws.length) * 100);
  }, [completedCount]);

  const toggleLaw = (id) => {
    setCompletedLaws((previous) =>
      previous.includes(id)
        ? previous.filter((lawId) => lawId !== id)
        : [...previous, id]
    );
  };

  const resetProgress = () => {
    setCompletedLaws([]);
  };

  const circumference = 2 * Math.PI * 42;
  const progressOffset =
    circumference - (percentage / 100) * circumference;

  const getDetailedExplanation = (law) => {
    return [
      `${law.title} focuses on understanding how people and situations can affect your decisions and actions.`,
      `The main idea is to think carefully before reacting instead of allowing emotions or pressure to control your response.`,
      `In practical situations, this means observing what is happening and choosing an approach that supports your long-term goals.`,
      `It also encourages you to understand the people around you, because different people respond differently to the same situation.`,
      `The principle is not about blindly following a rule; it is about developing awareness and making deliberate choices.`,
      `Use the idea thoughtfully, while considering your own values, relationships, responsibilities, and the consequences of your actions.`,
    ];
  };

  return (
    <main className="min-h-screen bg-[#09080d] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <header className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-400">
            Strategy • Power • Psychology • Balance • Control
          </p>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            THE 48 LAWS OF POWER
          </h1>

          <p className="mt-2 text-xs text-zinc-500">
            Read. Reflect. Track your progress.
          </p>
        </header>

        {/* ================= PROGRESS ================= */}
        <section className="mb-8 rounded-2xl border border-white/[0.06] bg-[#15131d] p-5 shadow-2xl shadow-black/20">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            {/* Progress Circle */}
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 shrink-0">
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    className="text-[#24212d]"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    className="text-violet-500 transition-all duration-500"
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {percentage}%
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-300">
                  Your Progress
                </p>

                <p className="mt-1 text-2xl font-black text-white">
                  {completedCount}
                  <span className="mx-1 text-zinc-600">/</span>
                  <span className="text-zinc-400">{laws.length}</span>
                </p>

                <p className="text-xs text-zinc-500">
                  Laws completed
                </p>
              </div>
            </div>

            {/* Progress Bar + Reset */}
            <div className="w-full sm:max-w-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">
                  Completion
                </span>

                <span className="text-xs font-semibold text-violet-400">
                  {percentage}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#26232f]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <button
                onClick={resetProgress}
                className="mt-4 text-xs font-medium text-zinc-600 transition hover:text-red-400"
              >
                Reset Progress
              </button>
            </div>
          </div>
        </section>

        {/* ================= LAWS GRID ================= */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {laws.map((law) => {
            const isCompleted = completedLaws.includes(law.id);

            return (
              <article
                key={law.id}
                onClick={() => toggleLaw(law.id)}
                className={`group relative cursor-pointer rounded-lg border p-4 transition-all duration-200 ${isCompleted
                  ? "border-violet-500/30 bg-[#211c2b]"
                  : "border-white/[0.045] bg-[#1b1923] hover:border-violet-500/25 hover:bg-[#211e2a]"
                  }`}
              >
                {/* Top Row */}
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {/* LAW NUMBER */}
                    <p
                      className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${isCompleted
                        ? "text-violet-400"
                        : "text-violet-500"
                        }`}
                    >
                      LAW {String(law.id).padStart(2, "0")}
                    </p>

                    {/* LAW TITLE */}
                    <h2
                      className={`text-[14px] font-bold leading-snug sm:text-[15px] ${isCompleted
                        ? "text-violet-100"
                        : "text-zinc-100"
                        }`}
                    >
                      {law.title}
                    </h2>
                  </div>

                  {/* CHECKBOX */}
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleLaw(law.id);
                    }}
                    aria-label={`Mark Law ${law.id} as ${isCompleted ? "incomplete" : "complete"
                      }`}
                    className={`flex h-6 w-6 items-center justify-center rounded-md border transition-all ${isCompleted
                      ? "border-violet-500 bg-violet-500 text-white"
                      : "border-zinc-600 bg-transparent text-transparent hover:border-violet-400"
                      }`}
                  >
                    {isCompleted && (
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4 10.5L8 14L16 6"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {/* READ LAW BUTTON */}
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedLaw(law);
                    }}
                    className="whitespace-nowrap rounded-md border border-violet-500/20 bg-violet-500/10 px-2 py-1 text-[8px] font-semibold text-violet-400 transition-all hover:border-violet-500/40 hover:bg-violet-500/20 hover:text-violet-300"
                  >
                    Read Law
                  </button>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="pr-8 text-[11px] leading-relaxed text-zinc-400 sm:text-[12px]"
                >
                  {law.description}
                </p>

                {/* COMPLETED INDICATOR */}
                {isCompleted && (
                  <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg bg-violet-500" />
                )}
              </article>
            );
          })}
        </section>

        {/* ================= FULL LAW VIEW ================= */}
        {selectedLaw && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#09080d]">

            <div className="mx-auto min-h-screen max-w-4xl px-5 py-8 sm:px-8 sm:py-12">

              {/* BACK BUTTON */}
              <button
                onClick={() => setSelectedLaw(null)}
                className="mb-10 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#15131d] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-violet-500/30 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Back to Laws
              </button>

              {/* LAW NUMBER */}
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-violet-500">
                LAW {String(selectedLaw.id).padStart(2, "0")}
              </p>

              {/* TITLE */}
              <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
                {selectedLaw.title}
              </h1>

              {/* DIVIDER */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* INTRO */}
              <p className="mb-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                {selectedLaw.description}
              </p>

              {/* DETAILED EXPLANATION */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#15131d] p-6 sm:p-8">

                <h2 className="mb-6 text-lg font-bold text-violet-400">
                  Understanding This Law
                </h2>

                <div className="space-y-5">
                  {getDetailedExplanation(selectedLaw).map(
                    (line, index) => (
                      <div
                        key={index}
                        className="flex gap-4"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />

                        <p className="text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                          {line}
                        </p>
                      </div>
                    )
                  )}
                </div>

              </div>

              {/* COMPLETION */}
              <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-white/[0.06] bg-[#15131d] p-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-semibold text-white">
                    Law {selectedLaw.id} Progress
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {completedLaws.includes(selectedLaw.id)
                      ? "You have completed this law."
                      : "Mark this law as completed when you are done."}
                  </p>
                </div>

                <button
                  onClick={() => toggleLaw(selectedLaw.id)}
                  className={`rounded-lg px-5 py-2.5 text-xs font-semibold transition ${completedLaws.includes(selectedLaw.id)
                    ? "bg-violet-500 text-white hover:bg-violet-600"
                    : "border border-violet-500/30 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20"
                    }`}
                >
                  {completedLaws.includes(selectedLaw.id)
                    ? "✓ Completed"
                    : "Mark as Completed"}
                </button>

              </div>

            </div>
          </div>
        )}

        {/* ================= FOOTER ================= */}
        <footer className="pb-6 pt-10 text-center">
          <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-700">
            Strategy • Power • Psychology • Balance • Control
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;