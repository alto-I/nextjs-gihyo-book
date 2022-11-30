export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error(
      errorRes.messege ?? 'APIリクエスト中にエラーが発生しました',
    );

    throw error;
  }

  return res.json();
};
