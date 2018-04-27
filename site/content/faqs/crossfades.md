---
title: "Can I set Festify to crossfade between tracks?"
draft: false
weight: 6
---

Festify uses the Spotify Web Playback SDK under the hood, and as such, we are limited to the functionality it provides. This includes crossfades. The Web Playback SDK does not currently support crossfading tracks and neither can we access the music data directly so that we could implement crossfades ourselves (as we did in the first version of Festify that was based on `libspotify`, that is now defunct).

Once Festify supports Spotify connect playback, however, you could set Festify to control the Spotify Desktop application, and that _does_ support crossfades.