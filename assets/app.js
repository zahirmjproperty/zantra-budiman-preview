/* ============================================================================
   ZENTRA Project — Budiman, Semenyih — app.js
   Renders project data, handles nav / tabs / gallery / lightbox / enquiry form
   ========================================================================== */
(function () {
  "use strict";

  const C = projectConfig;

  /* ---------- SVG icon set (gold line icons) ---------- */
  const ICONS = {
    shield:  '<path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z"/><path d="M9.2 12.2l2 2 3.6-4"/>',
    building:'<path d="M4 21V6l8-3 8 3v15"/><path d="M9 21v-5h6v5"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 12.5h.01M12 12.5h.01M16 12.5h.01"/>',
    layers:  '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    pin:     '<path d="M12 22s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10.5" r="2.6"/>',
    road:    '<path d="M6 21L9 3M18 21L15 3"/><path d="M12 5v3M12 11v3M12 17v2"/>',
    factory: '<path d="M3 21V10l5 3V10l5 3V7l8 4v10z"/><path d="M7 17h3M13 17h3M8 21v-4h3v4"/>',
    home:    '<path d="M3 10l9-7 9 7v11H3z"/><path d="M9 21v-6h6v6"/>',
    phone:   '<path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a16 16 0 0 1-16-16z"/>',
    file:    '<path d="M14 3H7v18h10V8z"/><path d="M14 3v5h3"/>',
    check:   '<path d="M4.5 12.5l5 5 10-11"/>'
  };
  const svg = (k) => '<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k] || ICONS.check) + "</svg></span>";

  /* ---------- WhatsApp helpers ---------- */
  const waUrl = (msg) =>
    "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.whatsappMessage);

  /* ---------- Render: hero benefits ---------- */
  document.getElementById("heroBenefits").innerHTML = heroBenefits
    .map(
      (b) =>
        '<div class="hb"><span class="hb-n">' + b.n + '</span><div><p class="hb-t">' +
        b.title + '</p><p class="hb-s">' + b.sub + "</p></div></div>"
    )
    .join("");

  /* ---------- Render: hero spec strip ---------- */
  document.getElementById("heroSpecs").innerHTML = heroSpecs
    .map((s) => '<div class="hs"><p class="hs-l">' + s.label + '</p><p class="hs-s">' + s.sub + "</p></div>")
    .join("");

  /* ---------- Render: about features ---------- */
  document.getElementById("aboutFeatures").innerHTML = [
    "Limited to only 15 units — 10 Semi-D + 5 Detached",
    "Showroom + Office + Factory + Warehouse concept",
    "Freehold with individual title",
    "Modern corporate glass façade",
    "66-ft main road frontage",
    "Pemaju: Pujangga Budiman — Magna Bay Sdn Bhd (586989-H)"
  ]
    .map((t) => "<li>" + t + "</li>")
    .join("");

  /* ---------- Render: highlights ---------- */
  document.getElementById("highlightGrid").innerHTML = highlights
    .map(
      (h, i) =>
        '<article class="card travel rv up" style="transition-delay:' + i * 70 +
        'ms">' + svg(h.icon) + "<h3>" + h.title + "</h3><p>" + h.text + "</p></article>"
    )
    .join("");

  /* ---------- Render: property types ---------- */
  document.getElementById("typeGrid").innerHTML = propertyTypes
    .map(
      (t, i) =>
        '<article class="card travel rv up" style="transition-delay:' + i * 90 + 'ms">' +
        '<div class="pt-head"><span class="pt-code">' + t.code + '</span><span class="pt-units">' +
        t.units + "</span></div><dl class=\"pt-rows\">" +
        t.specs
          .map(
            (r) =>
              "<div class=\"pt-row\"><dt>" + r[0] + "</dt><dd>" +
              (/^\[/.test(r[1]) ? '<span class="ph">' + r[1] + "</span>" : r[1]) +
              "</dd></div>"
          )
          .join("") +
        "</dl></article>"
    )
    .join("");

  /* ---------- Render: unit features + suitable for ---------- */
  document.getElementById("unitFeatures").innerHTML = unitFeatures
    .map((f) => "<li>" + f + "</li>")
    .join("");
  document.getElementById("suitableFor").innerHTML = suitableFor
    .map((s) => '<span class="pin-tag">' + s + "</span>")
    .join("");

  /* ---------- Render: connectivity (official figures) ---------- */
  document.getElementById("connList").innerHTML = connectivity
    .map(
      (c) =>
        '<div class="conn"><span class="conn-dot"></span><p class="conn-n">' + c.name +
        '</p><span class="conn-t">' + (/^\[/.test(c.time) ? "—" : c.time) +
        '</span><span class="conn-k">' + (/^\[/.test(c.distance) ? "TBC" : c.distance) + "</span></div>"
    )
    .join("");
  document.getElementById("locHighlights").innerHTML = locationHighlights
    .map((h) => '<span class="pin-tag">' + h + "</span>")
    .join("");

  /* ---------- Render: why invest ---------- */
  document.getElementById("investGrid").innerHTML = whyInvest
    .map(
      (w, i) =>
        '<article class="card travel rv up" style="transition-delay:' + i * 70 +
        'ms">' + svg(w.icon) + "<h3>" + w.title + "</h3><p>" + w.text + "</p></article>"
    )
    .join("");

  /* ---------- Floor plan tabs ---------- */
  const planTabs = document.getElementById("planTabs"),
        planImg = document.getElementById("planImg"),
        planNote = document.getElementById("planNote");
  planTabs.innerHTML = floorPlans
    .map(
      (p, i) =>
        '<button class="tab' + (i === 0 ? " on" : "") + '" role="tab" data-i="' + i +
        '" aria-selected="' + (i === 0) + '">' + p.label + "</button>"
    )
    .join("");
  planTabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    const p = floorPlans[+b.dataset.i];
    planTabs.querySelectorAll(".tab").forEach((t) => {
      t.classList.remove("on");
      t.setAttribute("aria-selected", "false");
    });
    b.classList.add("on");
    b.setAttribute("aria-selected", "true");
    planImg.style.opacity = "0";
    setTimeout(() => {
      planImg.src = p.img;
      planImg.alt = p.label + " floor plan";
      planNote.textContent = p.note;
      planImg.style.opacity = "1";
    }, 180);
  });
  planNote.textContent = floorPlans[0].note;

  /* ---------- Gallery + filter ---------- */
  const CATS = [
    { id: "all", label: "ALL" },
    { id: "exterior", label: "EXTERIOR" },
    { id: "interior", label: "INTERIOR" },
    { id: "aerial", label: "AERIAL" },
    { id: "plan", label: "FLOOR PLAN" }
  ];
  const galTabs = document.getElementById("galTabs"),
        gal = document.getElementById("gal");
  galTabs.innerHTML = CATS.map(
    (c, i) => '<button class="tab' + (i === 0 ? " on" : "") + '" data-cat="' + c.id + '">' + c.label + "</button>"
  ).join("");

  function renderGal(cat) {
    const items = gallery.filter((g) => cat === "all" || g.cat === cat);
    gal.innerHTML = items
      .map(
        (g, i) =>
          '<a href="#" data-src="' + g.src + '" data-cap="' + g.title +
          '" class="' + (i % 5 === 0 ? "wide" : "") + (i % 7 === 3 ? " tall" : "") +
          '"><img src="' + g.src + '" alt="' + g.title + '" loading="lazy"><span class="gal-cap">' +
          g.title + "</span></a>"
      )
      .join("");
  }
  renderGal("all");
  galTabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    galTabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
    b.classList.add("on");
    renderGal(b.dataset.cat);
  });

  /* ---------- Lightbox ---------- */
  const lb = document.getElementById("lb"),
        lbImg = document.getElementById("lbImg"),
        lbCap = document.getElementById("lbCap");
  function openLb(src, cap) {
    lbImg.src = src;
    lbImg.alt = cap || "";
    lbCap.textContent = cap || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    lbImg.src = "";
  }
  document.getElementById("lbX").addEventListener("click", closeLb);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("#gal a");
    if (a) { e.preventDefault(); openLb(a.dataset.src, a.dataset.cap); }
  });
  planImg.addEventListener("click", () => openLb(planImg.src, planImg.alt));
  document.getElementById("planZoom").addEventListener("click", () =>
    openLb(planImg.src, planImg.alt)
  );

  /* ---------- Nav: scroll state ---------- */
  const nav = document.getElementById("nav"),
        mcta = document.getElementById("mcta");
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    mcta.classList.toggle("show", y > window.innerHeight * 0.7);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Drawer ---------- */
  const drawer = document.getElementById("drawer"),
        burger = document.getElementById("burger");
  function setDrawer(open) {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", () => setDrawer(true));
  document.getElementById("drawerClose").addEventListener("click", () => setDrawer(false));
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));

  /* ---------- Scroll reveal (IntersectionObserver, staggered) ---------- */
  const rvs = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    rvs.forEach((el) => io.observe(el));
  } else {
    rvs.forEach((el) => el.classList.add("in"));
  }

  /* ---------- WhatsApp + contact wiring ---------- */
  const waHref = waUrl();
  ["waFloat", "mctaWa", "footWa"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waHref;
  });
  const tel = "tel:+60" + C.phone.replace(/[^0-9]/g, "").replace(/^0/, "");
  const footTel = document.getElementById("footTel");
  footTel.textContent = C.phone;
  footTel.href = tel;
  document.getElementById("footContact").innerHTML =
    "WhatsApp / Call: <a href=\"" + waHref + "\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--gold)\">" +
    C.phone + "</a>";
  document.getElementById("brochureBtn").href = "#contact";
  document.getElementById("footBrochure").href = "#contact";
  document.getElementById("yr").textContent = new Date().getFullYear();

  document.getElementById("contactPoints").innerHTML = [
    "Freehold Semi-D &amp; Detached factory units",
    "Limited to only 15 units in the development",
    "Viewing appointments available on request",
    "Latest availability &amp; specifications on enquiry"
  ].map((t) => "<li>" + t + "</li>").join("");

  /* ---------- Enquiry form validation ---------- */
  const form = document.getElementById("enqForm"),
        btn = document.getElementById("submitBtn"),
        msg = document.getElementById("formMsg");

  const RE = {
    name: /^.{3,}$/,
    phone: /^(\+?60|0)1[0-9][\s-]?[0-9]{3,4}[\s-]?[0-9]{3,4}$/,
    email: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
  };
  function fieldOf(input) { return input.closest(".field"); }
  function mark(input, ok) { fieldOf(input).classList.toggle("bad", !ok); return ok; }

  function validate() {
    let ok = true;
    const n = document.getElementById("f-name"),
          p = document.getElementById("f-phone"),
          m = document.getElementById("f-email"),
          a = document.getElementById("f-agree");
    ok = mark(n, RE.name.test(n.value.trim())) && ok;
    ok = mark(p, RE.phone.test(p.value.trim())) && ok;
    ok = mark(m, RE.email.test(m.value.trim())) && ok;
    if (!a.checked) {
      ok = false;
      msg.className = "form-msg no";
      msg.textContent = "Please tick the consent checkbox before submitting.";
    }
    return ok;
  }
  ["f-name", "f-phone", "f-email"].forEach((id) => {
    document.getElementById(id).addEventListener("blur", () => {
      const el = document.getElementById(id);
      const k = id === "f-name" ? "name" : id === "f-phone" ? "phone" : "email";
      if (el.value.trim()) mark(el, RE[k].test(el.value.trim()));
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.className = "form-msg";
    msg.textContent = "";

    // Honeypot — silent reject for bots
    if (document.getElementById("f-website").value.trim() !== "") {
      msg.className = "form-msg ok";
      msg.textContent = "Thank you. Your enquiry has been received.";
      return;
    }
    if (!validate()) return;

    const data = {
      project: C.project,
      name: document.getElementById("f-name").value.trim(),
      phone: document.getElementById("f-phone").value.trim(),
      email: document.getElementById("f-email").value.trim(),
      company: document.getElementById("f-company").value.trim(),
      interest: document.getElementById("f-interest").value,
      message: document.getElementById("f-msg").value.trim()
    };

    btn.disabled = true;
    const label = btn.innerHTML;
    btn.innerHTML = "Sending&hellip;";

    // No backend on a static host: hand off to WhatsApp with the enquiry pre-filled.
    const text =
      "Enquiry — " + C.project + "\n\n" +
      "Name: " + data.name + "\n" +
      "Phone: " + data.phone + "\n" +
      "Email: " + data.email + "\n" +
      (data.company ? "Company: " + data.company + "\n" : "") +
      (data.interest ? "Interested in: " + data.interest + "\n" : "") +
      (data.message ? "\nMessage: " + data.message : "");

    setTimeout(() => {
      window.open(waUrl(text), "_blank", "noopener");
      msg.className = "form-msg ok";
      msg.textContent = "Thank you — your enquiry has been prepared in WhatsApp. Please press send to reach us.";
      btn.disabled = false;
      btn.innerHTML = label;
      form.reset();
    }, 550);
  });
})();
