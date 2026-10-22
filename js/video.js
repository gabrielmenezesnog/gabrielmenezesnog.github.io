// Swap the thumbnail for the YouTube player only when the visitor asks for it.
// Without JS the link still opens the video on YouTube.
document.querySelectorAll(".video-frame").forEach((frame) => {
  const link = frame.querySelector(".video-play");
  if (!link) return;

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${frame.dataset.videoId}?autoplay=1&rel=0`;
    iframe.title = link.getAttribute("aria-label");
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    link.replaceWith(iframe);
    iframe.focus();
  });
});
