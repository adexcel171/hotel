const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const uploadError = document.getElementById("uploadError");
const uploadSuccess = document.getElementById("uploadSuccess");
const uploadBtn = document.getElementById("uploadBtn");

// Assume you have the token stored after login
const token = localStorage.getItem("adminToken");

// 🧩 Handle form submission
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  uploadError.style.display = "none";
  uploadSuccess.style.display = "none";

  const file = fileInput.files;
  const title = document.getElementById("mediaTitle").value.trim();
  const description = document.getElementById("mediaDescription").value.trim();

  if (!file.length) {
    uploadError.textContent = "Please select at least one file.";
    uploadError.style.display = "block";
    return;
  }

  // 🧩 Create form data
  const formData = new FormData();

  // IMPORTANT: field name must match backend — "files"
  for (let i = 0; i < file.length; i++) {
    formData.append("files", file[i]);
  }

  formData.append("title", title);
  formData.append("description", description);

  uploadBtn.disabled = true;
  uploadBtn.textContent = "Uploading...";

  try {
    const res = await fetch("http://localhost:3000/api/gallery", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // 🔐 Required for auth
      },
      body: formData, // ✅ don't set Content-Type manually (fetch handles it)
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Upload failed");
    }

    uploadSuccess.textContent = "Upload successful!";
    uploadSuccess.style.display = "block";
    uploadForm.reset();
    fileInput.value = "";

    // Optionally reload gallery
    loadGallery();
  } catch (err) {
    uploadError.textContent = err.message;
    uploadError.style.display = "block";
  } finally {
    uploadBtn.disabled = false;
    uploadBtn.textContent = "Upload";
  }
});
