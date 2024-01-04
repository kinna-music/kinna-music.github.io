---
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in site.film %}{% if page.layout != "nil" %}
    <url>
        <loc>https://www.kinna.co.uk{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
	{% for page in site.music %}{% if page.layout != "nil" %}
    <url>
        <loc>https://www.kinna.co.uk{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
	{% for page in site.news %}{% if page.layout != "nil" %}
    <url>
        <loc>https://www.kinna.co.uk{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
</urlset>
