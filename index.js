        document.getElementById("run-button").addEventListener("click", function () {
            var codeInput = document.getElementById("code-input").value;
            var outputContainer = document.getElementById("output-container");

            // Clear previous output
            outputContainer.innerHTML = "";

            // Create an iframe to run the code
            var iframe = document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            outputContainer.appendChild(iframe);

            // Write the code into the iframe
            iframe.contentDocument.write(codeInput);
            iframe.contentDocument.close();

            // Add full-screen button after creating the iframe
            var fullScreenButton = document.createElement("button");
            fullScreenButton.id = "full-screen-button";
            fullScreenButton.innerHTML = '<i class="fas fa-expand"></i> Full Screen';
            fullScreenButton.onclick = function () {
                toggleFullScreen(outputContainer);
            };
            outputContainer.appendChild(fullScreenButton);
        });

        document.getElementById("change-orientation-button").addEventListener("click", function () {
            var editorContainer = document.getElementById("editor-container");
            var codeInput = document.getElementById("code-input");
            var outputContainer = document.getElementById("output-container");

            // Toggle between horizontal and vertical layout
            if (editorContainer.style.flexDirection === "row") {
                editorContainer.style.flexDirection = "column";
                codeInput.style.width = "100%";
                outputContainer.style.width = "100%";
            } else {
                editorContainer.style.flexDirection = "row";
                codeInput.style.width = "50%";
                outputContainer.style.width = "50%";
            }
        });

        document.getElementById("change-theme-button").addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });

        function copyCodeToClipboard() {
            var codeInput = document.getElementById("code-input");
            codeInput.select();
            document.execCommand("copy");
        }

        function clearCodeAndOutput() {
            document.getElementById("code-input").value = "";
            document.getElementById("output-container").innerHTML = "";
        }

        function toggleFullScreen(element) {
            if (!document.fullscreenElement) {
                element.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }
