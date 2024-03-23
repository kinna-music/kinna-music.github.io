---
layout: default
title: Contact
---

<form
 action="https://formspree.io/f/xeqbkonw"
 method="POST"
 >
<label for="name"><span>Your name:</span><input type="string" name="name" id="name" size="48" autofocus required autocomplete="on" placeholder="Your name"></label>
<label for="email"><span>Your email address:</span><input type="email" name="email" id="email" size="48" autocomplete="on" required pattern=".+@.+" placeholder="yourname@gmail.com"></label>
<label for="message"><span>Your message:</span><textarea name="message" id="message" rows="10" cols="48" required placeholder="Your message"></textarea></label>
<button type="submit" id="submit">Send</button>
</form>
