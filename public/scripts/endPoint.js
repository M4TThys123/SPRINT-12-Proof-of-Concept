const url = "https://hookb.in/kxBpGRE9ooCBDokBLBRN"
const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const formDataSerialized = Object.fromEntries(formData);
  const jsonObject = {
    ...formDataSerialized,
    sendToSelf: formDataSerialized.sendToSelf ? true : false,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.error(e);
    alert("there as an error");
  }
});

