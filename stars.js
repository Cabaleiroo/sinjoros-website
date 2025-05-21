const bg = document.getElementById('stars-background');
const numStars = 100;
const colors = ['#ffffff', '#a5f3fc', '#ffe59e'];

function randomPos() {
  return {
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`
  };
}

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  // Kích thước ngẫu nhiên
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Màu ngẫu nhiên
  const color = colors[Math.floor(Math.random() * colors.length)];
  star.style.backgroundColor = color;

  // Vị trí ban đầu
  const pos = randomPos();
  star.style.top = pos.top;
  star.style.left = pos.left;

  // Thời gian animation ngẫu nhiên
  const duration = 3 + Math.random() * 2;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${Math.random() * 3}s`;

  // Thêm vào DOM
  bg.appendChild(star);

  // Di chuyển sao sau mỗi vòng animation
  setInterval(() => {
    const newPos = randomPos();
    star.style.top = newPos.top;
    star.style.left = newPos.left;
  }, duration * 1000);
}