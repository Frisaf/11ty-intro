---
layout: layout.html
title: "Home"
---
## Startsida
<p>Kallt ovälkommen, och ovänliga hälsningar!</p>

### Alla inlägg
<ul>
    {%- for post in collections.posts -%}
        <li class=postItem>
            <h4><a href="{{ post.url }}"> {{ post.data.title | capitalize }}</a></h4>
            {%- if post.data.summary -%}
                <p class="summary"><em>{{ post.data.summary }}</em></p>
            {%- else -%}
                <p class="summary"><em>Utan sammanfattning</em></p>
            {%- endif -%}
            <time>{% formatDate post.date %}</time>
        </li>
    {%- endfor -%}
</ul>