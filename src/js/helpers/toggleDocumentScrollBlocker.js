export default function toggleDocumentScrollBlocker() {
  var body = document.body;

  if (body.classList.contains('document-scroll-blocker')) {
    body.classList.remove('document-scroll-blocker');
  }
  else {
    body.classList.add('document-scroll-blocker');
  }
}