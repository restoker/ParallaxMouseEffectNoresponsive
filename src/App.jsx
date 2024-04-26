import { useEffect, useRef } from "react"
import gsap from "gsap";
import { MetaLogo } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";

const items = [
  {
    img: "../img/01.png",
    icon: <MetaLogo className="ph ph-meta-logo" />,
    link: "instagram.com",
    parllaxSpeed: 0.065,
  },
  {
    img: "../img/02.png",
    icon: "<i class='ph-bold ph-pinterest-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.05,
  },
  {
    img: "../img/03.png",
    icon: "<i class='ph ph-instagram-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.08,
  },
  {
    img: "../img/04.png",
    icon: "<i class='ph ph-meta-logo'></i>",
    link: "instagram.com",
    parllaxSpeed: 0.1,
  },
  {
    img: "../img/05.jpeg",
    icon: "<i class='ph ph-instagram-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.07,
  },
  {
    img: "../img/06.jpeg",
    icon: "<i class='ph-bold ph-pinterest-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.085,
  },
  {
    img: "../img/07.jpeg",
    icon: "<i class='ph ph-instagram-logo'></i>",
    link: "instagram.com",
    parllaxSpeed: 0.06,
  },
  {
    img: "../img/08.jpeg",
    icon: "<i class='ph-bold ph-pinterest-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.04,
  },
  {
    img: "../img/09.jpeg",
    icon: "<i class='ph ph-instagram-logo'></i>",
    link: "instagram.com",
    parllaxSpeed: 0.1,
  },
  {
    img: "../img/10.png",
    icon: "<i class='ph ph-instagram-logo'></i>",
    link: "google.com",
    parllaxSpeed: 0.065,
  },
];

const itemPositions = [
  { top: "-5%", left: "5%" },
  { top: "40%", left: "-5%" },
  { top: "25%", left: "20%" },
  { top: "60%", left: "40%" },
  { top: "70%", left: "10%" },
  { top: "-10%", left: "65%" },
  { top: "10%", left: "85%" },
  { top: "40%", left: "60%" },
  { top: "80%", left: "70%" },
  { top: "50%", left: "95%" },
];

function App() {
  const galleryRef = useRef();

  useGSAP(() => {
    // for (const [index, itemData] of items.entries()) {

    // }

    for (let index = 0; index < items.length; index++) {
      if ([...galleryRef.current.children].length === 10) break;
      const itemData = items[index];
      const item = document.createElement("div");
      item.classList.add("item");

      const position = itemPositions[index];
      item.style.top = position.top;
      item.style.left = position.left;

      const img = document.createElement("img");
      img.src = itemData.img;
      item.appendChild(img);

      const link = document.createElement("div");
      link.classList.add("link");
      link.innerHTML = itemData.icon;
      item.appendChild(link);
      galleryRef.current.appendChild(item);
    }

    const moveDta = (e) => {
      // console.log([...galleryRef.current.children].slice(0, 10));
      // console.log(e);
      const data = [...galleryRef.current.children];
      data.forEach((item, index) => {
        // console.log(items);
        const animationFactor = items[index].parllaxSpeed;
        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
        gsap.to(item, { x: deltaX, y: deltaY, duration: 0.75 });
      });
    }

    document.addEventListener("mousemove", moveDta);

    return () => document.removeEventListener('mousemove', moveDta);
  })

  return (
    <>
      <div className="header">
        <h1>Bring order to your <br />creative universe</h1>
        <button>Join Waitlist</button>
      </div>
      <div
        ref={galleryRef}
        className="gallery"
      ></div>
    </>
  )
}

export default App
