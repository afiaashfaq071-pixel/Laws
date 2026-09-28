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
  const [query, setQuery] = useState("");
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
    const explanations = {
      1: [
        "People who hold authority often want to feel that their position is respected.",
        "Showing too much superiority can make an insecure leader see you as a threat.",
        "Let your abilities strengthen the environment around you instead of turning success into a competition."
      ],
      2: [
        "Friends may understand you well, but familiarity can sometimes create jealousy or careless behavior.",
        "A former rival has a reason to prove that they can be trusted and useful.",
        "Choose collaborators by their behavior, reliability, and skills rather than friendship alone."
      ],

      3: [
        "Revealing your complete plan gives other people the chance to interfere with it.",
        "Keeping your intentions private gives you freedom to change direction when circumstances change.",
        "Share information according to what is necessary, not simply because someone asks."
      ],

      4: [
        "Speaking too much can weaken an otherwise strong idea by adding unnecessary details.",
        "Short and deliberate communication leaves less room for misunderstanding.",
        "Before speaking, decide what the other person actually needs to know."
      ],

      5: [
        "People often form opinions about you from your previous behavior.",
        "A strong reputation can create trust before you even explain yourself.",
        "Protect your credibility by being consistent and addressing mistakes honestly."
      ],

      6: [
        "Good work has little impact when nobody notices that it exists.",
        "Memorable presentation can help your contribution stand apart from ordinary work.",
        "Seek attention through useful, original results rather than empty self-promotion."
      ],

      7: [
        "Large achievements often require combining the abilities of several people.",
        "Knowing how to organize different skills can save time and improve results.",
        "Successful collaboration means recognizing contributions rather than simply doing everything yourself."
      ],

      8: [
        "Constantly chasing people can place you in a weaker negotiating position.",
        "Creating something valuable gives others a natural reason to approach you.",
        "Build opportunities that attract interest instead of depending entirely on pursuit."
      ],

      9: [
        "Arguments can become contests where neither side wants to change their position.",
        "A visible result can demonstrate an idea without requiring a long debate.",
        "When possible, let evidence and performance communicate what words cannot."
      ],

      10: [
        "The attitudes of people around you can influence your own habits and outlook.",
        "Repeated exposure to destructive behavior can make unhealthy patterns seem normal.",
        "Choose environments that encourage constructive thinking while still treating struggling people with compassion."
      ],

      11: [
        "Valuable skills give you a meaningful role in a team or organization.",
        "Specializing in something useful can make your contribution difficult to replace.",
        "Build genuine expertise instead of creating dependence by deliberately withholding knowledge."
      ],

      12: [
        "A sincere action can reduce suspicion and establish a foundation of trust.",
        "Small acts of honesty can sometimes accomplish more than complicated persuasion.",
        "Trust becomes stronger when your generosity is genuine rather than simply a tactic."
      ],

      13: [
        "People are naturally more interested in requests that connect with their own goals.",
        "Explain clearly how cooperation can create a useful outcome for both sides.",
        "Understanding another person's priorities helps you make a more practical request."
      ],

      14: [
        "Every conversation can teach you something about a person's experience and perspective.",
        "Careful listening can reveal useful information that careless conversation would miss.",
        "Build relationships through genuine curiosity rather than treating people merely as sources of information."
      ],

      15: [
        "Unresolved serious conflicts can continue producing problems long after the original disagreement.",
        "A temporary solution may fail if the underlying issue remains untouched.",
        "When possible, resolve major disputes through clear communication, boundaries, and peaceful solutions."
      ],

      16: [
        "Constant availability can cause people to stop noticing the value of your presence.",
        "Taking appropriate space allows others to experience your absence and appreciate your contribution.",
        "Balance availability with time for your own priorities and development."
      ],

      17: [
        "Predictable behavior allows others to prepare for every response you make.",
        "Flexibility makes it harder for circumstances to trap you in one fixed approach.",
        "Being adaptable does not mean being careless; it means responding intelligently to changing conditions."
      ],

      18: [
        "Complete isolation can prevent you from hearing important information or discovering opportunities.",
        "Relationships can provide different perspectives that improve your decisions.",
        "Protect your independence without cutting yourself off from useful social connections."
      ],

      19: [
        "A strategy that works with one personality may fail badly with another.",
        "Some people value directness, while others respond better to patience and explanation.",
        "Understand the person's character and circumstances before deciding how to approach them."
      ],

      20: [
        "Committing yourself too quickly can reduce your ability to respond when circumstances change.",
        "Maintaining independence gives you more room to evaluate different opportunities.",
        "Cooperate with others while keeping your own judgment and responsibilities."
      ],

      21: [
        "Showing every skill you possess can sometimes make others defensive or competitive.",
        "Allowing people to underestimate your knowledge can give you more time to observe.",
        "Quiet confidence can be more useful than constantly proving how much you know."
      ],

      22: [
        "Not every situation should be met with direct resistance.",
        "Stepping back can protect your resources when the immediate battle is unfavorable.",
        "A temporary retreat can give you time to recover, learn, and choose a better approach."
      ],

      23: [
        "Dividing your attention between too many goals can reduce the quality of everything you do.",
        "Concentrated effort allows you to develop deeper expertise in an important area.",
        "Decide which objective deserves the greatest share of your limited time and energy."
      ],

      24: [
        "Social environments have different expectations about communication and behavior.",
        "Tact allows you to disagree or negotiate without unnecessarily creating hostility.",
        "Good social awareness means knowing when to speak, when to listen, and how to show respect."
      ],

      25: [
        "Your current circumstances do not have to permanently determine who you become.",
        "New skills, habits, and experiences can change the direction of your life.",
        "Create an identity based on your chosen values and abilities rather than simply accepting an old label."
      ],

      26: [
        "Your reputation can suffer when you become unnecessarily connected to other people's harmful actions.",
        "Handle sensitive situations with clear responsibility and honest communication.",
        "Keeping your conduct clean means avoiding actions that create problems you could reasonably have prevented."
      ],

      27: [
        "People naturally look for communities, meaning, and ideas they can believe in.",
        "A clear purpose can bring people together around something positive.",
        "Build belonging through trust and shared values rather than exploiting people's vulnerabilities."
      ],

      28: [
        "Constant hesitation can prevent a reasonable plan from ever becoming action.",
        "Confidence makes your decisions easier for others to understand and respond to.",
        "Think carefully first, then commit your energy instead of repeatedly doubting every step."
      ],

      29: [
        "A decision that looks successful at the beginning can create unexpected problems later.",
        "Thinking about the final destination helps you recognize obstacles before they appear.",
        "Prepare alternative routes so one unexpected problem does not destroy the entire plan."
      ],

      30: [
        "Smooth performance usually comes from practice that happens long before the final result.",
        "Preparation allows complicated skills to become natural and efficient.",
        "The goal is not to hide effort dishonestly, but to develop enough mastery that execution becomes controlled."
      ],

      31: [
        "The choices you present can influence how people think about a decision.",
        "Clear alternatives can make complicated decisions easier to understand.",
        "Good choice design gives people real options while keeping the important objective visible."
      ],

      32: [
        "People often respond strongly to visions of what their future could become.",
        "Understanding someone's hopes can help you communicate an idea in a meaningful way.",
        "A realistic and inspiring vision can motivate people more effectively than a list of dry facts."
      ],

      33: [
        "People are influenced by different rewards, concerns, ambitions, and personal priorities.",
        "Observing repeated behavior can reveal what someone genuinely values.",
        "Understanding motivation helps you communicate with people in ways they can actually respond to."
      ],

      34: [
        "Your posture, language, and behavior communicate how you value yourself.",
        "People often respond to the standards you consistently establish.",
        "Self-respect is strongest when it appears through calm confidence rather than arrogance."
      ],

      35: [
        "An excellent opportunity can disappear if you act before the conditions are ready.",
        "Waiting can be productive when you use the time to prepare.",
        "Learn to recognize moments when action is useful and moments when patience is smarter."
      ],

      36: [
        "Some goals remain unavailable despite how much attention you give them.",
        "Repeatedly focusing on an impossible outcome can consume energy needed elsewhere.",
        "Accept what cannot be controlled and redirect your effort toward achievable objectives."
      ],

      37: [
        "People remember experiences that are visually clear and emotionally engaging.",
        "A strong presentation can turn an ordinary idea into something easier to understand.",
        "Use design, demonstrations, and memorable details when they genuinely improve communication."
      ],

      38: [
        "Independent thinking does not require constant public disagreement.",
        "Understanding social customs can help you communicate without creating unnecessary resistance.",
        "Keep your personal beliefs while adapting your behavior appropriately to different environments."
      ],

      39: [
        "Strong emotions can cause people to make decisions they would reconsider later.",
        "Remaining calm gives you more time to understand what is actually happening.",
        "When situations become chaotic, clear thinking is often more useful than reacting emotionally."
      ],

      40: [
        "Something offered for free may still carry conditions, expectations, or hidden costs.",
        "Paying fairly can sometimes create a clearer and more independent relationship.",
        "Before accepting an attractive offer, consider what you may actually be giving in return."
      ],

      41: [
        "Following a famous predecessor too closely can make your own achievements difficult to recognize.",
        "Past success can teach valuable lessons without becoming a blueprint you must copy.",
        "Develop a direction that reflects your own abilities, circumstances, and goals."
      ],

      42: [
        "Groups can remain unstable when one central source repeatedly creates conflict.",
        "Finding the root of a problem is often more effective than treating every symptom separately.",
        "Address the main cause while avoiding unnecessary harm to people who are not responsible."
      ],

      43: [
        "People are more likely to cooperate when they believe their concerns are genuinely understood.",
        "Listening carefully can reveal needs that are hidden behind someone's words or behavior.",
        "Respect grows when you consistently consider both logic and human emotion."
      ],

      44: [
        "Reflecting someone's communication style can reveal patterns they may not notice themselves.",
        "Mirroring can help you understand how a person's behavior affects others.",
        "Use reflection as a tool for awareness and communication rather than deliberately provoking someone."
      ],

      45: [
        "People can become defensive when familiar systems are changed too quickly.",
        "Gradual improvement gives people time to understand and adapt to new methods.",
        "Keep useful traditions while making carefully chosen changes where improvement is genuinely needed."
      ],

      46: [
        "Appearing completely flawless can create unrealistic distance between you and other people.",
        "Natural imperfections can make success feel more human and relatable.",
        "Aim for genuine excellence instead of exhausting yourself trying to maintain an impossible image."
      ],

      47: [
        "Winning can create excitement that encourages unnecessary additional risks.",
        "A successful result should be protected before pursuing another challenge.",
        "Recognizing the stopping point is part of strategic thinking, not a sign of weakness."
      ],

      48: [
        "Rigid strategies can become useless when circumstances change unexpectedly.",
        "Flexibility allows you to adjust your methods without abandoning your important goals.",
        "Instead of becoming trapped by one identity or approach, remain open to learning and adaptation."
      ]
    };

    return explanations[law.id];


  };
  const filteredLaws = laws.filter((law) =>
    `${law.id} ${law.title} ${law.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

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

        <div className="mb-5 flex gap-2">
          <input
            type="text"
            placeholder="Search laws..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-lg border border-[#2a2640] bg-[#17151f] px-3 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500"
          />

          <button
            onClick={resetProgress}
            className="rounded-lg bg-[#9b7ae8] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-violet-400"
          >
            Reset
          </button>
        </div>

        {query && filteredLaws.length === 0 && (
          <div className="mt-4 rounded-lg border border-violet-500/20 bg-[#15131d] px-4 py-4 text-center">
            <p className="text-sm font-semibold text-white">
              No law found
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              There are only 48 laws. Try searching for Law 1–48.
            </p>
          </div>
        )}

        {/* ================= LAWS GRID ================= */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filteredLaws.map((law) => {
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
                      className={`mb-1 text-[12px] font-bold uppercase tracking-wider ${isCompleted
                        ? "text-violet-400"
                        : "text-violet-500"
                        }`}
                    >
                      LAW {String(law.id).padStart(2, "0")}
                    </p>

                    {/* LAW TITLE */}
                    <h2
                      className={`text-[16px] font-bold leading-snug sm:text-[15px] ${isCompleted
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
                  className="pr-8 text-[13px] leading-relaxed text-zinc-400 sm:text-[12px]"
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