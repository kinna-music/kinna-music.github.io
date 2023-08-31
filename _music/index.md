---
layout: music
title: Music
date:
publish: true
order: 1
summary: Really exciting music!
description: Kinna has been producing exciting music for a decade.
bandcamp:
spotify:
applemusic:
soundcloud:
---
<div class="main" markdown="1">

# Music

{% assign content = site.music | sort: 'order' %}{% for post in content %}{% if post.publish = true %}{% if post.title != "Music" %}{% include musicblock.html %}{% endif %}{% endif %}{% endfor %}

</div>