// Asynchronous JS is a programming process that allows for the program to run a heavy task while allowing for the program to be able to perform other commands/actions

/*const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
}); */

const log = document.querySelector(".event-log");

document.querySelector("#fetch").addEventListener("click", async () => {
  log.textContent = "";

  try {
    log.textContent = `${log.textContent}Started Fetch request\n`;

    const response = await fetch(
      "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    log.textContent = `${log.textContent}Finished Fetch request\n`;
  } catch (error) {
    log.textContent = `${log.textContent}Error: ${error.message}\n`;
  }
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
