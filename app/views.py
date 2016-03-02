from flask import (render_template, jsonify)
from app import (app, unauthenticated_api)

@app.route('/')
@app.route('/index')
def index():
  return render_template('index.html')

@app.route('/selfie')
def selfie():
  medias, _next = unauthenticated_api.tag_recent_media(
    tag_name="selfie",
    count=1)

  media = medias[0]

  result = dict(
    id=media.id,
    standard_res_url=media.get_standard_resolution_url(),
    low_res_url=media.get_low_resolution_url(),
    thumb_url=media.get_thumbnail_url()
  )

  return jsonify(result)
