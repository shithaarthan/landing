export default function SceneDemo() {
  return (
    <section className="scene demo min-h-screen flex flex-col items-center justify-center relative">
      <h2 className="demo-title text-3xl md:text-5xl font-bold text-center text-[var(--color-foreground)] mb-12">
        Upload. Preview. Save.
      </h2>
      <div className="steps flex space-x-8">
        <div className="step-1 opacity-0 -translate-x-20 w-48 h-48 bg-[var(--color-surface)] rounded-lg flex items-center justify-center border">
          <span className="text-[var(--color-muted)]">Step 1: Upload</span>
        </div>
        <div className="step-2 opacity-0 -translate-x-20 w-48 h-48 bg-[var(--color-surface)] rounded-lg flex items-center justify-center border">
          <span className="text-[var(--color-muted)]">Step 2: Preview</span>
        </div>
        <div className="step-3 opacity-0 -translate-x-20 w-48 h-48 bg-[var(--color-surface)] rounded-lg flex items-center justify-center border">
          <span className="text-[var(--color-muted)]">Step 3: Save</span>
        </div>
      </div>
    </section>
  );
}
