document
  .getElementById("downloadTxtBtn")
  .addEventListener("click", function () {
    const story = document.getElementById("story").value.trim();

    if (story === "") {
      alert("Please write something before downloading.");
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
      alert("Filename cannot be empty.");
      return;
    }

    // Generate and download as text file
    downloadFile(story, "text/plain", fileName);
  });

document.getElementById("downloadMdBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    alert("Please write something before downloading.");
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
    alert("Filename cannot be empty.");
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
    alert("Please write something before saving.");
    return;
  }

  // Save story to localStorage
  localStorage.setItem("story", story);
  alert("Story saved successfully!");
});

document.getElementById("loadBtn").addEventListener("click", function () {
  const savedStory = localStorage.getItem("story");
  if (savedStory) {
    document.getElementById("story").value = savedStory;
    alert("Story loaded successfully!");
  } else {
    alert("No saved story found.");
  }
});

document
  .getElementById("downloadTxtBtn")
  .addEventListener("click", function () {
    const story = document.getElementById("story").value.trim();

    if (story === "") {
      alert("Please write something before downloading.");
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
      alert("Filename cannot be empty.");
      return;
    }

    // Generate and download as text file
    downloadFile(story, "text/plain", fileName);
  });

document.getElementById("downloadMdBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    alert("Please write something before downloading.");
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
    alert("Filename cannot be empty.");
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
