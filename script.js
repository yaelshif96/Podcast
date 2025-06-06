const audioUpload = document.getElementById('audioUpload');
const podcastPlayer = document.getElementById('podcastPlayer');
const audioPlayer = document.getElementById('audioPlayer');

const imageUpload = document.getElementById('imageUpload');
const uploadedImagePreview = document.getElementById('uploadedImagePreview');

// Handle audio upload & play
audioUpload.addEventListener('change', () => {
  const file = audioUpload.files[0];
  if (!file) return;
  
  const url = URL.createObjectURL(file);
  
  audioPlayer.src = url;
  podcastPlayer.classList.remove('hidden');
  audioPlayer.load();
  audioPlayer.play();
});

// Handle image upload & preview
imageUpload.addEventListener('change', () => {
  const file = imageUpload.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  
  reader.onload = e => {
    uploadedImagePreview.src = e.target.result;
    uploadedImagePreview.classList.remove('hidden');
  };
  
  reader.readAsDataURL(file);
});
