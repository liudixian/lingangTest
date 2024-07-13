let message;
let img;
let imgRatio; // 新增变量存储图片的宽高比

let images = []; // 存储图片的数组
let slider;      // 滑块对象
let currentIndex = 0; // 当前显示的图片索引

function preload() {
  message = loadStrings('txt/message.txt');
  img = loadImage('txt/img.jpg');

  for (let i = 0; i <= 4; i++) { // 假设有5张图片
    images.push(loadImage(`txt/img${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  if (img) {
    print("Image width:", img.width);
    print("Image height:", img.height);
  } else {
    print("Image loading failed.");
  }
  imgRatio = img.width / img.height; // 计算图片的宽高比

    // 创建滑块，设置范围和初始位置
    slider = createSlider(0, images.length - 1, 0);
    slider.position(10, height - 20); // 设置滑块的位置
}

function draw() {
  img = images[currentIndex];
  imgRatio = img.width / img.height; // 计算图片的宽高比

  // 使用窗口的宽度来计算图片的显示尺寸
  let displayWidth = windowWidth * 0.8; // 图片最大占屏幕宽度的80%
  let displayHeight = displayWidth / imgRatio; // 根据宽高比计算高度
  
  if (displayHeight > windowHeight * 0.8) { // 检查高度是否超出限制
    displayHeight = windowHeight * 0.8; // 调整高度为窗口高度的80%
    displayWidth = displayHeight * imgRatio; // 再次根据宽高比计算宽度
  }
  
  // 居中显示图片
  image(img,
        (windowWidth - displayWidth) / 2,
        (windowHeight - displayHeight) / 2,
        displayWidth,
        displayHeight);

  // 根据滑块的位置显示对应的图片
  // image(images[currentIndex], 0, 0, width, height);
  print(slider.value() + images.length);
  currentIndex = int(slider.value());
}

// 当窗口大小改变时调用的函数
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 重新设置画布大小
  redraw(); // 重新绘制图像
}

