import ringingShot from '../assets/screenshots/call-ringing.jpg'
import callScreenShot from '../assets/screenshots/call-screen.jpg'

export function Calls() {
  return (
    <section id="calls" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10">
        {/* Left: copy */}
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // SEC.09 · audio &amp; video calls
          </div>
          <h2 className="mt-5 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] md:text-[60px]">
            Hop on a<br />
            <span className="text-(--color-violet)">call.</span>
          </h2>
          <p className="mt-7 max-w-[34rem] text-[15px] leading-[1.6] text-(--color-ink-soft)">
            Go from a thread straight into a call — voice or video, one-to-one or
            the whole room. No meeting links, no guest accounts, no second app.
            Just the people already in your workspace.
          </p>
          <p className="mt-5 max-w-[32rem] text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
            Share your screen to walk through the work, pull someone in mid-call,
            mute or cut the camera with one tap — in a real, native call window on
            iPhone and Mac.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 md:max-w-md">
            {[
              ['ONE TAP', 'call anyone in your workspace.'],
              ['SCREEN SHARING', 'show the work, not just your face.'],
              ['GROUP CALLS', 'add people without restarting.'],
              ['NATIVE', 'true call UI on iOS & macOS.'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">
                  {k}
                </div>
                <div className="mt-1 text-[12.5px] text-(--color-ink-soft)">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
            <span
              className="inline-block h-[6px] w-[6px] rounded-full"
              style={{ background: '#3CB876', boxShadow: '0 0 8px #3CB87680' }}
            />
            <span>voice · video · screen share</span>
          </div>
        </div>

        {/* Right: two phone screenshots */}
        <div className="md:col-span-7">
          <div className="relative mx-auto flex max-w-[520px] items-end justify-center gap-4 sm:gap-6">
            <PhoneShot
              src={ringingShot}
              alt="Placing an audio call to a teammate on Interkom for iPhone"
              className="w-[44%] translate-y-4"
            />
            <PhoneShot
              src={callScreenShot}
              alt="An in-progress Interkom call with screen sharing on iPhone"
              className="w-[52%]"
              eager
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneShot({
  src,
  alt,
  className,
  eager,
}: {
  src: string
  alt: string
  className: string
  eager?: boolean
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[34px] p-[5px] ${className}`}
      style={{
        background: '#161616',
        border: '1px solid var(--color-paper-edge)',
        boxShadow: '0 30px 70px -30px rgba(0,0,0,0.8)',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="block w-full rounded-[30px]"
        style={{ aspectRatio: '1179 / 2556' }}
        loading={eager ? 'eager' : 'lazy'}
      />
    </div>
  )
}
