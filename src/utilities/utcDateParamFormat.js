//format for ZULU date and not broswer date:
export default function utcDateParamFormat(pDate) {
  const year = pDate.getFullYear();
  const month = pDate.getUTCMonth() + 1;
  const day = pDate.getUTCDate();

  return `${month}/${day}/${year}`;
}
