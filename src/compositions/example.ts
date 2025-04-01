import * as core from '@diffusionstudio/core';

export const composition = new core.Composition();


// Array of video URLs
const videoUrls = [
  'https://player.vimeo.com/progressive_redirect/playback/932968715/rendition/720p/file.mp4?loc=external&signature=96804b58e0c6cf311e32c9338f073e064e0130fad984109edd934b551484df05',
  'https://player.vimeo.com/progressive_redirect/playback/932968538/rendition/720p/file.mp4?loc=external&signature=d0a81361234a1798fe95a3885cfd30857bc32ea08f8c90e008c9585fffb9f03f',
  'https://player.vimeo.com/progressive_redirect/playback/932968857/rendition/720p/file.mp4?loc=external&signature=39c739a4ecc4886d8e8a53b12a8f5af4758c85d5b0a54bf5d08f61d80b5fbe10',
  'https://player.vimeo.com/progressive_redirect/playback/1071488894/rendition/480p/file.mp4?loc=external&signature=164d0d9a24aaf6a8964f53c904b347895d38eab1be41b10391332beb58fc3286',
  'https://player.vimeo.com/progressive_redirect/playback/1071469304/rendition/720p/file.mp4?loc=external&signature=ab1f9001e85b7dc021e5f91e1ba64d5252e51a50c394836e863f9d4e2e8ca0e0',
  'https://player.vimeo.com/progressive_redirect/playback/1071481315/rendition/540p/file.mp4?loc=external&signature=0805bfd846ae56555b0e4f8d7e02da6154038fb3b71a1a5eccfb4f7aaa2d57ba',
  'https://player.vimeo.com/progressive_redirect/playback/1071470957/rendition/360p/file.mp4?loc=external&signature=79362a6d0b979e9e7adfbb1487e65e6b959875413b1ccb5857267cc15d33a456',
  'https://player.vimeo.com/progressive_redirect/playback/1071469074/rendition/480p/file.mp4?loc=external&signature=a80b062a701cee6e55dfe1afde186b639fdbd1254b0b7ca82cf94de8296fd773',
  'https://player.vimeo.com/progressive_redirect/playback/1071466675/rendition/480p/file.mp4?loc=external&signature=d712ff5c36ade49450e68f2939e48eefeca1e11b1859572094e39562957b9437',
  'https://player.vimeo.com/progressive_redirect/playback/1071459711/rendition/1080p/file.mp4?loc=external&signature=df5ecb12e2d0c7e86391ae7cce323b71c6a48fde73ddf69d9124b96203c77893',
  'https://player.vimeo.com/progressive_redirect/playback/1071462410/rendition/720p/file.mp4?loc=external&signature=1735ee4cf37f42cc63d721309fc47c8fddad9d348edefe511773834a292f9069',
  'https://player.vimeo.com/progressive_redirect/playback/1071462982/rendition/720p/file.mp4?loc=external&signature=baf83ad2962b4cb76d7e0d7684b890580ce7a9b0202248228e1e09e6c186378c',
  'https://player.vimeo.com/progressive_redirect/playback/1071459414/rendition/720p/file.mp4?loc=external&signature=064063b146a245a7c09d4a9ff406ac189c128f9f09c08921c7fba7764222435a',
  'https://player.vimeo.com/progressive_redirect/playback/1071462507/rendition/360p/file.mp4?loc=external&signature=772daaafccfb6b90500784d1a8445cfd769edeed4aa662fb74ba1ad2cc89edd2',
  'https://player.vimeo.com/progressive_redirect/playback/1071467693/rendition/1080p/file.mp4?loc=external&signature=576e7ed5158b56d29bdcc67a4a2c258e6b7d49bd31fd4d32caaf0de3d4defc93',
];

// Create sequential layers
const videoLayer = composition.createLayer().sequential();

// Add video clips to the layer
for (const url of videoUrls) {
  await videoLayer.add(
    new core.VideoClip(url, {
      height: '100%',
      position: 'center',
    })
  );
}
