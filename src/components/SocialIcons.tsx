export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.16-1.35A10 10 0 1 0 12 2Zm0 18.15c-1.5 0-2.97-.4-4.25-1.15l-.3-.18-3.06.8.82-2.99-.2-.3a8.15 8.15 0 1 1 7 3.82Zm4.47-6.1c-.24-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.45-.6 1.65-1.17.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.46-.27Z" />
    </svg>
  );
}
