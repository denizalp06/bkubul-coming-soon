export default function handler(req, res) {
  res.status(200).json({
    urlSet: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonSet: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  });
}
