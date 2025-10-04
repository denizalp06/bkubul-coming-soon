export default async function handler(req, res) {
  const lat = Number(req.query?.lat ?? 39.92077);
  const lon = Number(req.query?.lon ?? 32.85411);
  const lim = Number(req.query?.lim ?? 10);

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!base || !key) return res.status(500).json({ error: 'Missing envs' });

  const r = await fetch(`${base}/rest/v1/rpc/nearest_dealers`, {
    method: 'POST',
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ in_lat: lat, in_lon: lon, lim }),
  });

  if (!r.ok) return res.status(r.status).json({ error: await r.text() });
  res.status(200).json(await r.json());
}
