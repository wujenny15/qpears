# Qpears

A professional-looking shop for objects that could hide in a coat pocket and still file a complaint. The layout is a quiet boutique template. The inventory is a dare. Checkout is meant to run through Square once you paste a real shop URL into `shop.js`.

## Look at it locally

From this folder:

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

Pages:

- `index.html` — front of house
- `shop.html` — the eight objects
- `about.html` — the house story
- `contact.html` — the inflatable cashier

To make **Add to bag** a real checkout, set this in `shop.js`:

```js
const SQUARE_SHOP_URL = "https://your-shop.square.site/s/shop";
```

Until then, every buy button walks people to the contact desk, which is honest of it.

## House stories

These are the official records. They are also mostly gossip.

### 1. The meeting that invented Qpears

Someone said, “We should sell small things.” Someone else said, “On Square.” A third person, who had already opened a font website, said, “It should look expensive.” Nobody voted. The pear in the logo was hired on the spot and has not received a contract.

The first product meeting lasted four minutes. Minutes of the meeting:

1. What if the whole catalog fits in a mug?
2. What if we still use generous whitespace?
3. Adjourn for fruit that we will not sell, because fruit goes off and jokes do not.

### 2. Seed of Doubt, a cautionary tale

A customer planted the seed, watered it, and emailed us on day three: “Nothing is happening.” We replied, “That is the product.” They asked for a refund of the doubt. We said doubt is non-returnable, but we could send a sticker for moral support. They bought the sticker. The sticker peeled off their kettle. They wrote a five-star review titled “consistent.”

### 3. Why we ship one sock

The Pear of Socks was supposed to be a pair. During packing, the second sock joined a union of missing laundry and declined to be photographed. Legal advised us not to invent a twin. Marketing named the absence a metaphor. Warehouse named it Tuesday. We sell one sock and include a card that says the other one is “working from home.”

### 4. The crumb that passed quality control

Mystery Crumb arrived in a sample bag labeled only `???`. The tasting panel refused. The design panel loved the color. Finance asked if we could charge two dollars. We could. It is now a hero SKU. If science ever identifies it, we will print a tiny plaque and raise the price by fifty cents out of respect.

### 5. Square, the other square

A visiting uncle asked why a pear shop needed to be square. We showed him the payment form. He nodded, then asked why the buttons were rectangular. We told him rectangles are squares that grew up and got jobs. He bought a pin.

### 6. The intern pear

The mascot is unpaid, untrained, and in every photograph. It once rolled behind the monitor during a Square setup and was missing for an afternoon. We listed it as “out of stock.” It returned with a leaf in its hair and a new sense of importance. We did not give it a raise. We gave it a Q.

## What this repo is

Static HTML, CSS, and a few SVG objects. No framework, no build step, no secret orchard. Funny on purpose. Professional on the surface. Tiny underneath.
