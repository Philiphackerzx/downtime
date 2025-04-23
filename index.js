export default {
  async fetch(request) {
    try {
      let head = await fetch("https://philiphackerzx.com", { method: "HEAD" });
      if (head.ok) {
        return fetch(request);
      }
    } catch (e) {
    }
    return Response.redirect("https://github.com/philiphackerzx", 302);
  }
}
