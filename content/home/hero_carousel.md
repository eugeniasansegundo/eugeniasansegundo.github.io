+++
# Hero Carousel widget.
widget = "hero_carousel"
active = true
date = 2017-10-15T00:00:00

# Order that this section will appear in.
weight = 30

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = false

# Minimum slide height.
# Specify a height to ensure a consistent height for each slide.
height = "250px"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "Journal <br> Reviewer"
  #content = "Journal <br> Reviewer"
  align = "right"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
#  overlay_color = "#666"  # An HTML color value.
  overlay_img = "headers/myheader.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0  # Darken the image. Value in range 0-1.

#  # Call to action button (optional).
#  #   Activate the button by specifying a URL and button label below.
#  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "More info coming soon"
#  cta_url = "https://sourcethemes.com/academic/"
#  cta_icon_pack = "fas"
#  cta_icon = "graduation-cap"

 [[item]]
   title = "Professional <br> Memberships"
# content = ""
   align = "left"

#  overlay_color = "#555"  # An HTML color value.
  overlay_img = "headers/myheader_membership.jpg"  # Image path relative to your `static/img/` folder.
   overlay_filter = 0  # Darken the image. Value in range 0-1.



+++
