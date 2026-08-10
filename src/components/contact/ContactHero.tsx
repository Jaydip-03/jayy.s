export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-8">

        {/* Label */}

        <div className="mb-12 flex items-center gap-6">

          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Let's Talk
          </span>

          <div className="h-px flex-1 bg-neutral-200" />

        </div>

        {/* Hero */}

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_480px]">

          {/* Left */}

          <div>

            <h1 className="max-w-3xl text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">

              Let's build
              <br />

              something
              <br />

              meaningful.

            </h1>

            <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-600">

              Whether you're hiring, building a product,
              or simply want to connect, I'd love to hear
              your ideas and explore how we can create
              something impactful together.

            </p>

            <div className="mt-14 flex items-center gap-4">

              <div className="h-px w-20 bg-black" />

              <span className="text-sm font-medium">
                Open to Opportunities
              </span>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex items-center justify-center">

            {/* Outer Circle */}

            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full border border-neutral-200">

              {/* Middle */}

              <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full border border-neutral-200">

                {/* Inner */}

                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-900 text-white">

                  <span className="text-lg font-semibold tracking-[0.2em]">

                    JAYY/

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}