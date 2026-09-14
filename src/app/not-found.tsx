import { CircuitTraces, DecorGrid, GlowRing, ChipGlyph } from "@/components/reuseable/decor";

export default function NotFound() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7fbfa",
        backgroundImage:
          "radial-gradient(900px 520px at 100% -10%, rgba(4,176,168,0.16), transparent 60%)," +
          "radial-gradient(800px 520px at -6% 12%, rgba(2,82,78,0.12), transparent 55%)",
        padding: "48px 16px",
        fontFamily:
          "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <DecorGrid variant="dots" opacity={0.3} />
        <GlowRing
          size={460}
          variant="dashed"
          color="rgba(4,176,168,0.2)"
          sx={{ top: -160, left: -160 }}
        />
        <CircuitTraces
          opacity={0.1}
          sx={{ bottom: 0, right: 0, width: 520, height: 360 }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 480,
        }}
      >
        <div
          style={{
            position: "relative",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(8px)",
            borderRadius: 20,
            padding: "56px 32px",
            border: "1px solid rgba(4,176,168,0.18)",
            boxShadow: "0 40px 90px -44px rgba(4,20,19,0.45)",
          }}
        >
          <ChipGlyph
            size={72}
            opacity={0.35}
            sx={{ position: "absolute", right: 18, top: 18 }}
          />

          <div
            style={{
              fontSize: "128px",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: 8,
              backgroundImage: "linear-gradient(135deg, #04b0a8, #02524e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#101418",
              margin: "0 0 12px",
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "#5b6570",
              lineHeight: 1.7,
              maxWidth: 380,
              margin: "0 auto 32px",
            }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist. It
            might have been moved, deleted, or the URL might be incorrect.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 700,
                borderRadius: 999,
                color: "#fff",
                textDecoration: "none",
                backgroundImage: "linear-gradient(135deg, #04b0a8, #02524e)",
                boxShadow: "0 16px 32px -14px rgba(4,176,168,0.6)",
              }}
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
