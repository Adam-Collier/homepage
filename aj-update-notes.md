> press cmd + K then V to preview in VS

- ## homeslider-nav

I have amended so that the main body of styles sits outside of the media query, and the moved the media specific styles in media queries.

**see \_homeSlider-nav**

- ## button specificity

```
@media (min-width: 768px) {
  // #homeSlider .button {
  .row .button {
```

I have chnaged the parent from #homeSlider to .row to reduce specificity, whilst still only targetting those .buttons that are within the carousel whilst above 768px. Meaning that we no longer have to define custom buttons as ...

```
#homeSlider .row3 .button {
    background: #BADA55;
    color: rgb(50, 50, 50);
}
```

and can now define them much easier by specifiying only the row they are on...

```
.row3 .button {
    background: #BADA55;
    color: rgb(50, 50, 50);
}
```

**see \_homeSlider-nav**

## some issues I discovered

- if `#homeSlider nav` is empty, it still has height.
- not sure of the function of `.blocker` in relation to `.slick-three`, only seems to get in the way of swipes. I'm probably dead wrong about this though.

## some issues we discussed

- font
  - international glyph support
- slick alternative
- naming convention
- units
- no sass doc
