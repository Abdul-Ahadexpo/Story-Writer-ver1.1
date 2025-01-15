document.getElementById("saveBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please write something before saving.",
      confirmButtonColor: "#f87171", // Tailwind pink-400
    });
    return;
  }

  // Save story to localStorage
  localStorage.setItem("story", story);

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Story saved successfully!",
    confirmButtonColor: "#34d399", // Tailwind green-400
  });
});

document.getElementById("loadBtn").addEventListener("click", function () {
  const savedStory = localStorage.getItem("story");

  if (savedStory) {
    document.getElementById("story").value = savedStory;

    Swal.fire({
      icon: "success",
      title: "Loaded!",
      text: "Your story has been loaded successfully.",
      confirmButtonColor: "#60a5fa", // Tailwind blue-400
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "No Story Found",
      text: "You have no saved story to load.",
      confirmButtonColor: "#ff9a60", // Tailwind yellow-400
    });
  }
});

document.getElementById("downloadMdBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    return;
  }

  // Prompt user for filename
  const fileName = prompt(
    "Please enter a filename for your Markdown file:",
    "story.md"
  );

  if (fileName === null) {
    return; // User canceled prompt
  } else if (fileName.trim() === "") {
    return;
  }

  // Generate and download as Markdown file
  downloadFile(story, "text/plain", fileName);
});

function downloadFile(content, contentType, fileName) {
  const blob = new Blob([content], { type: contentType });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}

// Load saved story on page load if available
window.onload = function () {
  const savedStory = localStorage.getItem("story");
  if (savedStory) {
    document.getElementById("story").value = savedStory;
  }
};

document.getElementById("saveBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    return;
  }

  // Save story to localStorage
  localStorage.setItem("story", story);
});

document.getElementById("loadBtn").addEventListener("click", function () {
  const savedStory = localStorage.getItem("story");
  if (savedStory) {
    document.getElementById("story").value = savedStory;
  }
});

document
  .getElementById("downloadTxtBtn")
  .addEventListener("click", function () {
    const story = document.getElementById("story").value.trim();

    if (story === "") {
      return;
    }

    // Prompt user for filename
    const fileName = prompt(
      "Please enter a filename for your text file:",
      "story.txt"
    );

    if (fileName === null) {
      return; // User canceled prompt
    } else if (fileName.trim() === "") {
      return;
    }

    // Generate and download as text file
    downloadFile(story, "text/plain", fileName);
  });

document.getElementById("downloadMdBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    return;
  }

  // Prompt user for filename
  const fileName = prompt(
    "Please enter a filename for your Markdown file:",
    "story.md"
  );

  if (fileName === null) {
    return; // User canceled prompt
  } else if (fileName.trim() === "") {
    return;
  }

  // Generate and download as Markdown file
  downloadFile(story, "text/plain", fileName);
});

function downloadFile(content, contentType, fileName) {
  const blob = new Blob([content], { type: contentType });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
