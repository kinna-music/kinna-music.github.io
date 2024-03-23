---
layout: music
title: Music
date: 01/08/2023
publish: true
order: 1
summary: Really exciting music!
description: Kinna has been producing exciting music for a decade.
bandcamp:
spotify:
applemusic:
soundcloud:
---

{% assign content = site.music | sort: 'order' %}{% for post in content %}{% if post.publish == true %}{% if post.title != page.title %}{% include musicblock.html %}{% endif %}{% endif %}{% endfor %}
