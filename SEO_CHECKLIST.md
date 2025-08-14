# SEO Implementation Checklist for ORAH

## ✅ Completed

### Technical SEO
- [x] **Metadata Configuration**: Centralized metadata in `lib/metadata.ts`
- [x] **Page-specific Metadata**: Added to all pages (home, about, programs, events, blog, theory-of-change)
- [x] **Structured Data**: Organization and Website schemas implemented
- [x] **Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- [x] **Robots.txt**: Auto-generated at `/robots.txt`
- [x] **Web App Manifest**: PWA manifest for mobile optimization
- [x] **Next.js Config**: Optimized for performance and SEO
- [x] **Google Analytics**: Ready for tracking (needs GA_ID)

### Content SEO
- [x] **Title Tags**: Unique, descriptive titles for each page
- [x] **Meta Descriptions**: Compelling descriptions under 160 characters
- [x] **Open Graph**: Social media sharing optimization
- [x] **Twitter Cards**: Twitter-specific metadata
- [x] **Keywords**: Relevant AI and Ottawa-focused keywords
- [x] **Semantic HTML**: Proper heading structure and markup

## 🔄 Next Steps

### 1. Environment Setup
```bash
# Copy the example file and add your tracking IDs
cp .env.local.example .env.local
```

Add your Google Analytics ID:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://orah.ca
```

### 2. Image Optimization
- [ ] Add alt text to all images
- [ ] Optimize image sizes and formats
- [ ] Create proper Open Graph images (1200x630px)

### 3. Content Optimization
- [ ] Add more internal linking between pages
- [ ] Create blog content for better keyword coverage
- [ ] Add FAQ sections for long-tail keywords

### 4. Performance
- [ ] Run Lighthouse audit
- [ ] Optimize Core Web Vitals
- [ ] Implement lazy loading for images

### 5. Local SEO (Ottawa-specific)
- [ ] Add Google My Business listing
- [ ] Create location-specific content
- [ ] Add local business schema markup

### 6. Analytics & Monitoring
- [ ] Set up Google Search Console
- [ ] Configure conversion tracking
- [ ] Monitor keyword rankings

## 📊 SEO Tools to Use

1. **Google Search Console**: Monitor search performance
2. **Google Analytics**: Track user behavior
3. **Lighthouse**: Performance and SEO audits
4. **Screaming Frog**: Technical SEO crawling
5. **Ahrefs/SEMrush**: Keyword research and competitor analysis

## 🎯 Target Keywords

Primary:
- "responsible AI Ottawa"
- "AI ethics Ottawa"
- "Ottawa AI community"
- "responsible artificial intelligence"

Secondary:
- "AI governance Canada"
- "ethical AI development"
- "AI policy Ottawa"
- "responsible tech Ottawa"

## 📈 Expected Results

With this SEO implementation, you should see:
- Better search engine rankings for AI-related keywords
- Improved social media sharing appearance
- Enhanced user experience and site performance
- Better tracking and analytics data
- Increased organic traffic over time

## 🚀 Deployment Notes

1. Update the site URL in `lib/metadata.ts` to your production domain
2. Set up proper environment variables in production
3. Submit sitemap to Google Search Console
4. Monitor Core Web Vitals after deployment