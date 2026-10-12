async function submitForm(formId, endpoint, messageId, renderList, listId) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "Submitting...";
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      message.textContent = result.message;
      form.reset();
      await renderList(listId, endpoint);
    } catch (error) {
      message.textContent = error.message || "Could not connect to the server.";
    }
  });
}

async function renderList(listId, endpoint) {
  const list = document.getElementById(listId);
  try {
    const response = await fetch(endpoint);
    const entries = await response.json();
    list.replaceChildren();
    if (!entries.length) {
      const li = document.createElement("li");
      li.className = "empty";
      li.textContent = listId === "members-list" ? "No members added yet." : "No travel plans yet.";
      list.appendChild(li);
      return;
    }
    entries.slice().reverse().forEach((entry) => {
      const li = document.createElement("li");
      if (listId === "members-list") {
        li.textContent = `${entry.name} · ${entry.clubName || "No club listed"} · ${entry.email}`;
      } else {
        li.textContent = `${entry.name} → ${entry.destination}${entry.travelDate ? " · " + entry.travelDate : ""}`;
      }
      list.appendChild(li);
    });
  } catch (_) {
    list.innerHTML = '<li class="empty">Could not load entries.</li>';
  }
}

(async function init() {
  await renderList("members-list", "/api/members");
  await renderList("travel-list", "/api/travel-buddies");
  submitForm("member-form", "/api/members", "member-message", renderList, "members-list");
  submitForm("travel-form", "/api/travel-buddies", "travel-message", renderList, "travel-list");
})();
