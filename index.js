export default {
  async fetch(request) {
    try {
      const head = await fetch("https://philiphackerzx.com", { method: "HEAD" });
      if (head.ok) return fetch("https://philiphackerzx.com");
    } catch (err) {
      return Response.redirect("https://github.com/philiphackerzx", 302);
    }
  }
};
