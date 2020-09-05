import {
  TimelineMax
} from 'gsap/all';

export const aCategaries = () => {
  const treeview = document.querySelectorAll(".treeview>li");
  if (treeview) {
    treeview.forEach((element) => {
      element.querySelector("ul").classList.add("treeview");
      element.querySelector(".hitarea").addEventListener("click", function () {
        treeview.forEach((x) => {
          x.classList.remove("collapsable");
          x.classList.add("expandable");
          x.querySelector(".hitarea").classList.remove("collapsable-hitarea");
          x.querySelector(".hitarea").classList.add("expandable-hitarea");
          const ul = x.querySelector("ul");
          if (x !== element) {
            close(ul);
          }
        });
        element.classList.remove("expandable");
        element.classList.add("collapsable");
        element
          .querySelector(".hitarea")
          .classList.remove("expandable-hitarea");
        element.querySelector(".hitarea").classList.add("collapsable-hitarea");
        const ul = element.querySelector("ul");
        open(ul);
      });
    });
  }
};

export const HandlerMenu = () => {
  const meanbar = document.querySelector(".mean-bar .meanmenu-reveal");
  if (meanbar) {
    meanbar.style.right = "0px";
    meanbar.style.left = "auto";
    meanbar.style.textAlign = "center";
    meanbar.style.textIndent = "0px";
    meanbar.style.fontSize = "18px";

    meanbar.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("meanclose");
      const ul = document.querySelector('.mean-nav ul');
      if (this.innerHTML === "X") {
        close(ul);
        this.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          var span = document.createElement("span");
          this.appendChild(span);
        }
      } else {
        open(ul);
        this.innerHTML = "X";
      }
    });

    const meanExpand = document.querySelectorAll('.mean-expand');
    meanExpand.forEach((element, index) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        const ul = document.querySelectorAll('.mean-nav ul li ul');
        if (element.innerHTML === '+') {
          open(ul[index])
          element.innerHTML = '-';
        } else {
          close(ul[index])
          element.innerHTML = '+';
        }
      })
    })
  }
};

const open = (element) => {
  var cd = new TimelineMax();
  cd.to(element, 0, {
    display: '',
    overflow: 'hidden'
  })
  const height = element.offsetHeight;
  cd.fromTo(element, 0.5, {
    height: 0
  }, {
    height: height
  })
  cd.to(element, 0, {
    display: 'block',
    height: ''
  })
}

const close = (element) => {
  var cd = new TimelineMax();
  const height = element.offsetHeight;
  cd.fromTo(element, 0.5, {
    height: height
  }, {
    height: 0
  })
  cd.to(element, 0, {
    display: 'none',
    height: ''
  })
}


export const customAlert = (message) => {
  if (!document.querySelector('.show-alert')) {
    const alert = document.querySelector('.custom-alert');
    alert.classList.add('show-alert');
    alert.querySelector('span').innerHTML = message;
    const timeOut = setInterval(() => {
      alert.classList.remove('show-alert');
      clearTimeout(timeOut);
    }, 2000)
  }
}

export const clickImage = (e) => {
  const target = e.target;
  const src = target.src;
  const imgMain = document.querySelector('.imgs-zoom-area img');
  e.target.src = imgMain.src;
  imgMain.src = src;

}

export const clickColor = () => {
  const colors = document.querySelectorAll('.single-pro-color-rating.clearfix ul li');
  if (colors) {
    colors.forEach(color => {
      color.addEventListener('click', function () {
        colors.forEach(element => {
          element.classList.remove('active-color');
        })
        color.classList.add('active-color');
      })
    });
  }
}

export const currentCart = (name) => {
  const listCartTab = document.querySelectorAll("ul.cart-tab li a");
  const listTabPane = document.querySelectorAll('.tab-content .tab-pane');
  if (listCartTab) {
    let id = 1;
    if (name === 'white-list') {
      id = 2;
    } else if (name === 'check-out') {
      id = 3;
    }else if(name ==='order-complete'){
      id = 4;
    }
    listTabPane.forEach(element=>{
      element.classList.remove('active')
    })
    listCartTab.forEach(element=>{
      element.classList.remove('active')
    })
    listTabPane[id-1].classList.add('active');
    for (let i = 0; i < id; i++) {
      listCartTab[i].classList.add('active'); 
    }
  }
}