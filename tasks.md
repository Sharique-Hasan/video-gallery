Video Gallery
---
Create a video gallery page (e.g. [ilovevideo.tv](http://gb.ilovevideo.tv/stars/prince-william-makes-history-on-the-cover-of-attitude-726776-1508107)) using infinite scroll and any of following features;

- Use any flash or html5 player framework (with an explanation why you chose if any) or simple html elements.
- Use any UI library, framework (with an explanation why you chose if any) or pure javascript, html, css.
- Use ES6 and/or babeljs and/or ES5.
- Load clips partially when user clicks on a load more button or reaches through the end of the existing list.
- Use static js/json data or any RESTful framework or tool (with an explanation why you chose if any). E.g. MongoDB in memory datasource with [LoopbackJS](http://loopback.io/).
- Automatically play the video clip which fits in viewport first/best. like [ilovevideo.tv](http://de.ilovevideo.tv/video/deutsche-nationalmannschaft-ein-beeindruckender-em-auftakt-725964-1506212)
- Keep layout responsive as much as possible.
- Logging video events via console like 'ad started', 'ad finished', 'content started', 'content finished'.
- Style by your own taste.

Sample clip load and model might be as following;
```json
"clips": [{
  "title": "Clip Title 1",
  "thumbnail": "freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg",
  "stream": {
    "protocol": "rtmp", 
    "streamer": "fms.edge.cdn.castaclip.net", 
    "file": "format_x405/05/17/27_670639_5D01B363-0CE9-ED2E-9C2A05093C20C2B7-500k-mp4.mp4"
  }
},
...]

```

- Resolve real image resources as following. (size can be any number or dash to be calculated by img ratio).
- [http://images.castaclip.net/resize/760x428/**freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg**](http://images.castaclip.net/resize/760x428/freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg)
- [http://images.castaclip.net/resize/760x-/**freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg**](http://images.castaclip.net/resize/760x-/freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg)
