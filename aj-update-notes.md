> press cmd + K then V to preview in VS

# homeslider-nav

I have amended so that the main body of styles sits outside of the media query, and the moved the media specific styles in media queries.

# empty #homeSlider-nav
I found that an empty homeSlider-Nav would still have height, I have amended the styles with :empty() pseudo class, now the nav must have contents to have padding/margin.

**see \_homeSlider.scss**


# button specificity

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

**see \_homeSlider.scss**



## some issues we discussed for next update

- font
  - international glyph support
  - title / body weights
- slick alternative
- naming convention
- units
- no sass doc
