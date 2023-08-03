+++
# Hero Carousel widget.
widget = "hero_carousel"
active = false
date = 2017-10-15T00:00:00

# Order that this section will appear in.
weight = 1

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 5000

# Minimum slide height.
# Specify a height to ensure a consistent height for each slide.
height = "555px"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = ""
  #content = "Journal <br> Reviewer"
  align = "left"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
#  overlay_color = "#666"  # An HTML color value.
  overlay_img = "headers/CEAold.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0  # Darken the image. Value in range 0-1.

#  # Call to action button (optional).
#  #   Activate the button by specifying a URL and button label below.
#  #   Deactivate by commenting out parameters, prefixing lines with `#`.


 [[item]]
   title = "Curso de Ense&ntilde;anza Abierta"
   content = """Introducci&oacute;n a la Fon&eacute;tica Judicial <br> Inicio 11 de enero de 2021 <br> Curso virtual (150 horas) <br> Matr&iacute;cula abierta hasta el 30 de noviembre
"""
   align = "right"
   
  cta_label = "Haz clic aqu&iacute; para matricularte"
  cta_url = "https://formacionpermanente.uned.es/tp_actividad/idactividad/11946"
  cta_icon_pack = "fas"
  cta_icon = "graduation-cap"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = "headers/CEAbis.jpg"  # Image path relative to your `static/img/` folder.
   overlay_filter = 0  # Darken the image. Value in range 0-1.



+++
