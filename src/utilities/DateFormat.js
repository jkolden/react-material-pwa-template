//format for ZULU date and not broswer date:
export default function DateFormat(pDate) {
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(pDate);
  const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(pDate);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(pDate);

  return `${mo} ${da}, ${ye}`;
}
