const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTxts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/featured/350x250" alt="">';

    title.innerHTML = 'Lorem ipsum dolor sit amet.';

    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, earum?';

    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="">';

    name.innerHTML = 'John Doe';

    date.innerHTML = 'Oct 05, 2022';

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTxts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

