export function wait(miliseconds: number) {
  const waitUntil = new Date().getTime() + miliseconds;
  while (new Date().getTime() < waitUntil) continue;
}
