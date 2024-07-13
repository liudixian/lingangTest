let message;
let img;
let imgRatio; // 新增变量存储图片的宽高比

function preload() {
  message = loadStrings('txt/message.txt');
  img = loadImage('txt/img.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noLoop();
  imgRatio = img.width / img.height; // 计算图片的宽高比

  if (img) {
    print("Image width:", img.width);
    print("Image height:", img.height);
  } else {
    print("Image loading failed.");
  }
}

function draw() {
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
}

// 当窗口大小改变时调用的函数
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 重新设置画布大小
  redraw(); // 重新绘制图像
}