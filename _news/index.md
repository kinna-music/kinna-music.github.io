---
layout: default
title: News
date: 25/09/2023
publish: true
order: 1
summary: Really exciting news about Kinna!
description: Kinna has been producing exciting music and films - this is where you will get news first!
image:
youtube-url:
---

# News

{% assign content = site.news | sort: 'date' | reverse %}{% for post in content %}{% if post.publish != false %}{% if post.title != page.title %}{% include newsblock.html %}{% endif %}{% endif %}{% endfor %}
