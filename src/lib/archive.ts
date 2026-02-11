const ARCHIVE_BASE_URL = process.env.BASE_URL 

function getArchiveFileName<P>(name: string, params: P[]): string {
  let fileName = name;
  if (params.length > 0) {
    fileName += `-${params.join('-')}`;
  }

  return `${fileName}.json`;
}

async function readArchiveFile<T>(fileName: string): Promise<T> {
  // Try URL-based fetch first
  if (ARCHIVE_BASE_URL) {
    try {
      const url = new URL(`/data/${fileName}`, ARCHIVE_BASE_URL);
      const response = await fetch(url.toString(), { cache: 'no-store' });

      if (response.ok) {
        return (await response.json()) as T;
      }
    } catch {
      // Fall through to filesystem read
    }
  }

  // Fallback: read from filesystem (for static builds)
  if (typeof window === 'undefined') {
    try {
      const { readFile } = await import('fs/promises');
      const { join } = await import('path');
      const filePath = join(process.cwd(), 'public', 'data', fileName);
      const fileContent = await readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as T;
    } catch {
      // If filesystem read also fails, throw error
      throw new Error(`archive_missing:${fileName} - Failed to read from both URL and filesystem`);
    }
  }

  throw new Error(`archive_missing:${fileName} - No ARCHIVE_BASE_URL set and not in Node.js environment`);
}

export async function fetchArchiveJson<T, P>(
  name: string,
  ...params: P[]
): Promise<T> {
  const fileName = getArchiveFileName(name, params);
  return readArchiveFile<T>(fileName);
}