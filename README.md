# bkubul.com — Coming Soon (statik site)

Bu klasör, **Vercel** üzerinde anında dağıtılabilecek basit bir statik “yakında” sayfası içerir. Harici ücretli servis yoktur.

## İçerik
- `index.html` — tek sayfalık “yakında” sayfası
- (İsteğe bağlı) `vercel.json` — yönlendirme/ayarlar (gerekli değil)

## Nasıl dağıtılır? (Vercel — ücretsiz plan)
1. https://vercel.com adresinden hesap aç.
2. “Add New…” → **Project** → GitHub’dan bu repoyu seçerek deploy et.
3. Proje oluşturulduğunda sana bir `*.vercel.app` adresi verilir.

## Alan adını bağla (Cloudflare DNS)
1. Vercel Projesi → **Settings → Domains** → **bkubul.com** ve `www.bkubul.com` ekle.
2. Cloudflare DNS’te şu kayıtları oluştur (Proxy: **DNS only**):
   - **A** kaydı: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
3. Domainler doğrulandığında Vercel otomatik SSL kurar.
