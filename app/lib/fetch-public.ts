const USER_AGENT = "Mozilla/5.0 (compatible; safal-gautam-portfolio/1.0; +https://www.safal-gautam.com.np)";
const ATTEMPTS = 3;
const TIMEOUT_MS = 15_000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Build-time fetch of public third-party data. On GitHub Actions a failure fails the build,
// so the live site keeps its last good deploy rather than shipping without the data.
// Locally it returns null and the caller hides that piece of the page.
export async function fetchPublic(url: string, source: string): Promise<Response | null> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": USER_AGENT },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    if (attempt < ATTEMPTS) await sleep(attempt * 2000);
  }

  const message = `[${source}] ${url} failed after ${ATTEMPTS} attempts: ${lastError}`;
  if (process.env.GITHUB_ACTIONS) throw new Error(message);
  console.warn(`${message} — hidden for this build`);
  return null;
}
