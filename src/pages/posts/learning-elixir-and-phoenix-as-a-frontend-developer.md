---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Learning Elixir as a frontend developer"
pubDate: 2024-07-01
description: "Reflections on going fullstack by adding Elixir and Phoenix to my skill set."
author: "Oliwer Iwanicki"
tags: ["programming", "fullstack", "elixir"]
---

When I joined Contractbook in 2021, I made a promise to myself to use the job change as an opportunity to solidify my backend knowledge. My motivation was to become a more well-rounded developer, and leave my technical comfort zone.

My MS in Computer Science gave me a good foundation to explore any technical direction, and I had been working on some backend projects on my own. However, it was never consistent, as I had been focused on the frontend for most of my career.

[Elixir](https://elixir-lang.org/) is a relatively new functional language built on top of Erlang, and [Phoenix](https://www.phoenixframework.org/https://www.phoenixframework.org/) is its most popular web application framework. I probably wouldn’t have learned them if I hadn’t found a perfect job opening. My current employer was open to hiring a frontend developer with the prospect of catching up with Elixir. Since the language is still somewhat niche, companies adopting it often take this approach.

A quick research showed that most programmers who use this language really like it. Considering my limited but positive experience with functional programming and my eagerness to dive further into it, I decided to apply and happily landed the job.

## The learning process


My approach was to familiarize myself with the syntax and core concepts first. I started by reading the official [Elixir getting started guide](https://elixirschool.com/en/lessons/basics/basics#getting-started-0) and experimenting with the interactive console along the way. To reinforce what I was learning, I completed a few exercises on the [Exercism](https://exercism.org/tracks/elixir) platform. This gave me the confidence to start reading the code in the repository and write simple commands without constantly checking the documentation. For context, the Elixir application I was about to work on is a rather typical REST API focused on contract management.

When an opportunity arose, I picked up my first task, which was simple: make one of the existing endpoints compute and return a new value to the UI. The complexity of the tasks I was assigned gradually increased, allowing me to learn the entire API flow, both reading from and writing to the database. This process helped me understand how the repository is structured and where specific pieces of logic belong.

The learning curve was steep at first, mainly because the language introduced several concepts that were new to me, such as [pattern-matching](https://elixirschool.com/en/lessons/basics/pattern_matching), [with](https://elixirschool.com/en/lessons/basics/control_structures#with-3)/[case](https://elixirschool.com/en/lessons/basics/control_structures#case-1)/[cond](https://elixirschool.com/en/lessons/basics/control_structures#cond-2) statements, [atoms](https://elixirschool.com/en/lessons/basics/basics#atoms-7), and others. These concepts are understandable on their own, but combined, they initially made my brain work hard. However, as with most learning, it was a matter of repetition. Each time I encountered these concepts, they became more familiar until I reached the point where I could use them easily and with good awareness.

After becoming familiar with the language, it all of a sudden became to feel easy, almost like a breeze. I was eagerily looking for more backend tasks because it felt satifying to complete them.

I should emphasize that while I was able to juggle both frontend and backend tasks, there were times when I had to focus more on one of them. This was either due to the nature of the project I was working on or the preferences and capacity of other developers on the team. Therefore, there were times when I had to pause my Elixir learning and return to it later.

While I now feel confident in Elixir, I hesitate to consider myself an expert just yet. I haven't delved into more advanced language concepts like meta programming, and I feel I have room to improve in understanding server infrastructure. However, I am fluent in writing most new features and debugging issues.

## The Good


My overall feeling is that Elixir is a modern, well-designed, and thoughtfully constructed language. It allows for solving problems in an elegant, declarative way without introducing unnecessary abstractions for the sake of complexity. Here are a few things I particularly like about it.

The core mechanisms, such as [pattern-matching](https://elixirschool.com/en/lessons/basics/pattern_matching), encourage writing concise and flat code, reducing the need for numerous if statements. Using these principles, if done well, results in elegant, readable, and maintainable code.

The Elixir community, though smaller than others, is vibrant and proactive. In most cases, when I encountered an issue, I could find help and solutions. There's something about Elixir that fosters deep devotion among its users. Few people seem to use it without actively participating in the community.

The documentation is well-structured and, in most cases, the only necessary resource to progress with your code. Although it sometimes lacks examples, the language API is consistent, making it easier to figure out specific functions. The core team extends the language thoughtfully and consistently, which contrasts with my experience with JavaScript.

The ecosystem is easy to work with and doesn’t get in the way. Unlike other languages, I didn’t spend much time resolving cryptic dependency issues that prevent the application from compiling. There are also many high-quality libraries and frameworks for most needs.

Additionally, Elixir’s robustness and scalability are significant benefits, though not always evident from an average contributor’s perspective.

## Less Favorable Aspects

While my experience with Elixir has been very positive, there were a few things I liked less.

The syntax patterns Elixir introduces can be a double-edged sword. They can reinforce writing solid code, but when misused, they can result in difficult-to-follow code, especially in complex business areas. Encountering such code and trying to untangle it can be quite a challenge.

The previous point is compounded by the lack of a type system, which can present an additional obstacle. (although [a solution](https://www.youtube.com/watch?v=giYbq4HmfGA) is being worked on). Tracking the shape of objects passed through numerous functions can be tedious. While annotations are available, they don’t provide the same safety and readability as a proper type system.

As the ecosystem is still new, some parts, such as language servers used for code navigation and autocomplete, can be flaky. I’ve had several instances where it broke unexpectedly, either in VS Code or Zed, forcing me to switch between providers like Lexical, ElixirLS, and Next LS. However, I believe it’s only a matter of time before these tools become fully reliable (and I appreciate the efforts of those maintaining them!).

Finally, it's worth mentioning that Elixir might not be the best choice if you seek top performance, although this is more based on what I’ve read than on my observations in daily work.

## Conclusion


Elixir is a fantastic language with a thriving community, and I’m grateful to everyone who maintains it and its ecosystem. Despite its relative obscurity, it has the potential to become widely adopted if its current trajectory is maintained.

That being said, I might not abandon JavaScript for Elixir just yet. Despite its shortcomings and chaotic standards, JavaScript is still more comfortable for me. Perhaps it’s because I know it better, and I feel less experienced with Elixir. My preference may also be influenced by JavaScript’s omnipresence in both frontend and backend development, whereas Elixir has a more specialized scope, which might not always be as exciting for me. Writing APIs, even with cool technology, can become monotonous.

Regardless of personal preferences, I highly recommend other frontend-focused developers try a similar experiment. Learning Elixir has significantly contributed to my self-development, and that’s invaluable.
