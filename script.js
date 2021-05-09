const content = document.createElement('div');
content.className = 'content';
document.body.appendChild(content);

const title = document.createElement('h1');
title.innerHTML = 'Meme Generator';
content.appendChild(title);

const textContainer = document.createElement('div');
textContainer.className = 'text-container';

content.appendChild(textContainer);

const labelText = document.createElement('label');
labelText.htmlFor = 'text-input';
labelText.innerHTML = 'Texto:';

const inputText = document.createElement('input');
inputText.maxLength = 60;
inputText.spellcheck = false;
inputText.type = 'text';
inputText.id = 'text-input';

textContainer.appendChild(labelText);
textContainer.appendChild(inputText);

const memeImageContainer = document.createElement('div');
memeImageContainer.id = 'meme-image-container';

content.appendChild(memeImageContainer);

const memeText = document.createElement('div');
memeText.id = 'meme-text';

memeImageContainer.appendChild(memeText);

function insertMemeText(event) {
  memeText.innerHTML = event.target.value;
}

inputText.addEventListener('input', insertMemeText);

const memeImage = document.createElement('img');
memeImage.id = 'meme-image';

memeImageContainer.appendChild(memeImage);

const memeInsert = document.createElement('input');
memeInsert.required = true;
memeInsert.type = 'file';
memeInsert.id = 'meme-insert';

textContainer.appendChild(memeInsert);

function renderImage() {
  const fileReader = new FileReader();
  const path = memeInsert.files[0];

  fileReader.onloadend = () => {
    memeImage.src = fileReader.result;
  };
  fileReader.readAsDataURL(path);
}

memeInsert.addEventListener('change', renderImage);

function createButton(id, text, color) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = text;
  btn.style.backgroundColor = color;
  return btn;
}

const btnFire = createButton('fire', 'Fire', 'red');

function toBorderFire() {
  memeImageContainer.style.border = 'dashed 3px red';
}

btnFire.addEventListener('click', toBorderFire);

content.appendChild(btnFire);

const btnWater = createButton('water', 'Water', 'blue');

function toBorderWater() {
  memeImageContainer.style.border = 'double 5px blue';
}

btnWater.addEventListener('click', toBorderWater);

content.appendChild(btnWater);

const btnEarth = createButton('earth', 'Earth', 'green');

function toBorderEarth() {
  memeImageContainer.style.border = 'groove 6px green';
}

btnEarth.addEventListener('click', toBorderEarth);

content.appendChild(btnEarth);

const memeReady = document.createElement('div');
memeReady.className = 'meme-ready';
content.appendChild(memeReady);

function selectedImage(e) {
  memeImage.src = e.target.src;
}

function createImg(id, path) {
  const img = document.createElement('img');
  img.id = id;
  img.src = path;
  img.className = 'ready-image';
  img.addEventListener('click', selectedImage);
  return img;
}

const meme1 = createImg('meme-1', './imgs/meme1.png');
memeReady.appendChild(meme1);

const meme2 = createImg('meme-2', './imgs/meme2.png');
memeReady.appendChild(meme2);

const meme3 = createImg('meme-3', './imgs/meme3.png');
memeReady.appendChild(meme3);

const meme4 = createImg('meme-4', './imgs/meme4.png');
memeReady.appendChild(meme4);
