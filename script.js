// let string = "";

// let buttons = document.querySelectorAll(".num");

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const value = e.target.innerHTML;

//     if (value === "=") {
//       try {
//         string = eval(string);
//         document.querySelector("#calc").innerText = string;
//       } catch (error) {
//         document.querySelector("#calc").innerText = "Error";
//         string = "";
//         console.error("Invalid expression:", error);
//       }
//     } else if (value === "C") {
//       string = "";
//       document.querySelector("#calc").innerText = string;
//     } else {
//       string += value;
//       document.querySelector("#calc").innerText = string;
//     }
//   });
// });


let string = localStorage.getItem("calcValue") || ""; // Load from localStorage if available

document.querySelector("#calc").innerText = string; // Show saved value on load

let buttons = document.querySelectorAll(".num");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        document.querySelector("#calc").innerText = string;
        localStorage.setItem("calcValue", string); // Save result to localStorage
      } catch (error) {
        document.querySelector("#calc").innerText = "Error";
        string = "";
        localStorage.removeItem("calcValue"); // Clear on error
        console.error("Invalid expression:", error);
      }
    } else if (value === "C") {
      string = "";
      document.querySelector("#calc").innerText = string;
      localStorage.removeItem("calcValue"); // Clear storage
    } else {
      string += value;
      document.querySelector("#calc").innerText = string;
      localStorage.setItem("calcValue", string); // Save updated input
    }
  });
});
