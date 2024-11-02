// GSAP Animation for Ribbon Cutting
gsap.to(".ribbon-left", {
    x: "-100%",
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut"
  });
  
  gsap.to(".ribbon-right", {
    x: "100%",
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut"
  });
  
  gsap.to(".bow", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    onComplete: showContent // Callback to reveal content and poppers
  });
  
  // Show Content After Ribbon Cut
  function showContent() {
    // Hide ribbon
    gsap.to(".ribbon-container", { opacity: 0, duration: 0.5, display: "none" });
  
    // Show main content
    document.querySelector(".main-content").style.display = "block";
  
    // Animate text
    gsap.from(".title", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".subtitle", { opacity: 0, y: -30, duration: 1, delay: 0.3, ease: "power2.out" });
    gsap.from(".coming-soon", { opacity: 0, scale: 0.5, duration: 1, delay: 0.6, ease: "bounce.out" });
  
    // Animate icons with floating effect
    gsap.to(".icon", {
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      onComplete: startIconFloating
    });
  
    // Trigger party poppers
    createPartyPoppers();
  }
  
  // Floating Animation for Icons
  function startIconFloating() {
    gsap.to(".icon", {
      y: "random(-50, 50)",
      x: "random(-50, 50)",
      repeat: -1,
      yoyo: true,
      duration: 2
    });
  }
  
  // Party Popper Animation
  function createPartyPoppers() {
    const popperContainer = document.querySelector(".party-poppers");
  
    for (let i = 0; i < 100; i++) {
      const popper = document.createElement("div");
      popper.classList.add("popper");
      popper.style.left = `${Math.random() * 100}%`;
      popper.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      popperContainer.appendChild(popper);
  
      // Popper animation
      gsap.fromTo(popper, 
        { y: -20, scale: 0.5 },
        { 
          y: `random(-400, 400)`, 
          x: `random(-300, 300)`,
          scale: 1, 
          duration: 2,
          opacity: 0,
          ease: "power3.out",
          onComplete: () => popper.remove() 
        }
      );
    }
  }
  