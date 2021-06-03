/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Playback configuration
// Replace this with your own Amazon IVS Playback URL
const playbackUrlOld = 'https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8';
const urlParams = new URLSearchParams(window.location.search);
const playbackUrl = urlParams.get('key');

if (IVSPlayer.isPlayerSupported) {
  const player = IVSPlayer.create();
  player.attachHTMLVideoElement(document.getElementById('video-player'));

  /**
   * With setAutoplay, we don't need to call play() here to try and start the stream. One of three things will happen:
   * - Autoplay with sound
   * - Autoplay muted
   * - Playback blocked
   * If autoplay is muted or blocked, the viewer will need to manually interact with the video player in order to unmute or start playback.
   * See https://developers.google.com/web/updates/2017/09/autoplay-policy-changes for more info on autoplaying video and best practices.
   * */
  player.setAutoplay(true);
  player.load(playbackUrl);
  setTimeout(() => { player.setMuted(false); }, 4000);
}
