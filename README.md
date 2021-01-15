# Generate preview images for social media

This is a simple project demoing an architecture using Netlify and ImageEngine to generate and cache social media preview images with text on them.

1. Clone this repo.
2. Put it on Netlify.
3. customise the function `capture.js` with your Netlify `url`
4. Customise the design of `App.svelte`
5. Test by accessing `https://<yournetlifyhost>/.netlify/functions/capture?title=My%20Title&desc=Her%27s%20the%20short%20summary`
6. Sign up for [ImageEngine](https://imageengine.io). Use your `<yournetlifyhost>` as the origin for ImageEngine
7. Update your `<meta>` tags to refer to the ImageEngine Delivery Address: `https://<ImageEngineDeliveryAddress>/.netlify/functions/capture?title=My%20Title&desc=Her%27s%20the%20short%20summary`

Done.
