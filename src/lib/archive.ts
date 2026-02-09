const ARCHIVE_BASE_URL = process.env.BASE_URL 

function getArchiveFileName<P>(name: string, params: P[]): string {
  let fileName = name;
  if (params.length > 0) {
    fileName += `-${params.join('-')}`;
  }

  return `${fileName}.json`;
}

async function readArchiveFile<T>(fileName: string): Promise<T> {
  const url = new URL(`/data/${fileName}`, ARCHIVE_BASE_URL);
  const response = await fetch(url.toString(), { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`archive_missing:${url.toString()}`);
  }

  return (await response.json()) as T;
}

export async function fetchArchiveJson<T, P>(
  name: string,
  ...params: P[]
): Promise<T> {
  const fileName = getArchiveFileName(name, params);
  return readArchiveFile<T>(fileName);
}