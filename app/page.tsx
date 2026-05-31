import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="my-16">
        <div className="flex flex-col gap-3">
          <p className="text-muted text-xs font-dmSans font-light">
            — Content that moves markets
          </p>
          <h1 className="text-5xl font-bold font-syne text-primary tracking-tighter">
            We don&#39;t Make Noise. We Make{" "}
            <span className="text-electric">Signal</span>.
          </h1>
          <p className="text-muted text-sm text-left leading-5 font-light">
            <span className="text-lg text-electric font-semibold font-dmSans">
              Signal
            </span>{" "}
            is a content and digital marketing agency built for brands that are
            done blending in. We build content ecosystems that attract the right
            audience, earn their trust, and convert them into revenue —
            consistently
          </p>
        </div>
      </header>
      <main className="my-16">
        <Problem />
        <Services />
      </main>
    </>
  );
}
