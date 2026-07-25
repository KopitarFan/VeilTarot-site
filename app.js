const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-demo-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.demoTab;
    document.querySelectorAll("[data-demo-tab]").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-demo-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.demoPanel === selected);
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
