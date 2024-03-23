---
layout: film
title: Film
date: 01/08/2023
publish: true
order: 1
summary: Really exciting films!
description: Kinna has been producing exciting fims.
image:
youtube-url:
---


{% assign content = site.film | sort: 'order' %}{% for post in content %}{% if post.publish != false %}{% if post.title != page.title %}{% include filmblock.html %}{% endif %}{% endif %}{% endfor %}
