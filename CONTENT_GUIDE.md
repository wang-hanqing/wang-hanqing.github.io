# Website 2.0 maintenance
The website is built with Jekyll. Review all case study drafts and assets before merging this branch. The old resume.pdf remains untouched and should be replaced with an approved public resume before launch.
## Preview
Clone the repository, check out website-v2, and run Jekyll using the GitHub Pages gem (Ruby/Bundler required). Create a local Gemfile with source "https://rubygems.org" and gem "github-pages", group: :jekyll_plugins; then run bundle install and bundle exec jekyll serve. Open the local URL printed by Jekyll. A branch alone does not create a live GitHub Pages preview.
## Add a work item
Copy an existing file in _projects/. Use category exactly "Professional Work" or "Projects"; set unique slug and order, featured true only for homepage items (keep six). Set context, status, summary, mark and mark_note. Add optional cover and cover_alt using actual assets. Body is Markdown. Review accuracy and permissions.
## Publish a journal entry
Create _posts/YYYY-MM-DD-slug.md with front matter title, date, category (Insights, Updates or Field Notes), summary; optional cover, cover_alt, linkedin_url and related_work (project slug). Add body after front matter. Only add reviewed, publication-ready articles. Jekyll automatically generates article pages, index and homepage recent entries. Drafts may be kept locally outside _posts or in _drafts.
## Add a photo album
Upload permitted photos to assets/images/album-name/. Create _albums/album-name.md with front matter, for example:
```yaml
---
title: "Dancing across cultures"
category: "Arts & Culture"
location: "Columbia University"
when: "November 2026"
order: 1
summary: "Korean traditional fan dance."
cover: /assets/images/album-name/cover.webp
cover_alt: "Describe the actual cover photo"
photos:
  - src: /assets/images/album-name/photo-1.webp
    alt: "Describe the actual photo"
    caption: "Optional caption"
    width: 1200
    height: 800
---
```
Use actual dimensions and descriptions. Add more photos as needed; images link to their full files and can be opened by keyboard. Do not create public albums with missing photos. Other categories: Community & Connection; Places & Exploration. Optional journal_url links to an existing article.
## Pre-launch
Review all text; supply portrait and actual photos/project images; review resume and contact address; verify Jekyll build, navigation and internal links, phone layouts, keyboard focus, screen reader reading order, color contrast and image alt text. Test Chrome/Safari, VoiceOver/NVDA and Lighthouse/axe. Obtain approval before merge to main. No production publishing settings have been changed.
