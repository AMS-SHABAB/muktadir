// Hamburger animation + dropdown
    const hamburger = document.querySelector('.hamburger');
    const navDropdown = document.getElementById('navDropdown');
    const dropdownBg = document.querySelector('.nav-dropdown-bg');
    function openMenu() {
      hamburger.classList.add('active');
      navDropdown.classList.add('open');
      dropdownBg.style.display = 'block';
      setTimeout(() => dropdownBg.style.opacity = '1', 10);
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      hamburger.classList.remove('active');
      navDropdown.classList.remove('open');
      dropdownBg.style.opacity = '0';
      setTimeout(() => dropdownBg.style.display = 'none', 700);
      document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', function() {
      if (!navDropdown.classList.contains('open')) openMenu();
      else closeMenu();
    });
    dropdownBg.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape" && navDropdown.classList.contains('open')) closeMenu();
    });

    document.querySelectorAll('.nav-dropdown .menu-item').forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    // Hero content fade on scroll
    const heroContentFade = document.getElementById('heroContentFade');
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
      const heroRect = heroSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      let scrollAmount = 0;
      if (heroRect.top < windowHeight && heroRect.bottom > 0) {
        scrollAmount = Math.max(0, -heroRect.top);
      }
      const fadeStart = 0;
      const fadeEnd = 250;
      let opacity = 1;
      if (scrollAmount > fadeStart) {
        opacity = Math.max(0, 1 - (scrollAmount - fadeStart) / (fadeEnd - fadeStart));
      }
      heroContentFade.style.opacity = opacity;
      heroContentFade.style.transform = `translateY(${Math.min(scrollAmount, fadeEnd) * 0.25}px)`;
    });

// slider
let desktopIndex=0, mobileIndex=0;
function changeSlide(n,type){
  const slides=document.querySelectorAll('.'+type+'-slider .slide');
  if(type==='desktop'){
    desktopIndex=(desktopIndex+n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===desktopIndex));
  }else{
    mobileIndex=(mobileIndex+n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===mobileIndex));
  }
}

// News content fade on scroll
const demoPosts = [
  {
    title: "Wedding Club Interior Design 2025",
    description: "A booking has come in for wall painting and decoration at a 1000+ square foot club in Rajakhali, Chittagong. Updates and blogs coming soon.",
    date: "Possible date: December 30.",
    thumbnail: "https://via.placeholder.com/400x200",
    link: "#",
    readMore: "Coming Soon"
  }
];

function renderNewsCards(posts) {
  const container = document.getElementById('news-container');
  container.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = "news-card";
    card.innerHTML = `
      ${post.thumbnail ? `<img class="news-thumbnail" src="${post.thumbnail}" alt="Thumbnail">` : ""}
      <h2 class="news-title">${post.title}</h2>
      <p class="news-date">${post.date}</p>
      <p class="neews-description">${post.description}</p>
      <a href="${post.link}" class="read-more" target="_blank">${post.readMore}</a>
    `;
    container.appendChild(card);
  });
}

// Function to extract text from HTML content and limit length
function extractText(html, maxLength = 150) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  let text = tempDiv.textContent || tempDiv.innerText || "";
  text = text.replace(/\s+/g, ' ').trim(); // remove extra spaces/newlines
  if (text.length > maxLength) text = text.substring(0, maxLength) + "...";
  return text;
}

// JSONP callback for label-specific feed
function handleBloggerFeed(data) {
  if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const posts = data.feed.entry.map(entry => {
      let link = "#";
      if (entry.link) {
        const alt = entry.link.find(l => l.rel === 'alternate');
        if (alt && alt.href) link = alt.href;
      }

      const date = entry.published ? new Date(entry.published.$t).toLocaleDateString() : "";

      // Use first image in content if available
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = entry.content ? entry.content.$t : "";
      const img = tempDiv.querySelector('img');
      const thumbnail = img ? img.src : "https://via.placeholder.com/400x200";

      // Extract description text from summary or content
      let description = entry.summary ? extractText(entry.summary.$t) : extractText(entry.content.$t);

      return {
        title: entry.title.$t,
        description: description || "Description not available",
        date: date,
        thumbnail: thumbnail,
        link: link,
        readMore: "Read More"
      };
    });
    renderNewsCards(posts);
  } else {
    renderNewsCards(demoPosts);
  }
}

// Load label feed dynamically
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://blyere.blogspot.com/feeds/posts/default/-/Projects%20Vlog?alt=json-in-script&callback=handleBloggerFeed&max-results=10';
  document.body.appendChild(script);
});
