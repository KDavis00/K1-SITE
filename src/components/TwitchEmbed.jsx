import { useEffect } from 'react';

export default function TwitchEmbed() {
  useEffect(() => {
    const container = document.getElementById('twitch-embed');
    if (container) {
      container.innerHTML = '';
    }

    if (window.Twitch && window.Twitch.Embed) {
      new window.Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 480,
        channel: 'illuminatedk1',
        layout: 'video',
        autoplay: true,
        parent: ['localhost'], // required by Twitch
      });
    }
  }, []);

  return (
    <section id="twitch" style={{ marginTop: '3rem' }}>
      <h2>Live on Twitch</h2>
      <div id="twitch-embed"></div>
    </section>
  );
}
