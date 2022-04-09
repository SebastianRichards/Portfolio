const infoBtn1 = document.querySelector('#info1');
const divBox1 = document.querySelector('#divBox1');
const divBoxes = document.querySelector('#divBoxes');
const divBox0 = document.querySelector('#divBox0')
const infoBtn2 = document.querySelector('#info2');
const divBox2 = document.querySelector('#divBox2');
const infoBtn3 = document.querySelector('#info3');
const divBox3 = document.querySelector('#divBox3');
infoBtn1.onclick = () => {
    if (divBox1.style.display)
      { divBox1.style.display = ((divBox1.style.display!='none') ? 'none' : 'block');
      divBox0.style.display = 'none';
      divBox2.style.display = 'none';
      divBox3.style.display = 'none';
    } else {
      divBox1.style.display = 'block';
      divBox0.style.display = 'none';
      divBox2.style.display = 'none';
      divBox3.style.display = 'none';
    }
}
    
infoBtn2.onclick = () => {
    if (divBox2.style.display)
      { divBox2.style.display = ((divBox2.style.display!='none') ? 'none' : 'block');
      divBox0.style.display = 'none';
      divBox1.style.display = 'none';
      divBox3.style.display = 'none';
    } else {
      divBox2.style.display = 'block';
      divBox0.style.display = 'none';
      divBox1.style.display = 'none';
      divBox3.style.display = 'none';
    }
}

  
infoBtn3.onclick = () => {
    if (divBox3.style.display)
      { divBox3.style.display = ((divBox3.style.display!='none') ? 'none' : 'block');
      divBox0.style.display = 'none';
      divBox2.style.display = 'none';
      divBox1.style.display = 'none';
    } else {
      divBox3.style.display = 'block';
      divBox0.style.display = 'none';
      divBox2.style.display = 'none';
      divBox1.style.display = 'none';
    }
}

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".texty", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
