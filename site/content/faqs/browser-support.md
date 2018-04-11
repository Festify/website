---
title: "Which browsers do you support?"
draft: false
weight: 2
---

Festify supports all so-called 'evergreen' browsers. That is, every common browser except for Internet Explorer. Our personal recommendations are Google Chrome, Mozilla Firefox or Safari. But any other browser that is based on one of them (like Opera, which is based on Google Chrome) works just as well.

Playback is a separate topic:
When playing music, Festify needs to interact with the Spotify Web Playback APIs, which have their own restrictions and caveats. Out of the box, you can play music in Google Chrome and Firefox on desktop devices. Android devices (as of April 2018) can also play music if you open Festify in the "Desktop Mode" of your browser. Spotify is currently working on making the playback APIs work even if you don't use it. Safari is not supported at all, unfortunately, because it doesn't support the DRM scheme Spotify uses. This also applies to all other browsers on iOS because they're [just Safari with a different branding](https://arstechnica.com/gadgets/2016/01/new-chrome-for-ios-is-finally-as-fast-and-stable-as-safari/). To avoid confusing users, we thus have hidden the "Create Party" button in affected browsers. When Spotify updates their systems to support Safari, we will update Festify to display the button again.

If you are interested in background information, please visit [Spotify/web-playback-sdk#10](https://github.com/spotify/web-playback-sdk/issues/10#issuecomment-358644985).