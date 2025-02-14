export function FlixBusLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      version="1.1"
      id="flixbus-logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={className}
      fill="none"
      data-testid="flixbus-logo"
    >
      <text
        x="50%"
        y="55%"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="40"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
      >
        FLIXBUS
      </text>
    </svg>
  );
}
